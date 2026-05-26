# Auditoria de Bibliotecas para Prompt Builder

Data da auditoria: 2026-05-26

## 1. Resumo geral

Esta auditoria mapeou os prompts existentes no projeto para avaliar o reaproveitamento em um futuro Prompt Builder focado em ensaios fotográficos.

Foram encontrados **345 registros de prompt** em HTML e JavaScript. A contagem considera cada prompt copiável, cada item de catálogo JS e cada variação `imagePrompt` / `videoPrompt` como um registro separado.

Não foram criadas bibliotecas de personagens, roupas, figurino ou catálogo de aparência. Quando um prompt menciona pessoa, personagem, roupa, vestido, outfit, suit, wardrobe ou similar, isso foi tratado apenas como observação de auditoria. No Prompt Builder futuro, esses dados devem permanecer como campos manuais do formulário.

Nesta etapa **não foram criados arquivos de dados do Prompt Builder**. O projeto ainda mistura prompts completos com pose, cena, roupa, iluminação, câmera e acabamento dentro do mesmo texto; por isso é melhor aprovar a taxonomia antes de transformar tudo em `/data/prompt-builder/*.js`.

## 2. Arquivos analisados

Arquivos HTML:

- `404.html`
- `biblioteca-prompts.html`
- `camera-imoveis.html`
- `combate-nano-banana-veo3.html`
- `index.html`
- `material-aula.html`
- `menu.html`
- `pose-masculina.html`
- `prompts-gravidas.html`
- `takes-cinematograficos.html`

Arquivos JavaScript:

- `assets/js/camera-imoveis.js`
- `assets/js/gravidas-prompts.js`
- `assets/js/main.js`
- `assets/js/material-aula.js`
- `assets/js/pose-masculina.js`
- `assets/js/prompts-library.js`
- `assets/libs/gsap.min.js`
- `assets/libs/ScrollTrigger.min.js`

Arquivos CSS:

- `assets/css/material-aula.css`
- `assets/css/prompts-library.css`
- `assets/css/styles.css`

Não foram encontrados arquivos `src`, React, Vite, Next, JSX, TSX, JSON ou Markdown com catálogos de prompts além deste relatório.

## 3. Páginas onde prompts foram encontrados

Prompts encontrados diretamente em HTML:

- `material-aula.html`: 26 prompts copiáveis.
- `takes-cinematograficos.html`: 31 prompts copiáveis.
- `combate-nano-banana-veo3.html`: 41 prompts considerados para o relatório.

Prompts renderizados por JavaScript:

- `biblioteca-prompts.html`, via `assets/js/prompts-library.js`: 72 prompts.
- `camera-imoveis.html`, via `assets/js/camera-imoveis.js`: 102 prompts.
- `pose-masculina.html`, via `assets/js/pose-masculina.js`: 42 prompts.
- `prompts-gravidas.html`, via `assets/js/gravidas-prompts.js`: 31 prompts.

Observação sobre `combate-nano-banana-veo3.html`: o arquivo contém prompts em português no objeto inicial e depois aplica `englishPromptTexts` por `Object.assign`. Para evitar duplicação, esta auditoria contou os prompts finais em inglês renderizados na página, mais o bloco universal.

## 4. Quantidade total

Total encontrado: **345 prompts**.

## 5. Quantidade por biblioteca

| Biblioteca | Quantidade |
|---|---:|
| `poses` | 42 |
| `expressoes` | 0 |
| `locaisTiposDeEnsaio` | 42 |
| `iluminacao` | 2 |
| `enquadramento` | 172 |
| `estilosVisuais` | 16 |
| `qualidadeAcabamento` | 0 |
| `regrasNegativas` | 2 |
| `templates` | 3 |
| `uncategorized` | 66 |

## 6. Bibliotecas fortes

`enquadramento`

É a biblioteca mais forte. Há 172 registros, vindos principalmente de:

- `assets/js/camera-imoveis.js`
- `takes-cinematograficos.html`
- categoria `Camera` de `assets/js/prompts-library.js`
- alguns prompts de gestante com close, espelho, foreground blur e over-the-shoulder.

Essa base já cobre ângulos, lentes, close-up, plano aberto, câmera alta, câmera baixa, drone, composição simétrica, regra dos terços, foreground blur e linguagem cinematográfica.

`poses`

