// Templates profissionais do Prompt Builder.
// Personagens e roupas são placeholders manuais, não bibliotecas.

const promptBuilderTemplateVariables = [
  '{{QUALITY_OPENING}}',
  '{{CHARACTER_COUNT}}',
  '{{CHARACTERS}}',
  '{{CHARACTER_A}}',
  '{{CHARACTER_B}}',
  '{{CHARACTER_C}}',
  '{{WARDROBE}}',
  '{{WARDROBE_A}}',
  '{{WARDROBE_B}}',
  '{{WARDROBE_C}}',
  '{{LOCATION_SHOOT_TYPE}}',
  '{{POSE}}',
  '{{EXPRESSION}}',
  '{{LIGHTING}}',
  '{{FRAMING}}',
  '{{VISUAL_STYLE}}',
  '{{QUALITY_FINISH}}',
  '{{NEGATIVE_RULES}}'
];

const promptBuilderTemplateBlock = [
  '{{QUALITY_OPENING}}',
  '{{CHARACTER_COUNT}}',
  '{{CHARACTERS}}',
  'CHARACTER_A: {{CHARACTER_A}}',
  'CHARACTER_B: {{CHARACTER_B}}',
  'CHARACTER_C: {{CHARACTER_C}}',
  '{{WARDROBE}}',
  'WARDROBE_A: {{WARDROBE_A}}',
  'WARDROBE_B: {{WARDROBE_B}}',
  'WARDROBE_C: {{WARDROBE_C}}',
  '{{LOCATION_SHOOT_TYPE}}',
  '{{POSE}}',
  '{{EXPRESSION}}',
  '{{LIGHTING}}',
  '{{FRAMING}}',
  '{{VISUAL_STYLE}}',
  '{{QUALITY_FINISH}}',
  '{{NEGATIVE_RULES}}'
].join('\n');

const promptBuilderTemplates = [
  {
    id: 'template-professional-one-character',
    label: 'Template para 1 personagem',
    description: 'Estrutura profissional para ensaio com um personagem manual.',
    characterMode: 'one',
    template: promptBuilderTemplateBlock,
    variables: promptBuilderTemplateVariables,
    notes: 'CHARACTER_B, CHARACTER_C e respectivos wardrobes podem ficar vazios.'
  },
  {
    id: 'template-professional-two-characters',
    label: 'Template para 2 personagens',
    description: 'Estrutura profissional para ensaio com dois personagens manuais.',
    characterMode: 'two',
    template: promptBuilderTemplateBlock,
    variables: promptBuilderTemplateVariables,
    notes: 'CHARACTER_C e WARDROBE_C podem ficar vazios.'
  },
  {
    id: 'template-professional-three-characters',
    label: 'Template para 3 personagens',
    description: 'Estrutura profissional para ensaio com três personagens manuais.',
    characterMode: 'three',
    template: promptBuilderTemplateBlock,
    variables: promptBuilderTemplateVariables,
    notes: ''
  },
  {
    id: 'template-professional-multiple-characters',
    label: 'Template para múltiplos personagens',
    description: 'Estrutura para três ou mais personagens usando CHARACTERS como bloco consolidado.',
    characterMode: 'multiple',
    template: promptBuilderTemplateBlock,
    variables: promptBuilderTemplateVariables,
    notes: 'Usar CHARACTERS e WARDROBE para consolidar personagens adicionais.'
  },
  {
    id: 'template-professional-child-session',
    label: 'Template para ensaio infantil',
    description: 'Estrutura com atenção a linguagem segura e apropriada para ensaio infantil.',
    characterMode: 'child',
    template: promptBuilderTemplateBlock,
    variables: promptBuilderTemplateVariables,
    notes: 'Usar regras negativas infantis quando aplicável.'
  },
  {
    id: 'template-professional-corporate-session',
    label: 'Template para ensaio corporativo/profissional',
    description: 'Estrutura para retratos profissionais, branding pessoal e equipe.',
    characterMode: 'corporate',
    template: promptBuilderTemplateBlock,
    variables: promptBuilderTemplateVariables,
    notes: ''
  },
  {
    id: 'template-professional-maternity-session',
    label: 'Template para ensaio gestante',
    description: 'Estrutura para ensaio gestante com campos manuais de personagem e roupa.',
    characterMode: 'maternity',
    template: promptBuilderTemplateBlock,
    variables: promptBuilderTemplateVariables,
    notes: ''
  },
  {
    id: 'template-professional-couple-family-session',
    label: 'Template para ensaio de casal/família',
    description: 'Estrutura para casal, família e interações afetivas.',
    characterMode: 'couple-family',
    template: promptBuilderTemplateBlock,
    variables: promptBuilderTemplateVariables,
    notes: ''
  }
];

const characterFormConfig = {
  minCharacters: 1,
  maxCharacters: 6,
  labels: ['CHARACTER_A', 'CHARACTER_B', 'CHARACTER_C', 'CHARACTER_D', 'CHARACTER_E', 'CHARACTER_F'],
  wardrobeLabels: ['WARDROBE_A', 'WARDROBE_B', 'WARDROBE_C', 'WARDROBE_D', 'WARDROBE_E', 'WARDROBE_F'],
  manualFieldsOnly: true
};

if (typeof window !== 'undefined') {
  window.promptBuilderTemplates = promptBuilderTemplates;
  window.promptBuilderTemplateVariables = promptBuilderTemplateVariables;
  window.characterFormConfig = characterFormConfig;
}
