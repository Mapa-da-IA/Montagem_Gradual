(() => {
  const sections = [
    {
      id: "prefixo",
      label: "Prefixo",
      items: [
        {
          title: "Consistencia da imagem de referencia",
          prompt: "Use the provided reference image as the exact architectural source. Preserve the original structure, proportions, materials, colors, doors, windows, walls, layout, furniture placement, landscaping, and overall identity. Do not redesign the property. Do not add people, cars, text, logos, signs, or unrealistic objects. Photorealistic professional architectural photography, ultra-sharp details, realistic lighting, clean composition, natural shadows, high dynamic range, premium real estate photography style."
        }
      ]
    },
    {
      id: "exterior-fachada",
      label: "Fachada",
      items: [
        {
          title: "Fachada frontal ampla",
          prompt: "Create a wide eye-level exterior establishing shot, camera positioned straight in front of the property, balanced symmetrical composition, 24mm architectural lens, clean vertical lines, realistic natural daylight, professional real estate photography."
        },
        {
          title: "Hero shot em ângulo baixo",
          prompt: "Create a slightly low-angle exterior hero shot, camera placed below eye level looking upward, emphasizing scale and presence, 24mm lens, dramatic but realistic lighting, premium architectural photography."
        },
        {
          title: "Exterior medio natural",
          prompt: "Create a medium eye-level exterior shot, camera positioned at human height, natural perspective, 35mm lens, clean composition, realistic daylight, sharp architectural details."
        },
        {
          title: "Fachada em 45 graus",
          prompt: "Create a wide 45-degree exterior angle from the front corner, showing depth and volume, 24mm lens, realistic perspective, clean vertical lines, professional property photography."
        },
        {
          title: "Fachada cinematografica baixa",
          prompt: "Create a cinematic front facade shot from a low corner angle, camera close to the ground, 20mm wide-angle lens, strong depth, elegant shadows, premium real estate look."
        },
        {
          title: "Exterior em ângulo alto",
          prompt: "Create a high-angle exterior shot from slightly above eye level, looking down gently at the property, 28mm lens, clean composition, realistic daylight, refined architectural presentation."
        },
        {
          title: "Fachada vista de longe",
          prompt: "Create a wide exterior shot from across the street or open space, 35mm lens, compressed natural perspective, showing the full facade clearly, realistic professional photography."
        },
        {
          title: "Fachada simetrica central",
          prompt: "Create a centered symmetrical facade shot, camera perfectly aligned with the main entrance, 35mm lens, straight vertical lines, clean balanced framing, premium architectural magazine style."
        },
        {
          title: "Vista tres quartos externa",
          prompt: "Create a three-quarter exterior view, camera placed diagonally to reveal both the front and side planes, 24mm lens, natural daylight, realistic shadows, clean real estate composition."
        },
        {
          title: "Fachada ampla cinematografica",
          prompt: "Create a front exterior shot with a subtle cinematic wide-angle perspective, 20mm lens, camera at eye level, emphasizing openness, clean framing, ultra-realistic architectural photography."
        },
        {
          title: "Exterior teleobjetiva",
          prompt: "Create a telephoto exterior shot, 70mm lens, slightly compressed perspective, clean elegant framing, premium architectural photography, realistic daylight and sharp details."
        },
        {
          title: "Detalhe arquitetonico externo",
          prompt: "Create a close exterior architectural detail shot, 50mm lens, focusing on textures, materials, edges, windows, walls, and design details, shallow depth of field, realistic premium photography."
        },
        {
          title: "Fachada no golden hour",
          prompt: "Create a wide exterior shot during golden hour, soft warm sunlight, long natural shadows, 24mm lens, clean facade visibility, premium real estate photography."
        },
        {
          title: "Fachada no blue hour",
          prompt: "Create a blue hour exterior shot, balanced ambient sky light, realistic warm interior glow if visible, 24mm lens, cinematic yet natural architectural photography."
        },
        {
          title: "Exterior noturno",
          prompt: "Create a nighttime exterior architectural shot, realistic artificial lighting, controlled highlights, deep shadows, clean premium composition, 35mm lens, ultra-sharp photorealistic look."
        },
        {
          title: "Exterior em dia chuvoso",
          prompt: "Create a rainy-day exterior shot, realistic wet surfaces, subtle reflections, soft overcast light, 35mm lens, clean architectural framing, premium realistic photography."
        },
        {
          title: "Exterior com luz difusa",
          prompt: "Create a bright overcast exterior shot, soft diffused light, no harsh shadows, 24mm lens, clear facade visibility, clean professional real estate photography."
        },
        {
          title: "Linhas guia externas",
          prompt: "Create an exterior shot with strong leading lines, camera positioned to use pathways, walls, edges, or landscape lines guiding the eye toward the main structure, 24mm lens, realistic composition."
        },
        {
          title: "Fachada com primeiro plano",
          prompt: "Create an exterior shot framed through foreground elements, using natural architectural depth, 35mm lens, subtle foreground blur, realistic premium property photography."
        },
        {
          title: "Exterior minimalista",
          prompt: "Create a clean minimal exterior composition, wide framing, negative space, balanced architecture, 35mm lens, refined editorial real estate photography style."
        }
      ]
    },
    {
      id: "exterior-aereo",
      label: "Drone",
      items: [
        {
          title: "Aereo obliquo alto",
          prompt: "Create a high oblique aerial view, drone camera angled downward at 45 degrees, showing the full property and surrounding layout, 24mm lens equivalent, realistic daylight, professional aerial real estate photography."
        },
        {
          title: "Aereo top-down",
          prompt: "Create a top-down aerial view, drone camera directly above, showing the property layout, roof geometry, paths, outdoor areas, and spatial organization, ultra-sharp realistic aerial photography."
        },
        {
          title: "Drone baixo acima do telhado",
          prompt: "Create a low-altitude drone exterior shot, slightly above roofline height, camera angled toward the facade, 24mm lens equivalent, cinematic but realistic architectural perspective."
        },
        {
          title: "Establishing shot de drone",
          prompt: "Create a wide drone establishing shot, high altitude, showing the property in context with its surroundings, realistic natural light, sharp details, premium real estate aerial photography."
        },
        {
          title: "Canto diagonal aéreo",
          prompt: "Create a diagonal aerial corner shot, drone positioned above one corner, showing depth, roofline, facade, and spatial layout, clean composition, realistic daylight."
        },
        {
          title: "Elevacao frontal aerea",
          prompt: "Create an aerial front elevation shot, drone positioned high and centered in front, camera tilted slightly downward, symmetrical framing, realistic professional property photography."
        },
        {
          title: "Drone descendente cinematico",
          prompt: "Create a cinematic descending drone-style view, high angle perspective, wide 24mm lens equivalent, showing architecture clearly with elegant depth and realistic lighting."
        },
        {
          title: "Orbit still de drone",
          prompt: "Create a drone orbit-style still frame, camera positioned at a dynamic diagonal angle around the property, wide architectural perspective, realistic shadows, premium aerial composition."
        },
        {
          title: "Aereo golden hour",
          prompt: "Create a wide aerial view during golden hour, warm sunlight, long shadows, realistic highlights, clean property visibility, premium architectural photography."
        },
        {
          title: "Aereo blue hour",
          prompt: "Create a blue-hour aerial exterior view, soft evening sky, realistic ambient lighting, balanced highlights, clean architectural detail, premium drone photography style."
        }
      ]
    },
    {
      id: "exterior-detalhes",
      label: "Area externa",
      items: [
        {
          title: "Entrada close-up",
          prompt: "Create a close-up entrance shot, 35mm lens, camera at eye level, focusing on the doorway, access path, textures, and architectural details, realistic natural light, premium real estate photography."
        },
        {
          title: "Entrada em ângulo baixo",
          prompt: "Create a low-angle entrance detail shot, camera near ground level looking toward the entry area, 24mm lens, strong depth, realistic shadows, clean premium composition."
        },
        {
          title: "Materiais externos",
          prompt: "Create a medium exterior detail shot of architectural materials, 50mm lens, shallow depth of field, realistic texture, natural light, refined editorial property photography."
        },
        {
          title: "Circulacao externa",
          prompt: "Create a wide exterior shot focused on the outdoor circulation area, camera at eye level, 24mm lens, showing paths, access points, landscape, and architectural flow, realistic daylight."
        },
        {
          title: "Arquitetura e paisagismo",
          prompt: "Create a landscape-integrated exterior shot, wide angle, showing the relationship between the architecture and outdoor elements, clean composition, natural shadows, professional real estate photography."
        },
        {
          title: "Texturas e linhas da fachada",
          prompt: "Create a close shot of facade textures and design lines, 70mm lens, compressed elegant perspective, ultra-sharp material detail, realistic premium architectural photography."
        },
        {
          title: "Perspectiva lateral externa",
          prompt: "Create an exterior shot from the side perspective, 35mm lens, camera at eye level, showing depth, wall planes, openings, and architectural proportions, realistic natural light."
        },
        {
          title: "Composicao vertical externa",
          prompt: "Create a clean exterior vertical composition, camera aligned with the main architectural lines, 35mm lens, straight verticals, premium editorial real estate photography."
        },
        {
          title: "Geometria externa",
          prompt: "Create a wide exterior shot emphasizing symmetry, geometry, and clean lines, 35mm lens, realistic daylight, polished architectural photography style."
        },
        {
          title: "Exterior com profundidade suave",
          prompt: "Create an exterior shot with soft foreground depth, 50mm lens, subtle blurred foreground elements, sharp architecture in focus, natural premium real estate photography."
        }
      ]
    },
    {
      id: "interior-geral",
      label: "Interior",
      items: [
        {
          title: "Interior amplo de canto",
          prompt: "Create a wide-angle interior establishing shot, camera placed in a corner, 16mm architectural lens, showing the full space, clean vertical lines, realistic natural light, premium real estate photography."
        },
        {
          title: "Interior na altura dos olhos",
          prompt: "Create an eye-level interior shot, 24mm lens, natural human perspective, balanced composition, realistic daylight, clean professional architectural photography."
        },
        {
          title: "Interior visto da porta",
          prompt: "Create a wide interior shot from the doorway, 20mm lens, using the door frame as natural composition, showing depth and layout, realistic lighting, premium real estate photography."
        },
        {
          title: "Perspectiva de um ponto",
          prompt: "Create a one-point perspective interior shot, camera centered and aligned with the main architectural lines, 24mm lens, clean symmetry, realistic light, ultra-sharp details."
        },
        {
          title: "Perspectiva de dois pontos",
          prompt: "Create a two-point perspective interior shot from a diagonal corner, 18mm lens, showing depth, layout, walls, ceiling, floor, and furniture placement clearly, professional real estate style."
        },
        {
          title: "Interior medio amplo",
          prompt: "Create a medium-wide interior shot, 28mm lens, camera at eye level, natural perspective without distortion, clean composition, realistic ambient light."
        },
        {
          title: "Interior em ângulo alto",
          prompt: "Create a high-angle interior shot from slightly above eye level, 24mm lens, looking gently downward to show layout, furniture arrangement, circulation, and spatial organization."
        },
        {
          title: "Interior hero em ângulo baixo",
          prompt: "Create a low-angle interior hero shot, camera near floor height, 20mm lens, emphasizing height, depth, ceiling lines, and architectural presence, realistic premium photography."
        },
        {
          title: "Interior com luz natural",
          prompt: "Create a bright natural-light interior shot, 20mm lens, clean wide framing, soft daylight, realistic shadows, balanced exposure, premium architectural photography."
        },
        {
          title: "Interior quente de fim de tarde",
          prompt: "Create a warm evening interior shot, realistic artificial lighting, soft shadows, balanced highlights, 24mm lens, cozy but professional real estate photography."
        },
        {
          title: "Interior editorial limpo",
          prompt: "Create a clean editorial interior composition, 35mm lens, slightly tighter framing, focusing on balance, materials, furniture, and design harmony, realistic premium photography."
        },
        {
          title: "Linhas guia internas",
          prompt: "Create an interior shot with strong leading lines, 20mm lens, camera positioned to use floor lines, ceiling lines, furniture edges, or walls guiding the eye through the space."
        },
        {
          title: "Interior com moldura frontal",
          prompt: "Create an interior shot with foreground framing, 35mm lens, subtle blurred foreground elements, sharp architectural space in focus, realistic natural light, premium editorial style."
        },
        {
          title: "Interior espacoso amplo",
          prompt: "Create a spacious wide interior shot, 16mm lens, camera at eye level, showing openness and circulation, straight vertical lines, realistic premium real estate photography."
        },
        {
          title: "Interior de canto equilibrado",
          prompt: "Create a balanced interior corner shot, 18mm lens, camera placed in the most visually open corner, showing maximum room depth while preserving realistic proportions."
        }
      ]
    },
    {
      id: "interior-detalhes",
      label: "Detalhe interno",
      items: [
        {
          title: "Close-up de acabamento",
          prompt: "Create a close-up interior detail shot, 50mm lens, focusing on materials, textures, surfaces, edges, furniture details, and architectural finishes, shallow depth of field, realistic premium photography."
        },
        {
          title: "Area de design refinada",
          prompt: "Create a medium close interior shot, 35mm lens, focusing on a refined design area, balanced composition, soft natural light, realistic textures, editorial architectural photography."
        },
        {
          title: "Texturas internas com 70mm",
          prompt: "Create a close shot of interior textures, 70mm lens, compressed perspective, sharp material detail, shallow depth of field, natural realistic lighting."
        },
        {
          title: "Lifestyle arquitetônico sem pessoas",
          prompt: "Create an interior lifestyle-style architectural shot without people, 35mm lens, natural composition, refined details, realistic light, premium magazine photography."
        },
        {
          title: "Composicao vertical interna",
          prompt: "Create a vertical interior composition, 24mm lens, emphasizing height, walls, ceiling, lighting, and architectural lines, clean premium real estate photography."
        },
        {
          title: "Composicao horizontal interna",
          prompt: "Create a horizontal wide interior composition, 20mm lens, showing spatial flow, furniture placement, and architectural depth, realistic professional photography."
        },
        {
          title: "Entrada de luz natural",
          prompt: "Create an interior shot focused on natural light entering the space, 24mm lens, realistic window light, soft shadows, clean exposure, premium architectural photography."
        },
        {
          title: "Pe direito e espaco vertical",
          prompt: "Create an interior shot emphasizing ceiling height and vertical space, low camera position, 20mm lens, clean vertical lines, realistic lighting, professional real estate style."
        },
        {
          title: "Textura do piso e profundidade",
          prompt: "Create an interior shot emphasizing floor texture and depth, camera placed low near the floor, 24mm lens, leading lines through the room, realistic premium photography."
        },
        {
          title: "Luminarias e materiais",
          prompt: "Create a clean detail shot of lighting fixtures, materials, and surrounding architecture, 50mm lens, shallow depth of field, realistic highlights, editorial real estate photography."
        },
        {
          title: "Vignette de interiores",
          prompt: "Create a refined interior vignette shot, 50mm lens, focused on a small composition of furniture, surfaces, textures, and architectural details, premium magazine-style photography."
        },
        {
          title: "Janela com HDR natural",
          prompt: "Create a realistic interior shot with balanced window exposure, 24mm lens, preserving both indoor details and exterior brightness naturally, professional HDR real estate photography."
        },
        {
          title: "Interior ambiente suave",
          prompt: "Create a soft ambient interior shot, 35mm lens, realistic warm lighting, gentle shadows, clean composition, premium architectural photography."
        },
        {
          title: "Interior minimalista limpo",
          prompt: "Create a clean minimalist interior shot, 35mm lens, simple balanced framing, negative space, refined materials, realistic daylight, editorial real estate style."
        },
        {
          title: "Interior dramático arquitetônico",
          prompt: "Create a dramatic interior architectural shot, 24mm lens, controlled contrast, realistic shadows, strong depth, premium cinematic real estate photography."
        }
      ]
    },
    {
      id: "transicoes",
      label: "Transição",
      items: [
        {
          title: "Interior olhando para fora",
          prompt: "Create an interior-to-exterior transition shot, camera placed inside looking outward, 24mm lens, balanced exposure, realistic daylight, showing architectural connection and spatial depth."
        },
        {
          title: "Exterior olhando para dentro",
          prompt: "Create an exterior-to-interior transition shot, camera placed near the entrance looking inward, 24mm lens, natural perspective, realistic light balance, premium architectural photography."
        },
        {
          title: "Corredor com linhas guia",
          prompt: "Create a hallway or circulation perspective shot, 24mm lens, strong leading lines, centered composition, realistic light, clean real estate photography."
        },
        {
          title: "Interior emoldurado pela porta",
          prompt: "Create a doorway-framed interior shot, 35mm lens, using the doorway as a natural frame, showing depth into the next space, realistic premium photography."
        },
        {
          title: "Composicao interna em camadas",
          prompt: "Create a layered interior composition, 35mm lens, showing foreground, midground, and background spaces clearly, natural depth, realistic architectural photography."
        },
        {
          title: "Open-plan diagonal amplo",
          prompt: "Create a wide open-plan interior shot, 18mm lens, camera placed diagonally to show multiple connected areas, realistic proportions, clean vertical lines, premium real estate style."
        },
        {
          title: "Corredor central simetrico",
          prompt: "Create a centered interior corridor shot, 24mm lens, symmetrical perspective, clean lines, realistic lighting, professional architectural photography."
        },
        {
          title: "Layout interno em ângulo alto",
          prompt: "Create a high-angle open interior layout shot, 20mm lens, showing room relationships, furniture placement, and circulation flow, realistic natural light."
        },
        {
          title: "Profundidade interna baixa",
          prompt: "Create a low-angle interior depth shot, camera near floor level, 24mm lens, strong perspective lines, realistic shadows, premium architectural photography."
        },
        {
          title: "Canto a canto interno",
          prompt: "Create an interior corner-to-corner composition, 18mm lens, camera positioned to maximize depth and spatial clarity, realistic lighting, clean professional real estate photography."
        }
      ]
    },
    {
      id: "premium",
      label: "Premium",
      items: [
        {
          title: "Editorial arquitetonico premium",
          prompt: "Create a premium editorial architectural shot, 35mm lens, carefully composed with clean geometry, refined shadows, realistic materials, balanced negative space, magazine-quality photography."
        },
        {
          title: "Composicao cinematografica",
          prompt: "Create a cinematic architectural composition, 24mm lens, strong depth, realistic contrast, elegant shadows, premium real estate photography without exaggeration."
        },
        {
          title: "Luxo imobiliario",
          prompt: "Create a luxury real estate photography angle, 24mm lens, clean vertical lines, balanced light, refined materials, polished composition, ultra-realistic professional quality."
        },
        {
          title: "Arquitetura moderna",
          prompt: "Create a modern architectural photography shot, 35mm lens, emphasizing geometry, lines, symmetry, texture, and natural light, clean editorial style."
        },
        {
          title: "Documental natural",
          prompt: "Create a soft natural documentary-style architectural shot, 35mm lens, realistic human-eye perspective, clean framing, authentic daylight, professional property photography."
        },
        {
          title: "Fotografia comercial high-end",
          prompt: "Create a high-end commercial architecture photograph, 24mm lens, clean composition, premium lighting, realistic shadows, sharp material details, polished professional look."
        },
        {
          title: "Detalhe editorial elegante",
          prompt: "Create an elegant architectural detail composition, 70mm lens, shallow depth of field, focusing on textures, lines, shadows, and material quality, premium editorial style."
        },
        {
          title: "HDR arquitetonico realista",
          prompt: "Create a realistic HDR architectural photo, 24mm lens, balanced highlights and shadows, natural colors, clean vertical lines, professional real estate photography."
        },
        {
          title: "Arquitetura moody",
          prompt: "Create a moody architectural photo, 35mm lens, controlled shadows, realistic contrast, refined highlights, cinematic but natural premium property photography."
        },
        {
          title: "Listing claro e limpo",
          prompt: "Create a bright clean architectural photo, 24mm lens, natural daylight, soft shadows, clear details, neutral realistic colors, professional real estate listing style."
        }
      ]
    },
    {
      id: "lentes",
      label: "Lente",
      items: [
        {
          title: "16mm ultra-wide",
          prompt: "Create a 16mm ultra-wide architectural photo, wide interior or exterior composition, clean vertical lines, realistic perspective correction, professional real estate photography."
        },
        {
          title: "20mm wide-angle",
          prompt: "Create a 20mm wide-angle architectural photo, spacious composition, realistic proportions, balanced light, clean premium property photography."
        },
        {
          title: "24mm arquitetonico",
          prompt: "Create a 24mm architectural photography shot, natural wide perspective, sharp details, balanced composition, realistic lighting, professional real estate style."
        },
        {
          title: "35mm perspectiva natural",
          prompt: "Create a 35mm architectural photography shot, natural human perspective, clean framing, realistic depth, premium editorial real estate look."
        },
        {
          title: "50mm detalhe",
          prompt: "Create a 50mm architectural detail shot, tighter composition, shallow depth of field, realistic textures, refined shadows, premium photography style."
        },
        {
          title: "70mm detalhe comprimido",
          prompt: "Create a 70mm compressed architectural detail shot, elegant framing, sharp material focus, shallow depth of field, realistic natural light, premium editorial photography."
        },
        {
          title: "Wide em ângulo baixo",
          prompt: "Create a low-angle wide architectural shot, camera close to the ground, 20mm lens, strong depth and scale, realistic shadows, professional premium composition."
        },
        {
          title: "Altura natural dos olhos",
          prompt: "Create an eye-level architectural shot, camera at natural human height, 24mm lens, clean balanced perspective, realistic daylight, professional property photography."
        },
        {
          title: "Angulo alto arquitetonico",
          prompt: "Create a high-angle architectural shot, camera positioned above eye level, 24mm lens, gently looking downward, showing layout and spatial organization clearly."
        },
        {
          title: "Perspectiva aerea",
          prompt: "Create an aerial architectural photography shot, drone perspective, wide composition, realistic scale, clean geometry, sharp details, premium real estate photography."
        }
      ]
    },
    {
      id: "negativo",
      label: "Negativo",
      items: [
        {
          title: "Evitar alteracoes irreais",
          prompt: "Do not change the architecture, do not redesign the property, do not add people, vehicles, animals, text, logos, signs, fake decorations, unrealistic furniture, distorted windows, warped walls, incorrect perspective, oversaturated colors, cartoon style, CGI look, fisheye distortion, messy composition, blurry details, or artificial-looking lighting."
        }
      ]
    }
  ];

  const copyText = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch {
      // Continue to fallback.
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    textarea.style.pointerEvents = "none";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      return Boolean(document.execCommand("copy"));
    } catch {
      return false;
    } finally {
      textarea.remove();
    }
  };

  const createPromptCard = (item, index, label) => {
    const card = document.createElement("article");
    card.className = "prompt-box";

    const titleWrap = document.createElement("div");
    titleWrap.className = "prompt-title";

    const eyebrow = document.createElement("span");
    eyebrow.textContent = item.label || `${label} ${String(index + 1).padStart(2, "0")}`;

    const title = document.createElement("h3");
    title.textContent = item.title;

    titleWrap.appendChild(eyebrow);
    titleWrap.appendChild(title);

    const header = document.createElement("div");
    header.className = "prompt-header";

    const promptType = document.createElement("span");
    promptType.textContent = "Prompt";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "copy-button";
    button.textContent = "Copiar Prompt";
    button.dataset.defaultText = "Copiar Prompt";
    button.setAttribute("aria-label", `Copiar ${item.title}`);
    button.setAttribute("aria-live", "polite");

    header.appendChild(promptType);
    header.appendChild(button);

    const code = document.createElement("pre");
    code.className = "prompt-code";
    code.textContent = item.prompt;

    button.addEventListener("click", async () => {
      window.clearTimeout(Number(button.dataset.resetTimer || 0));

      const copied = await copyText(item.prompt);
      button.textContent = copied ? "Copiado" : "Erro";
      button.classList.toggle("is-copied", copied);
      button.classList.toggle("is-error", !copied);

      const resetTimer = window.setTimeout(() => {
        button.textContent = button.dataset.defaultText || "Copiar Prompt";
        button.classList.remove("is-copied");
        button.classList.remove("is-error");
      }, 1600);

      button.dataset.resetTimer = String(resetTimer);
    });

    card.appendChild(titleWrap);
    card.appendChild(header);
    card.appendChild(code);

    return card;
  };

  sections.forEach((section) => {
    const container = document.querySelector(`[data-prompt-section="${section.id}"]`);
    if (!container) {
      return;
    }

    container.replaceChildren(
      ...section.items.map((item, index) => createPromptCard(item, index, section.label))
    );
  });
})();
