# Prompt Builder Professional Standard

Este documento define o padrão técnico da base de dados profissional do Prompt Builder focado em ensaios fotográficos.

O objetivo é transformar os prompts auditados em blocos reutilizáveis, objetivos e combináveis, mantendo personagens e roupas como campos manuais do formulário futuro.

## 1. Princípio central

A ordem do prompt importa. As informações mais importantes devem aparecer no início, e cada biblioteca deve fornecer apenas um bloco específico para montar o prompt final.

O Prompt Builder não deve gerar um texto longo por acúmulo desorganizado de frases. Ele deve montar o prompt final usando blocos curtos, claros e separados por função.

## 2. Ordem oficial do prompt final

A montagem profissional deve seguir esta ordem:

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

Essa ordem coloca primeiro a qualidade geral e a estrutura humana da cena, depois os campos manuais, depois as sugestões escolhidas nas bibliotecas, e por último acabamento e restrições.

## 3. Estrutura do prompt final

Modelo conceitual:

```text
QUALITY_OPENING:
{{QUALITY_OPENING}}

CHARACTER_COUNT:
{{CHARACTER_COUNT}}

CHARACTERS:
{{CHARACTERS}}

WARDROBE:
{{WARDROBE}}

LOCATION_SHOOT_TYPE:
{{LOCATION_SHOOT_TYPE}}

POSE:
{{POSE}}

EXPRESSION:
{{EXPRESSION}}

LIGHTING:
{{LIGHTING}}

FRAMING:
{{FRAMING}}

VISUAL_STYLE:
{{VISUAL_STYLE}}

QUALITY_FINISH:
{{QUALITY_FINISH}}

NEGATIVE_RULES:
{{NEGATIVE_RULES}}
```

Na saída final para uso em geradores de imagem, os rótulos podem ser removidos ou convertidos em uma frase contínua. Internamente, porém, os blocos devem permanecer separados para evitar redundância e facilitar edição.

## 4. Campos manuais de personagens

Personagens não são biblioteca.

O formulário futuro deve criar campos dinâmicos conforme a quantidade escolhida pelo usuário:

```text
CHARACTER_A
CHARACTER_B
CHARACTER_C
CHARACTER_D
CHARACTER_E
CHARACTER_F
```

Cada campo deve receber uma descrição manual escrita pelo usuário. Essa descrição pode conter aparência, idade, identidade visual, características físicas e qualquer detalhe individual necessário.

Exemplo estrutural:

```text
CHARACTER_A: manual user description.
CHARACTER_B: manual user description.
CHARACTER_C: manual user description.
```

Nenhum item de biblioteca deve descrever um personagem específico, criar uma aparência fixa, definir identidade ou substituir a descrição manual.

## 5. Campos manuais de roupas

Roupas, figurino e styling individual não são biblioteca.

O formulário futuro deve criar campos manuais separados por personagem:

```text
WARDROBE_A
WARDROBE_B
WARDROBE_C
WARDROBE_D
WARDROBE_E
WARDROBE_F
```

Cada campo deve receber a roupa/figurino do personagem correspondente, preenchido manualmente pelo usuário.

Exemplo estrutural:

```text
WARDROBE_A: manual wardrobe description for CHARACTER_A.
WARDROBE_B: manual wardrobe description for CHARACTER_B.
WARDROBE_C: manual wardrobe description for CHARACTER_C.
```

Nenhuma biblioteca deve armazenar roupa pronta, figurino pronto, combinações de looks ou styling específico por personagem.

## 6. Uso de cada biblioteca

### `poses`

Fornece sugestões de postura, posicionamento corporal, interação entre personagens e direção física da cena.

Deve evitar:

- Descrição fixa de pessoa/personagem.
- Roupa ou figurino.
- Qualidade técnica repetida.
- Regras negativas.

### `expressoes`

Fornece sugestões de emoção, expressão facial, olhar e intenção emocional.

Esta biblioteca está vazia e precisa ser criada com blocos curtos.

Exemplos de categorias futuras:

- suave
- confiante
- contemplativa
- alegre
- romântica
- editorial
- dramática

### `locaisTiposDeEnsaio`

Fornece sugestões de local, cenário, ambiente, contexto e tipo de ensaio.

Pode incluir:

- estúdio
- praia
- campo
- casa
- urbano
- corporativo
- gestante
- família
- casal

Não deve incluir personagem, roupa ou regras negativas.

### `iluminacao`

Fornece sugestões de luz, direção da luz, clima luminoso, contraste e atmosfera.

