(() => {
  const copyButtons = document.querySelectorAll(".copy-button");

  const copyText = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (error) {
      // Fall through to the textarea fallback for browsers that expose
      // clipboard.writeText but block it outside user-trusted contexts.
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      return Boolean(document.execCommand("copy"));
    } catch (error) {
      return false;
    } finally {
      textarea.remove();
    }
  };

  const normalizeReferenceTitle = (value) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim();

  const referenceImagesByPage = {
    "takes-cinematograficos": {
      "two shot plano de dois": "Two-Shot.jpeg",
      "over the shoulder shot plano sobre o ombro": "Over-the-Shoulder Shot.jpeg",
      "over the shoulder shot": "Over-the-Shoulder Shot.jpeg",
      "dirty ots over the shoulder sujo": "Dirty OTS.jpeg",
      "clean ots over the shoulder limpo": "Clean OTS.jpeg",
      "shot reverse shot style plano e contraplano": "Shot-Reverse-Shot Style.jpeg",
      "profile two shot dois personagens de perfil": "Profile Two-Shot.jpeg",
      "symmetrical two shot plano de dois simetrico": "Symmetrical Two-Shot.jpeg",
      "asymmetrical two shot plano de dois assimetrico": "Asymmetrical Two-Shot.jpeg",
      "intimate close two shot plano de dois fechado": "Intimate Close Two-Shot.jpeg",
      "group shot plano de grupo": "Group Shot.jpeg",
      "wide combat master shot plano aberto de combate": "Wide Combat Master Shot.jpeg",
      "cowboy shot plano americano de confronto": "Cowboy Shot.jpeg",
      "low angle confrontation angulo baixo": "Low Angle Confrontation.jpeg",
      "high angle vulnerability angulo alto": "High Angle Vulnerability.jpeg",
      "over the shoulder combat shot ots de combate": "Over the Shoulder CombatShot.jpeg",
      "impact reaction shot plano de reacao ao impacto": "Impact Reaction Shot.jpeg",
      "handheld close combat camera na mao proxima": "Handheld Close Combat.jpeg",
      "lateral tracking combat frame travelling lateral de luta": "Lateral Tracking Combat Frame.jpeg",
      "dutch angle combat plano holandes": "Dutch Angle Combat.jpeg",
      "foreground blur fight shot luta com desfoque em primeiro plano": "Foreground Blur Fight Shot.jpeg",
      "overhead fight shot plano de cima": "Overhead Fight Shot.jpeg",
      "silhouette duel shot duelo em silhueta": "Silhouette Duel Shot.jpeg",
      "power imbalance fight shot composicao de dominio": "Power Imbalance Fight Shot.jpeg",
      "three character combat composition um contra dois": "Three-Character Combat Composition.jpeg",
      "rack focus style foco alternado entre personagens": "Rack Focus Style.jpeg",
      "deep focus two character shot profundidade de campo alta": "Deep Focus Two-Character Shot.jpeg",
      "split composition composicao dividida": "Split Composition.jpeg",
      "mirror reflection two shot reflexo com dois personagens": "Reflection Two-Shot.jpeg",
      "prompt base": "Two-Shot.jpeg",
      "dirty over the shoulder": "Dirty OTS.jpeg"
    }
  };

  const referenceBasesByPage = {
    "takes-cinematograficos": "./assets/images/Takes/"
  };

  const addStaticReferenceImages = () => {
    const pageKey = Object.keys(referenceImagesByPage).find((key) =>
      window.location.pathname.toLowerCase().includes(key)
    );

    if (!pageKey) {
      return;
    }

    const imagesByTitle = referenceImagesByPage[pageKey];
    const imageBase = referenceBasesByPage[pageKey] || "";

    document.querySelectorAll(".prompt-box").forEach((promptBox) => {
      if (promptBox.querySelector(".prompt-reference")) {
        return;
      }

      const title = promptBox.querySelector(".prompt-title h3");
      const imageFile = title ? imagesByTitle[normalizeReferenceTitle(title.textContent)] : "";

      if (!imageFile) {
        return;
      }

      const figure = document.createElement("figure");
      figure.className = "prompt-reference";

      const image = document.createElement("img");
      image.src = `${imageBase}${imageFile}`;
      image.alt = `Referencia visual de ${title.textContent.trim()}`;
      image.loading = "lazy";
      image.decoding = "async";

      figure.appendChild(image);
      promptBox.prepend(figure);
    });
  };

  copyButtons.forEach((button) => {
    const promptBox = button.closest(".prompt-box");
    const promptHeader = button.closest(".prompt-header");
    const promptLabel = promptHeader
      ? promptHeader.querySelector("span")
      : promptBox
        ? promptBox.querySelector(".prompt-header span, .prompt-title h3")
        : null;
    const defaultText = button.textContent.trim() || "Copiar";

    button.dataset.defaultText = defaultText;
    button.setAttribute("aria-live", "polite");

    if (promptLabel && promptLabel.textContent.trim()) {
      button.setAttribute("aria-label", `Copiar ${promptLabel.textContent.trim()}`);
    }

    button.addEventListener("click", async () => {
      const promptBox = button.closest(".prompt-box");
      const promptHeader = button.closest(".prompt-header");
      const nextPromptCode =
        promptHeader &&
        promptHeader.nextElementSibling &&
        promptHeader.nextElementSibling.classList.contains("prompt-code")
          ? promptHeader.nextElementSibling
          : null;
      const promptCode = nextPromptCode || (promptBox ? promptBox.querySelector(".prompt-code") : null);

      if (!promptCode) {
        return;
      }

      window.clearTimeout(Number(button.dataset.resetTimer || 0));

      const copied = await copyText(promptCode.textContent.trim());

      button.textContent = copied ? "Copiado" : "Erro";
      button.classList.toggle("is-copied", copied);
      button.classList.toggle("is-error", !copied);

      const resetTimer = window.setTimeout(() => {
        button.textContent = button.dataset.defaultText || defaultText;
        button.classList.remove("is-copied");
        button.classList.remove("is-error");
      }, 1600);

      button.dataset.resetTimer = String(resetTimer);
    });
  });

  addStaticReferenceImages();
})();
