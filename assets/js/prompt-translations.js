(() => {
  const TRANSLATION_API = "https://translate.googleapis.com/translate_a/single";
  const CACHE_PREFIX = "prompt-translation-pt-br:";
  const PROMPT_SELECTOR = ".prompt-code, #main-prompt-output";
  const READY_ATTR = "data-translation-ready";

  const style = document.createElement("style");
  style.textContent = `
    .translation-toggle {
      margin: 12px 18px 0;
      min-height: 36px;
      align-self: flex-start;
      border: 1px solid transparent;
      border-radius: 8px;
      padding: 9px 12px;
      color: #06111a;
      background: #9cff6a;
      font: 700 0.78rem/1 "Be Vietnam Pro", sans-serif;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      cursor: pointer;
      transition: transform 150ms ease, background 150ms ease;
    }

    .translation-toggle:hover {
      transform: translateY(-1px);
    }

    .translation-toggle:focus-visible {
      outline: 3px solid rgba(78, 197, 255, 0.35);
      outline-offset: 3px;
    }

    .prompt-actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 8px;
      margin-left: auto;
    }

    .prompt-header .translation-toggle {
      margin: 0;
      align-self: center;
    }

    .prompt-translation {
      margin-top: 12px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .prompt-translation-label {
      display: block;
      padding: 14px 18px;
      color: #9cff6a;
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .prompt-translation-code {
      max-height: 360px;
    }

    @media (max-width: 760px) {
      .translation-toggle {
        min-height: 44px;
      }
    }
  `;
  document.head.appendChild(style);

  const normalizeText = (value) => value.replace(/\s+/g, " ").trim();

  const hashText = (value) => {
    let hash = 0;
    for (let index = 0; index < value.length; index += 1) {
      hash = Math.imul(31, hash) + value.charCodeAt(index) | 0;
    }
    return String(hash);
  };

  const isLikelyEnglish = (text) => {
    const normalized = ` ${text.toLowerCase()} `;
    const englishHits = [
      " the ",
      " and ",
      " with ",
      " while ",
      " preserve ",
      " preserving ",
      " create ",
      " enhance ",
      " improve ",
      " camera ",
      " subject ",
      " image ",
      " lighting ",
      " composition ",
      " realistic "
    ].filter((word) => normalized.includes(word)).length;

    const portugueseHits = [
      " criar ",
      " crie ",
      " usando ",
      " preservar ",
      " mantenha ",
      " imagem ",
      " câmera ",
      " iluminação ",
      " personagem ",
      " imóvel "
    ].filter((word) => normalized.includes(word)).length;

    return englishHits >= 2 && englishHits > portugueseHits;
  };

  const isNegativePrompt = (node) => {
    if (node.id === "negative-prompt-output" || node.id === "combined-prompt-output") {
      return true;
    }

    const header = node.previousElementSibling;
    const label = header && header.classList.contains("prompt-header")
      ? header.textContent.toLowerCase()
      : "";

    const text = node instanceof HTMLTextAreaElement ? node.value : node.textContent;

    return label.includes("negative") || label.includes("negativo") || text.toLowerCase().startsWith("low quality,");
  };

  const splitForTranslation = (text) => {
    const paragraphs = text.split(/\n{2,}/);
    const chunks = [];

    paragraphs.forEach((paragraph) => {
      if (paragraph.length <= 1400) {
        chunks.push(paragraph);
        return;
      }

      const sentences = paragraph.match(/[^.!?]+[.!?]+|\S.+$/g) || [paragraph];
      let current = "";

      sentences.forEach((sentence) => {
        if ((current + sentence).length > 1400 && current) {
          chunks.push(current.trim());
          current = sentence;
        } else {
          current += sentence;
        }
      });

      if (current.trim()) {
        chunks.push(current.trim());
      }
    });

    return chunks;
  };

  const translateChunk = async (text) => {
    const params = new URLSearchParams({
      client: "gtx",
      sl: "en",
      tl: "pt",
      dt: "t",
      q: text
    });
    const response = await fetch(`${TRANSLATION_API}?${params.toString()}`);

    if (!response.ok) {
      throw new Error("translation-request-failed");
    }

    const data = await response.json();
    return Array.isArray(data[0]) ? data[0].map((part) => part[0]).join("") : "";
  };

  const translateText = async (text) => {
    const cacheKey = `${CACHE_PREFIX}${hashText(text)}`;
    const cached = window.localStorage.getItem(cacheKey);

    if (cached) {
      return cached;
    }

    const translated = (await Promise.all(splitForTranslation(text).map(translateChunk))).join("\n\n");
    window.localStorage.setItem(cacheKey, translated);
    return translated;
  };

  const createTranslationBlock = () => {
    const block = document.createElement("div");
    block.className = "prompt-translation";
    block.hidden = true;

    const label = document.createElement("span");
    label.className = "prompt-translation-label";
    label.textContent = "Tradução em português do Brasil";

    const code = document.createElement("pre");
    code.className = "prompt-code prompt-translation-code";

    block.append(label, code);
    return { block, code };
  };

  const addTranslationButton = (node) => {
    if (node.getAttribute(READY_ATTR) === "true" || node.classList.contains("prompt-translation-code")) {
      return;
    }

    if (
      node.nextElementSibling &&
      (
        node.nextElementSibling.classList.contains("translation-toggle") ||
        node.nextElementSibling.classList.contains("prompt-translation")
      )
    ) {
      node.setAttribute(READY_ATTR, "true");
      return;
    }

    const initialText = node instanceof HTMLTextAreaElement ? node.value.trim() : node.textContent.trim();
    const isDynamicTextarea = node instanceof HTMLTextAreaElement;

    if (!isDynamicTextarea && (!initialText || isNegativePrompt(node) || !isLikelyEnglish(initialText))) {
      node.setAttribute(READY_ATTR, "skipped");
      return;
    }

    if (isDynamicTextarea && isNegativePrompt(node)) {
      node.setAttribute(READY_ATTR, "skipped");
      return;
    }

    node.setAttribute(READY_ATTR, "true");

    const button = document.createElement("button");
    button.className = "translation-toggle";
    button.type = "button";
    button.textContent = "Mostrar tradução";
    button.setAttribute("aria-expanded", "false");

    const { block, code } = createTranslationBlock();

    button.addEventListener("click", async () => {
      const shouldShow = block.hidden;
      block.hidden = !shouldShow;
      button.setAttribute("aria-expanded", String(shouldShow));
      button.textContent = shouldShow ? "Ocultar tradução" : "Mostrar tradução";

      if (!shouldShow || (!(node instanceof HTMLTextAreaElement) && code.dataset.loaded === "true")) {
        return;
      }

      const text = node instanceof HTMLTextAreaElement ? node.value.trim() : node.textContent.trim();

      if (!text) {
        code.textContent = "Gere um prompt primeiro para visualizar a tradução.";
        return;
      }

      if (!isLikelyEnglish(text)) {
        code.textContent = "Este prompt não parece estar em inglês ou já está em português.";
        return;
      }

      code.textContent = "Traduzindo...";

      try {
        code.textContent = await translateText(text);
        if (!(node instanceof HTMLTextAreaElement)) {
          code.dataset.loaded = "true";
        }
      } catch (error) {
        code.textContent = "Não foi possível gerar a tradução automática agora. Verifique sua conexão e tente novamente.";
      }
    });

    const header = node.previousElementSibling;

    if (header && header.classList.contains("prompt-header")) {
      let actions = header.querySelector(".prompt-actions");

      if (!actions) {
        actions = document.createElement("div");
        actions.className = "prompt-actions";
        header.querySelectorAll("button").forEach((actionButton) => {
          actions.append(actionButton);
        });
        header.append(actions);
      }

      actions.append(button);
      node.after(block);
      return;
    }

    node.after(button, block);
  };

  const scan = (root = document) => {
    root.querySelectorAll(PROMPT_SELECTOR).forEach(addTranslationButton);
  };

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) {
          return;
        }

        if (node.matches && node.matches(PROMPT_SELECTOR)) {
          addTranslationButton(node);
        }

        scan(node);
      });
    });
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      scan();
      observer.observe(document.body, { childList: true, subtree: true });
    });
  } else {
    scan();
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