Esta biblioteca está fraca e precisa de mais blocos.

Exemplos de categorias futuras:

- natural soft light
- golden hour
- window light
- backlight
- studio softbox
- cinematic contrast
- low key
- high key

### `enquadramento`

Fornece sugestões de câmera, lente, ângulo, plano, composição e profundidade de campo.

É uma biblioteca forte no estado atual, mas muitos itens ainda precisam ser normalizados em blocos curtos.

Deve evitar repetir qualidade, estilo visual ou regras negativas.

### `estilosVisuais`

Fornece sugestões de linguagem estética, direção visual e acabamento artístico geral.

Esta biblioteca existe, mas ainda está fraca para um Prompt Builder profissional.

Exemplos de categorias futuras:

- editorial
- lifestyle
- fine art
- cinematic
- minimal
- documentary
- fashion inspired
- black and white

### `qualidadeAcabamento`

Centraliza qualidade, acabamento técnico e refinamento final.

Esta biblioteca está vazia e deve receber blocos como:

- high-end professional photography
- natural skin texture
- clean color grading
- realistic details
- sharp focus where appropriate
- refined retouching

Outras bibliotecas não devem repetir tags de qualidade. Isso evita prompts inchados e redundantes.

### `regrasNegativas`

Centraliza restrições, prevenção de erros e prompt negativo.

Esta biblioteca está fraca e deve ser expandida com blocos específicos para:

- anatomia
- mãos
- rosto
- identidade
- excesso de edição
- deformações
- objetos extras
- texto/logos/marcas indesejadas

As regras negativas devem ficar separadas do prompt principal sempre que a ferramenta usada permitir prompt negativo próprio.

### `templates`

Fornece estruturas-base para montar o prompt final em diferentes quantidades de personagens.

Os templates não devem virar prompts finais fixos. Eles devem apenas organizar as variáveis.

### `uncategorized`

Recebe somente prompts dentro do escopo de ensaio fotográfico que ainda não tenham categoria clara.

### `outOfScope`

Preserva prompts encontrados na auditoria que não pertencem diretamente ao Prompt Builder de ensaios fotográficos, como automotivo, combate e vídeo.

Esses itens não devem entrar automaticamente no formulário principal.

## 7. Schema profissional dos itens

Schema recomendado para a próxima normalização das bibliotecas:

```js
{
  id: "identificador-unico",
  library: "poses | expressoes | locaisTiposDeEnsaio | iluminacao | enquadramento | estilosVisuais | qualidadeAcabamento | regrasNegativas | templates",
  category: "categoria-especifica",
  label: "Nome exibido no botão/card em português",
  description: "Descrição curta para o usuário em português",
  prompt: "Bloco de prompt em inglês pronto para ser combinado",
  tags: ["tag1", "tag2", "tag3"],
  intensity: "soft | medium | strong",
  recommendedFor: ["feminino", "masculino", "infantil", "casal", "familia", "gestante", "corporativo", "geral"],
  notes: ""
}
```

Regras do schema:

- `label` deve ser curto e claro.
- `description` deve explicar o efeito visual para o usuário.
- `prompt` deve ficar em inglês.
- `prompt` deve ser um bloco curto, objetivo e combinável.
- `prompt` não deve incluir personagem fixo.
- `prompt` não deve incluir roupa ou figurino.
- `prompt` não deve repetir qualidade se o item não for de `qualidadeAcabamento`.
- `prompt` não deve incluir regras negativas se o item não for de `regrasNegativas`.

## 8. Quantidade mínima recomendada por biblioteca

Para uma primeira versão profissional do formulário, recomenda-se:

| Biblioteca | Mínimo recomendado | Status atual |
|---|---:|---|
| `poses` | 40 | forte |
| `expressoes` | 30 | vazia |
| `locaisTiposDeEnsaio` | 40 | forte |
| `iluminacao` | 25 | fraca |
| `enquadramento` | 50 | forte |
| `estilosVisuais` | 25 | fraca |
| `qualidadeAcabamento` | 20 | vazia |
| `regrasNegativas` | 15 | fraca |
| `templates` | 6 | fraca |
| `uncategorized` | 0 | ok |
| `outOfScope` | sem meta | referência |

O objetivo não é apenas quantidade. Cada item precisa ser curto, útil, não redundante e fácil de combinar.

## 9. Como escrever blocos profissionais

Um bloco profissional deve:

