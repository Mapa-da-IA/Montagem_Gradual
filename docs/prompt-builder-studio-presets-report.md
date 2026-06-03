# Relatório dos presets do Gerador de Prompt para Fotografia de Estúdio

Data: 2026-05-27

## 1. Arquivos criados

- `assets/js/prompt-builder/studio-presets.js`
- `docs/prompt-builder-studio-presets-report.md`

## 2. Arquivos alterados

- `gerador-fotografia-estudio.html`
- `assets/css/studio-prompt-builder.css`
- `assets/js/prompt-builder/studio-prompt-builder.js`

Nenhuma página antiga foi alterada.

Nenhum layout antigo foi modificado.

## 3. Presets criados

Foram criados 15 presets:

1. Retrato corporativo
2. Foto de perfil profissional
3. Ensaio feminino em estúdio
4. Ensaio masculino em estúdio
5. Ensaio editorial de moda
6. Ensaio premium/luxo
7. Ensaio gestante em estúdio
8. Ensaio infantil em estúdio
9. Ensaio de casal em estúdio
10. Ensaio família em estúdio
11. Foto para Instagram profissional
12. Headshot clean
13. Retrato dark cinematic
14. Retrato high key em fundo branco
15. Retrato low key em fundo preto

## 4. Bibliotecas usadas por preset

Cada preset usa apenas as bibliotecas já existentes:

- `poses`
- `expressoes`
- `locaisTiposDeEnsaio`
- `iluminacao`
- `enquadramento`
- `estilosVisuais`
- `qualidadeAcabamento`
- `regrasNegativas`

Mapeamento usado:

- `pose` -> `poses`
- `expression` -> `expressoes`
- `locationShootType` -> `locaisTiposDeEnsaio`
- `lighting` -> `iluminacao`
- `framing` -> `enquadramento`
- `visualStyle` -> `estilosVisuais`
- `qualityFinish` -> `qualidadeAcabamento`
- `negativeRules` -> `regrasNegativas`

## 5. Itens novos adicionados às bibliotecas

Nenhum item novo foi adicionado às bibliotecas.

Todos os presets apontam para IDs já existentes em `assets/js/prompt-builder/prompt-library.js`.

## 6. Personagens

Não foi criada biblioteca de personagens.

Os presets não descrevem personagens.

Personagens continuam sendo campos manuais:

- `CHARACTER_A`
- `CHARACTER_B`
- `CHARACTER_C`
- `CHARACTER_D`

## 7. Roupas/figurino

Não foi criada biblioteca de roupas, figurino, `wardrobe`, `clothing` ou styling.

Os presets não sugerem roupas.

Roupas continuam sendo campos manuais:

- `WARDROBE_A`
- `WARDROBE_B`
- `WARDROBE_C`
- `WARDROBE_D`

## 8. Sem IA/API externa

O sistema de presets não usa IA/API externa.

O arquivo `studio-presets.js` apenas contém combinações locais de IDs já existentes na biblioteca validada.

## 9. Como funciona na interface

Foi adicionada a seção `Presets rápidos de estúdio` antes da personalização manual.

Ao clicar em um preset:

- as seleções anteriores são substituídas pelas opções do preset;
- os cards correspondentes ficam selecionados visualmente;
- o prompt principal é atualizado;
- o prompt negativo é atualizado;
- o preset ativo aparece na barra de status;
- o usuário pode alterar qualquer escolha manualmente depois.

O botão `Limpar preset`:

- remove o preset ativo;
- limpa as seleções das bibliotecas;
- preserva os campos manuais de personagem e roupa.

O botão `Limpar formulário` continua limpando tudo.

## 10. Problemas encontrados

Nenhum problema crítico foi encontrado.

Ponto de revisão futura:

- alguns labels herdados ainda estão em inglês ou mistos, como já registrado em `docs/prompt-builder-library-validation.md`.

## 11. Testes realizados

Validações executadas:

```powershell
& "C:\Program Files\nodejs\node.exe" --check "assets/js/prompt-builder/studio-presets.js"
& "C:\Program Files\nodejs\node.exe" --check "assets/js/prompt-builder/studio-prompt-builder.js"
& "C:\Program Files\nodejs\node.exe" "scripts/validate-prompt-builder-data.mjs"
```

Resultado da base:

```text
Validation passed.
```

Também foi validado por script em Chrome headless:

- presets carregam na página;
- aplicar preset com 1 personagem;
- aplicar preset com 2 personagens;
- trocar iluminação depois de aplicar preset;
- remover preset;
- gerar prompt principal;
- gerar prompt negativo;
- copiar prompt completo;
- limpar formulário;
- personagens continuam manuais;
- roupas continuam manuais;
- páginas antigas `menu.html`, `index.html` e `combate-nano-banana-veo3.html` continuam abrindo.

## 12. Próximo passo recomendado

Adicionar uma busca/filtro dentro das bibliotecas e criar uma área de resumo das seleções ativas.

Depois disso, revisar os labels herdados em inglês/mistos antes de publicar a versão final para usuários.
