import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const dataDir = path.join(root, 'assets', 'js', 'prompt-builder');

const files = {
  library: path.join(dataDir, 'prompt-library.js'),
  categories: path.join(dataDir, 'prompt-categories.js'),
  templates: path.join(dataDir, 'prompt-templates.js')
};

const requiredLibraries = [
  'poses',
  'expressoes',
  'locaisTiposDeEnsaio',
  'iluminacao',
  'enquadramento',
  'estilosVisuais',
  'qualidadeAcabamento',
  'regrasNegativas',
  'templates',
  'uncategorized',
  'outOfScope'
];

const minimumCounts = {
  poses: 40,
  expressoes: 30,
  locaisTiposDeEnsaio: 40,
  iluminacao: 25,
  enquadramento: 50,
  estilosVisuais: 25,
  qualidadeAcabamento: 20,
  regrasNegativas: 15,
  templates: 6,
  uncategorized: 0
};

const mandatoryCategories = {
  expressoes: [
    'sorriso-natural',
    'sorriso-leve',
    'expressao-seria',
    'olhar-confiante',
    'olhar-delicado',
    'olhar-romantico',
    'olhar-espontaneo',
    'expressao-editorial',
    'expressao-corporativa',
    'expressao-infantil-alegre',
    'expressao-familiar-afetiva',
    'expressao-gestante-emocional',
    'expressao-contemplativa',
    'riso-natural',
    'olhar-para-camera',
    'olhar-fora-da-camera'
  ],
  iluminacao: [
    'luz-natural-suave',
    'golden-hour',
    'luz-de-estudio',
    'softbox-grande',
    'luz-lateral',
    'luz-frontal-suave',
    'luz-cinematografica',
    'backlight',
    'rim-light',
    'high-key',
    'low-key',
    'luz-dramatica',
    'luz-romantica',
    'luz-infantil-suave',
    'luz-corporativa-limpa',
    'luz-editorial-de-moda'
  ],
  estilosVisuais: [
    'ultra-realista',
    'realista-cinematografico',
    'editorial-de-moda',
    'lifestyle',
    'premium-luxo',
    'clean-minimalista',
    'dark-cinematic',
    'romantico',
    'delicado',
    'infantil-colorido',
    'corporativo',
    'publicitario',
    'instagram-profissional',
    'revista-de-moda',
    'ensaio-externo-natural',
    'estudio-profissional'
  ],
  qualidadeAcabamento: [
    'raw-photo',
    'ultra-sharp',
    'high-resolution',
    'realistic-skin-texture',
    'natural-anatomy',
    'clean-details',
    'professional-retouching',
    'premium-finish',
    'high-end-portrait',
    'realistic-facial-features',
    'realistic-hands',
    'balanced-composition',
    'natural-proportions',
    'no-artifacts',
    'cinematic-color-grading'
  ],
  regrasNegativas: [
    'maos-deformadas',
    'dedos-extras',
    'anatomia-ruim',
    'rosto-distorcido',
    'identidade-facial-alterada',
    'pessoas-extras',
    'texto-aleatorio',
    'marca-logotipo-aleatorio',
    'watermark',
    'imagem-borrada',
    'baixa-qualidade',
    'proporcoes-irreais',
    'membros-extras',
    'cortes-ruins-maos-pes',
    'regra-segura-ensaio-infantil'
  ]
};

const requiredTemplateIds = [
  'template-professional-one-character',
  'template-professional-two-characters',
  'template-professional-three-characters',
  'template-professional-multiple-characters',
  'template-professional-child-session',
  'template-professional-corporate-session',
  'template-professional-maternity-session',
  'template-professional-couple-family-session'
];

const officialTemplateOrder = [
  '{{QUALITY_OPENING}}',
  '{{CHARACTER_COUNT}}',
  '{{CHARACTERS}}',
  '{{WARDROBE}}',
  '{{LOCATION_SHOOT_TYPE}}',
  '{{POSE}}',
  '{{EXPRESSION}}',
  '{{LIGHTING}}',
  '{{FRAMING}}',
  '{{VISUAL_STYLE}}',
  '{{QUALITY_FINISH}}',
  '{{NEGATIVE_RULES}}'
];

const requiredTemplateVariables = [
  '{{CHARACTER_A}}',
  '{{CHARACTER_B}}',
  '{{CHARACTER_C}}',
  '{{CHARACTERS}}',
  '{{WARDROBE_A}}',
  '{{WARDROBE_B}}',
  '{{WARDROBE_C}}',
  '{{WARDROBE}}',
  '{{POSE}}',
  '{{EXPRESSION}}',
  '{{LOCATION_SHOOT_TYPE}}',
  '{{LIGHTING}}',
  '{{FRAMING}}',
  '{{VISUAL_STYLE}}',
  '{{QUALITY_FINISH}}',
  '{{NEGATIVE_RULES}}'
];