Está forte, mas ainda misturada com roupa, estilo e descrição de pessoa dentro dos textos completos. As fontes principais são:

- `assets/js/gravidas-prompts.js`
- `assets/js/pose-masculina.js`
- categoria `Personagem` de `assets/js/prompts-library.js`

`locaisTiposDeEnsaio`

Está forte para temas prontos de ensaio, especialmente em:

- categoria `Imagem` de `assets/js/prompts-library.js`
- prompts de gestante como praia, campo boho e quarto do bebê
- prompts masculinos de barbearia, café, home lifestyle, academia, exterior urbano e resort.

## 7. Bibliotecas fracas

`iluminacao`

Há apenas 2 prompts classificados como iluminação principal:

- `Backlit Silhouette / Silhueta em contraluz`
- `Window Light Pose / Perto da janela`

Muitos prompts mencionam luz no texto, mas o site ainda não tem uma biblioteca isolada de iluminação com opções como luz de janela, golden hour, contraluz, low-key, high-key, Rembrandt, softbox, luz difusa e rim light.

`estilosVisuais`

Há 16 registros classificados como estilo visual. A biblioteca existe de forma indireta em prompts completos, mas ainda falta separar estilos reutilizáveis como cards independentes.

`templates`

Há 3 registros úteis:

- `Prompt Universal Base`, em `assets/js/gravidas-prompts.js`
- `Fórmula universal para adaptar qualquer prompt`, em `assets/js/pose-masculina.js`
- `Formatos recomendados`, em `assets/js/pose-masculina.js`

Ainda falta um template central para montar o prompt final com campos dinâmicos de personagem, sugestões escolhidas e roupa preenchida manualmente no final.

`regrasNegativas`

Há 2 fontes fortes, mas poucas:

- prompt negativo universal em `assets/js/camera-imoveis.js`
- bloco universal de consistência/restrição em `combate-nano-banana-veo3.html`

## 8. Bibliotecas vazias

`expressoes`

Não há prompts isolados de expressão. Existem expressões embutidas em vários prompts, como calm, confident, serene, serious, romantic, peaceful e emotional, mas nenhuma biblioteca própria.

`qualidadeAcabamento`

Não há prompts isolados só para qualidade/acabamento. Termos como `RAW`, `HDR`, `ultra-detailed`, `professional`, `polished`, `realistic skin texture`, `premium` e `sharp focus` aparecem embutidos em vários prompts.

## 9. Prompts sem categoria clara

Foram classificados como `uncategorized` os prompts que não servem diretamente como sugestão de ensaio fotográfico humano:

| Fonte | Quantidade | Motivo |
|---|---:|---|
| `material-aula.html` | 26 | Prompts automotivos e de animação/montagem gradual. |
| `combate-nano-banana-veo3.html` | 40 | Prompts de combate, ação e vídeo, fora do escopo principal de ensaio fotográfico. |

Esses prompts devem permanecer no site, mas não são bons candidatos iniciais para o Prompt Builder de ensaios fotográficos.

## 10. Fonte principal por biblioteca

| Biblioteca | Fontes principais |
|---|---|
| `poses` | `assets/js/gravidas-prompts.js`, `assets/js/pose-masculina.js`, `assets/js/prompts-library.js` |
| `expressoes` | Nenhuma fonte isolada; expressões estão embutidas nos prompts. |
| `locaisTiposDeEnsaio` | `assets/js/prompts-library.js`, `assets/js/gravidas-prompts.js`, `assets/js/pose-masculina.js` |
| `iluminacao` | `assets/js/gravidas-prompts.js`; iluminação também aparece embutida em quase todos os prompts. |
| `enquadramento` | `assets/js/camera-imoveis.js`, `takes-cinematograficos.html`, `assets/js/prompts-library.js` |
| `estilosVisuais` | `assets/js/pose-masculina.js`, `assets/js/gravidas-prompts.js` |
| `qualidadeAcabamento` | Nenhuma fonte isolada; qualidade está embutida nos prompts. |
| `regrasNegativas` | `assets/js/camera-imoveis.js`, `combate-nano-banana-veo3.html` |
| `templates` | `assets/js/gravidas-prompts.js`, `assets/js/pose-masculina.js` |
| `uncategorized` | `material-aula.html`, `combate-nano-banana-veo3.html` |

## 11. Informações que ainda faltam

Para o Prompt Builder funcionar bem, ainda faltam bibliotecas ou campos normalizados para:

- Expressões faciais e emoção: sorriso suave, sério, contemplativo, confiante, maternal, romântico, introspectivo, editorial, espontâneo.
- Iluminação isolada: luz de janela, golden hour, contraluz, luz difusa de estúdio, softbox lateral, Rembrandt, low-key, high-key, rim light.
- Qualidade e acabamento: realismo, textura de pele, nitidez, profundidade de campo, editorial premium, fotografia profissional, sem texto, sem watermark.
- Regras negativas globais para ensaios humanos: evitar deformações, mãos erradas, rostos alterados, olhos assimétricos, membros extras, pele artificial, excesso de blur, texto e marcas d'água.
- Templates por quantidade de personagens: solo, casal, família, grupo.
- Mapeamento interno para separar o que hoje está misturado dentro dos prompts completos.

## 12. Sugestão de próximos passos

1. Aprovar a taxonomia final das bibliotecas:
   - `poses`
   - `expressoes`
   - `locaisTiposDeEnsaio`
   - `iluminacao`
   - `enquadramento`
   - `estilosVisuais`
   - `qualidadeAcabamento`
   - `regrasNegativas`
   - `templates`
   - `uncategorized`
2. Criar os arquivos de dados em:
   - `data/prompt-builder/prompt-library.js`
   - `data/prompt-builder/prompt-categories.js`
   - `data/prompt-builder/prompt-templates.js`
3. Migrar primeiro os itens fortes:
   - poses de gestante
   - poses masculinas
   - câmera/enquadramento
   - temas/tipos de ensaio
4. Criar manualmente bibliotecas faltantes de expressão, iluminação e qualidade, usando os termos já embutidos como referência.
5. Só depois disso implementar a interface visual do Prompt Builder.

## 13. Observação sobre personagens e roupas

Personagens e roupas **não devem virar bibliotecas**.

No fluxo futuro:

- O usuário informa a quantidade de personagens.
- O sistema gera campos dinâmicos: `CHARACTER_A`, `CHARACTER_B`, `CHARACTER_C`, conforme necessário.
- O usuário descreve cada personagem manualmente.
- O usuário escolhe sugestões de pose, expressão, local/tipo de ensaio, iluminação, enquadramento, estilo visual, qualidade e regras negativas.
- No final, o usuário preenche manualmente a roupa/figurino de cada personagem.

Configuração permitida para o futuro:

```js
export const characterFormConfig = {
  minCharacters: 1,
  maxCharacters: 6,
  labels: ["CHARACTER_A", "CHARACTER_B", "CHARACTER_C", "CHARACTER_D", "CHARACTER_E", "CHARACTER_F"],
  manualFieldsOnly: true
};
```

Essa configuração serve apenas para explicar campos dinâmicos do formulário. Ela não armazena prompts de personagens, roupa, figurino, aparência ou identidade.

## 14. Estrutura de dados sugerida para a próxima etapa

Como este projeto é HTML/CSS/JS simples, a estrutura recomendada para uma próxima etapa é:

```text
data/prompt-builder/
  prompt-library.js
  prompt-categories.js
  prompt-templates.js
```

Formato sugerido de item:

```js
{
  id: "identificador-unico",
  title: "Título do prompt",
  sourcePage: "arquivo ou página onde foi encontrado",
  library: "poses",
  category: "categoria mais específica se existir",
  prompt: "texto completo do prompt original",
  tags: ["tag1", "tag2", "tag3"],
  notes: "Menciona roupa/figurino; manter como campo manual."
}
```

Nenhum arquivo dessa estrutura foi criado nesta etapa.

## 15. Etapa 2 — Estrutura de dados criada

A estrutura escolhida para os dados foi `assets/js/prompt-builder/`, porque o projeto atual é um site HTML/CSS/JS simples e as bibliotecas principais de prompts já ficam em `assets/js`. Assim, os novos arquivos permanecem próximos dos dados existentes e podem ser carregados futuramente por páginas HTML sem etapa de build.

### Arquivos novos criados

- `assets/js/prompt-builder/prompt-library.js`
- `assets/js/prompt-builder/prompt-categories.js`
- `assets/js/prompt-builder/prompt-templates.js`

### Quantidade de itens por biblioteca

