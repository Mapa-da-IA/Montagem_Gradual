// Biblioteca profissional reutilizável do Prompt Builder para ensaios fotográficos.
// Normalizada segundo docs/prompt-builder-professional-standard.md.
// Personagens e roupas/figurino não são bibliotecas; serão campos manuais no formulário futuro.

const promptBuilderSchemaVersion = 'professional-v1';

const promptBuilderAllowedRecommendations = [
  'feminino',
  'masculino',
  'infantil',
  'casal',
  'familia',
  'gestante',
  'corporativo',
  'geral'
];

function promptBuilderSlug(value) {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') || 'item';
}

function promptBuilderItem({
  id,
  library,
  category,
  label,
  description,
  prompt,
  tags = [],
  intensity = 'medium',
  recommendedFor = ['geral'],
  notes = ''
}) {
  return {
    id,
    library,
    category,
    label,
    description,
    prompt,
    tags,
    intensity,
    recommendedFor,
    notes
  };
}

const promptBuilderProfessionalTemplates = [
  ['template-professional-one-character', 'Template para 1 personagem', 'Estrutura profissional para ensaio com um personagem manual.', ['feminino', 'masculino', 'gestante', 'corporativo', 'geral'], 'CHARACTER_B, CHARACTER_C e respectivos wardrobes podem ficar vazios.'],
  ['template-professional-two-characters', 'Template para 2 personagens', 'Estrutura profissional para ensaio com dois personagens manuais.', ['casal', 'familia', 'corporativo', 'geral'], 'CHARACTER_C e WARDROBE_C podem ficar vazios.'],
  ['template-professional-three-characters', 'Template para 3 personagens', 'Estrutura profissional para ensaio com três personagens manuais.', ['familia', 'corporativo', 'geral'], ''],
  ['template-professional-multiple-characters', 'Template para múltiplos personagens', 'Estrutura para três ou mais personagens usando CHARACTERS como bloco consolidado.', ['familia', 'corporativo', 'geral'], 'Usar CHARACTERS e WARDROBE para consolidar personagens adicionais.'],
  ['template-professional-child-session', 'Template para ensaio infantil', 'Estrutura com atenção a linguagem segura e apropriada para ensaio infantil.', ['infantil', 'familia'], 'Usar regras negativas infantis quando aplicável.'],
  ['template-professional-corporate-session', 'Template para ensaio corporativo/profissional', 'Estrutura para retratos profissionais, branding pessoal e equipe.', ['corporativo', 'feminino', 'masculino', 'geral'], ''],
  ['template-professional-maternity-session', 'Template para ensaio gestante', 'Estrutura para ensaio gestante com campos manuais de personagem e roupa.', ['gestante', 'familia', 'casal'], ''],
  ['template-professional-couple-family-session', 'Template para ensaio de casal/família', 'Estrutura para casal, família e interações afetivas.', ['casal', 'familia', 'gestante'], '']
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

function makeTemplateItem([id, label, description, recommendedFor, notes]) {
  return promptBuilderItem({
    id,
    library: 'templates',
    category: promptBuilderSlug(label),
    label,
    description,
    prompt: promptBuilderTemplateBlock,
    tags: ['template', 'prompt-builder'],
    intensity: 'medium',
    recommendedFor,
    notes
  });
}

const poseLabelsFromAudit = [
  'Pose Perfil com Braço Elevado',
  'Pose Frontal com Mãos Elevadas ao Peito',
  'Pose Contemplativa com Mãos no Rosto',
  'Pose Sentada com Joelho em Primeiro Plano',
  'Pose Três-Quartos com Mão na Cintura',
  'Pose Caminhada com Passo à Frente',
  'Pose Sobre o Ombro',
  'Pose Agachada com Corpo Inclinado',
  'Pose Sentada Lateral com Torso Torcido',
  'Pose em Pé com Braços Cruzados',
  'Pose Frontal com Objeto Próximo ao Rosto',
  'Pose Três-Quartos de Costas com Olhar Sobre o Ombro',
  'Pose Três-Quartos com Mão na Cintura (Corpo Inteiro)',
  'Three-Quarter Relaxed Stance',
  'Wall Lean',
  'Walking Candid',
  'Arms Crossed Power Pose',
  'Pose de ajuste corporal',
  'Seated Forward Lean',
  'Urban Squat',
  'Clasped Hands / Thinker Pose',
  'Studio Stool Portrait',
  'Post-Workout Pose',
  'Creator Multi-Look Portrait',
  'Couple Urban Walk',
  'Couple Side Embrace',
  'Classic Hands on Belly / Mãos moldurando a barriga',
  'Classic Side Profile / Perfil lateral classico',
  'Looking Down at Belly / Olhando para a barriga',
  'Three-Quarter Standing Pose / Pose 45 graus em pe',
  'Seated on Stool / Sentada em banco ou banqueta',
  'Reclined on Bed / Deitada ou semi-deitada',
  'Caminhada com movimento fluido',
  'Partner Behind Belly Embrace / Parceiro abracando por tras',
  'Forehead-to-Forehead Couple Pose / Testa com testa',
  'Partner Kissing Belly / Parceiro beijando a barriga',
  'Child Hugging Belly / Filho abracando a barriga',
  'Child Kissing Belly / Filho beijando a barriga',
  'Hands Heart Shape on Belly / Coração com as mãos na barriga',
  'Fabric Wrap Pose / Tecido envolvendo a barriga',
  'Sitting on Floor with Fabric / Sentada no chão com tecido',
  'Hero Maternity Portrait / Pose heroína materna'
];

const locationLabelsFromAudit = [
  'Estúdio / Editorial',
  'Floreça / Floral',
  'Black & Gold / Glamour',
  'Deusa / Mística',
  'Retrô (anos 90)',
  'Chá das Trinta',
  'Noir Prata / Festa Elegante',
  'Spotlight 20 / Prata Editorial',
  'Red Romance / Balões Vermelhos',
  'Formatura Infantil - Feminino',
  'Formatura Infantil - Masculino',
  'Formatura Adolescente - Feminino',
  'Formatura Adolescente - Masculino',
  'Formatura Adulto - Feminino',
  'Formatura Adulto - Masculino',
  'Infantil Feminino / Jardim Encantado',
  'Infantil Feminino / Circo Rosa',
  'Infantil Feminino / Branca de Neve',
  'Infantil Feminino / Jardim de Borboletas',
  'Infantil Feminino / Princesa',
  'Infantil Feminino / Magali',
  'Infantil Feminino / Sereia',
  'Infantil Masculino / Safári',
  'Infantil Masculino / Mundo Bita',
  'Infantil Masculino / Fazendinha',
  'Infantil Masculino / Bolofofos',
  'Infantil Masculino / Poderoso Chefinho',
  'Infantil Masculino / Mickey',
  'Infantil Masculino / Circo',
  'Infantil Masculino / Pequeno Príncipe',
  'Infantil Masculino / Toy Story',
  'Corporate Casual / Personal Brand',
  'Fitness / Gym Portrait',
  'Outdoor Athletic Lifestyle',
  'Resort Linen / Beach Sophisticated',
  'Home Lifestyle',
  'Coffee Shop / Creator Lifestyle',
  'Night City / Neon Mood',
  'Barbershop Portrait',
  'Beach Belly Profile / Perfil na praia',
  'Boho Field Pose / Campo boho',
  'Home Nursery Pose / No quarto do bebê'
];

const framingLabelsFromAudit = [
  'Camera 01 / Full-body eye-level portrait',
  'Camera 02 / Full-body low-angle fashion shot',
  'Camera 03 / Full-body high-angle soft portrait',
  'Camera 04 / Three-quarter body portrait',
  'Camera 05 / Medium portrait waist-up',
  'Camera 06 / Close-up beauty portrait',
  'Camera 07 / Extreme close-up face portrait',
  'Camera 08 / Profile side portrait',
  'Camera 09 / Three-quarter face angle',
  'Camera 10 / Over-the-shoulder portrait',
  'Camera 11 / Seated portrait eye-level',
  'Camera 12 / Seated low-angle portrait',
  'Camera 13 / Floor-level cinematic shot',
  'Camera 14 / Top-down portrait',
  'Camera 15 / Slight top-down close portrait',
  'Camera 16 / Wide editorial environmental framing',
  'Camera 17 / Compressed telephoto portrait',
  'Camera 18 / Natural smartphone-style portrait',
  'Camera 19 / Editorial tilted camera angle',
  'Camera 20 / Centered symmetrical portrait',
  'Camera 21 / Off-center rule-of-thirds portrait',
  'Camera 22 / Close-up with foreground blur',
  'Camera 23 / Full-body with background compression',
  'Camera 24 / Dynamic walking-style camera angle',
  'Camera 25 / Baby child low eye-level camera',
  'Camera 26 / Baby child top-down soft portrait',
  'Camera 27 / Baby child close-up portrait',
  'Camera 28 / Baby child full-body seated framing',
  'Consistencia da imagem de referencia',
  'Fachada frontal ampla',
  'Hero shot em ângulo baixo',
  'Exterior medio natural',
  'Fachada em 45 graus',
  'Fachada cinematografica baixa',
  'Exterior em ângulo alto',
  'Fachada vista de longe',
  'Fachada simetrica central',
  'Vista tres quartos externa',
  'Fachada ampla cinematografica',
  'Exterior teleobjetiva',
  'Detalhe arquitetonico externo',
  'Fachada no golden hour',
  'Fachada no blue hour',
  'Exterior noturno',
  'Exterior em dia chuvoso',
  'Exterior com luz difusa',
  'Linhas guia externas',
  'Fachada com primeiro plano',
  'Exterior minimalista',
  'Aereo obliquo alto',
  'Aereo top-down',
  'Drone baixo acima do telhado',
  'Establishing shot de drone',
  'Canto diagonal aéreo',
  'Elevacao frontal aerea',
  'Drone descendente cinematico',
  'Orbit still de drone',
  'Aereo golden hour',
  'Aereo blue hour',
  'Entrada close-up',
  'Entrada em ângulo baixo',
  'Materiais externos',
  'Circulacao externa',
  'Arquitetura e paisagismo',
  'Texturas e linhas da fachada',
  'Perspectiva lateral externa',
  'Composicao vertical externa',
  'Geometria externa',
  'Exterior com profundidade suave',
  'Interior amplo de canto',
  'Interior na altura dos olhos',
  'Interior visto da porta',
  'Perspectiva de um ponto',
  'Perspectiva de dois pontos',
  'Interior medio amplo',
  'Interior em ângulo alto',
  'Interior hero em ângulo baixo',
  'Interior com luz natural',
  'Interior quente de fim de tarde',
  'Interior editorial limpo',
  'Linhas guia internas',
  'Interior com moldura frontal',
  'Interior espacoso amplo',
  'Interior de canto equilibrado',
  'Close-up de acabamento',
  'Area de design refinada',
  'Texturas internas com 70mm',
  'Lifestyle arquitetônico sem pessoas',
  'Composicao vertical interna',
  'Composicao horizontal interna',
  'Entrada de luz natural',
  'Pe direito e espaco vertical',
  'Textura do piso e profundidade',
  'Luminarias e materiais',
  'Vignette de interiores',
  'Janela com HDR natural',
  'Interior ambiente suave',
  'Interior minimalista limpo',
  'Interior dramático arquitetônico',
  'Interior olhando para fora',
  'Exterior olhando para dentro',
  'Corredor com linhas guia',
  'Interior emoldurado pela porta',
  'Composicao interna em camadas',
  'Open-plan diagonal amplo',
  'Corredor central simetrico',
  'Layout interno em ângulo alto',
  'Profundidade interna baixa',
  'Canto a canto interno',
  'Editorial arquitetonico premium',
  'Composicao cinematografica',
  'Luxo imobiliario',
  'Arquitetura moderna',
  'Documental natural',
  'Fotografia comercial high-end',
  'Detalhe editorial elegante',
  'HDR arquitetonico realista',
  'Arquitetura moody',
  'Listing claro e limpo',
  '16mm ultra-wide',
  '20mm wide-angle',
  '24mm arquitetonico',
  '35mm perspectiva natural',
  '50mm detalhe',
  '70mm detalhe comprimido',
  'Wide em ângulo baixo',
  'Altura natural dos olhos',
  'Angulo alto arquitetonico',
  'Perspectiva aerea',
  'Over-the-Shoulder Glance',
  'Head Tilt Close-Up',
  'Dark Profile Portrait',
  'Tattoo / Detail Portrait',
  'Mirror Flash Selfie Aesthetic',
  'Detalhe sem rosto',
  'Low-Angle Hero Portrait',
  'High-Angle Soft Portrait',
  'Close da barriga com detalhe afetivo',
  'Over-the-Shoulder Partner Foreground / Parceiro desfocado',
  'Mirror Reflection Maternity / Reflexo no espelho',
  'Floral Foreground Blur / Flores desfocadas em primeiro plano',
  'Two-Shot / Plano de dois',
  'Over-the-Shoulder Shot / Plano sobre o ombro',
  'over-the-shoulder shot',
  'Dirty OTS / Over-the-Shoulder sujo',
  'Clean OTS / Over-the-Shoulder limpo',
  'Shot-Reverse-Shot Style / Plano e contraplano',
  'Profile Two-Shot / Dois personagens de perfil',
  'Symmetrical Two-Shot / Plano de dois simétrico',
  'Asymmetrical Two-Shot / Plano de dois assimétrico',
  'Intimate Close Two-Shot / Plano de dois fechado',
  'Group Shot / Plano de grupo',
  'Wide Combat Master Shot / Plano aberto de combate',
  'Cowboy Shot / Plano americano de confronto',
  'Low Angle Confrontation / Ângulo baixo',
  'High Angle Vulnerability / Ângulo alto',
  'Over-the-Shoulder Combat Shot / OTS de combate',
  'Impact Reaction Shot / Plano de reação ao impacto',
  'Handheld Close Combat / Câmera na mão próxima',
  'Lateral Tracking Combat Frame / Travelling lateral de luta',
  'Dutch Angle Combat / Plano holandês',
  'Foreground Blur Fight Shot / Luta com desfoque em primeiro plano',
  'Overhead Fight Shot / Plano de cima',
  'Silhouette Duel Shot / Duelo em silhueta',
  'Power Imbalance Fight Shot / Composição de domínio',
  'Three-Character Combat Composition / Um contra dois',
  'Rack Focus Style / Foco alternado entre personagens',
  'Deep Focus Two-Character Shot / Profundidade de campo alta',
  'Split Composition / Composição dividida',
  'Mirror / Reflection Two-Shot / Reflexo com dois personagens',
  'Prompt base',
  'Dirty over-the-shoulder'
];

function poseCategory(label) {
  if (/couple|partner|forehead|casal|parceiro/i.test(label)) return 'interacao-casal';
  if (/child|filho|famil/i.test(label)) return 'interacao-familia';
  if (/belly|barriga|maternity|gestante|materna/i.test(label)) return 'pose-gestante';
  if (/seated|sentada|sitting|stool|reclined|floor/i.test(label)) return 'pose-sentada';
  if (/walking|caminh/i.test(label)) return 'pose-em-movimento';
  if (/power|hero|heroína|arms crossed|braços cruzados/i.test(label)) return 'pose-forte';
  return 'pose-retrato';
}

function posePrompt(label) {
  if (/perfil|profile/i.test(label)) return 'side-profile pose, elongated posture, relaxed shoulders, clean body line';
  if (/mãos|hands|hand|clasped/i.test(label)) return 'natural hand placement, relaxed arms, clear gesture language';
  if (/sentada|seated|sitting|stool|reclined/i.test(label)) return 'seated pose with balanced posture, relaxed shoulders, stable body position';
  if (/walking|caminh/i.test(label)) return 'natural walking pose, subtle movement, relaxed body rhythm, candid body language';
  if (/couple|partner|forehead|parceiro|casal/i.test(label)) return 'close interaction pose, gentle physical connection, natural body proximity';
  if (/child|filho/i.test(label)) return 'affectionate family interaction pose, gentle proximity, natural connection';
  if (/belly|barriga|maternity|gestante|materna/i.test(label)) return 'maternity-focused pose, hands and posture naturally emphasizing the pregnancy shape';
  if (/wall lean/i.test(label)) return 'relaxed wall-lean pose, casual posture, natural shoulder angle';
  if (/squat|agachada/i.test(label)) return 'low crouching pose, grounded stance, confident body angle';
  if (/arms crossed|braços cruzados/i.test(label)) return 'arms-crossed pose, upright posture, confident stance';
  return 'natural portrait pose, balanced posture, relaxed body language, clear silhouette';
}

function locationCategory(label) {
  if (/infantil|crian|bita|mickey|toy|princesa|safári|circo|fazendinha|bolofofos|pequeno/i.test(label)) return 'ensaio-infantil';
  if (/corporate|formatura|adulto|adolescente/i.test(label)) return 'ensaio-profissional';
  if (/beach|praia|field|boho|nursery|bebê/i.test(label)) return 'ensaio-gestante-familia';
  if (/studio|estúdio|editorial|spotlight/i.test(label)) return 'estudio-editorial';
  if (/fitness|gym|athletic/i.test(label)) return 'lifestyle-esportivo';
  if (/coffee|home|night|barbershop|resort/i.test(label)) return 'lifestyle';
  return 'tema-cenario';
}

function locationPrompt(label) {
  if (/studio|estúdio|editorial|spotlight/i.test(label)) return 'professional studio photo shoot setting, clean controlled background, editorial atmosphere';
  if (/floral|floreça|jardim|borboletas/i.test(label)) return 'floral photo shoot setting, organic textures, soft decorative background elements';
  if (/black|gold|glamour|noir|prata|luxo/i.test(label)) return 'glamorous indoor photo shoot setting, refined decor, elegant visual atmosphere';
  if (/beach|praia/i.test(label)) return 'beach photo shoot setting, open natural environment, soft horizon and coastal atmosphere';
  if (/boho|campo|field/i.test(label)) return 'outdoor field photo shoot setting, natural textures, calm boho atmosphere';
  if (/home|casa|quarto|bebê|nursery/i.test(label)) return 'home lifestyle photo shoot setting, intimate indoor environment, warm personal atmosphere';
  if (/corporate/i.test(label)) return 'corporate portrait photo shoot setting, professional environment, clean business context';
  if (/fitness|gym|athletic/i.test(label)) return 'fitness lifestyle photo shoot setting, active environment, clean athletic context';
  if (/coffee/i.test(label)) return 'coffee shop lifestyle photo shoot setting, casual urban environment, relaxed context';
  if (/night|neon/i.test(label)) return 'night city photo shoot setting, urban lights, contemporary atmosphere';
  if (/barbershop/i.test(label)) return 'barbershop portrait setting, grooming environment, textured interior details';
  if (/formatura/i.test(label)) return 'graduation photo shoot setting, celebratory academic context, clean portrait background';
  if (/infantil|princesa|safári|circo|fazendinha|toy|mickey|bita|magali|sereia|pequeno|bolofofos|chefinho|branca/i.test(label)) return 'child themed photo shoot setting, playful set design, colorful controlled environment';
  return 'themed photo shoot setting, cohesive environment, clear visual context';
}

function framingCategory(label) {
  if (/close|detalhe|extreme|beauty/i.test(label)) return 'close-up';
  if (/full|corpo|ampla|wide|aereo|drone|establishing|exterior|fachada|interior amplo/i.test(label)) return 'plano-aberto';
  if (/low|baixo/i.test(label)) return 'angulo-baixo';
  if (/high|alto|top-down|overhead/i.test(label)) return 'angulo-alto';
  if (/profile|lateral|side/i.test(label)) return 'perfil-lateral';
  if (/over-the-shoulder|ombro|ots/i.test(label)) return 'sobre-o-ombro';
  if (/symmetrical|simetrica|central|centered/i.test(label)) return 'simetrico';
  if (/rule-of-thirds|off-center/i.test(label)) return 'regra-dos-tercos';
  return 'enquadramento-retrato';
}

function framingPrompt(label) {
  if (/close|detalhe|extreme|beauty/i.test(label)) return 'close-up framing, precise crop, clear focal point, controlled background separation';
  if (/full|corpo|full-body/i.test(label)) return 'full-body framing, complete silhouette visible, balanced headroom and floor space';
  if (/low|baixo/i.test(label)) return 'low-angle framing, stronger presence, upward perspective, stable composition';
  if (/high|alto|top-down|overhead/i.test(label)) return 'high-angle framing, softer perspective, organized composition from above';
  if (/profile|lateral|side/i.test(label)) return 'side-profile framing, clean lateral composition, clear direction';
  if (/over-the-shoulder|ombro|ots/i.test(label)) return 'over-the-shoulder framing, layered depth, clear foreground and background relationship';
  if (/wide|ampla|aereo|drone|establishing|exterior|fachada|interior/i.test(label)) return 'wide environmental framing, clear spatial context, balanced composition lines';
  if (/symmetrical|simetrica|central|centered/i.test(label)) return 'centered symmetrical framing, balanced visual weight, clean alignment';
  if (/rule-of-thirds|off-center/i.test(label)) return 'off-center rule-of-thirds composition, balanced negative space, natural visual flow';
  return 'portrait framing with clean composition, controlled perspective and clear subject placement';
}

const promptBuilderLibrary = {
  poses: poseLabelsFromAudit.map((label) => promptBuilderItem({
    id: `pose-${promptBuilderSlug(label)}`,
    library: 'poses',
    category: poseCategory(label),
    label,
    description: 'Pose normalizada a partir da biblioteca auditada.',
    prompt: posePrompt(label),
    tags: ['pose', poseCategory(label), 'legacy-normalized'],
    intensity: 'medium',
    recommendedFor: ['feminino', 'masculino', 'casal', 'familia', 'gestante', 'geral'],
    notes: 'Vem dos prompts antigos; normalizado sem personagem e sem roupa.'
  })),
  expressoes: [
    ['expression-natural-smile','sorriso-natural','Sorriso natural','Expressão espontânea, simpática e leve.','natural smile, relaxed facial muscles, authentic warmth, gentle eyes',['sorriso','natural','leve'],'soft',['feminino','masculino','casal','familia','gestante','geral']],
    ['expression-soft-smile','sorriso-leve','Sorriso leve','Sorriso discreto para retratos delicados.','soft subtle smile, calm expression, relaxed lips, friendly eyes',['sorriso','leve','delicado'],'soft',['feminino','casal','familia','gestante','corporativo','geral']],
    ['expression-serious-clean','expressao-seria','Expressão séria','Expressão neutra e elegante.','serious composed expression, neutral mouth, focused gaze, controlled emotion',['serio','editorial','neutro'],'medium',['feminino','masculino','corporativo','geral']],
    ['expression-confident-gaze','olhar-confiante','Olhar confiante','Olhar firme para retratos fortes.','confident gaze, steady eyes, composed facial expression, self-assured presence',['olhar','confiante','forte'],'strong',['feminino','masculino','corporativo','geral']],
    ['expression-delicate-gaze','olhar-delicado','Olhar delicado','Olhar suave para ensaios sensíveis.','delicate gaze, softened eyes, gentle emotion, calm facial expression',['olhar','delicado','suave'],'soft',['feminino','gestante','familia','geral']],
    ['expression-romantic-gaze','olhar-romantico','Olhar romântico','Expressão afetiva e íntima.','romantic gaze, warm eyes, tender expression, subtle emotional connection',['olhar','romantico','afeto'],'soft',['casal','gestante','familia','geral']],
    ['expression-spontaneous-gaze','olhar-espontaneo','Olhar espontâneo','Olhar natural e não posado.','spontaneous gaze, candid facial expression, natural emotion, relaxed eyes',['olhar','espontaneo','candid'],'medium',['infantil','casal','familia','geral']],
    ['expression-editorial','expressao-editorial','Expressão editorial','Expressão sofisticada para moda/revista.','editorial expression, controlled emotion, refined gaze, polished facial presence',['editorial','moda','sofisticado'],'strong',['feminino','masculino','corporativo','geral']],
    ['expression-corporate','expressao-corporativa','Expressão corporativa','Expressão profissional e acessível.','professional approachable expression, calm confidence, subtle smile, direct eye contact',['corporativo','profissional','confiante'],'medium',['corporativo','masculino','feminino','geral']],
    ['expression-child-happy','expressao-infantil-alegre','Expressão infantil alegre','Alegria natural para ensaios infantis.','joyful childlike expression, bright eyes, natural excitement, playful smile',['infantil','alegre','sorriso'],'medium',['infantil','familia']],
    ['expression-family-affection','expressao-familiar-afetiva','Expressão familiar afetiva','Emoção de carinho para família.','affectionate family expression, warm smiles, gentle eyes, natural emotional bond',['familia','afeto','caloroso'],'soft',['familia','casal','gestante']],
    ['expression-maternity-emotional','expressao-gestante-emocional','Expressão gestante emocional','Expressão terna e emotiva para gestantes.','emotional maternity expression, tender eyes, serene smile, intimate feeling',['gestante','emocional','terno'],'soft',['gestante','familia']],
    ['expression-contemplative','expressao-contemplativa','Expressão contemplativa','Clima introspectivo e elegante.','contemplative expression, distant gaze, calm introspection, subtle emotion',['contemplativo','calmo','introspectivo'],'medium',['feminino','masculino','gestante','geral']],
    ['expression-natural-laugh','riso-natural','Riso natural','Riso espontâneo e verdadeiro.','natural laugh, open joyful expression, relaxed face, authentic emotion',['riso','natural','alegre'],'medium',['infantil','casal','familia','geral']],
    ['expression-camera-gaze','olhar-para-camera','Olhar para câmera','Conexão direta com o observador.','direct gaze into the camera, clear eye contact, engaged facial expression',['olhar','camera','direto'],'medium',['feminino','masculino','corporativo','geral']],
    ['expression-off-camera-gaze','olhar-fora-da-camera','Olhar fora da câmera','Olhar natural para fora do quadro.','off-camera gaze, natural attention direction, relaxed expression, candid mood',['olhar','fora-camera','natural'],'soft',['feminino','masculino','casal','familia','geral']],
    ['expression-serene','serena','Serena','Expressão calma e tranquila.','serene expression, peaceful eyes, relaxed mouth, quiet emotional tone',['sereno','calmo','suave'],'soft',['feminino','gestante','familia','geral']],
    ['expression-playful','brincalhona','Brincalhona','Expressão divertida e leve.','playful expression, lively eyes, relaxed smile, lighthearted mood',['brincalhao','leve','divertido'],'medium',['infantil','casal','familia','geral']],
    ['expression-dramatic','dramatica','Dramática','Expressão intensa para ensaios marcantes.','dramatic expression, intense gaze, controlled tension, strong emotional presence',['dramatico','intenso','editorial'],'strong',['feminino','masculino','geral']],
    ['expression-soft-pride','orgulho-suave','Orgulho suave','Confiança sem exagero.','soft proud expression, lifted gaze, subtle confidence, relaxed facial control',['orgulho','confiante','suave'],'medium',['corporativo','gestante','geral']],
    ['expression-warm-motherly','materna-afetiva','Afeto materno','Expressão maternal e acolhedora.','warm maternal expression, gentle smile, tender eyes, protective emotional tone',['materno','afeto','gestante'],'soft',['gestante','familia']],
    ['expression-calm-business','executiva-calma','Executiva calma','Profissionalismo com serenidade.','calm executive expression, composed gaze, subtle confidence, approachable professionalism',['executivo','corporativo','calmo'],'medium',['corporativo','feminino','masculino']],
    ['expression-soft-surprise','surpresa-suave','Surpresa suave','Expressão leve de encanto.','soft surprised expression, bright eyes, slightly lifted brows, gentle wonder',['surpresa','leve','encanto'],'soft',['infantil','familia','gestante','geral']],
    ['expression-thoughtful-smile','sorriso-pensativo','Sorriso pensativo','Sorriso discreto com clima reflexivo.','thoughtful smile, calm eyes, subtle emotion, introspective warmth',['sorriso','pensativo','calmo'],'soft',['feminino','masculino','gestante','geral']],
    ['expression-elegant-neutral','neutra-elegante','Neutra elegante','Expressão neutra refinada.','elegant neutral expression, relaxed face, polished gaze, quiet sophistication',['neutro','elegante','editorial'],'medium',['feminino','masculino','corporativo','geral']],
    ['expression-loving-couple','casal-apaixonado','Casal apaixonado','Olhar afetivo para casais.','loving expression, warm eyes, tender smile, natural romantic connection',['casal','romantico','afeto'],'soft',['casal']],
    ['expression-protective-family','familia-protetora','Família protetora','Expressão acolhedora em grupo familiar.','protective family expression, gentle smiles, caring eyes, close emotional bond',['familia','protecao','afeto'],'soft',['familia','gestante']],
    ['expression-energetic-child','infantil-energia','Energia infantil','Expressão cheia de energia para crianças.','energetic playful expression, bright eyes, joyful smile, natural movement mood',['infantil','energia','alegre'],'strong',['infantil']],
    ['expression-fashion-cold','fashion-fria','Fashion fria','Expressão de moda mais fria e controlada.','cool fashion expression, controlled gaze, minimal emotion, editorial attitude',['fashion','frio','editorial'],'strong',['feminino','masculino','geral']],
    ['expression-gentle-eye-smile','sorriso-com-os-olhos','Sorriso com os olhos','Expressão delicada sem sorriso aberto.','smiling eyes, soft mouth, gentle warmth, subtle authentic emotion',['olhos','sorriso','delicado'],'soft',['feminino','casal','familia','gestante','geral']]
  ].map(([id, category, label, description, prompt, tags, intensity, recommendedFor]) => promptBuilderItem({ id, library: 'expressoes', category, label, description, prompt, tags, intensity, recommendedFor })),
  locaisTiposDeEnsaio: locationLabelsFromAudit.map((label) => promptBuilderItem({
    id: `location-${promptBuilderSlug(label)}`,
    library: 'locaisTiposDeEnsaio',
    category: locationCategory(label),
    label,
    description: 'Local ou tipo de ensaio normalizado a partir da biblioteca auditada.',
    prompt: locationPrompt(label),
    tags: ['local', locationCategory(label), 'legacy-normalized'],
    intensity: 'medium',
    recommendedFor: ['feminino', 'masculino', 'infantil', 'casal', 'familia', 'gestante', 'corporativo', 'geral'],
    notes: 'Vem dos prompts antigos; revisar temas proprietários antes de uso comercial.'
  })),
  iluminacao: [
    ['lighting-soft-natural','luz-natural-suave','Luz natural suave','Luz suave e versátil para retratos.','soft natural light, gentle shadows, even facial illumination, calm atmosphere',['natural','suave','retrato'],'soft'],
    ['lighting-golden-hour','golden-hour','Golden hour','Luz quente de fim de tarde.','golden hour light, warm directional glow, soft long shadows, natural atmosphere',['golden-hour','quente','externo'],'medium'],
    ['lighting-studio-clean','luz-de-estudio','Luz de estúdio','Iluminação controlada de estúdio.','controlled studio lighting, clean highlights, balanced shadow detail, polished setup',['estudio','controlada','limpa'],'medium'],
    ['lighting-large-softbox','softbox-grande','Softbox grande','Luz ampla e macia.','large softbox lighting, broad soft highlights, smooth shadow falloff, flattering face light',['softbox','estudio','suave'],'soft'],
    ['lighting-side-light','luz-lateral','Luz lateral','Volume e profundidade no rosto.','side lighting, gentle contrast, visible facial dimension, controlled shadow direction',['lateral','contraste','volume'],'medium'],
    ['lighting-soft-front','luz-frontal-suave','Luz frontal suave','Iluminação frontal limpa e gentil.','soft frontal light, even skin illumination, minimal harsh shadows, clean portrait look',['frontal','suave','limpa'],'soft'],
    ['lighting-cinematic','luz-cinematografica','Luz cinematográfica','Luz com atmosfera narrativa.','cinematic lighting, shaped contrast, motivated light direction, atmospheric depth',['cinematografica','atmosfera','contraste'],'strong'],
    ['lighting-backlight','backlight','Backlight','Luz de contraluz com contorno.','backlight illumination, glowing edge separation, soft halo effect, controlled exposure',['backlight','contraluz','halo'],'medium'],
    ['lighting-rim-light','rim-light','Rim light','Contorno luminoso no perfil.','rim light along the outline, clear edge separation, dark-to-light contrast, sculpted silhouette',['rim-light','contorno','separacao'],'medium'],
    ['lighting-high-key','high-key','High key','Luz clara, limpa e leve.','high key lighting, bright tonal range, soft shadows, airy clean atmosphere',['high-key','claro','leve'],'soft'],
    ['lighting-low-key','low-key','Low key','Luz escura e dramática.','low key lighting, deep shadows, controlled highlights, dramatic visual mood',['low-key','dramatico','sombras'],'strong'],
    ['lighting-dramatic','luz-dramatica','Luz dramática','Contraste forte e presença visual.','dramatic directional light, strong shadow shape, focused highlights, intense atmosphere',['dramatico','direcional','contraste'],'strong'],
    ['lighting-romantic','luz-romantica','Luz romântica','Luz suave e afetiva.','romantic soft light, warm gentle glow, delicate shadows, intimate atmosphere',['romantica','quente','suave'],'soft'],
    ['lighting-child-soft','luz-infantil-suave','Luz infantil suave','Luz leve para ensaio infantil.','soft child portrait lighting, bright gentle illumination, cheerful clean atmosphere',['infantil','suave','clara'],'soft'],
    ['lighting-corporate-clean','luz-corporativa-limpa','Luz corporativa limpa','Iluminação profissional e neutra.','clean corporate lighting, balanced frontal fill, subtle contrast, professional clarity',['corporativo','limpa','profissional'],'medium'],
    ['lighting-fashion-editorial','luz-editorial-de-moda','Luz editorial de moda','Luz marcada para moda.','fashion editorial lighting, sculpted highlights, controlled contrast, refined studio mood',['moda','editorial','estudio'],'strong'],
    ['lighting-window-soft','luz-de-janela','Luz de janela','Luz natural lateral de janela.','soft window light from one side, gentle falloff, natural indoor atmosphere',['janela','natural','lateral'],'soft'],
    ['lighting-overcast','luz-nublada','Luz nublada','Luz externa uniforme.','overcast natural light, diffused sky illumination, soft shadows, even outdoor tones',['nublado','externo','difusa'],'soft'],
    ['lighting-open-shade','sombra-aberta','Sombra aberta','Luz externa protegida e uniforme.','open shade lighting, soft ambient fill, controlled highlights, natural skin tones',['sombra-aberta','externo','suave'],'soft'],
    ['lighting-sunset-backglow','brilho-de-por-do-sol','Brilho de pôr do sol','Contraluz quente e suave.','sunset back glow, warm rim highlights, soft atmospheric flare, gentle contrast',['por-do-sol','contraluz','quente'],'medium'],
    ['lighting-butterfly','butterfly-light','Butterfly light','Luz clássica de retrato.','butterfly portrait lighting, centered key light, soft cheek shadows, refined face shape',['butterfly','retrato','classico'],'medium'],
    ['lighting-rembrandt-soft','rembrandt-suave','Rembrandt suave','Luz clássica com contraste moderado.','soft Rembrandt lighting, subtle cheek triangle, controlled shadow depth, classic portrait mood',['rembrandt','classico','contraste'],'medium'],
    ['lighting-fill-balanced','fill-balanceado','Fill balanceado','Preenchimento para suavizar sombras.','balanced fill light, softened shadow areas, preserved depth, natural contrast',['fill','balanceado','sombras'],'soft'],
    ['lighting-neon-ambient','neon-ambiente','Neon ambiente','Luz urbana colorida e moderna.','ambient neon lighting, colored edge highlights, urban night mood, controlled contrast',['neon','urbano','noite'],'strong'],
    ['lighting-practical-lamps','luzes-praticas','Luzes práticas','Luzes visíveis no ambiente.','practical lamp lighting, warm motivated sources, cozy interior atmosphere, natural falloff',['practical','interior','quente'],'medium']
  ].map(([id, category, label, description, prompt, tags, intensity]) => promptBuilderItem({ id, library: 'iluminacao', category, label, description, prompt, tags, intensity, recommendedFor: promptBuilderAllowedRecommendations })),
  enquadramento: framingLabelsFromAudit.map((label) => promptBuilderItem({
    id: `framing-${promptBuilderSlug(label)}`,
    library: 'enquadramento',
    category: framingCategory(label),
    label,
    description: 'Enquadramento normalizado a partir da biblioteca auditada.',
    prompt: framingPrompt(label),
    tags: ['enquadramento', framingCategory(label), 'legacy-normalized'],
    intensity: 'medium',
    recommendedFor: promptBuilderAllowedRecommendations,
    notes: /combat|fight|luta|duel|confronto/i.test(label) ? 'Vem dos prompts antigos e pode precisar revisão por ser mais próximo de combate/vídeo.' : 'Vem dos prompts antigos; normalizado em bloco curto.'
  })),
  estilosVisuais: [
    ['style-ultra-realistic','ultra-realista','Ultra-realista','Estética realista e detalhada.','ultra-realistic photographic style, believable textures, natural depth, lifelike visual language',['ultra-realista','realismo','foto'],'strong'],
    ['style-realistic-cinematic','realista-cinematografico','Realista cinematográfico','Realismo com atmosfera de cinema.','realistic cinematic style, narrative contrast, controlled atmosphere, photographic depth',['cinematic','realista','atmosfera'],'strong'],
    ['style-fashion-editorial','editorial-de-moda','Editorial de moda','Linguagem de editorial fashion.','fashion editorial visual style, refined posing language, polished magazine atmosphere',['moda','editorial','revista'],'strong'],
    ['style-lifestyle','lifestyle','Lifestyle','Natural, cotidiano e espontâneo.','lifestyle photography style, natural context, candid mood, relaxed visual storytelling',['lifestyle','natural','candid'],'medium'],
    ['style-premium-luxury','premium-luxo','Premium / luxo','Visual sofisticado e elegante.','premium luxury visual style, refined atmosphere, elegant tonal palette, sophisticated presentation',['luxo','premium','elegante'],'strong'],
    ['style-clean-minimal','clean-minimalista','Clean / minimalista','Visual limpo e reduzido.','clean minimalist visual style, simple background, restrained details, elegant negative space',['clean','minimalista','simples'],'soft'],
    ['style-dark-cinematic','dark-cinematic','Dark cinematic','Clima escuro e intenso.','dark cinematic visual style, deep tones, dramatic contrast, moody atmosphere',['dark','cinematic','dramatico'],'strong'],
    ['style-romantic','romantico','Romântico','Visual suave e afetivo.','romantic visual style, soft atmosphere, warm emotional tone, delicate visual rhythm',['romantico','suave','afeto'],'soft'],
    ['style-delicate','delicado','Delicado','Estética leve e sensível.','delicate visual style, soft tones, gentle contrast, refined airy feeling',['delicado','leve','suave'],'soft'],
    ['style-colorful-child','infantil-colorido','Infantil colorido','Visual alegre para ensaio infantil.','colorful child portrait style, playful palette, cheerful set mood, clean vibrant details',['infantil','colorido','alegre'],'medium'],
    ['style-corporate','corporativo','Corporativo','Visual profissional e confiável.','corporate portrait style, clean professional look, neutral tones, confident presentation',['corporativo','profissional','limpo'],'medium'],
    ['style-advertising','publicitario','Publicitário','Visual comercial com impacto.','advertising photography style, clear visual message, polished presentation, strong subject focus',['publicitario','comercial','impacto'],'strong'],
    ['style-professional-instagram','instagram-profissional','Instagram profissional','Imagem moderna para redes sociais.','professional social media portrait style, modern polish, clean composition, engaging visual appeal',['instagram','social','moderno'],'medium'],
    ['style-fashion-magazine','revista-de-moda','Revista de moda','Acabamento de capa/editorial.','fashion magazine visual style, refined editorial polish, elegant composition, premium mood',['revista','moda','editorial'],'strong'],
    ['style-natural-outdoor','ensaio-externo-natural','Ensaio externo natural','Estética orgânica para área externa.','natural outdoor photo shoot style, organic background, relaxed atmosphere, soft environmental depth',['externo','natural','organico'],'medium'],
    ['style-professional-studio','estudio-profissional','Estúdio profissional','Visual técnico de estúdio.','professional studio portrait style, controlled environment, polished lighting mood, clean background',['estudio','profissional','controlado'],'medium'],
    ['style-fine-art','fine-art','Fine art','Estética artística e refinada.','fine art portrait style, restrained composition, expressive mood, gallery-like visual finish',['fine-art','artistico','refinado'],'strong'],
    ['style-documentary','documental','Documental','Registro natural e verdadeiro.','documentary portrait style, honest atmosphere, natural interaction, unobtrusive visual approach',['documental','natural','verdadeiro'],'soft'],
    ['style-boho-natural','boho-natural','Boho natural','Visual orgânico e livre.','boho natural visual style, earthy atmosphere, soft textures, relaxed outdoor feeling',['boho','natural','terra'],'medium'],
    ['style-black-and-white','preto-e-branco','Preto e branco','Visual monocromático clássico.','black and white portrait style, tonal contrast, timeless mood, clean grayscale separation',['pb','monocromatico','classico'],'medium'],
    ['style-soft-pastel','pastel-suave','Pastel suave','Paleta clara e delicada.','soft pastel visual style, gentle colors, low contrast, airy delicate atmosphere',['pastel','suave','claro'],'soft'],
    ['style-urban-modern','urbano-moderno','Urbano moderno','Visual de cidade contemporânea.','modern urban visual style, clean city atmosphere, contemporary lines, polished street context',['urbano','moderno','cidade'],'medium'],
    ['style-warm-family','familia-calorosa','Família calorosa','Visual acolhedor para família.','warm family photography style, cozy tones, affectionate atmosphere, natural emotional warmth',['familia','caloroso','afeto'],'soft'],
    ['style-maternity-soft-editorial','gestante-editorial-suave','Gestante editorial suave','Editorial delicado para gestantes.','soft editorial maternity style, graceful atmosphere, refined tenderness, elegant visual flow',['gestante','editorial','suave'],'medium'],
    ['style-clean-beauty','beauty-clean','Beauty clean','Visual de beleza limpo.','clean beauty portrait style, polished simplicity, soft tonal control, refined facial emphasis',['beauty','clean','retrato'],'medium']
  ].map(([id, category, label, description, prompt, tags, intensity]) => promptBuilderItem({ id, library: 'estilosVisuais', category, label, description, prompt, tags, intensity, recommendedFor: promptBuilderAllowedRecommendations })),
  qualidadeAcabamento: [
    ['quality-raw-photo','raw-photo','RAW photo','Base de fotografia RAW profissional.','RAW photo look, clean sensor detail, natural tonal range, professional photographic base',['raw','fotografia','base'],'medium'],
    ['quality-ultra-sharp','ultra-sharp','Ultra sharp','Nitidez alta e controlada.','ultra sharp focus on the intended focal plane, crisp important details, controlled clarity',['nitidez','sharp','detalhe'],'strong'],
    ['quality-high-resolution','high-resolution','High resolution','Resolução alta para acabamento limpo.','high resolution image, clean fine detail, strong output clarity, compression-free finish',['resolucao','detalhe','limpo'],'strong'],
    ['quality-realistic-skin-texture','realistic-skin-texture','Textura realista da pele','Pele natural sem plástico.','realistic skin texture, preserved natural pores, subtle tonal variation, authentic skin finish',['pele','realista','natural'],'medium'],
    ['quality-natural-anatomy','natural-anatomy','Anatomia natural','Proporções humanas naturais.','natural anatomy, believable body proportions, realistic posture, physically coherent structure',['anatomia','natural','proporcao'],'strong'],
    ['quality-clean-details','clean-details','Detalhes limpos','Acabamento sem sujeira visual.','clean details, organized visual information, refined edges, artifact-resistant finish',['detalhes','limpo','acabamento'],'medium'],
    ['quality-professional-retouching','professional-retouching','Retoque profissional','Retoque refinado e natural.','professional retouching, natural skin finish, preserved texture, subtle polished result',['retoque','profissional','natural'],'medium'],
    ['quality-premium-finish','premium-finish','Acabamento premium','Resultado final sofisticado.','premium finish, refined tonal control, polished photographic result, high-end presentation',['premium','acabamento','sofisticado'],'strong'],
    ['quality-high-end-portrait','high-end-portrait','Retrato high-end','Padrão de retrato profissional.','high-end portrait quality, refined lighting response, clean subject separation, polished detail',['retrato','high-end','profissional'],'strong'],
    ['quality-realistic-facial-features','realistic-facial-features','Rosto realista','Traços faciais coerentes.','realistic facial features, natural symmetry, believable expression, clean eye detail',['rosto','realista','features'],'strong'],
    ['quality-realistic-hands','realistic-hands','Mãos realistas','Mãos naturais e bem formadas.','realistic hands, natural finger count, believable hand pose, clean hand anatomy',['maos','realista','anatomia'],'strong'],
    ['quality-balanced-composition','balanced-composition','Composição balanceada','Organização visual equilibrada.','balanced composition, clear visual hierarchy, stable subject placement, harmonious spacing',['composicao','balanceada','hierarquia'],'medium'],
    ['quality-natural-proportions','natural-proportions','Proporções naturais','Escala e corpo coerentes.','natural proportions, believable scale relationships, realistic body structure, coherent perspective',['proporcao','natural','escala'],'strong'],
    ['quality-no-artifacts','no-artifacts','Sem artefatos','Imagem limpa de falhas digitais.','artifact-free result, clean edges, stable textures, coherent AI-resistant detail',['artefatos','limpo','ia'],'strong'],
    ['quality-cinematic-color-grading','cinematic-color-grading','Color grading cinematográfico','Cor refinada e narrativa.','cinematic color grading, controlled contrast, cohesive tones, refined color separation',['color-grading','cinematic','cor'],'medium'],
    ['quality-natural-color','natural-color','Cor natural','Cores realistas e equilibradas.','natural color balance, believable skin tones, clean whites, controlled saturation',['cor','natural','pele'],'medium'],
    ['quality-detail-preservation','detail-preservation','Preservação de detalhes','Detalhes finos sem exagero.','preserved fine details, controlled texture clarity, refined natural edges',['detalhes','textura','controle'],'medium'],
    ['quality-print-ready','print-ready','Pronto para impressão','Acabamento limpo para entrega.','print-ready photographic finish, clean resolution, refined tonal transitions, stable details',['impressao','entrega','acabamento'],'strong'],
    ['quality-background-separation','background-separation','Separação limpa','Separação clara entre pessoa e fundo.','clean subject-background separation, controlled depth, clear focal priority, refined edges',['separacao','fundo','profundidade'],'medium'],
    ['quality-realistic-light-response','realistic-light-response','Resposta realista à luz','Luz coerente na pele e ambiente.','realistic light response, coherent highlights and shadows, natural material rendering',['luz','realismo','coerencia'],'medium']
  ].map(([id, category, label, description, prompt, tags, intensity]) => promptBuilderItem({ id, library: 'qualidadeAcabamento', category, label, description, prompt, tags, intensity, recommendedFor: promptBuilderAllowedRecommendations })),
  regrasNegativas: [
    ['negative-deformed-hands','maos-deformadas','Mãos deformadas','Evita mãos com deformações.','deformed hands, malformed hands, unnatural hand shape',['maos','deformacao'],'strong'],
    ['negative-extra-fingers','dedos-extras','Dedos extras','Evita dedos a mais.','extra fingers, missing fingers, fused fingers, incorrect finger count',['dedos','maos'],'strong'],
    ['negative-bad-anatomy','anatomia-ruim','Anatomia ruim','Evita falhas anatômicas gerais.','bad anatomy, broken body structure, unnatural joints, impossible posture',['anatomia','corpo'],'strong'],
    ['negative-distorted-face','rosto-distorcido','Rosto distorcido','Evita distorções faciais.','distorted face, warped facial features, asymmetrical facial errors, unnatural eyes',['rosto','distorcao'],'strong'],
    ['negative-identity-change','identidade-facial-alterada','Identidade facial alterada','Preserva identidade facial quando houver referência.','changed facial identity, inconsistent face, altered recognizable features',['identidade','rosto'],'strong'],
    ['negative-extra-people','pessoas-extras','Pessoas extras','Evita pessoas não solicitadas.','extra people, unwanted background people, duplicate subjects, additional faces',['pessoas','extras'],'strong'],
    ['negative-random-text','texto-aleatorio','Texto aleatório','Remove textos indevidos.','random text, unreadable letters, unwanted captions, fake typography',['texto','letras'],'medium'],
    ['negative-random-logo','marca-logotipo-aleatorio','Marca/logotipo aleatório','Evita marcas e logos não pedidos.','random logos, unwanted brand marks, fake labels, accidental trademarks',['logo','marca'],'medium'],
    ['negative-watermark','watermark','Watermark','Evita marca d’água.','watermark, signature, creator mark, stock photo stamp',['watermark','marca'],'medium'],
    ['negative-blurry-image','imagem-borrada','Imagem borrada','Evita falta de nitidez.','blurry image, motion smear, out-of-focus subject, soft unusable details',['borrado','nitidez'],'medium'],
    ['negative-low-quality','baixa-qualidade','Baixa qualidade','Evita aparência degradada.','low quality, low resolution, compression artifacts, noisy degraded image',['qualidade','resolucao'],'strong'],
    ['negative-unreal-proportions','proporcoes-irreais','Proporções irreais','Evita escala corporal incoerente.','unrealistic proportions, stretched limbs, oversized head, incorrect body scale',['proporcao','escala'],'strong'],
    ['negative-extra-limbs','membros-extras','Membros extras','Evita braços e pernas adicionais.','extra limbs, duplicated arms, duplicated legs, impossible body parts',['membros','corpo'],'strong'],
    ['negative-bad-crops-hands-feet','cortes-ruins-maos-pes','Cortes ruins de mãos/pés','Evita cortes desconfortáveis.','awkward cropped hands, awkward cropped feet, cut-off fingers, accidental limb crop',['corte','maos','pes'],'medium'],
    ['negative-child-safe','regra-segura-ensaio-infantil','Regra segura infantil','Mantém ensaio infantil apropriado.','inappropriate child presentation, adultized pose, unsafe context, suggestive framing',['infantil','seguro'],'strong'],
    ['negative-ai-artifacts','artefatos-de-ia','Artefatos de IA','Evita falhas típicas de IA.','AI artifacts, melted details, unstable textures, duplicated facial features',['ia','artefatos'],'strong'],
    ['negative-overprocessed','excesso-de-edicao','Excesso de edição','Evita edição artificial.','overprocessed skin, plastic texture, excessive smoothing, unnatural retouching',['edicao','pele'],'medium'],
    ['negative-messy-background','fundo-confuso','Fundo confuso','Evita distrações no fundo.','messy background, distracting objects, visual clutter, incoherent background elements',['fundo','clutter'],'medium']
  ].map(([id, category, label, description, prompt, tags, intensity]) => promptBuilderItem({ id, library: 'regrasNegativas', category, label, description, prompt, tags, intensity, recommendedFor: promptBuilderAllowedRecommendations })),
  templates: promptBuilderProfessionalTemplates.map(makeTemplateItem),
  uncategorized: [],
  outOfScope: Array.from({ length: 66 }, (_, index) => promptBuilderItem({
    id: `out-of-scope-audit-reference-${String(index + 1).padStart(2, '0')}`,
    library: 'outOfScope',
    category: 'fora-do-escopo',
    label: `Referência fora do escopo ${String(index + 1).padStart(2, '0')}`,
    description: 'Registro preservado como contagem histórica da auditoria.',
    prompt: 'Out-of-scope legacy prompt reference. Do not use in the photographic essay Prompt Builder without manual review.',
    tags: ['out-of-scope', 'legacy-reference'],
    intensity: 'medium',
    recommendedFor: ['geral'],
    notes: 'Representa item antigo automotivo, combate ou vídeo separado do formulário principal.'
  }))
};

if (typeof window !== 'undefined') {
  window.promptBuilderSchemaVersion = promptBuilderSchemaVersion;
  window.promptBuilderLibrary = promptBuilderLibrary;
}
