// Presets locais para o Gerador de Prompt para Fotografia de Estúdio.
// Presets apenas pré-selecionam opções das bibliotecas existentes.
// Não há biblioteca de personagens nem de roupas/figurino.

const studioPromptBuilderPresets = [
  {
    id: 'studio-corporate-portrait',
    label: 'Retrato corporativo',
    description: 'Preset para foto profissional de perfil, LinkedIn, empresa ou apresentação institucional.',
    recommendedFor: ['masculino', 'feminino', 'corporativo', 'geral'],
    selections: {
      pose: 'pose-three-quarter-relaxed-stance',
      expression: 'expression-corporate',
      locationShootType: 'location-corporate-casual-personal-brand',
      lighting: 'lighting-corporate-clean',
      framing: 'framing-camera-05-medium-portrait-waist-up',
      visualStyle: 'style-corporate',
      qualityFinish: 'quality-high-end-portrait',
      negativeRules: ['negative-bad-anatomy', 'negative-distorted-face', 'negative-low-quality', 'negative-watermark', 'negative-random-text']
    },
    notes: ''
  },
  {
    id: 'studio-professional-profile-photo',
    label: 'Foto de perfil profissional',
    description: 'Preset limpo para avatar profissional, perfil social ou apresentação pessoal.',
    recommendedFor: ['masculino', 'feminino', 'corporativo', 'geral'],
    selections: {
      pose: 'pose-pose-tres-quartos-com-mao-na-cintura',
      expression: 'expression-camera-gaze',
      locationShootType: 'location-estudio-editorial',
      lighting: 'lighting-soft-front',
      framing: 'framing-camera-06-close-up-beauty-portrait',
      visualStyle: 'style-clean-beauty',
      qualityFinish: 'quality-realistic-facial-features',
      negativeRules: ['negative-distorted-face', 'negative-blurry-image', 'negative-random-logo', 'negative-watermark']
    },
    notes: ''
  },
  {
    id: 'studio-feminine-session',
    label: 'Ensaio feminino em estúdio',
    description: 'Preset delicado e elegante para retrato feminino em ambiente controlado.',
    recommendedFor: ['feminino', 'geral'],
    selections: {
      pose: 'pose-pose-tres-quartos-com-mao-na-cintura-corpo-inteiro',
      expression: 'expression-delicate-gaze',
      locationShootType: 'location-estudio-editorial',
      lighting: 'lighting-large-softbox',
      framing: 'framing-camera-04-three-quarter-body-portrait',
      visualStyle: 'style-delicate',
      qualityFinish: 'quality-professional-retouching',
      negativeRules: ['negative-bad-anatomy', 'negative-deformed-hands', 'negative-extra-fingers', 'negative-overprocessed']
    },
    notes: ''
  },
  {
    id: 'studio-masculine-session',
    label: 'Ensaio masculino em estúdio',
    description: 'Preset com presença forte, postura confiante e luz controlada.',
    recommendedFor: ['masculino', 'geral'],
    selections: {
      pose: 'pose-arms-crossed-power-pose',
      expression: 'expression-confident-gaze',
      locationShootType: 'location-estudio-editorial',
      lighting: 'lighting-side-light',
      framing: 'framing-camera-04-three-quarter-body-portrait',
      visualStyle: 'style-ultra-realistic',
      qualityFinish: 'quality-natural-anatomy',
      negativeRules: ['negative-bad-anatomy', 'negative-unreal-proportions', 'negative-extra-limbs', 'negative-low-quality']
    },
    notes: ''
  },
  {
    id: 'studio-fashion-editorial',
    label: 'Ensaio editorial de moda',
    description: 'Preset para estética editorial, revista, moda e direção visual sofisticada.',
    recommendedFor: ['masculino', 'feminino', 'geral'],
    selections: {
      pose: 'pose-pose-de-ajuste-corporal',
      expression: 'expression-fashion-cold',
      locationShootType: 'location-spotlight-20-prata-editorial',
      lighting: 'lighting-fashion-editorial',
      framing: 'framing-camera-19-editorial-tilted-camera-angle',
      visualStyle: 'style-fashion-editorial',
      qualityFinish: 'quality-premium-finish',
      negativeRules: ['negative-bad-anatomy', 'negative-deformed-hands', 'negative-distorted-face', 'negative-random-logo']
    },
    notes: ''
  },
  {
    id: 'studio-premium-luxury',
    label: 'Ensaio premium/luxo',
    description: 'Preset para retrato sofisticado com acabamento premium e atmosfera elegante.',
    recommendedFor: ['masculino', 'feminino', 'casal', 'geral'],
    selections: {
      pose: 'pose-pose-sobre-o-ombro',
      expression: 'expression-elegant-neutral',
      locationShootType: 'location-black-gold-glamour',
      lighting: 'lighting-butterfly',
      framing: 'framing-camera-20-centered-symmetrical-portrait',
      visualStyle: 'style-premium-luxury',
      qualityFinish: 'quality-premium-finish',
      negativeRules: ['negative-low-quality', 'negative-blurry-image', 'negative-watermark', 'negative-random-text']
    },
    notes: ''
  },
  {
    id: 'studio-maternity-session',
    label: 'Ensaio gestante em estúdio',
    description: 'Preset suave para ensaio gestante com direção emocional e acabamento delicado.',
    recommendedFor: ['gestante', 'familia', 'casal'],
    selections: {
      pose: 'pose-hero-maternity-portrait-pose-heroina-materna',
      expression: 'expression-maternity-emotional',
      locationShootType: 'location-estudio-editorial',
      lighting: 'lighting-large-softbox',
      framing: 'framing-camera-04-three-quarter-body-portrait',
      visualStyle: 'style-maternity-soft-editorial',
      qualityFinish: 'quality-realistic-skin-texture',
      negativeRules: ['negative-bad-anatomy', 'negative-deformed-hands', 'negative-unreal-proportions', 'negative-overprocessed']
    },
    notes: ''
  },
  {
    id: 'studio-child-session',
    label: 'Ensaio infantil em estúdio',
    description: 'Preset alegre e seguro para ensaio infantil em ambiente controlado.',
    recommendedFor: ['infantil', 'familia'],
    selections: {
      pose: 'pose-studio-stool-portrait',
      expression: 'expression-child-happy',
      locationShootType: 'location-estudio-editorial',
      lighting: 'lighting-child-soft',
      framing: 'framing-camera-27-baby-child-close-up-portrait',
      visualStyle: 'style-colorful-child',
      qualityFinish: 'quality-natural-proportions',
      negativeRules: ['negative-child-safe', 'negative-bad-anatomy', 'negative-extra-people', 'negative-random-text']
    },
    notes: ''
  },
  {
    id: 'studio-couple-session',
    label: 'Ensaio de casal em estúdio',
    description: 'Preset afetivo para casal com pose conectada e luz romântica.',
    recommendedFor: ['casal', 'geral'],
    selections: {
      pose: 'pose-couple-side-embrace',
      expression: 'expression-loving-couple',
      locationShootType: 'location-estudio-editorial',
      lighting: 'lighting-romantic',
      framing: 'framing-two-shot-plano-de-dois',
      visualStyle: 'style-romantic',
      qualityFinish: 'quality-balanced-composition',
      negativeRules: ['negative-extra-people', 'negative-bad-anatomy', 'negative-deformed-hands', 'negative-blurry-image']
    },
    notes: ''
  },
  {
    id: 'studio-family-session',
    label: 'Ensaio família em estúdio',
    description: 'Preset para retrato familiar com conexão afetiva e composição organizada.',
    recommendedFor: ['familia', 'infantil', 'gestante'],
    selections: {
      pose: 'pose-child-hugging-belly-filho-abracando-a-barriga',
      expression: 'expression-family-affection',
      locationShootType: 'location-estudio-editorial',
      lighting: 'lighting-soft-natural',
      framing: 'framing-group-shot-plano-de-grupo',
      visualStyle: 'style-warm-family',
      qualityFinish: 'quality-balanced-composition',
      negativeRules: ['negative-extra-people', 'negative-bad-anatomy', 'negative-unreal-proportions', 'negative-messy-background']
    },
    notes: ''
  },
  {
    id: 'studio-professional-instagram',
    label: 'Foto para Instagram profissional',
    description: 'Preset moderno para conteúdo profissional, marca pessoal e redes sociais.',
    recommendedFor: ['masculino', 'feminino', 'corporativo', 'geral'],
    selections: {
      pose: 'pose-creator-multi-look-portrait',
      expression: 'expression-spontaneous-gaze',
      locationShootType: 'location-estudio-editorial',
      lighting: 'lighting-large-softbox',
      framing: 'framing-camera-18-natural-smartphone-style-portrait',
      visualStyle: 'style-professional-instagram',
      qualityFinish: 'quality-clean-details',
      negativeRules: ['negative-low-quality', 'negative-random-text', 'negative-random-logo', 'negative-watermark']
    },
    notes: ''
  },
  {
    id: 'studio-clean-headshot',
    label: 'Headshot clean',
    description: 'Preset direto para close profissional, limpo e bem iluminado.',
    recommendedFor: ['masculino', 'feminino', 'corporativo', 'geral'],
    selections: {
      pose: 'pose-pose-frontal-com-maos-elevadas-ao-peito',
      expression: 'expression-elegant-neutral',
      locationShootType: 'location-estudio-editorial',
      lighting: 'lighting-butterfly',
      framing: 'framing-camera-06-close-up-beauty-portrait',
      visualStyle: 'style-clean-minimal',
      qualityFinish: 'quality-realistic-facial-features',
      negativeRules: ['negative-distorted-face', 'negative-blurry-image', 'negative-low-quality', 'negative-watermark']
    },
    notes: ''
  },
  {
    id: 'studio-dark-cinematic-portrait',
    label: 'Retrato dark cinematic',
    description: 'Preset dramático com sombras profundas, contraste e clima cinematográfico.',
    recommendedFor: ['masculino', 'feminino', 'geral'],
    selections: {
      pose: 'pose-pose-perfil-com-braco-elevado',
      expression: 'expression-dramatic',
      locationShootType: 'location-estudio-editorial',
      lighting: 'lighting-low-key',
      framing: 'framing-dark-profile-portrait',
      visualStyle: 'style-dark-cinematic',
      qualityFinish: 'quality-cinematic-color-grading',
      negativeRules: ['negative-low-quality', 'negative-blurry-image', 'negative-distorted-face', 'negative-ai-artifacts']
    },
    notes: ''
  },
  {
    id: 'studio-high-key-white-background',
    label: 'Retrato high key em fundo branco',
    description: 'Preset claro, luminoso e minimalista para retrato em fundo branco.',
    recommendedFor: ['masculino', 'feminino', 'corporativo', 'geral'],
    selections: {
      pose: 'pose-pose-frontal-com-maos-elevadas-ao-peito',
      expression: 'expression-soft-smile',
      locationShootType: 'location-estudio-editorial',
      lighting: 'lighting-high-key',
      framing: 'framing-camera-20-centered-symmetrical-portrait',
      visualStyle: 'style-clean-minimal',
      qualityFinish: 'quality-natural-color',
      negativeRules: ['negative-low-quality', 'negative-random-text', 'negative-watermark', 'negative-messy-background']
    },
    notes: ''
  },
  {
    id: 'studio-low-key-black-background',
    label: 'Retrato low key em fundo preto',
    description: 'Preset escuro e elegante com sombras controladas e presença forte.',
    recommendedFor: ['masculino', 'feminino', 'geral'],
    selections: {
      pose: 'pose-pose-perfil-com-braco-elevado',
      expression: 'expression-serious-clean',
      locationShootType: 'location-estudio-editorial',
      lighting: 'lighting-low-key',
      framing: 'framing-camera-08-profile-side-portrait',
      visualStyle: 'style-dark-cinematic',
      qualityFinish: 'quality-premium-finish',
      negativeRules: ['negative-low-quality', 'negative-blurry-image', 'negative-distorted-face', 'negative-watermark']
    },
    notes: ''
  }
];

if (typeof window !== 'undefined') {
  window.studioPromptBuilderPresets = studioPromptBuilderPresets;
}