| Biblioteca | Itens |
|---|---:|
| `poses` | 42 |
| `expressoes` | 0 |
| `locaisTiposDeEnsaio` | 42 |
| `iluminacao` | 2 |
| `enquadramento` | 172 |
| `estilosVisuais` | 16 |
| `qualidadeAcabamento` | 0 |
| `regrasNegativas` | 2 |
| `templates` | 3 |
| `uncategorized` | 0 |
| `outOfScope` | 66 |
| **Total** | **345** |

### Bibliotecas preenchidas

- `poses`
- `locaisTiposDeEnsaio`
- `iluminacao`
- `enquadramento`
- `estilosVisuais`
- `regrasNegativas`
- `templates`
- `outOfScope`

### Bibliotecas vazias

- `expressoes`: precisa receber sugestões específicas de emoção e expressão facial.
- `qualidadeAcabamento`: precisa receber critérios de acabamento técnico e refinamento visual.
- `uncategorized`: ficou vazia porque os prompts sem uso direto em ensaio fotográfico foram separados em `outOfScope`.

### Prompts fora do escopo

Foram preservados 66 registros em `outOfScope`, sem misturar com as bibliotecas principais de ensaios fotográficos. Essa seção concentra prompts automotivos, storyboard/vídeo e combate vindos principalmente de:

- `material-aula.html`
- `combate-nano-banana-veo3.html`

Esses itens ficam disponíveis como referência histórica do projeto, mas não devem alimentar automaticamente o Prompt Builder de ensaios fotográficos sem revisão manual.

### Observação sobre personagens e roupas

Personagens e roupas continuam sendo campos manuais do formulário futuro. Não foi criada biblioteca de personagens, `characters`, `characterLibrary`, roupas, `wardrobe`, `clothing` ou figurino. O arquivo `prompt-templates.js` inclui apenas `characterFormConfig` para documentar os campos dinâmicos futuros, sem armazenar prompts de personagem ou figurino.

### Próximo passo recomendado

O próximo passo é criar a interface do formulário somente após aprovação. A primeira versão visual deve consumir essas bibliotecas locais, gerar campos dinâmicos para `CHARACTER_A`, `CHARACTER_B`, `CHARACTER_C` conforme a quantidade informada, permitir a escolha de sugestões por cards/botões e montar o prompt final usando os templates-base.

## 16. Etapa 3 — Padrão profissional do Prompt Builder

Foi criado o documento `docs/prompt-builder-professional-standard.md` para definir o padrão profissional de montagem do Prompt Builder antes de qualquer interface visual.

O padrão estabelece a ordem oficial do prompt final:

1. `QUALITY_OPENING`
2. `CHARACTER_COUNT`
3. `CHARACTERS`
4. `WARDROBE`
5. `LOCATION_SHOOT_TYPE`
6. `POSE`
7. `EXPRESSION`
8. `LIGHTING`
9. `FRAMING`
10. `VISUAL_STYLE`
11. `QUALITY_FINISH`
12. `NEGATIVE_RULES`

Personagens e roupas continuam como campos manuais do formulário futuro. Não foi criada biblioteca de personagens, `characters`, `characterLibrary`, roupas, `wardrobe`, `clothing` ou figurino.

As bibliotecas fracas e vazias precisam ser completadas antes da interface:

- `expressoes`
- `qualidadeAcabamento`
- `iluminacao`
- `regrasNegativas`
- `estilosVisuais`
- `templates`

Também foi definido um schema profissional para itens de biblioteca com `label`, `description`, `prompt` em inglês, `intensity` e `recommendedFor`.

O próximo passo recomendado é preencher as bibliotecas fracas e vazias com blocos profissionais curtos, sem personagem, sem roupa, sem repetição de qualidade fora de `qualidadeAcabamento` e sem regras negativas fora de `regrasNegativas`.

## 17. Etapa 4 — Bibliotecas profissionais completadas

A base de dados do Prompt Builder foi completada com blocos profissionais seguindo `docs/prompt-builder-professional-standard.md`.

Não foi criada interface visual, formulário, integração com API externa, biblioteca de personagens ou biblioteca de roupas/figurino.

### Quantidade final de itens por biblioteca

| Biblioteca | Itens |
|---|---:|
| `poses` | 42 |
| `expressoes` | 30 |
| `locaisTiposDeEnsaio` | 42 |
| `iluminacao` | 25 |
| `enquadramento` | 172 |
| `estilosVisuais` | 25 |
| `qualidadeAcabamento` | 20 |
| `regrasNegativas` | 18 |
| `templates` | 8 |
| `uncategorized` | 0 |
| `outOfScope` | 66 |