const allowedIntensity = new Set(['soft', 'medium', 'strong']);
const allowedRecommendedFor = new Set([
  'feminino',
  'masculino',
  'infantil',
  'casal',
  'familia',
  'gestante',
  'corporativo',
  'geral'
]);

const errors = [];
const warnings = [];
const manualReview = [];

function readFile(file) {
  if (!fs.existsSync(file)) {
    errors.push(`Arquivo não encontrado: ${path.relative(root, file)}`);
    return '';
  }

  return fs.readFileSync(file, 'utf8');
}

function evaluate(file, expression) {
  const code = readFile(file);
  if (!code) return null;

  try {
    return vm.runInNewContext(`${code}\n;(${expression});`, {}, {
      filename: path.relative(root, file),
      timeout: 1000
    });
  } catch (error) {
    errors.push(`Erro de sintaxe/execução em ${path.relative(root, file)}: ${error.message}`);
    return null;
  }
}

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function warn(condition, message) {
  if (!condition) warnings.push(message);
}

function review(condition, message) {
  if (!condition) manualReview.push(message);
}

function hasPortuguesePromptLeak(text) {
  return /[ãõáéíóúâêôçà]/i.test(text)
    || /\b(com|sem|para|ensaio|fotografia|retrato|luz|rosto|mãos|maos|olhar|sorriso|fundo|roupa|figurino|personagem)\b/i.test(text);
}

function hasPortugueseUiSignal(text) {
  return /[ãõáéíóúâêôçà]/i.test(text)
    || /\b(de|da|do|para|com|sem|ensaio|luz|olhar|sorriso|expressão|expressao|retrato|natural|suave|corporativo|gestante|família|familia|infantil|qualidade|acabamento|regras|negativas|template|personagem|clima|elegante|volume|profundidade|rosto|contorno|luminoso|perfil|visual|sofisticado|limpo|reduzido|escuro|intenso|paleta|clara|delicada|nitidez|alta|controlada|resultado|final|escala|corpo|coerentes|cor|cores|realistas|equilibradas|evita|dedos|remove|textos|indevidos|serena|brincalhona|afeto|materno|executiva|calma|neutra|casal|apaixonado)\b/i.test(text);
}

function hasWardrobeBlock(text) {
  return /\b(wardrobe|clothing|outfit|dress|shirt|pants|jacket|suit|gown|skirt|shoes|styling|figurino|roupa|vestido|camisa|calça|calça|sapato)\b/i.test(text);
}

function hasFixedCharacterDescription(text) {
  return /\b(beautiful woman|handsome man|pregnant woman|young woman|young man|little girl|little boy|character a|character b|specific person)\b/i.test(text);
}

function hasNegativeRule(text) {
  return /\b(deformed|malformed|extra fingers|missing fingers|bad anatomy|distorted|warped|watermark|signature|random text|unwanted|low quality|low resolution|blurry|duplicate subjects|extra people|extra limbs|adultized|unsafe|suggestive)\b/i.test(text);
}

function hasQualityFinishBlock(text) {
  return /\b(raw photo|ultra sharp|high resolution|realistic skin texture|natural anatomy|clean details|professional retouching|premium finish|high-end portrait|realistic facial features|realistic hands|artifact-free|print-ready)\b/i.test(text);
}

const library = evaluate(files.library, 'promptBuilderLibrary');
const categories = evaluate(files.categories, 'promptBuilderCategories');
const templates = evaluate(files.templates, 'promptBuilderTemplates');

