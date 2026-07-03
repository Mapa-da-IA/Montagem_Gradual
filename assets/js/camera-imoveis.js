(() => {
  const sections = [
    {
      id: "prefixo",
      label: "Prefixo",
      items: [
        {
          title: "Consistência da imagem de referência",
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
          title: "Exterior médio natural",
          prompt: "Create a medium eye-level exterior shot, camera positioned at human height, natural perspective, 35mm lens, clean composition, realistic daylight, sharp architectural details."
        },
        {
          title: "Fachada em 45 graus",
          prompt: "Create a wide 45-degree exterior angle from the front corner, showing depth and volume, 24mm lens, realistic perspective, clean vertical lines, professional property photography."
        },
        {
          title: "Fachada cinematográfica baixa",
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
          title: "Fachada simétrica central",
          prompt: "Create a centered symmetrical facade shot, camera perfectly aligned with the main entrance, 35mm lens, straight vertical lines, clean balanced framing, premium architectural magazine style."
        },
        {
          title: "Vista três quartos externa",
          prompt: "Create a three-quarter exterior view, camera placed diagonally to reveal both the front and side planes, 24mm lens, natural daylight, realistic shadows, clean real estate composition."
        },
        {
          title: "Fachada ampla cinematográfica",
          prompt: "Create a front exterior shot with a subtle cinematic wide-angle perspective, 20mm lens, camera at eye level, emphasizing openness, clean framing, ultra-realistic architectural photography."
        },
        {
          title: "Exterior teleobjetiva",
          prompt: "Create a telephoto exterior shot, 70mm lens, slightly compressed perspective, clean elegant framing, premium architectural photography, realistic daylight and sharp details."
        },
        {
          title: "Detalhe arquitetônico externo",
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
          title: "Aéreo oblíquo alto",
          prompt: "Create a high oblique aerial view, drone camera angled downward at 45 degrees, showing the full property and surrounding layout, 24mm lens equivalent, realistic daylight, professional aerial real estate photography."
        },
        {
          title: "Aéreo top-down",
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
          title: "Elevação frontal aérea",
          prompt: "Create an aerial front elevation shot, drone positioned high and centered in front, camera tilted slightly downward, symmetrical framing, realistic professional property photography."
        },
        {
          title: "Drone descendente cinematográfico",
          prompt: "Create a cinematic descending drone-style view, high angle perspective, wide 24mm lens equivalent, showing architecture clearly with elegant depth and realistic lighting."
        },
        {
          title: "Orbit still de drone",
          prompt: "Create a drone orbit-style still frame, camera positioned at a dynamic diagonal angle around the property, wide architectural perspective, realistic shadows, premium aerial composition."
        },
        {
          title: "Aéreo golden hour",
          prompt: "Create a wide aerial view during golden hour, warm sunlight, long shadows, realistic highlights, clean property visibility, premium architectural photography."
        },
        {
          title: "Aéreo blue hour",
          prompt: "Create a blue-hour aerial exterior view, soft evening sky, realistic ambient lighting, balanced highlights, clean architectural detail, premium drone photography style."
        }
      ]
    },
    {
      id: "exterior-detalhes",
      label: "Área externa",
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
          title: "Circulação externa",
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
          title: "Composição vertical externa",
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
          title: "Interior médio amplo",
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
          title: "Interior espaçoso amplo",
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
          title: "Área de design refinada",
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
          title: "Composição vertical interna",
          prompt: "Create a vertical interior composition, 24mm lens, emphasizing height, walls, ceiling, lighting, and architectural lines, clean premium real estate photography."
        },
        {
          title: "Composição horizontal interna",
          prompt: "Create a horizontal wide interior composition, 20mm lens, showing spatial flow, furniture placement, and architectural depth, realistic professional photography."
        },
        {
          title: "Entrada de luz natural",
          prompt: "Create an interior shot focused on natural light entering the space, 24mm lens, realistic window light, soft shadows, clean exposure, premium architectural photography."
        },
        {
          title: "Pé-direito e espaço vertical",
          prompt: "Create an interior shot emphasizing ceiling height and vertical space, low camera position, 20mm lens, clean vertical lines, realistic lighting, professional real estate style."
        },
        {
          title: "Textura do piso e profundidade",
          prompt: "Create an interior shot emphasizing floor texture and depth, camera placed low near the floor, 24mm lens, leading lines through the room, realistic premium photography."
        },
        {
          title: "Luminárias e materiais",
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
          title: "Composição interna em camadas",
          prompt: "Create a layered interior composition, 35mm lens, showing foreground, midground, and background spaces clearly, natural depth, realistic architectural photography."
        },
        {
          title: "Open-plan diagonal amplo",
          prompt: "Create a wide open-plan interior shot, 18mm lens, camera placed diagonally to show multiple connected areas, realistic proportions, clean vertical lines, premium real estate style."
        },
        {
          title: "Corredor central simétrico",
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
          title: "Editorial arquitetônico premium",
          prompt: "Create a premium editorial architectural shot, 35mm lens, carefully composed with clean geometry, refined shadows, realistic materials, balanced negative space, magazine-quality photography."
        },
        {
          title: "Composição cinematográfica",
          prompt: "Create a cinematic architectural composition, 24mm lens, strong depth, realistic contrast, elegant shadows, premium real estate photography without exaggeration."
        },
        {
          title: "Luxo imobiliário",
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
          title: "HDR arquitetônico realista",
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
          title: "24mm arquitetônico",
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
          title: "Ângulo alto arquitetônico",
          prompt: "Create a high-angle architectural shot, camera positioned above eye level, 24mm lens, gently looking downward, showing layout and spatial organization clearly."
        },
        {
          title: "Perspectiva aérea",
          prompt: "Create an aerial architectural photography shot, drone perspective, wide composition, realistic scale, clean geometry, sharp details, premium real estate photography."
        }
      ]
    },
    {
      id: "negativo",
      label: "Negativo",
      items: [
        {
          title: "Evitar alterações irreais",
          prompt: "Do not change the architecture, do not redesign the property, do not add people, vehicles, animals, text, logos, signs, fake decorations, unrealistic furniture, distorted windows, warped walls, incorrect perspective, oversaturated colors, cartoon style, CGI look, fisheye distortion, messy composition, blurry details, or artificial-looking lighting."
        }
      ]
    }
  ];

  const fallbackImage = {
    src: "./assets/images/Imoveis/camera/fachada-06.jpeg",
    width: 1200,
    height: 670
  };

  const promptImagePath = "./assets/images/Imoveis/camera";

  const promptImageGroups = {
    "exterior-fachada": "fachada",
    "exterior-aereo": "drone",
    "exterior-detalhes": "area-externa",
    "interior-geral": "interior",
    "interior-detalhes": "detalhe-interno",
    transicoes: "transicao",
    premium: "premium",
    lentes: "lente"
  };

  const getPromptImage = (sectionId, index) => {
    const filePrefix = promptImageGroups[sectionId];

    if (!filePrefix) {
      return fallbackImage;
    }

    const fileNumber = String(index + 1).padStart(2, "0");

    return {
      src: `${promptImagePath}/${filePrefix}-${fileNumber}.jpeg`,
      width: 1200,
      height: 670
    };
  };

  const createPromptExample = (item, index, sectionId) => {
    const promptImage = getPromptImage(sectionId, index);
    const figure = document.createElement("figure");
    figure.className = "prompt-reference camera-prompt-reference";

    const image = document.createElement("img");
    image.src = promptImage.src;
    image.width = promptImage.width;
    image.height = promptImage.height;
    image.alt = `Exemplo visual para ${item.title}`;
    image.loading = "lazy";
    image.decoding = "async";

    figure.appendChild(image);
    return figure;
  };

  const promptUseDescriptions = {
    prefixo: [
      "Use antes dos outros prompts quando quiser preservar o imóvel original e evitar mudanças na arquitetura, materiais, cores e composição."
    ],
    "exterior-fachada": [
      "Ideal para apresentar a fachada completa em uma imagem limpa, equilibrada e fácil de entender em anúncios ou portfólios.",
      "Use quando quiser valorizar imponência, altura e presença visual da fachada sem perder realismo arquitetônico.",
      "Indicado para uma leitura natural do imóvel, com perspectiva humana e aparência próxima de uma foto comercial comum.",
      "Melhor para mostrar profundidade, volume e lateral da construção em uma visão mais dinâmica que a foto frontal.",
      "Use para criar uma imagem mais impactante e cinematográfica, com câmera baixa e sensação de escala premium.",
      "Indicado para revelar o layout externo de cima, mostrando melhor o jardim, caminhos, varanda e área de implantação.",
      "Melhor para mostrar a casa inteira com respiro, contexto e distância, ótimo para capa de catálogo ou anúncio imobiliário.",
      "Use quando a fachada tiver eixo central forte e você quiser uma composição alinhada, elegante e simétrica.",
      "Ideal para mostrar frente e lateral ao mesmo tempo, destacando profundidade, volumetria e arquitetura do imóvel.",
      "Use para uma fachada ampla com aparência mais cinematográfica, boa para imagem principal de apresentação.",
      "Indicado para comprimir a perspectiva e criar uma foto mais elegante, com menos distorção e foco na fachada.",
      "Melhor para destacar materiais, esquadrias, revestimentos, texturas e detalhes arquitetônicos externos.",
      "Use para gerar uma fachada com luz quente e comercial, ideal para transmitir sofisticação e fim de tarde.",
      "Indicado para cenas de entardecer com céu azul profundo e luz interna acesa, criando clima premium e acolhedor.",
      "Use para valorizar iluminação externa, arandelas, interiores iluminados e uma atmosfera noturna sofisticada.",
      "Melhor para simular clima chuvoso com piso molhado, reflexos sutis e apresentação realista em tempo fechado.",
      "Indicado para fachada com luz suave e uniforme, reduzindo sombras duras e deixando todos os detalhes visíveis.",
      "Use quando quiser conduzir o olhar do público até a casa usando caminho, piso, muro ou linhas do paisagismo.",
      "Melhor para criar profundidade com elementos em primeiro plano, deixando a imagem mais editorial e envolvente.",
      "Ideal para uma composição limpa, com poucos elementos visuais, muito respiro e foco total na arquitetura."
    ],
    "exterior-aereo": [
      "Use para mostrar o imóvel e o terreno de cima em ângulo oblíquo, destacando implantação, jardim e relação com o entorno.",
      "Ideal para visualizar telhado, caminhos, áreas externas e organização espacial como uma planta fotográfica aérea.",
      "Melhor para criar sensação de drone próximo ao telhado, valorizando fachada e cobertura sem afastar demais a câmera.",
      "Use para apresentar o imóvel dentro do bairro, terreno ou paisagem, ótimo para contexto de venda e localização.",
      "Indicado para mostrar canto, profundidade, telhado e laterais em uma composição aérea mais dinâmica.",
      "Melhor para uma vista frontal elevada e organizada, com leitura clara da fachada e do volume do imóvel.",
      "Use quando quiser simular câmera de drone descendo, com perspectiva alta e sensação cinematográfica controlada.",
      "Indicado para um still de drone em movimento orbital, criando uma visão diagonal elegante e comercial.",
      "Use para uma vista aérea com luz quente de fim de tarde, destacando sombras longas e atmosfera premium.",
      "Melhor para uma vista aérea de entardecer, com céu suave, luz ambiente equilibrada e clima sofisticado."
    ],
    "exterior-detalhes": [
      "Use para destacar porta, acesso, caminho de entrada e texturas próximas, ideal para mostrar a chegada ao imóvel.",
      "Melhor para valorizar a entrada com câmera baixa, criando profundidade e sensação de imponência no acesso.",
      "Indicado para evidenciar revestimentos, pedras, madeira, concreto, esquadrias e acabamento externo.",
      "Use para mostrar fluxo externo, caminhos, circulação, acessos e conexão entre áreas da fachada.",
      "Ideal para integrar arquitetura e paisagismo, mostrando jardim, vegetação, caminhos e implantação visual.",
      "Melhor para destacar linhas de fachada, texturas, juntas, esquadrias e detalhes de design com olhar editorial.",
      "Use quando quiser mostrar a lateral do imóvel, profundidade das paredes, aberturas e proporções arquitetônicas.",
      "Indicado para composições verticais que valorizam altura, linhas retas e elementos altos da fachada.",
      "Use para reforçar simetria, volumes, planos e geometria limpa da arquitetura externa.",
      "Melhor para criar uma foto externa com profundidade suave, usando desfoque e foco na arquitetura principal."
    ],
    "interior-geral": [
      "Use para apresentar um ambiente interno inteiro a partir do canto, mostrando amplitude, layout e circulação.",
      "Ideal para uma visão interna natural, na altura dos olhos, com aparência realista e fácil de entender.",
      "Melhor para mostrar o ambiente entrando pela porta, usando a moldura da abertura para criar profundidade.",
      "Use quando o interior tiver linhas fortes e você quiser uma perspectiva central, limpa e simétrica.",
      "Indicado para mostrar profundidade em diagonal, revelando paredes, piso, teto, móveis e circulação.",
      "Use para um enquadramento interno mais natural, sem excesso de grande-angular e com boa leitura do espaço.",
      "Melhor para mostrar distribuição de móveis e organização do ambiente a partir de uma posição levemente alta.",
      "Use para valorizar pé-direito, profundidade e presença arquitetônica com câmera próxima ao piso.",
      "Ideal para interiores claros, com luz natural, janelas valorizadas e sensação de ambiente arejado.",
      "Use para criar clima acolhedor de fim de tarde, com luz quente e atmosfera residencial confortável.",
      "Melhor para uma imagem de interiores mais editorial, com foco em equilíbrio, materiais, móveis e composição.",
      "Use para conduzir o olhar por linhas de piso, teto, móveis ou paredes, criando profundidade no ambiente.",
      "Indicado para usar objetos ou aberturas em primeiro plano como moldura, deixando a imagem mais sofisticada.",
      "Use para mostrar amplitude e circulação em ambientes grandes, com aparência profissional de anúncio imobiliário.",
      "Melhor para revelar o máximo de profundidade a partir de um canto equilibrado e visualmente aberto."
    ],
    "interior-detalhes": [
      "Use para close-ups de acabamento, superfícies e detalhes internos que precisam parecer premium e bem executados.",
      "Ideal para destacar uma área de design refinada, como bancada, painel, mobiliário ou composição decorativa.",
      "Melhor para mostrar textura de materiais internos com lente mais fechada e fundo levemente desfocado.",
      "Use para uma foto editorial de interior sem pessoas, com sensação de ambiente vivido, elegante e organizado.",
      "Indicado para valorizar altura, paredes, teto, iluminação e linhas verticais dentro do ambiente.",
      "Use para uma visão horizontal ampla do interior, mostrando fluxo, móveis e profundidade do espaço.",
      "Melhor para destacar a entrada de luz natural pelas janelas, mantendo exposição limpa e realista.",
      "Use quando quiser reforçar pé-direito, altura do ambiente e sensação de espaço vertical.",
      "Indicado para destacar piso, textura, paginação e linhas de profundidade próximas ao chão.",
      "Use para mostrar luminárias, metais, materiais e detalhes de iluminação com aparência editorial.",
      "Melhor para pequenos recortes de interiores, como mesa, poltrona, aparador ou composição de decoração.",
      "Use quando houver janelas fortes e você quiser equilibrar interior e exterior com aparência HDR natural.",
      "Indicado para interiores com luz suave e clima calmo, valorizando conforto, textura e sombras delicadas.",
      "Use para criar um interior minimalista, limpo, com poucos elementos e foco em materiais e proporções.",
      "Melhor para uma imagem interna mais dramática, com contraste, sombras controladas e aparência cinematográfica."
    ],
    transicoes: [
      "Use para mostrar a conexão entre interior e exterior a partir de dentro, valorizando vista, luz e abertura.",
      "Ideal para olhar da entrada para dentro do imóvel, revelando profundidade e continuidade dos ambientes.",
      "Melhor para corredores ou áreas de passagem com linhas fortes, criando direção visual e perspectiva.",
      "Use para enquadrar outro ambiente através de uma porta, adicionando profundidade e composição editorial.",
      "Indicado para mostrar vários planos do espaço ao mesmo tempo: primeiro plano, meio e fundo.",
      "Use para ambientes integrados, como sala, cozinha e jantar, mostrando conexão e amplitude em diagonal.",
      "Melhor para corredores centrais ou passagens simétricas, com linhas limpas e leitura organizada.",
      "Use para explicar o layout interno de cima, mostrando relação entre móveis, áreas e circulação.",
      "Indicado para criar profundidade interna a partir de câmera baixa, com linhas fortes e sensação arquitetônica.",
      "Melhor para fotografar de um canto ao outro, maximizando profundidade e clareza espacial."
    ],
    premium: [
      "Use para uma imagem com linguagem de revista, composição refinada e acabamento visual mais sofisticado.",
      "Ideal para criar uma foto cinematográfica com profundidade, contraste elegante e impacto comercial.",
      "Melhor para imóveis de alto padrão, destacando materiais, luz equilibrada e acabamento luxuoso.",
      "Use para reforçar geometria, linhas modernas, textura e estilo arquitetônico contemporâneo.",
      "Indicado para uma foto mais natural e autêntica, com perspectiva humana e aparência documental limpa.",
      "Use para imagens comerciais de alto nível, com nitidez, iluminação premium e apresentação polida.",
      "Melhor para detalhes arquitetônicos elegantes, com lente fechada, desfoque suave e foco em textura.",
      "Use para equilibrar sombras e luzes em uma imagem realista, nítida e adequada para venda imobiliária.",
      "Indicado para criar clima mais sofisticado e contrastado, sem perder o realismo da arquitetura.",
      "Melhor para anúncios claros e objetivos, com imagem limpa, neutra e fácil de vender."
    ],
    lentes: [
      "Use quando precisar mostrar um espaço muito amplo com lente ultra-wide, mantendo linhas verticais corrigidas.",
      "Ideal para uma imagem ampla e espaçosa, com grande-angular controlada e boa sensação de ambiente.",
      "Melhor como lente padrão de arquitetura, equilibrando amplitude, nitidez e proporção realista.",
      "Use para uma perspectiva mais natural, próxima do olhar humano, com composição editorial elegante.",
      "Indicado para detalhes e recortes mais fechados, com foco em textura, material e acabamento.",
      "Use para detalhes comprimidos e elegantes, com fundo suave e destaque em materiais arquitetônicos.",
      "Melhor para fotos de baixo ângulo que aumentam escala, presença e profundidade da arquitetura.",
      "Use para uma foto equilibrada na altura natural dos olhos, fácil de entender e comercialmente segura.",
      "Indicado para mostrar organização espacial a partir de um ângulo alto, sem virar uma imagem de drone.",
      "Use para transformar a cena em uma perspectiva aérea ou de drone, destacando escala e implantação."
    ],
    negativo: [
      "Use junto com qualquer prompt quando quiser impedir distorções, elementos inventados, mudanças irreais ou alterações na identidade do imóvel."
    ]
  };

  const getPromptUseDescription = (sectionId, index) => {
    const descriptions = promptUseDescriptions[sectionId] || [];
    return descriptions[index] || "Use para direcionar o enquadramento, a lente e a linguagem visual mantendo o imóvel fiel à referência.";
  };

  const createPromptMeta = (sectionId, index) => {
    const meta = document.createElement("div");
    meta.className = "prompt-meta";

    const text = document.createElement("p");
    const label = document.createElement("strong");
    label.textContent = "Melhor uso: ";

    text.appendChild(label);
    text.append(getPromptUseDescription(sectionId, index));
    meta.appendChild(text);

    return meta;
  };

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

  const createPromptCard = (item, index, label, sectionId) => {
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

    card.appendChild(createPromptExample(item, index, sectionId));
    card.appendChild(titleWrap);
    card.appendChild(createPromptMeta(sectionId, index));
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
      ...section.items.map((item, index) => createPromptCard(item, index, section.label, section.id))
    );
  });
})();
