(function initStudioPromptBuilder() {
  'use strict';

  const root = document.querySelector('[data-studio-builder]');
  if (!root) return;

  const library = window.promptBuilderLibrary;
  const categories = window.promptBuilderCategories || [];

  const requiredLibraries = [
    'poses',
    'expressoes',
    'locaisTiposDeEnsaio',
    'iluminacao',
    'enquadramento',
    'estilosVisuais',
    'qualidadeAcabamento',
    'regrasNegativas'
  ];

  const libraryConfig = [
    { id: 'poses', label: 'Poses', outputTitle: 'Pose', mode: 'single' },
    { id: 'expressoes', label: 'Expressões', outputTitle: 'Expression', mode: 'single' },
    { id: 'locaisTiposDeEnsaio', label: 'Local / tipo de ensaio', outputTitle: 'Photoshoot concept and location', mode: 'single' },
    { id: 'iluminacao', label: 'Iluminação', outputTitle: 'Lighting', mode: 'single' },
    { id: 'enquadramento', label: 'Enquadramento', outputTitle: 'Camera framing', mode: 'single' },
    { id: 'estilosVisuais', label: 'Estilo visual', outputTitle: 'Visual style', mode: 'single' },
    { id: 'qualidadeAcabamento', label: 'Qualidade/acabamento', outputTitle: 'Quality finish', mode: 'multiple' },
    { id: 'regrasNegativas', label: 'Regras negativas', outputTitle: 'Negative prompt', mode: 'multiple' }
  ];

  const studioTerms = [
    'estúdio',
    'studio',
    'retrato',
    'portrait',
    'profissional',
    'professional',
    'corporativo',
    'corporate',
    'editorial',
    'softbox',
    'luz de estúdio',
    'studio lighting',
    'clean',
    'minimal',
    'close-up',
    'medium',
    'full-body',
    'body',
    'high-end',
    'beauty',
    'frontal',
    'background'
  ];

  const characterLetters = ['A', 'B', 'C', 'D'];
  const state = {
    characterCount: 1,
    selected: Object.fromEntries(requiredLibraries.map((id) => [id, new Set()]))
  };

  const elements = {
    form: document.getElementById('studio-prompt-form'),
    characterFields: document.getElementById('character-fields'),
    wardrobeFields: document.getElementById('wardrobe-fields'),
    tabs: document.getElementById('library-tabs'),
    libraryContent: document.getElementById('library-content'),
    mainOutput: document.getElementById('main-prompt-output'),
    negativeOutput: document.getElementById('negative-prompt-output'),
    combinedOutput: document.getElementById('combined-prompt-output'),
    clearButton: document.getElementById('clear-form-button'),
    copyStatus: document.getElementById('copy-status')
  };

  function isBaseReady() {
    return library && requiredLibraries.every((id) => Array.isArray(library[id]));
  }

  function textForSearch(item) {
    return [
      item.id,
      item.library,
      item.category,
      item.label,
      item.description,
      item.prompt,
      ...(item.tags || []),
      ...(item.recommendedFor || [])
    ].join(' ').toLowerCase();
  }

  function isStudioRecommended(item) {
    const searchable = textForSearch(item);
    return studioTerms.some((term) => searchable.includes(term.toLowerCase()));
  }

  function sortStudioFirst(items) {
    return [...items].sort((a, b) => {
      const featuredA = Number(isStudioRecommended(a));
      const featuredB = Number(isStudioRecommended(b));
      if (featuredA !== featuredB) return featuredB - featuredA;
      return a.label.localeCompare(b.label, 'pt-BR');
    });
  }

  function getCategoryLabel(id) {
    return categories.find((category) => category.id === id)?.label || id;
  }

  function createField(container, prefix, letter, labelText) {
    const group = document.createElement('div');
    group.className = 'field-group';

    const id = `${prefix}_${letter}`;
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelText;

    const textarea = document.createElement('textarea');
    textarea.id = id;
    textarea.name = id;
    textarea.dataset.manualField = id;
    textarea.placeholder = `${id}:`;
    textarea.setAttribute('spellcheck', 'true');

    group.append(label, textarea);
    container.appendChild(group);
  }

  function renderManualFields() {
    elements.characterFields.innerHTML = '';
    elements.wardrobeFields.innerHTML = '';

    characterLetters.slice(0, state.characterCount).forEach((letter) => {
      createField(elements.characterFields, 'CHARACTER', letter, `CHARACTER_${letter}`);
      createField(elements.wardrobeFields, 'WARDROBE', letter, `WARDROBE_${letter}`);
    });
  }

  function renderTabs() {
    elements.tabs.innerHTML = '';
    elements.libraryContent.innerHTML = '';

    libraryConfig.forEach((config, index) => {
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.className = 'tab-button';
      tab.id = `tab-${config.id}`;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', `panel-${config.id}`);
      tab.setAttribute('aria-selected', String(index === 0));
      tab.textContent = config.label;
      tab.addEventListener('click', () => activateTab(config.id));
      elements.tabs.appendChild(tab);

      const panel = document.createElement('section');
      panel.className = `library-panel${index === 0 ? ' is-active' : ''}`;
      panel.id = `panel-${config.id}`;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', tab.id);

      const sortedItems = sortStudioFirst(library[config.id] || []);
      const featuredCount = sortedItems.filter(isStudioRecommended).length;
      panel.innerHTML = `
        <div class="library-meta">
          <span>${getCategoryLabel(config.id)} · ${sortedItems.length} itens</span>
          <span class="selection-count" data-selection-count="${config.id}">0 selecionado</span>
        </div>
      `;

      const grid = document.createElement('div');
      grid.className = 'card-grid';
      sortedItems.forEach((item) => {
        grid.appendChild(createOptionCard(item, config));
      });
      panel.appendChild(grid);

      if (featuredCount === 0) {
        panel.querySelector('.library-meta span').textContent += ' · todos disponíveis';
      }

      elements.libraryContent.appendChild(panel);
    });
  }

  function createOptionCard(item, config) {
    const card = document.createElement('button');
    const featured = isStudioRecommended(item);
    card.type = 'button';
    card.className = `option-card${featured ? ' is-featured' : ''}`;
    card.dataset.library = config.id;
    card.dataset.itemId = item.id;
    card.setAttribute('aria-pressed', 'false');

    const tags = [
      ...(featured ? ['estúdio'] : []),
      item.intensity,
      ...(item.recommendedFor || []).slice(0, 2)
    ].filter(Boolean);

    card.innerHTML = `
      <span class="option-title">${escapeHtml(item.label)}</span>
      <span class="option-description">${escapeHtml(item.description)}</span>
      <span class="option-tags">
        ${tags.map((tag, index) => `<span class="tag${index === 0 && featured ? ' tag-featured' : ''}">${escapeHtml(tag)}</span>`).join('')}
      </span>
    `;

    card.addEventListener('click', () => toggleSelection(item, config));
    return card;
  }

  function activateTab(id) {
    elements.tabs.querySelectorAll('[role="tab"]').forEach((tab) => {
      tab.setAttribute('aria-selected', String(tab.id === `tab-${id}`));
    });

    elements.libraryContent.querySelectorAll('[role="tabpanel"]').forEach((panel) => {
      panel.classList.toggle('is-active', panel.id === `panel-${id}`);
    });
  }

  function toggleSelection(item, config) {
    const selectedSet = state.selected[config.id];

    if (config.mode === 'single') {
      const wasSelected = selectedSet.has(item.id);
      selectedSet.clear();
      if (!wasSelected) selectedSet.add(item.id);
    } else if (selectedSet.has(item.id)) {
      selectedSet.delete(item.id);
    } else {
      selectedSet.add(item.id);
    }

    syncSelectedCards(config.id);
    updatePrompts();
  }

  function syncSelectedCards(libraryId) {
    const selectedSet = state.selected[libraryId];
    document.querySelectorAll(`[data-library="${libraryId}"]`).forEach((card) => {
      const isSelected = selectedSet.has(card.dataset.itemId);
      card.classList.toggle('is-selected', isSelected);
      card.setAttribute('aria-pressed', String(isSelected));
    });

    const count = selectedSet.size;
    const counter = document.querySelector(`[data-selection-count="${libraryId}"]`);
    if (counter) counter.textContent = `${count} selecionado${count === 1 ? '' : 's'}`;
  }

  function getSelectedItems(libraryId) {
    const selectedIds = state.selected[libraryId];
    return (library[libraryId] || []).filter((item) => selectedIds.has(item.id));
  }

  function getManualValue(id) {
    return document.getElementById(id)?.value || '';
  }

  function formatManualBlock(prefix) {
    return characterLetters
      .slice(0, state.characterCount)
      .map((letter) => `${prefix}_${letter}: ${getManualValue(`${prefix}_${letter}`)}`.trimEnd())
      .join('\n');
  }

  function formatSelectedBlock(libraryId) {
    return getSelectedItems(libraryId)
      .map((item) => item.prompt)
      .filter(Boolean)
      .join('\n');
  }

  function buildPrompt() {
    const countLabel = state.characterCount === 4 ? '4 or more characters.' : `${state.characterCount} character${state.characterCount === 1 ? '' : 's'}.`;
    const qualityOpening = 'Professional studio photography, best quality, high-end portrait.';
    const negativePrompt = formatSelectedBlock('regrasNegativas');

    const mainSections = [
      qualityOpening,
      `Character count:\n${countLabel}`,
      `Characters:\n${formatManualBlock('CHARACTER')}`,
      `Wardrobe:\n${formatManualBlock('WARDROBE')}`,
      `Photoshoot concept and location:\n${formatSelectedBlock('locaisTiposDeEnsaio')}`,
      `Pose:\n${formatSelectedBlock('poses')}`,
      `Expression:\n${formatSelectedBlock('expressoes')}`,
      `Lighting:\n${formatSelectedBlock('iluminacao')}`,
      `Camera framing:\n${formatSelectedBlock('enquadramento')}`,
      `Visual style:\n${formatSelectedBlock('estilosVisuais')}`,
      `Quality finish:\n${formatSelectedBlock('qualidadeAcabamento')}`
    ];

    const mainPrompt = mainSections.join('\n\n').trim();
    const combinedPrompt = `${mainPrompt}\n\nNegative rules:\n${negativePrompt}`.trim();

    return {
      mainPrompt,
      negativePrompt,
      combinedPrompt
    };
  }

  function updatePrompts() {
    const result = buildPrompt();
    elements.mainOutput.value = result.mainPrompt;
    elements.negativeOutput.value = result.negativePrompt;
    elements.combinedOutput.value = result.combinedPrompt;
  }

  async function copyText(target) {
    const map = {
      main: elements.mainOutput,
      negative: elements.negativeOutput,
      combined: elements.combinedOutput
    };
    const textarea = map[target];
    if (!textarea) return;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textarea.value);
      } else {
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        textarea.setSelectionRange(0, 0);
      }
      showCopyStatus('Copiado.');
    } catch (error) {
      showCopyStatus('Não foi possível copiar automaticamente.');
    }
  }

  function showCopyStatus(message) {
    elements.copyStatus.textContent = message;
    window.clearTimeout(showCopyStatus.timer);
    showCopyStatus.timer = window.setTimeout(() => {
      elements.copyStatus.textContent = '';
    }, 2200);
  }

  function clearForm() {
    elements.form.reset();
    state.characterCount = 1;
    Object.values(state.selected).forEach((selectedSet) => selectedSet.clear());
    renderManualFields();
    requiredLibraries.forEach(syncSelectedCards);
    updatePrompts();
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function bindEvents() {
    document.querySelectorAll('input[name="character-count"]').forEach((input) => {
      input.addEventListener('change', () => {
        state.characterCount = Number(input.value);
        renderManualFields();
        updatePrompts();
      });
    });

    elements.form.addEventListener('input', (event) => {
      if (event.target.matches('textarea')) updatePrompts();
    });

    document.querySelectorAll('[data-copy-target]').forEach((button) => {
      button.addEventListener('click', () => copyText(button.dataset.copyTarget));
    });

    elements.clearButton.addEventListener('click', clearForm);
  }

  function renderError() {
    root.innerHTML = `
      <section class="builder-panel">
        <div class="panel-heading">
          <span class="step-number">!</span>
          <h1>Base do Prompt Builder indisponível</h1>
        </div>
        <p class="header-summary">Verifique os arquivos locais em assets/js/prompt-builder antes de usar esta página.</p>
      </section>
    `;
  }

  function init() {
    if (!isBaseReady()) {
      renderError();
      return;
    }

    renderManualFields();
    renderTabs();
    bindEvents();
    updatePrompts();
  }

  window.StudioPromptBuilder = {
    buildPrompt,
    getState: () => ({
      characterCount: state.characterCount,
      selected: Object.fromEntries(Object.entries(state.selected).map(([key, value]) => [key, [...value]]))
    })
  };

  init();
})();