if (library) {
  for (const libraryName of requiredLibraries) {
    assert(Array.isArray(library[libraryName]), `Biblioteca ausente ou inválida: ${libraryName}`);
  }

  for (const forbiddenName of ['personagens', 'characters', 'characterLibrary', 'roupas', 'wardrobe', 'clothing', 'figurino']) {
    assert(!Object.prototype.hasOwnProperty.call(library, forbiddenName), `Biblioteca proibida encontrada: ${forbiddenName}`);
  }

  const allItems = [];
  for (const libraryName of requiredLibraries) {
    const items = library[libraryName] || [];
    const minimum = minimumCounts[libraryName];
    if (typeof minimum === 'number') {
      assert(items.length >= minimum, `${libraryName} tem ${items.length} itens, mínimo esperado ${minimum}`);
    }

    for (const item of items) {
      allItems.push(item);
      assert(item.id && typeof item.id === 'string', `${libraryName}: item sem id string`);
      assert(item.library === libraryName, `${item.id}: library="${item.library}" diferente da chave "${libraryName}"`);
      assert(item.category && typeof item.category === 'string', `${item.id}: category ausente`);
      assert(item.label && typeof item.label === 'string', `${item.id}: label ausente`);
      assert(item.description && typeof item.description === 'string', `${item.id}: description ausente`);
      assert(item.prompt && typeof item.prompt === 'string', `${item.id}: prompt ausente`);
      assert(Array.isArray(item.tags), `${item.id}: tags deve ser array`);
      assert(allowedIntensity.has(item.intensity), `${item.id}: intensity inválida (${item.intensity})`);
      assert(Array.isArray(item.recommendedFor), `${item.id}: recommendedFor deve ser array`);
      for (const recommendation of item.recommendedFor || []) {
        assert(allowedRecommendedFor.has(recommendation), `${item.id}: recommendedFor inválido (${recommendation})`);
      }

      if (!['templates', 'outOfScope', 'uncategorized'].includes(libraryName)) {
        warn(item.prompt.length <= 220, `${item.id}: prompt pode estar longo demais (${item.prompt.length} caracteres)`);
      }

      if (!['templates', 'outOfScope', 'uncategorized'].includes(libraryName)) {
        assert(!hasPortuguesePromptLeak(item.prompt), `${item.id}: prompt parece conter português; prompts devem estar em inglês`);
        assert(!hasWardrobeBlock(item.prompt), `${item.id}: prompt contém termo de roupa/figurino fora de campo manual`);
        assert(!hasFixedCharacterDescription(item.prompt), `${item.id}: prompt contém descrição fixa de personagem`);
      }

      if (!['regrasNegativas', 'templates', 'outOfScope', 'uncategorized'].includes(libraryName)) {
        assert(!hasNegativeRule(item.prompt), `${item.id}: regra negativa encontrada fora de regrasNegativas`);
      }

      if (!['qualidadeAcabamento', 'templates', 'outOfScope', 'uncategorized'].includes(libraryName)) {
        assert(!hasQualityFinishBlock(item.prompt), `${item.id}: bloco de qualidade/acabamento encontrado fora de qualidadeAcabamento`);
      }

      if (!['outOfScope', 'uncategorized'].includes(libraryName)) {
        review(hasPortugueseUiSignal(item.label), `${item.id}: label pode não estar em português ou pode estar misto (${item.label})`);
        review(hasPortugueseUiSignal(item.description), `${item.id}: description pode não estar em português`);
      }

      if (!['templates', 'outOfScope', 'uncategorized'].includes(libraryName)) {
        review(!hasWardrobeBlock(item.label), `${item.id}: label herdado menciona roupa/figurino; revisar se deve aparecer no formulário (${item.label})`);
      }
    }
  }

  const ids = allItems.map((item) => item.id);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  assert(duplicateIds.length === 0, `IDs duplicados: ${[...new Set(duplicateIds)].join(', ')}`);

  for (const [libraryName, categoriesList] of Object.entries(mandatoryCategories)) {
    const existing = new Set((library[libraryName] || []).map((item) => item.category));
    for (const category of categoriesList) {
      assert(existing.has(category), `${libraryName}: categoria obrigatória ausente: ${category}`);
    }
  }

  const templateIds = new Set((library.templates || []).map((item) => item.id));
  for (const id of requiredTemplateIds) {
    assert(templateIds.has(id), `Template obrigatório ausente em prompt-library.js: ${id}`);
  }
}

if (categories && library) {
  assert(Array.isArray(categories), 'promptBuilderCategories deve ser array');
  const categoryById = new Map(categories.map((category) => [category.id, category]));

  for (const libraryName of requiredLibraries) {
    const category = categoryById.get(libraryName);
    assert(category, `Categoria ausente em prompt-categories.js: ${libraryName}`);
    if (category) {
      assert(category.count === library[libraryName].length, `${libraryName}: count em categories (${category.count}) difere da biblioteca (${library[libraryName].length})`);
    }
  }
}

if (templates) {
  assert(Array.isArray(templates), 'promptBuilderTemplates deve ser array');

  const templateIds = new Set(templates.map((template) => template.id));
  for (const id of requiredTemplateIds) {
    assert(templateIds.has(id), `Template obrigatório ausente em prompt-templates.js: ${id}`);
  }

  for (const template of templates) {
    assert(template.template && typeof template.template === 'string', `${template.id}: template ausente`);
    let lastIndex = -1;
    for (const token of officialTemplateOrder) {
      const index = template.template.indexOf(token);
      assert(index >= 0, `${template.id}: placeholder ausente ${token}`);
      assert(index > lastIndex, `${template.id}: placeholder fora da ordem oficial ${token}`);
      lastIndex = index;
    }

    for (const token of requiredTemplateVariables) {
      assert(template.template.includes(token), `${template.id}: variável obrigatória ausente ${token}`);
    }
  }
}

const counts = library
  ? Object.fromEntries(requiredLibraries.map((libraryName) => [libraryName, library[libraryName]?.length || 0]))
  : {};

console.log('Prompt Builder data validation');
console.log('Node:', process.version);
console.log('Counts:', counts);

if (warnings.length) {
  console.log('\nWarnings:');
  for (const warning of warnings) console.log(`- ${warning}`);
}

if (manualReview.length) {
  console.log('\nManual review:');
  for (const item of manualReview.slice(0, 50)) console.log(`- ${item}`);
  if (manualReview.length > 50) console.log(`- ... ${manualReview.length - 50} outros itens de revisão manual`);
}

if (errors.length) {
  console.error('\nErrors:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('\nValidation passed.');