### Bibliotecas preenchidas

As bibliotecas que estavam vazias ou fracas foram preenchidas:

- `expressoes`
- `qualidadeAcabamento`
- `iluminacao`
- `estilosVisuais`
- `regrasNegativas`
- `templates`

As bibliotecas fortes foram mantidas e normalizadas para blocos curtos:

- `poses`
- `locaisTiposDeEnsaio`
- `enquadramento`

### Bibliotecas que ainda precisam de revisão manual

- `enquadramento`: contém itens herdados de câmera imobiliária, vídeo e combate que podem ser úteis como linguagem de câmera, mas devem ser revisados antes de aparecerem no formulário principal.
- `locaisTiposDeEnsaio`: contém temas infantis e referências proprietárias herdadas das páginas antigas; revisar antes de uso comercial.
- `outOfScope`: foi mantida como referência histórica separada e não deve alimentar automaticamente o Prompt Builder.

### Itens gerados do zero

Foram gerados do zero, já no schema profissional:

- 30 itens de `expressoes`
- 25 itens de `iluminacao`
- 25 itens de `estilosVisuais`
- 20 itens de `qualidadeAcabamento`
- 18 itens de `regrasNegativas`
- 8 itens de `templates`

Todos esses blocos usam `prompt` em inglês, com `label` e `description` em português.

### Itens vindos dos prompts antigos

Foram normalizados a partir dos prompts antigos:

- 42 itens de `poses`
- 42 itens de `locaisTiposDeEnsaio`
- 172 itens de `enquadramento`

Esses itens foram convertidos para blocos mais curtos e combináveis, com `label`, `description`, `intensity`, `recommendedFor` e `notes`.

### Confirmação sobre personagens e roupas

Não foi criada biblioteca de personagens.

Não foi criada biblioteca de roupas, figurino, `wardrobe`, `clothing` ou styling.

Personagens continuam como campos manuais futuros:

- `CHARACTER_A`
- `CHARACTER_B`
- `CHARACTER_C`

Roupas continuam como campos manuais futuros:

- `WARDROBE_A`
- `WARDROBE_B`
- `WARDROBE_C`

### Próximo passo recomendado

A base já está pronta para iniciar a interface visual do formulário do Prompt Builder.

O próximo passo recomendado é criar uma página ou módulo visual que:

- carregue `assets/js/prompt-builder/prompt-library.js`;
- carregue `assets/js/prompt-builder/prompt-categories.js`;
- carregue `assets/js/prompt-builder/prompt-templates.js`;
- permita escolher quantidade de personagens;
- gere campos manuais de personagem e roupa;
- exiba cards/botões para cada biblioteca;
- monte o prompt final na ordem oficial definida no padrão profissional.

## 18. Validação técnica com Node

Depois da instalação do Node no ambiente, foi criado o script `scripts/validate-prompt-builder-data.mjs` para validar a base profissional do Prompt Builder.

O script valida:

- sintaxe dos arquivos JS;
- existência das 11 bibliotecas oficiais;
- ausência de bibliotecas proibidas de personagens e roupas;
- contagens mínimas por biblioteca;
- categorias obrigatórias de expressões, iluminação, estilos visuais, qualidade/acabamento e regras negativas;
- IDs duplicados;
- schema essencial de cada item;
- consistência entre `prompt-library.js` e `prompt-categories.js`;
- existência dos 8 templates obrigatórios;
- presença e ordem oficial dos placeholders dos templates.

Comando usado:

```powershell
& "C:\Program Files\nodejs\node.exe" "scripts/validate-prompt-builder-data.mjs"
```

Resultado:

```text
Validation passed.
```

Contagens validadas pelo Node:

| Biblioteca | Itens |
|---|---:|
| `poses` | 42 |
| `expressoes` | 30 |
| `locaisTiposDeEnsaio` | 42 |
| `iluminacao` | 25 |
| `enquadramento` | 172 |
| `estilosVisuais` | 25 |
| `qualidadeAcabamento` | 20 |
| `regrasNegativas` | 18 |
| `templates` | 8 |
| `uncategorized` | 0 |
| `outOfScope` | 66 |

A base está tecnicamente validada para a próxima etapa: criação da interface visual do Prompt Builder.
