import fs from "node:fs";
import vm from "node:vm";

const pagePath = "biblioteca-prompts-eleitorais.html";
const menuPath = "menu.html";

const page = fs.readFileSync(pagePath, "utf8");
const menu = fs.readFileSync(menuPath, "utf8");

const extract = (start, end) => {
  const pattern = new RegExp(`${start}([\\s\\S]*?)${end}`);
  const match = page.match(pattern);

  if (!match) {
    throw new Error(`Bloco não encontrado: ${start}`);
  }

  return match[1];
};

const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

const campaignFieldGroups = vm.runInNewContext(
  `(${extract("const campaignFieldGroups = ", ";\\n\\n    const CAMPAIGN_FIELD_STORAGE_KEY")})`
);

const registrySetup = extract("const commonRequiredTags = ", ";\\n\\n    const ELECTION_TAG_REGISTRY");
const registryContext = { campaignFieldGroups };

vm.runInNewContext(`const commonRequiredTags = ${registrySetup}; this.ELECTION_ROLE_REGISTRY = ELECTION_ROLE_REGISTRY;`, registryContext);

const roles = registryContext.ELECTION_ROLE_REGISTRY;
const fieldTags = new Set(campaignFieldGroups.flatMap((group) => group.fields.map(([tag]) => tag)));

const expectRole = (id, expected) => {
  const role = roles[id];
  assert(role, `Cargo ausente: ${id}`);

  Object.entries(expected).forEach(([key, value]) => {
    assert(role[key] === value, `${id}.${key} esperado ${value}, recebido ${role[key]}`);
  });
};

expectRole("presidente", { numberLength: 2, viceRole: "Vice-Presidente", substitutes: 0 });
expectRole("governador", { numberLength: 2, viceRole: "Vice-Governador", requiresState: true });
expectRole("governador_df", { numberLength: 2, fixedJurisdiction: "Distrito Federal" });
expectRole("senador", { numberLength: 3, viceRole: null, substitutes: 2, requiresState: true });
expectRole("deputado_federal", { numberLength: 4, viceRole: null, requiresState: true });
expectRole("deputado_estadual", { numberLength: 5, viceRole: null, requiresState: true });
expectRole("deputado_distrital", { numberLength: 5, fixedJurisdiction: "Distrito Federal" });
expectRole("prefeito", { numberLength: 2, viceRole: "Vice-Prefeito", requiresMunicipality: true });
expectRole("vereador", { numberLength: 5, viceRole: null, requiresMunicipality: true });
expectRole("juiz_paz", { numberLength: null, requiresLocalRule: true });

[
  "FOTO_CANDIDATO_PRINCIPAL",
  "NOME_CANDIDATO",
  "SIGLA_PARTIDO",
  "PARTIDO_VICE_OU_SUPLENTE",
  "SIGLA_PARTIDO_VICE_OU_SUPLENTE",
  "NOME_PRIMEIRO_SUPLENTE",
  "NOME_SEGUNDO_SUPLENTE"
].forEach((tag) => assert(fieldTags.has(tag), `Tag/campo ausente: ${tag}`));

assert(roles.senador.forbiddenTags.includes("NOME_VICE_OU_SUPLENTE"), "Senador deve bloquear tags de vice.");
assert(roles.vereador.forbiddenTags.includes("NOME_VICE_OU_SUPLENTE"), "Vereador deve bloquear tags de vice.");
assert(roles.senador.requiredTags.includes("NOME_PRIMEIRO_SUPLENTE"), "Senador deve exigir primeiro suplente.");
assert(roles.senador.requiredTags.includes("NOME_SEGUNDO_SUPLENTE"), "Senador deve exigir segundo suplente.");
assert(page.includes("buildElectionPromptContext"), "Contexto eleitoral obrigatório não foi implementado.");
assert(page.includes("CONTEXTO ELEITORAL OBRIGATÓRIO"), "Prompts não recebem contexto eleitoral obrigatório.");
assert(!page.includes('|| "[[NOME_CANDIDATO]]"'), "Contexto eleitoral não deve manter placeholder quando o dado estiver vazio.");
assert(page.includes("const hasEmptyActiveTag"), "Linhas com tags ativas vazias devem desaparecer dos prompts.");
assert(page.includes("hasInactiveTag || hasEmptyActiveTag"), "Filtro de linhas precisa considerar tags vazias.");
assert(page.includes("compactPromptText"), "Prompts finais devem ser compactados em texto corrido.");
assert(page.includes("return compactPromptText(") && page.includes("cleanFinalPromptTextForActiveFields(`${buildElectionPromptContext(profile)} ${promptBody}`, activeFields)"), "Contexto e prompt devem sair sem parágrafos.");
assert(page.includes("data-election-prompt-card"), "Cards de prompt não possuem metadados de compatibilidade.");
assert(page.includes("card.hidden = !profile.role || !compatibility.available"), "Prompts devem reaparecer após escolher cargo, mesmo com campos pendentes.");
assert(page.includes(".filter((tag) => !allowedTags || allowedTags.has(tag))"), "Tags ativas devem ser filtradas pelo cargo atual.");
assert(page.includes("checkbox.checked = false;"), "Campos incompatíveis escondidos precisam ser desmarcados.");
assert(page.includes("input.disabled = isForbidden || isOutsideStep;"), "Campos incompatíveis ou fora da etapa precisam ser desativados.");
assert(page.includes("cleanFinalPromptTextForActiveFields"), "Texto final precisa remover sobras de tags incompatíveis.");
assert(page.includes('`${prompt.title} ${prompt.description} ${prompt.label || ""}`'), "Compatibilidade de prompts não deve analisar o corpo inteiro do prompt.");
assert(page.includes("const CAMPAIGN_FIELD_STEPS"), "Etapas de preenchimento dos campos não foram criadas.");
assert(page.includes('id: "obrigatorios"'), "Primeira etapa deve ser de informações obrigatórias.");
assert(page.includes('id: "composicao"'), "Deve existir etapa opcional para vice e apoiadores.");
assert(page.includes('id: "design"'), "Deve existir etapa opcional de design.");
assert(page.includes("getPrimaryRequiredFields"), "Obrigatórios primários do candidato/cargo precisam ser separados de vice e suplentes.");
Object.values(roles).forEach((role) => {
  assert(!role.requiredTags.includes("NOME_CANDIDATO"), `Nome do candidato deve ser opcional para ${role.id}.`);
});
assert(page.includes('const optionalPrimaryTags = ["NOME_CANDIDATO"];'), "Nome do candidato deve permanecer disponível como campo opcional.");
assert(page.includes("data-prompt-language"), "Usuário precisa escolher entre prompt em português e em inglês.");
assert(page.includes("key.startsWith(\"opera-election\")"), "Reset total deve limpar a memória local eleitoral.");
assert(page.includes("assistente-eleitoral"), "Primeira etapa do assistente não foi encontrada.");
assert(page.includes("Ex.: @maria, @candidato"), "Campo de foto principal deve orientar uso de @ no Flow.");
assert(page.includes("Informe o @ do personagem no Flow"), "Guia de referências deve orientar uso de @ no Flow.");
assert(menu.includes("biblioteca-prompts-eleitorais.html#assistente-eleitoral"), "Menu deve apontar para o assistente integrado.");

console.log("Assistente eleitoral integrado validado com sucesso.");
