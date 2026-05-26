# Relatório da página Gerador de Prompt para Fotografia de Estúdio

Data: 2026-05-26

## 1. Arquivos criados

- `gerador-fotografia-estudio.html`
- `assets/css/studio-prompt-builder.css`
- `assets/js/prompt-builder/studio-prompt-builder.js`
- `docs/prompt-builder-studio-page-report.md`

## 2. Arquivos alterados

Nenhuma página antiga foi alterada.

Nenhum layout existente foi modificado.

O menu não foi alterado nesta primeira versão para evitar impacto visual nas páginas já existentes.

## 3. Como a página funciona

A página `gerador-fotografia-estudio.html` carrega a base local do Prompt Builder:

- `assets/js/prompt-builder/prompt-library.js`
- `assets/js/prompt-builder/prompt-categories.js`
- `assets/js/prompt-builder/prompt-templates.js`
- `assets/js/prompt-builder/studio-prompt-builder.js`

O usuário escolhe a quantidade de personagens:

- 1
- 2
- 3
- 4 ou mais

Com base nessa escolha, a página gera campos manuais:

- `CHARACTER_A`
- `CHARACTER_B`
- `CHARACTER_C`
- `CHARACTER_D`

Depois, o usuário seleciona cards das bibliotecas locais:

- Poses
- Expressões
- Local / tipo de ensaio
- Iluminação
- Enquadramento
- Estilo visual
- Qualidade/acabamento
- Regras negativas

No final, a página gera campos manuais de roupa/figurino por personagem:

- `WARDROBE_A`
- `WARDROBE_B`
- `WARDROBE_C`
- `WARDROBE_D`

## 4. Como o prompt é montado

O motor local monta o prompt na ordem profissional:

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

O prompt principal combina:

- texto fixo local de abertura profissional para fotografia de estúdio;
- quantidade de personagens;
- descrições manuais dos personagens;
- roupas/figurinos manuais;
- prompts selecionados nas bibliotecas locais, exceto regras negativas.

O prompt negativo é montado separadamente apenas com itens selecionados em `regrasNegativas`.

O prompt completo concatena o prompt principal com o bloco `Negative rules`.

## 5. Bibliotecas usadas

Usadas no formulário:

- `poses`
- `expressoes`
- `locaisTiposDeEnsaio`
- `iluminacao`
- `enquadramento`
- `estilosVisuais`
- `qualidadeAcabamento`
- `regrasNegativas`

Não usadas diretamente no formulário:

- `templates`: referência estrutural da montagem.
- `uncategorized`: vazia.
- `outOfScope`: mantida fora da interface.

## 6. Personagens manuais

Personagens são campos manuais.

Não foi criada biblioteca de personagens.

O sistema não sugere personagens automaticamente.

## 7. Roupas manuais

Roupas/figurino são campos manuais.

Não foi criada biblioteca de roupas, figurino, `wardrobe`, `clothing` ou styling.

O sistema não sugere roupas automaticamente.

## 8. Sem IA/API externa

A página não usa IA/API externa.

Todo o funcionamento é local:

- HTML estático;
- CSS local;
- JavaScript local;
- bibliotecas locais em `assets/js/prompt-builder/`.

## 9. Problemas encontrados

Nenhum problema crítico foi encontrado.

Ponto de revisão futura:

- alguns labels herdados da base ainda estão em inglês ou mistos, conforme registrado em `docs/prompt-builder-library-validation.md`. Isso não bloqueia a primeira interface funcional.

Decisão de integração:

- o link da nova página não foi adicionado ao menu nesta etapa para evitar qualquer alteração visual em páginas antigas. O caminho direto da página é `gerador-fotografia-estudio.html`.

## 10. Testes realizados

Validação da base:

```powershell
& "C:\Program Files\nodejs\node.exe" "scripts/validate-prompt-builder-data.mjs"
```

Resultado:

```text
Validation passed.
```

Testes funcionais em Chrome headless:

- página abre sem exibir erro de base indisponível;
- campos de 1 personagem aparecem corretamente;
- campos de 2 personagens aparecem corretamente;
- campos de 3 personagens aparecem corretamente;
- campos de 4 ou mais personagens exibem `CHARACTER_D` e `WARDROBE_D`;
- campos de roupa aparecem por personagem;
- cards das bibliotecas preenchem o prompt principal;
- prompt negativo aparece separado;
- botão `Copiar prompt principal` responde;
- botão `Copiar prompt negativo` responde;
- botão `Copiar prompt completo` responde;
- botão `Limpar formulário` remove seleções e limpa campos;
- páginas antigas `index.html`, `menu.html` e `combate-nano-banana-veo3.html` continuam abrindo em Chrome headless.

## 11. Próximas melhorias recomendadas

1. Adicionar link no menu principal após aprovação visual.
2. Criar busca/filtro por biblioteca dentro da página.
3. Permitir salvar presets locais no navegador.
4. Criar visualização resumida das escolhas selecionadas.
5. Traduzir/adaptar os labels herdados que ainda estão em inglês ou mistos.
6. Refinar o filtro de destaque para estúdio com curadoria manual.
