# Validação da base do Prompt Builder

Data da validação: 2026-05-26

Script usado:

```powershell
& "C:\Program Files\nodejs\node.exe" "scripts/validate-prompt-builder-data.mjs"
```

Resultado técnico:

```text
Validation passed.
```

## 1. Status geral da base

A base está tecnicamente consistente e pronta para alimentar a primeira interface visual do Prompt Builder.

Foram validados:

- existência das 11 bibliotecas oficiais;
- ausência de biblioteca de personagens;
- ausência de biblioteca de roupas/figurino;
- schema obrigatório dos itens;
- IDs únicos;
- labels preenchidos;
- prompts preenchidos;
- prompts das bibliotecas em inglês;
- descriptions em português;
- ausência de blocos de roupa nos prompts das bibliotecas;
- ausência de descrições fixas de personagens nos prompts das bibliotecas;
- regras negativas concentradas em `regrasNegativas`;
- qualidade/acabamento concentrada em `qualidadeAcabamento`;
- templates com variáveis obrigatórias;
- templates obrigatórios por tipo de ensaio;
- possibilidade de montar o prompt final localmente, sem IA/API externa.

## 2. Contagens validadas

| Biblioteca | Itens | Status |
|---|---:|---|
| `poses` | 42 | ok |
| `expressoes` | 30 | ok |
| `locaisTiposDeEnsaio` | 42 | ok |
| `iluminacao` | 25 | ok |
| `enquadramento` | 172 | ok |
| `estilosVisuais` | 25 | ok |
| `qualidadeAcabamento` | 20 | ok |
| `regrasNegativas` | 18 | ok |
| `templates` | 8 | ok |
| `uncategorized` | 0 | ok |
| `outOfScope` | 66 | ok, apenas referência |

## 3. Problemas encontrados

Nenhum problema técnico bloqueador foi encontrado após as correções automáticas.

Antes da correção final, a validação semântica encontrou formulações simples que poderiam gerar ambiguidade:

- alguns prompts de `qualidadeAcabamento` usavam forma negativa dentro de uma biblioteca de qualidade;
- uma regra negativa infantil usava o termo `styling`, que poderia ser confundido com roupa/figurino;
- quatro labels herdados mencionavam roupa/acessório, embora seus prompts não fossem blocos de roupa.

Esses pontos foram corrigidos automaticamente.

## 4. Itens duplicados

Nenhum ID duplicado foi encontrado.

## 5. Bibliotecas incompletas

Nenhuma biblioteca obrigatória está incompleta para a primeira versão do formulário.

Todas as metas mínimas foram atingidas:

- `expressoes`: mínimo 30, atual 30;
- `qualidadeAcabamento`: mínimo 20, atual 20;
- `iluminacao`: mínimo 25, atual 25;
- `estilosVisuais`: mínimo 25, atual 25;
- `regrasNegativas`: mínimo 15, atual 18;
- `templates`: mínimo 6, atual 8;
- `poses`: mínimo 40, atual 42;
- `locaisTiposDeEnsaio`: mínimo 40, atual 42;
- `enquadramento`: mínimo 50, atual 172.

## 6. Correções automáticas realizadas

Foram feitas correções simples em `assets/js/prompt-builder/prompt-library.js`:

- `quality-high-resolution`: removida formulação negativa `no visible compression`;
- `quality-realistic-skin-texture`: removida formulação negativa `no plastic smoothing`;
- `quality-clean-details`: removida formulação negativa `no distracting artifacts`;
- `quality-no-artifacts`: removida formulação negativa `no AI distortion patterns`;
- `quality-detail-preservation`: removida formulação negativa `no over-sharpened edges`;
- `negative-child-safe`: `inappropriate child styling` foi alterado para `inappropriate child presentation`;
- `Outfit Adjust Pose` foi alterado para `Pose de ajuste corporal`;
- `Walking with Flowing Dress / Caminhando com vestido em movimento` foi alterado para `Caminhada com movimento fluido`;
- `Faceless Outfit Detail` foi alterado para `Detalhe sem rosto`;
- `Belly Close-Up with Baby Shoes / Close da barriga com sapatinho` foi alterado para `Close da barriga com detalhe afetivo`.

Também foi atualizado `scripts/validate-prompt-builder-data.mjs` para incluir validações semânticas adicionais.

## 7. Pontos que exigem decisão manual

A base pode alimentar a interface visual, mas existe uma decisão de produto pendente:

- 171 labels herdados ainda estão em inglês, mistos ou usam termos técnicos internacionais, especialmente em `poses`, `locaisTiposDeEnsaio`, `iluminacao` e `enquadramento`.

Isso não bloqueia o funcionamento do Prompt Builder porque:

- os IDs são únicos;
- os prompts estão em inglês;
- as descriptions estão em português;
- os blocos estão classificados corretamente;
- os templates estão completos.

Decisão recomendada:

- antes da versão final para usuário, decidir se os labels técnicos serão mantidos como termos fotográficos internacionais ou se todos serão traduzidos/adaptados para português de exibição.

## 8. Templates validados

Existem templates para:

- 1 personagem;
- 2 personagens;
- 3 personagens;
- múltiplos personagens;
- ensaio infantil;
- ensaio corporativo/profissional;
- ensaio gestante;
- ensaio de casal/família.

Todos os templates possuem as variáveis obrigatórias:

- `{{QUALITY_OPENING}}`
- `{{CHARACTER_COUNT}}`
- `{{CHARACTERS}}`
- `{{WARDROBE}}`
- `{{LOCATION_SHOOT_TYPE}}`
- `{{POSE}}`
- `{{EXPRESSION}}`
- `{{LIGHTING}}`
- `{{FRAMING}}`
- `{{VISUAL_STYLE}}`
- `{{QUALITY_FINISH}}`
- `{{NEGATIVE_RULES}}`

Também possuem os placeholders manuais auxiliares:

- `{{CHARACTER_A}}`
- `{{CHARACTER_B}}`
- `{{CHARACTER_C}}`
- `{{WARDROBE_A}}`
- `{{WARDROBE_B}}`
- `{{WARDROBE_C}}`

## 9. Confirmação sobre personagens e roupas

Não existe biblioteca de personagens.

Não existe biblioteca de roupas, figurino, `wardrobe`, `clothing` ou styling.

Personagens e roupas continuam sendo campos manuais do formulário futuro.

## 10. Prompt final sem IA/API externa

O prompt final pode ser montado 100% localmente.

A interface futura só precisa:

- carregar os arquivos locais em `assets/js/prompt-builder/`;
- ler as escolhas do usuário;
- inserir os campos manuais de personagem e roupa;
- concatenar os blocos na ordem oficial;
- exibir/copiar o prompt final.

Nenhuma IA/API externa é necessária para montar o prompt.

## 11. Sugestões de correção futura

Antes da versão pública/final, revisar os 171 labels herdados que estão em inglês ou mistos.

Sugestão de abordagem:

1. manter os prompts em inglês;
2. manter `description` em português;
3. traduzir/adaptar apenas `label` para português claro;
4. preservar o termo técnico original em `notes`, quando for útil.

## 12. Prontidão para interface visual

A base está pronta para a criação da primeira interface visual do Prompt Builder.

Status recomendado:

```text
APROVADA TECNICAMENTE, COM REVISÃO MANUAL FUTURA DE LABELS.
```
