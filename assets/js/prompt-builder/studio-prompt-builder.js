(function initStudioPromptBuilder() {
  'use strict';

  const root = document.querySelector('[data-studio-builder]');
  if (!root) return;

  const library = window.promptBuilderLibrary;
  const categories = window.promptBuilderCategories || [];
  const presets = window.studioPromptBuilderPresets || [];

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

  const quickFilters = [
    { id: 'geral', label: 'Geral' },
    { id: 'feminino', label: 'Feminino' },
    { id: 'masculino', label: 'Masculino' },
    { id: 'infantil', label: 'Infantil' },
    { id: 'casal', label: 'Casal' },
    { id: 'familia', label: 'Família', aliases: ['familia', 'família'] },
    { id: 'gestante', label: 'Gestante' },
    { id: 'corporativo', label: 'Corporativo' },
    { id: 'editorial', label: 'Editorial', aliases: ['editorial', 'fashion', 'moda', 'revista'] },
    { id: 'estudio', label: 'Estúdio', aliases: ['estudio', 'estúdio', 'studio', 'portrait', 'retrato', 'softbox'] }
  ];

  const characterLetters = ['A', 'B', 'C', 'D'];
  const presetSelectionMap = {
    pose: 'poses',
    expression: 'expressoes',
    locationShootType: 'locaisTiposDeEnsaio',
    lighting: 'iluminacao',
    framing: 'enquadramento',
    visualStyle: 'estilosVisuais',
    qualityFinish: 'qualidadeAcabamento',
    negativeRules: 'regrasNegativas'
  };

  const state = {
    characterCount: 1,
    activePresetId: null,
    searchTerm: '',
    activeFilter: 'geral',
    selected: Object.fromEntries(requiredLibraries.map((id) => [id, new Set()]))
  };

  const elements = {
    form: document.getElementById('studio-prompt-form'),
    characterFields: document.getElementById('character-fields'),
    wardrobeFields: document.getElementById('wardrobe-fields'),
    presetGrid: document.getElementById('preset-grid'),
    activePresetBar: document.getElementById('active-preset-bar'),
    activePresetLabel: document.getElementById('active-preset-label'),
    clearPresetButton: document.getElementById('clear-preset-button'),
    searchInput: document.getElementById('library-search'),
    quickFilters: document.getElementById('quick-filters'),
    tabs: document.getElementById('library-tabs'),
    libraryContent: document.getElementById('library-content'),
    mainOutput: document.getElementById('main-prompt-output'),
    negativeOutput: document.getElementById('negative-prompt-output'),
    combinedOutput: document.getElementById('combined-prompt-output'),
    mainCount: document.getElementById('main-prompt-count'),
    negativeCount: document.getElementById('negative-prompt-count'),
    combinedCount: document.getElementById('combined-prompt-count'),
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

  function normalizeText(value) {
    return String(value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
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

  function renderPresets() {
    if (!elements.presetGrid) return;
    elements.presetGrid.innerHTML = '';

    if (!presets.length) {
      elements.presetGrid.innerHTML = '<p class="panel-note">Nenhum preset local foi encontrado.</p>';
      return;
    }

    presets.forEach((preset) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'preset-card';
      card.dataset.presetId = preset.id;
      card.setAttribute('aria-pressed', 'false');

      const tags = (preset.recommendedFor || []).slice(0, 4);
      card.innerHTML = `
        <span class="preset-title">${escapeHtml(preset.label)}</span>
        <span class="preset-description">${escapeHtml(preset.description)}</span>
        <span class="option-tags">
          ${tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
        </span>
      `;

      card.addEventListener('click', () => applyPreset(preset.id));
      elements.presetGrid.appendChild(card);
    });
  }

  function renderQuickFilters() {
    if (!elements.quickFilters) return;
    elements.quickFilters.innerHTML = '';

    quickFilters.forEach((filter) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'filter-button';
      button.dataset.filterId = filter.id;
      button.setAttribute('aria-pressed', String(filter.id === state.activeFilter));
      button.textContent = filter.label;
      button.addEventListener('click', () => {
        state.activeFilter = filter.id;
        syncQuickFilterButtons();
        applyLibraryFilters();
      });
      elements.quickFilters.appendChild(button);
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
          <span>${getCategoryLabel(config.id)} · <span data-visible-count="${config.id}">${sortedItems.length}</span> de ${sortedItems.length} itens</span>
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
        panel.querySelector('.library-meta span').insertAdjacentHTML('beforeend', ' · todos disponíveis');
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
    card.dataset.searchText = normalizeText(textForSearch(item));
    card.dataset.filterText = normalizeText([
      item.category,
      item.label,
      item.description,
      ...(item.tags || []),
      ...(item.recommendedFor || [])
    ].join(' '));
    card.dataset.studioRecommended = String(featured);
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

  function syncQuickFilterButtons() {
    if (!elements.quickFilters) return;
    elements.quickFilters.querySelectorAll('[data-filter-id]').forEach((button) => {
      const isActive = button.dataset.filterId === state.activeFilter;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  }

  function matchesActiveFilter(card) {
    if (state.activeFilter === 'geral') return true;

    const filter = quickFilters.find((item) => item.id === state.activeFilter);
    const aliases = [state.activeFilter, ...(filter?.aliases || [])].map(normalizeText);
    const searchable = `${card.dataset.filterText || ''} ${card.dataset.searchText || ''}`;

    if (state.activeFilter === 'estudio' && card.dataset.studioRecommended === 'true') {
      return true;
    }

    return aliases.some((alias) => searchable.includes(alias));
  }

  function applyLibraryFilters() {
    const query = normalizeText(state.searchTerm);

    libraryConfig.forEach((config) => {
      const cards = [...document.querySelectorAll(`[data-library="${config.id}"]`)];
      let visibleCount = 0;

      cards.forEach((card) => {
        const matchesSearch = !query || (card.dataset.searchText || '').includes(query);
        const isVisible = matchesSearch && matchesActiveFilter(card);
        card.classList.toggle('is-hidden', !isVisible);
        if (isVisible) visibleCount += 1;
      });

      const counter = document.querySelector(`[data-visible-count="${config.id}"]`);
      if (counter) counter.textContent = String(visibleCount);
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

  function applyPreset(presetId) {
    const preset = presets.find((item) => item.id === presetId);
    if (!preset) return;

    Object.values(state.selected).forEach((selectedSet) => selectedSet.clear());

    Object.entries(presetSelectionMap).forEach(([presetKey, libraryId]) => {
      const rawValue = preset.selections?.[presetKey];
      const values = Array.isArray(rawValue) ? rawValue : [rawValue].filter(Boolean);
      const availableIds = new Set((library[libraryId] || []).map((item) => item.id));
      values.forEach((id) => {
        if (availableIds.has(id)) state.selected[libraryId].add(id);
      });
    });

    state.activePresetId = preset.id;
    requiredLibraries.forEach(syncSelectedCards);
    syncPresetCards();
    updatePrompts();
  }

  function clearPreset() {
    state.activePresetId = null;
    Object.values(state.selected).forEach((selectedSet) => selectedSet.clear());
    requiredLibraries.forEach(syncSelectedCards);
    syncPresetCards();
    updatePrompts();
  }

  function syncPresetCards() {
    document.querySelectorAll('[data-preset-id]').forEach((card) => {
      const isActive = card.dataset.presetId === state.activePresetId;
      card.classList.toggle('is-active', isActive);
      card.setAttribute('aria-pressed', String(isActive));
    });

    const activePreset = presets.find((preset) => preset.id === state.activePresetId);
    if (elements.activePresetBar) {
      elements.activePresetBar.hidden = !activePreset;
    }
    if (elements.activePresetLabel) {
      elements.activePresetLabel.textContent = activePreset ? `Preset ativo: ${activePreset.label}` : 'Nenhum preset ativo';
    }
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
    updatePromptCounters(result);
  }

  function updatePromptCounters(result) {
    const counters = [
      [elements.mainCount, result.mainPrompt.length],
      [elements.negativeCount, result.negativePrompt.length],
      [elements.combinedCount, result.combinedPrompt.length]
    ];

    counters.forEach(([element, count]) => {
      if (element) element.textContent = `${count.toLocaleString('pt-BR')} caracteres`;
    });
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
    state.activePresetId = null;
    state.searchTerm = '';
    state.activeFilter = 'geral';
    if (elements.searchInput) elements.searchInput.value = '';
    Object.values(state.selected).forEach((selectedSet) => selectedSet.clear());
    renderManualFields();
    requiredLibraries.forEach(syncSelectedCards);
    syncQuickFilterButtons();
    applyLibraryFilters();
    syncPresetCards();
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

    elements.searchInput?.addEventListener('input', () => {
      state.searchTerm = elements.searchInput.value;
      applyLibraryFilters();
    });

    elements.clearButton.addEventListener('click', clearForm);
    elements.clearPresetButton?.addEventListener('click', clearPreset);
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
    renderPresets();
    renderQuickFilters();
    renderTabs();
    bindEvents();
    syncPresetCards();
    applyLibraryFilters();
    updatePrompts();
  }

  window.StudioPromptBuilder = {
    applyPreset,
    clearPreset,
    buildPrompt,
    getState: () => ({
      characterCount: state.characterCount,
      activePresetId: state.activePresetId,
      selected: Object.fromEntries(Object.entries(state.selected).map(([key, value]) => [key, [...value]]))
    })
  };

  init();
})();