- Ter uma função clara.
- Ter entre uma e três frases curtas.
- Usar inglês no campo `prompt`.
- Ser combinável com outros blocos.
- Evitar comandos contraditórios.
- Evitar repetir "high quality", "ultra realistic", "cinematic" em todas as bibliotecas.
- Não depender de uma roupa ou personagem específico.
- Não carregar o prompt inteiro dentro de um único item.

Exemplo de bloco bom para `iluminacao`:

```js
{
  id: "lighting-soft-window-light",
  library: "iluminacao",
  category: "natural-light",
  label: "Luz de janela suave",
  description: "Luz natural lateral, delicada e uniforme.",
  prompt: "Soft natural window light coming from one side, gentle shadows, flattering skin tones, calm intimate atmosphere.",
  tags: ["natural-light", "window-light", "soft"],
  intensity: "soft",
  recommendedFor: ["feminino", "gestante", "familia", "geral"],
  notes: ""
}
```

Exemplo de bloco ruim:

```js
{
  prompt: "A beautiful pregnant woman wearing a white dress in a studio, ultra realistic, high quality, no bad hands, cinematic, 8k, perfect face..."
}
```

Problemas do bloco ruim:

- Inclui personagem.
- Inclui roupa.
- Mistura local, qualidade e regra negativa.
- É longo e redundante.
- Não é reutilizável.

## 10. Prompt principal e prompt negativo

O prompt principal deve conter:

- qualidade inicial
- quantidade de personagens
- descrições manuais dos personagens
- roupas manuais
- local/tipo de ensaio
- pose
- expressão
- iluminação
- enquadramento
- estilo visual
- qualidade/acabamento

O prompt negativo deve conter:

- anatomia incorreta
- mãos deformadas
- rostos distorcidos
- personagens extras
- texto/logos indesejados
- baixa resolução
- artefatos de IA
- distorções visuais
- excesso de edição

Quando a ferramenta não tiver campo separado de prompt negativo, `NEGATIVE_RULES` deve ser adicionado ao final do prompt principal como um bloco separado.

## 11. Como evitar redundância

Regras de normalização:

- Qualidade fica em `qualidadeAcabamento`.
- Restrições ficam em `regrasNegativas`.
- Personagens ficam em `CHARACTERS`.
- Roupas ficam em `WARDROBE`.
- Local fica em `locaisTiposDeEnsaio`.
- Luz fica em `iluminacao`.
- Câmera fica em `enquadramento`.
- Estética fica em `estilosVisuais`.

Se um bloco contiver informações de outra biblioteca, ele deve ser revisado antes de entrar na base profissional.

## 12. Bibliotecas que precisam de mais dados

Prioridade alta:

- `expressoes`
- `qualidadeAcabamento`
- `iluminacao`
- `regrasNegativas`

Prioridade média:

- `estilosVisuais`
- `templates`

Prioridade de normalização:

- `poses`
- `locaisTiposDeEnsaio`
- `enquadramento`

Essas três últimas já têm muitos itens, mas parte do conteúdo ainda vem de prompts completos e precisa virar blocos menores.

## 13. Inconsistências atuais a resolver

A estrutura atual preserva corretamente os 345 registros da auditoria, mas ainda não está no padrão profissional final.

Pontos identificados:

- Muitos itens ainda usam o formato antigo com `title` e `sourcePage`, não o schema profissional com `label`, `description`, `intensity` e `recommendedFor`.
- Muitos prompts auditados são longos e misturam pose, câmera, personagem, qualidade e restrições no mesmo texto.
- `expressoes` está vazia.
- `qualidadeAcabamento` está vazia.
- `iluminacao`, `regrasNegativas`, `estilosVisuais` e `templates` precisam de mais blocos profissionais.
- `outOfScope` deve continuar separado e não deve alimentar o formulário principal.

Essas inconsistências são esperadas nesta fase, porque a Etapa 2 preservou o material original. A próxima etapa deve criar ou normalizar blocos profissionais sem apagar os registros brutos.

## 14. Próxima etapa recomendada

Criar uma camada profissional complementar, por exemplo:

```text
assets/js/prompt-builder/
  professional-prompt-library.js
```

Essa camada deve conter somente blocos normalizados no schema profissional, começando pelas bibliotecas fracas e vazias:

1. `expressoes`
2. `qualidadeAcabamento`
3. `iluminacao`
4. `regrasNegativas`
5. `estilosVisuais`
6. `templates`

Depois disso, os itens fortes de `poses`, `locaisTiposDeEnsaio` e `enquadramento` podem ser revisados e convertidos gradualmente para blocos profissionais.
