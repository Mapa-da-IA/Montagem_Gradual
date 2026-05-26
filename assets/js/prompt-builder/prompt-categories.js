// Metadados das categorias profissionais do Prompt Builder.
// Não define bibliotecas de personagens nem de roupas/figurino.

const promptBuilderCategories = [
  {
    id: 'poses',
    label: 'Poses',
    description: 'Sugestões de postura, posicionamento corporal e interação para ensaios fotográficos.',
    status: 'filled',
    count: 42,
    minimumRecommended: 40
  },
  {
    id: 'expressoes',
    label: 'Expressões',
    description: 'Sugestões de emoção, expressão facial e direção de olhar.',
    status: 'filled',
    count: 30,
    minimumRecommended: 30
  },
  {
    id: 'locaisTiposDeEnsaio',
    label: 'Locais e tipos de ensaio',
    description: 'Sugestões de cenário, ambiente, contexto e tema do ensaio.',
    status: 'filled',
    count: 42,
    minimumRecommended: 40
  },
  {
    id: 'iluminacao',
    label: 'Iluminação',
    description: 'Sugestões de luz, direção luminosa, contraste e atmosfera.',
    status: 'filled',
    count: 25,
    minimumRecommended: 25
  },
  {
    id: 'enquadramento',
    label: 'Enquadramento',
    description: 'Sugestões de câmera, lente, ângulo, plano e composição.',
    status: 'filled',
    count: 172,
    minimumRecommended: 50
  },
  {
    id: 'estilosVisuais',
    label: 'Estilos visuais',
    description: 'Sugestões de estética, linguagem visual e clima editorial.',
    status: 'filled',
    count: 25,
    minimumRecommended: 25
  },
  {
    id: 'qualidadeAcabamento',
    label: 'Qualidade e acabamento',
    description: 'Blocos centralizados de qualidade técnica e acabamento final.',
    status: 'filled',
    count: 20,
    minimumRecommended: 20
  },
  {
    id: 'regrasNegativas',
    label: 'Regras negativas',
    description: 'Restrições e cuidados para evitar erros no resultado.',
    status: 'filled',
    count: 18,
    minimumRecommended: 15
  },
  {
    id: 'templates',
    label: 'Templates',
    description: 'Estruturas-base para montagem do prompt final.',
    status: 'filled',
    count: 8,
    minimumRecommended: 6
  },
  {
    id: 'uncategorized',
    label: 'Sem categoria',
    description: 'Prompts fotográficos ainda sem categoria clara.',
    status: 'empty',
    count: 0,
    minimumRecommended: 0
  },
  {
    id: 'outOfScope',
    label: 'Fora do escopo',
    description: 'Registros preservados como referência histórica da auditoria, fora do formulário principal.',
    status: 'reference',
    count: 66,
    minimumRecommended: null
  }
];

if (typeof window !== 'undefined') {
  window.promptBuilderCategories = promptBuilderCategories;
}
