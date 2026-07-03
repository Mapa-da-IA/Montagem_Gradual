(() => {
  const preservationLine = "Using the attached reference image as CHARACTER_A, preserve her exact identity, facial features, hairstyle, skin tone, body proportions, pregnancy shape and visual consistency.";

  const prompts = [
    {
      number: "01",
      title: "Classic Hands on Belly / Mãos moldurando a barriga",
      category: "Solo",
      tags: ["Solo", "Estudio", "Classicos"],
      description: "Pose clássica para valorizar a barriga com carinho, proteção e expectativa.",
      prompt: `${preservationLine}

Create a timeless maternity portrait of CHARACTER_A in [LOCATION]. She is standing in a relaxed three-quarter pose, one hand gently placed above the belly and the other hand below the belly, softly framing the pregnancy shape. Her spine is elongated, shoulders relaxed, chin slightly forward, with a calm maternal expression. Use [WARDROBE], soft natural or studio lighting, 85mm portrait lens look, medium-full vertical framing, shallow depth of field, elegant Brazilian maternity photography style, realistic skin texture, refined color grading, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "02",
      title: "Classic Side Profile / Perfil lateral classico",
      category: "Solo",
      tags: ["Solo", "Classicos", "Fine Art"],
      description: "Silhueta lateral essencial para mostrar a forma da gestação com serenidade.",
      prompt: `${preservationLine}

Create a classic side-profile maternity portrait of CHARACTER_A in [LOCATION]. She stands fully turned to the side, with the belly clearly visible, spine elongated, shoulders relaxed, one hand resting on the belly and the other hand softly supporting the lower back. Her expression is serene and intimate, looking slightly down toward the belly or softly into the distance. Use [WARDROBE], soft side lighting, clean composition, 85mm lens look, medium-full framing, shallow depth of field, elegant and timeless maternity photography, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "03",
      title: "Looking Down at Belly / Olhando para a barriga",
      category: "Solo",
      tags: ["Solo", "Classicos", "Lifestyle"],
      description: "Retrato emocional para transmitir conexão e cuidado com o bebê.",
      prompt: `${preservationLine}

Create an emotional maternity portrait of CHARACTER_A in [LOCATION]. She stands or sits with both hands gently touching the belly, looking down at it with a soft maternal smile and peaceful expression. The pose should feel natural, intimate and protective, not exaggerated. Use [WARDROBE], soft window light or diffused studio light, 85mm lens look, medium-close framing, shallow depth of field, delicate highlights on the face and belly, realistic premium maternity photography, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "04",
      title: "Three-Quarter Standing Pose / Pose 45 graus em pe",
      category: "Solo",
      tags: ["Solo", "Estudio", "Classicos"],
      description: "Pose de corpo inteiro que mostra a barriga sem deixar o corpo rígido.",
      prompt: `${preservationLine}

Create a refined maternity portrait of CHARACTER_A in [LOCATION]. She stands in a three-quarter pose, body turned 45 degrees from the camera, one knee slightly relaxed, one hand on the belly and the other hand resting naturally on the waist, dress or lower back. Her posture is elegant and comfortable, with a soft confident maternal expression. Use [WARDROBE], eye-level camera, 50mm to 85mm lens look, medium-full vertical framing, soft cinematic lighting, shallow depth of field, polished Brazilian maternity editorial style, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "05",
      title: "Seated on Stool / Sentada em banco ou banqueta",
      category: "Estudio",
      tags: ["Solo", "Estudio", "Classicos"],
      description: "Variação comum em estúdio, com conforto, sofisticação e postura elegante.",
      prompt: `${preservationLine}

Create a clean studio maternity portrait of CHARACTER_A seated on a stool or simple chair in [LOCATION]. She sits slightly sideways, spine elongated, knees gently angled, one hand on the belly and the other resting naturally on the thigh or chair. Her expression is calm, elegant and maternal. Use [WARDROBE], neutral background, soft directional light, 85mm lens look, medium-full framing, minimal composition, realistic skin texture, high-end studio maternity photography, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "06",
      title: "Reclined on Bed / Deitada ou semi-deitada",
      category: "Lifestyle",
      tags: ["Solo", "Lifestyle", "Casa"],
      description: "Ensaio lifestyle com intimidade, descanso e acolhimento.",
      prompt: `${preservationLine}

Create an intimate maternity lifestyle portrait of CHARACTER_A reclining comfortably on a bed, sofa or soft fabric surface in [LOCATION]. She is slightly turned to the side, one hand resting on the belly, the other hand relaxed near the face or body. Her expression is peaceful and introspective. Use [WARDROBE], soft natural window light, warm home atmosphere, slightly top-down camera angle, 50mm lens look, shallow depth of field, cozy Brazilian lifestyle maternity photography, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "07",
      title: "Walking with Flowing Dress / Caminhando com vestido em movimento",
      category: "Externo",
      tags: ["Solo", "Externo", "Movimento"],
      description: "Pose forte para praia, campo e parque, com leveza e movimento.",
      prompt: `${preservationLine}

Create a natural maternity portrait of CHARACTER_A walking slowly through [LOCATION]. She wears [WARDROBE], preferably a flowing dress or light fabric that moves gently with the breeze. One hand rests on the belly while the other hand lightly holds the dress or moves naturally. Her expression is soft, serene and maternal. Use golden-hour or soft natural light, 50mm lens look, full-body vertical framing, subtle motion energy, shallow depth of field, elegant outdoor maternity photography, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "08",
      title: "Backlit Silhouette / Silhueta em contraluz",
      category: "Fine Art",
      tags: ["Solo", "Fine Art", "Externo"],
      description: "Composição poética que valoriza o contorno da barriga em contraluz.",
      prompt: `Using the attached reference image as CHARACTER_A, preserve her exact body proportions, pregnancy shape, hairstyle silhouette and visual consistency.

Create an artistic backlit maternity silhouette of CHARACTER_A in [LOCATION]. She stands in side profile or gentle three-quarter profile, with the pregnant belly clearly outlined against a strong natural or studio backlight. Her hands softly frame the belly, posture elegant and still. Use minimal background, strong rim light, clean negative space, poetic maternal atmosphere, cinematic glow, high contrast but refined detail, fine-art maternity photography, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "09",
      title: "Window Light Pose / Perto da janela",
      category: "Lifestyle",
      tags: ["Solo", "Lifestyle", "Casa"],
      description: "Retrato intimista com luz natural, memória afetiva e clima de casa.",
      prompt: `${preservationLine}

Create an intimate maternity portrait of CHARACTER_A standing near a large window in [LOCATION]. She is softly turned toward the window light, one hand on the belly, the other hand touching the curtain, robe, dress or window frame. Her expression is calm, reflective and maternal. Use [WARDROBE], natural soft window light, gentle shadows, warm interior atmosphere, 50mm or 85mm lens look, medium framing, shallow depth of field, realistic lifestyle maternity photography, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "10",
      title: "Partner Behind Belly Embrace / Parceiro abracando por tras",
      category: "Casal",
      tags: ["Casal", "Classicos", "Lifestyle"],
      description: "Pose de casal com proteção, parceria e conexão emocional.",
      prompt: `Using the attached reference images as CHARACTER_A and CHARACTER_B, preserve both identities, facial features, hairstyles, skin tones, body proportions and visual consistency. If CHARACTER_B is not provided, create a tasteful supportive partner as a secondary subject.

Create an intimate couple maternity portrait in [LOCATION]. CHARACTER_B stands behind CHARACTER_A, gently embracing her from behind, with both hands softly placed over or under her belly. CHARACTER_A remains the emotional focus of the image, with a calm maternal expression. Their body language should feel protective, loving and natural. Use coordinated [WARDROBE], soft natural or studio lighting, 85mm lens look, medium-close framing, shallow depth of field, warm emotional realism, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "11",
      title: "Forehead-to-Forehead Couple Pose / Testa com testa",
      category: "Casal",
      tags: ["Casal", "Classicos", "Romantico"],
      description: "Pose romântica para casal, com cumplicidade e espera compartilhada.",
      prompt: `Using the attached reference images as CHARACTER_A and CHARACTER_B, preserve both identities, facial features, hairstyles, skin tones, body proportions and visual consistency. If CHARACTER_B is not provided, create a tasteful supportive partner as a secondary subject.

Create a romantic maternity couple portrait in [LOCATION]. CHARACTER_A and CHARACTER_B stand close together, gently touching foreheads, both hands softly connected around the belly. CHARACTER_A's pregnancy shape must remain clearly visible and central to the composition. Their expressions are peaceful, intimate and emotional. Use coordinated [WARDROBE], soft side lighting, 85mm lens look, medium framing, shallow depth of field, elegant Brazilian maternity couple photography, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "12",
      title: "Partner Kissing Belly / Parceiro beijando a barriga",
      category: "Casal",
      tags: ["Casal", "Romantico", "Classicos"],
      description: "Retrato terno e respeitoso para ensaio gestante romântico.",
      prompt: `Using the attached reference images as CHARACTER_A and CHARACTER_B, preserve both identities, facial features, hairstyles, skin tones, body proportions and visual consistency. If CHARACTER_B is not provided, create a tasteful supportive partner as a secondary subject.

Create a tender maternity couple portrait in [LOCATION]. CHARACTER_A stands or sits comfortably while CHARACTER_B gently kisses or leans close to the belly in a respectful and affectionate way. CHARACTER_A's hands softly frame the belly, and her expression is emotional and serene. Keep the pose natural, elegant and non-exaggerated. Use [WARDROBE], soft warm lighting, medium-close framing, 85mm lens look, shallow depth of field, intimate maternity photography style, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "13",
      title: "Child Hugging Belly / Filho abracando a barriga",
      category: "Familia",
      tags: ["Familia", "Lifestyle", "Classicos"],
      description: "Imagem de família com ternura e expectativa pela chegada do irmão.",
      prompt: `Using the attached reference images as CHARACTER_A and CHARACTER_C, preserve both identities, facial features, hairstyles, skin tones, body proportions and visual consistency. If CHARACTER_C is not provided, create a generic older child as a secondary subject.

Create a warm family maternity portrait in [LOCATION]. CHARACTER_C gently hugs CHARACTER_A's belly, resting the face or hands softly against it, while CHARACTER_A looks down with a tender maternal expression. The pose should feel spontaneous, affectionate and safe. Use coordinated soft [WARDROBE], natural light, medium framing, shallow depth of field, emotional Brazilian family maternity photography, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "14",
      title: "Child Kissing Belly / Filho beijando a barriga",
      category: "Familia",
      tags: ["Familia", "Lifestyle", "Emocional"],
      description: "Cena familiar forte para álbum, anúncio ou carrossel.",
      prompt: `Using the attached reference images as CHARACTER_A and CHARACTER_C, preserve both identities, facial features, hairstyles, skin tones, body proportions and visual consistency. If CHARACTER_C is not provided, create a generic older child as a secondary subject.

Create an emotional maternity family portrait in [LOCATION]. CHARACTER_A stands or sits comfortably while CHARACTER_C gently kisses the belly or places both hands on it with affection. CHARACTER_A smiles softly, looking down at the child. Keep the composition tender, natural and elegant. Use [WARDROBE], soft natural or studio light, 50mm to 85mm lens look, medium-close framing, shallow depth of field, realistic family maternity photography, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "15",
      title: "Belly Close-Up with Baby Shoes / Close da barriga com sapatinho",
      category: "Detalhes",
      tags: ["Detalhes", "Emocional", "Estudio"],
      description: "Close para capa, teaser, convite ou postagem de anúncio.",
      prompt: `Using the attached reference image as CHARACTER_A, preserve her exact skin tone, body proportions, pregnancy shape and visual consistency.

Create a detailed maternity close-up focused on CHARACTER_A's belly and hands in [LOCATION]. Her hands gently frame the belly while holding small baby shoes, a baby outfit or a delicate ultrasound photo as an optional prop. The face can be partially visible or softly cropped, but the belly must be the main subject. Use soft side light, shallow depth of field, 85mm macro-like portrait look, elegant detail photography, realistic skin texture, emotional maternal intimacy, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "16",
      title: "Hands Heart Shape on Belly / Coração com as mãos na barriga",
      category: "Detalhes",
      tags: ["Detalhes", "Classicos", "Emocional"],
      description: "Gesto popular e direto para simbolizar amor pelo bebê.",
      prompt: `Using the attached reference image as CHARACTER_A, preserve her exact identity, skin tone, body proportions, pregnancy shape and visual consistency.

Create a delicate maternity detail portrait in [LOCATION]. CHARACTER_A forms a soft heart shape with both hands over the belly, keeping the gesture natural and elegant, not cartoonish. The belly is the main subject, with optional soft focus on her face in the background. Use [WARDROBE], gentle natural or studio light, close-up framing, shallow depth of field, realistic skin texture, refined maternal emotion, premium maternity photography, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "17",
      title: "Fabric Wrap Pose / Tecido envolvendo a barriga",
      category: "Fine Art",
      tags: ["Solo", "Fine Art", "Estudio"],
      description: "Pose criativa de estúdio que valoriza curvas, forma e textura.",
      prompt: `${preservationLine}

Create an elegant fine-art maternity portrait of CHARACTER_A in [LOCATION]. She is wrapped in a soft flowing fabric that gently frames the belly without hiding the pregnancy shape. Her posture is graceful, with one shoulder slightly angled and hands delicately holding the fabric. Use [WARDROBE or FABRIC COLOR], soft directional lighting, sculptural shadows, 85mm lens look, medium-full framing, refined editorial maternity photography, realistic texture detail, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "18",
      title: "All-Black Power Pose / All black com presença forte",
      category: "Editorial",
      tags: ["Solo", "Editorial", "Estudio"],
      description: "Estética all black com força, sofisticação e atitude materna.",
      prompt: `${preservationLine}

Create a powerful all-black maternity portrait of CHARACTER_A in [LOCATION]. She wears elegant black styling, such as a fitted black dress, bodysuit, blazer or robe, standing with confident posture and one hand on the belly. The expression is calm, strong and sophisticated. Use a dark background, precise directional lighting, rich shadows, sculptural highlight on the belly and face, 85mm lens look, medium framing, high-end fashion maternity photography, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "19",
      title: "White Shirt Minimalist Pose / Camisa branca aberta ou oversized",
      category: "Lifestyle",
      tags: ["Solo", "Lifestyle", "Casa"],
      description: "Estilo clean, íntimo e atemporal para casa ou estúdio.",
      prompt: `${preservationLine}

Create a minimalist maternity portrait of CHARACTER_A in [LOCATION]. She wears an oversized white shirt, soft open-button styling or clean neutral wardrobe that tastefully reveals the belly shape without being explicit. She stands or sits naturally, one hand on the belly and the other softly touching the shirt or hair. Use soft window light or clean studio light, neutral background, 85mm lens look, medium framing, shallow depth of field, timeless Brazilian maternity portrait style, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "20",
      title: "Boudoir Elegant Covered Pose / Intimista elegante",
      category: "Editorial",
      tags: ["Solo", "Editorial", "Lifestyle"],
      description: "Retrato íntimo adulto, delicado, coberto e não vulgar.",
      prompt: `${preservationLine}

Create a tasteful intimate maternity portrait of CHARACTER_A in [LOCATION]. She wears elegant covered styling such as a soft robe, bodysuit, silk wrap or delicate fabric, with the pregnant belly beautifully emphasized in a refined and respectful way. Her pose is calm and confident, one hand on the belly, the other resting naturally near the collarbone, hair or fabric. Use soft low-key lighting, warm shadows, 85mm lens look, medium-close framing, luxurious texture detail, elegant adult maternity photography, non-explicit, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "21",
      title: "Beach Belly Profile / Perfil na praia",
      category: "Externo",
      tags: ["Solo", "Externo", "Praia"],
      description: "Silhueta de praia com vento, mar e luz dourada.",
      prompt: `${preservationLine}

Create a beach maternity portrait of CHARACTER_A in [LOCATION]. She stands in side profile near the shoreline, one hand above the belly and one hand below, with the ocean, wet sand and soft waves in the background. Use [WARDROBE], preferably a flowing light dress, with gentle wind moving the fabric and hair. Golden-hour light, warm rim light, 50mm lens look, full-body or medium-full framing, serene maternal atmosphere, elegant Brazilian beach maternity photography, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "22",
      title: "Boho Field Pose / Campo boho",
      category: "Externo",
      tags: ["Solo", "Externo", "Boho"],
      description: "Campo, fazenda, parque ou área verde com textura orgânica.",
      prompt: `${preservationLine}

Create a boho maternity portrait of CHARACTER_A in [LOCATION]. She stands in an open field, garden, farm or natural landscape, wearing [WARDROBE] with earthy tones, lace, crochet or flowing fabric. Her hands gently frame the belly, posture relaxed and elegant, expression peaceful and connected to nature. Use golden-hour backlight, warm organic textures, full-body vertical framing, 85mm lens look, shallow depth of field, refined rustic Brazilian maternity photography, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "23",
      title: "Sitting on Floor with Fabric / Sentada no chão com tecido",
      category: "Fine Art",
      tags: ["Solo", "Fine Art", "Estudio"],
      description: "Pose sentada para estúdio, fine art e ensaio minimalista.",
      prompt: `${preservationLine}

Create a refined maternity portrait of CHARACTER_A seated comfortably on the floor in [LOCATION]. She sits slightly sideways with one knee bent, posture elongated, belly clearly visible, one hand on the belly and the other resting gently on the fabric or leg. Use soft draped fabric around her body, [WARDROBE], neutral background, soft directional light, 85mm lens look, medium-full framing, elegant fine-art maternity photography, realistic textures, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "24",
      title: "Over-the-Shoulder Partner Foreground / Parceiro desfocado",
      category: "Casal",
      tags: ["Casal", "Editorial", "Cinematico"],
      description: "Composição cinematográfica com parceiro desfocado e gestante em foco.",
      prompt: `Using the attached reference images as CHARACTER_A and CHARACTER_B, preserve both identities, facial features, hairstyles, skin tones, body proportions and visual consistency. If CHARACTER_B is not provided, create a tasteful supportive partner as a secondary subject.

Create a cinematic maternity over-the-shoulder composition in [LOCATION]. CHARACTER_B is positioned very close to the camera with the back of the head, shoulder or upper body heavily blurred in the foreground. CHARACTER_A is positioned in the midground, perfectly sharp and in focus, gently touching her belly with a calm maternal expression. The camera focus must be locked on CHARACTER_A and the belly, not on CHARACTER_B. Use [WARDROBE], soft emotional lighting, strong depth separation, 85mm lens look, shallow depth of field, intimate cinematic maternity photography, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "25",
      title: "Mirror Reflection Maternity / Reflexo no espelho",
      category: "Lifestyle",
      tags: ["Solo", "Lifestyle", "Casa"],
      description: "Retrato com reflexo para casa, estúdio ou narrativa cotidiana.",
      prompt: `${preservationLine}

Create a maternity portrait using a mirror reflection in [LOCATION]. CHARACTER_A is seen through the mirror, standing or sitting with one hand on the belly, looking softly at her own reflection or down toward the belly. The composition should feel intimate, elegant and cinematic, with layered depth and realistic reflection. Use [WARDROBE], soft window light, subtle foreground blur, 50mm lens look, medium framing, refined lifestyle maternity photography, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "26",
      title: "Black and White Fine Art / Preto e branco artístico",
      category: "Fine Art",
      tags: ["Solo", "Fine Art", "Estudio"],
      description: "Imagem atemporal para forma, luz, pele e emoção.",
      prompt: `${preservationLine}

Create a fine-art black-and-white maternity portrait of CHARACTER_A in [LOCATION]. She stands or sits with one hand on the belly and the other hand softly supporting the lower back, face calm and introspective. Focus on the sculptural shape of the pregnant body, emotional expression, skin texture and elegant lighting. Use directional side light, deep but refined shadows, 85mm lens look, medium-close framing, classic monochrome contrast, timeless maternity photography, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "27",
      title: "Editorial Fashion Maternity / Pose editorial de moda",
      category: "Editorial",
      tags: ["Solo", "Editorial", "Estudio"],
      description: "Retrato moderno, autoral e sofisticado com linguagem de moda.",
      prompt: `${preservationLine}

Create a high-end editorial maternity portrait of CHARACTER_A in [LOCATION]. She poses with strong but elegant body language, one hand on the belly, chin slightly lifted, shoulders controlled, expression confident and refined. Use [WARDROBE] with fashion-forward styling, clean visual hierarchy, dramatic but tasteful lighting, 85mm lens look, medium-full framing, polished magazine-style maternity photography, realistic details, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "28",
      title: "Home Nursery Pose / No quarto do bebê",
      category: "Familia",
      tags: ["Familia", "Lifestyle", "Casa"],
      description: "Cena documental no quarto do bebê, com memória afetiva e história.",
      prompt: `${preservationLine}

Create a documentary maternity lifestyle portrait of CHARACTER_A inside a baby nursery or cozy home corner in [LOCATION]. She gently touches the crib, folds baby clothes, holds a small blanket or looks at a baby detail while one hand rests on the belly. The scene should feel real, warm and emotional, not staged. Use [WARDROBE], natural window light, soft home textures, 35mm documentary lens look, medium-wide framing, authentic Brazilian family photography, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "29",
      title: "Floral Foreground Blur / Flores desfocadas em primeiro plano",
      category: "Externo",
      tags: ["Solo", "Externo", "Boho"],
      description: "Profundidade romântica com flores ou folhas desfocadas no primeiro plano.",
      prompt: `${preservationLine}

Create a romantic maternity portrait of CHARACTER_A in [LOCATION], surrounded by flowers, tall grass or natural vegetation. Add soft blurred flowers or leaves in the foreground, while CHARACTER_A remains perfectly sharp in the midground, gently holding the belly with both hands. Use [WARDROBE], soft golden-hour or diffused light, 85mm lens look, shallow depth of field, rich natural textures, delicate Brazilian outdoor maternity photography, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "30",
      title: "Hero Maternity Portrait / Pose heroína materna",
      category: "Editorial",
      tags: ["Solo", "Editorial", "Cinematico"],
      description: "Pose principal com poder, presença, segurança e maternidade.",
      prompt: `${preservationLine}

Create a powerful hero maternity portrait of CHARACTER_A in [LOCATION]. She stands with confident posture, shoulders open, spine elongated, one hand on the belly and the other resting naturally on the waist, dress or fabric. Her expression is strong, calm and maternal. Use [WARDROBE], slightly low but respectful camera angle, 50mm or 85mm lens look, medium-full vertical framing, cinematic lighting, elegant subject separation, premium maternity editorial photography, no text, no watermark, [ASPECT RATIO].`
    },
    {
      number: "31",
      title: "Prompt Universal Base",
      category: "Base",
      tags: ["Base", "Solo", "Estudio", "Externo", "Lifestyle"],
      description: "Estrutura editável para criar novas poses mantendo identidade e consistência.",
      prompt: `${preservationLine}

Create a [POSE STYLE] maternity portrait of CHARACTER_A in [LOCATION]. She is posed with [BODY POSITION], with the pregnant belly clearly visible and naturally emphasized. Her hands are placed [HAND POSITION], her posture is elegant and comfortable, and her expression conveys [MOOD]. Use [WARDROBE], [LIGHTING STYLE], [CAMERA ANGLE], [LENS LOOK], [FRAMING], shallow depth of field, realistic skin texture, refined Brazilian maternity photography style, no text, no watermark, [ASPECT RATIO].`
    }
  ];

  const colorsByCategory = {
    Base: ["#2d3f4b", "#b6d6c2"],
    Casal: ["#51394a", "#d8a9bd"],
    Detalhes: ["#4b5268", "#c8d5ef"],
    Editorial: ["#2c2f39", "#c7a76b"],
    Estudio: ["#4c4654", "#d0bac8"],
    Externo: ["#365341", "#b8cf99"],
    Familia: ["#4b3f37", "#d0b28a"],
    "Fine Art": ["#293038", "#b6bec9"],
    Lifestyle: ["#354857", "#9fc9d2"],
    Solo: ["#483c55", "#c4acd6"]
  };

  const filterLabels = {
    Todos: "Todos",
    Base: "Base",
    Boho: "Boho",
    Casa: "Casa",
    Casal: "Casal",
    Cinematico: "Cinemático",
    Classicos: "Clássicos",
    Detalhes: "Detalhes",
    Editorial: "Editorial",
    Emocional: "Emocional",
    Estudio: "Estúdio",
    Externo: "Externo",
    Familia: "Familia",
    "Fine Art": "Fine Art",
    Lifestyle: "Lifestyle",
    Movimento: "Movimento",
    Praia: "Praia",
    Romantico: "Romântico",
    Solo: "Solo"
  };

  const preferredFilters = [
    "Todos",
    "Solo",
    "Casal",
    "Familia",
    "Detalhes",
    "Estudio",
    "Externo",
    "Lifestyle",
    "Editorial",
    "Fine Art",
    "Base"
  ];

  const elements = {
    searchInput: document.getElementById("promptSearch"),
    filterGroup: document.getElementById("promptFilters"),
    grid: document.getElementById("promptGrid"),
    count: document.getElementById("promptCount"),
    emptyState: document.getElementById("emptyState")
  };

  let activeFilter = "Todos";
  let searchTerm = "";

  const normalizeText = (value) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const getAllFilters = () => {
    const filters = new Set(["Todos"]);
    prompts.forEach((item) => item.tags.forEach((tag) => filters.add(tag)));
    return [
      ...preferredFilters.filter((filter) => filters.has(filter)),
      ...Array.from(filters)
        .filter((filter) => !preferredFilters.includes(filter))
        .sort((a, b) => a.localeCompare(b, "pt-BR"))
    ];
  };

  const buildPlaceholder = (item) => {
    const [colorStart, colorEnd] = colorsByCategory[item.category] || colorsByCategory.Solo;
    const label = `${item.number} - ${item.category}`;
    const svg = `
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 1200' role='img' aria-label='${label}'>
        <defs>
          <linearGradient id='bg' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stop-color='${colorStart}' />
            <stop offset='100%' stop-color='${colorEnd}' />
          </linearGradient>
          <radialGradient id='glow' cx='36%' cy='30%' r='62%'>
            <stop offset='0%' stop-color='rgba(255,255,255,0.28)' />
            <stop offset='100%' stop-color='rgba(255,255,255,0)' />
          </radialGradient>
        </defs>
        <rect width='1200' height='1200' fill='url(#bg)' />
        <rect width='1200' height='1200' fill='url(#glow)' />
        <path d='M608 262c-126 0-216 108-216 256 0 94 35 166 87 213-44 18-92 51-121 111 76 66 160 98 252 98 91 0 176-32 252-98-28-59-77-93-122-111 54-47 88-119 88-213 0-148-91-256-220-256Z' fill='rgba(8,12,22,0.30)' />
        <path d='M592 420c-65 20-108 77-108 151 0 108 79 188 179 188 72 0 132-35 163-91-133-24-212-103-234-248Z' fill='rgba(255,255,255,0.22)' />
        <text x='82' y='112' fill='rgba(255,255,255,0.90)' font-family='Arial, sans-serif' font-size='36' font-weight='700'>Gestantes</text>
        <text x='82' y='164' fill='rgba(255,255,255,0.84)' font-family='Arial, sans-serif' font-size='30'>${label}</text>
      </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  };

  const copyWithFallback = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        // Continue to legacy fallback.
      }
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    textarea.style.pointerEvents = "none";
    document.body.appendChild(textarea);
    textarea.select();

    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch {
      copied = false;
    }

    document.body.removeChild(textarea);
    return copied;
  };

  const showCopyFeedback = (button, feedback, success) => {
    const defaultText = "Copiar Prompt";
    button.textContent = success ? "Copiado!" : "Falha ao copiar";
    button.classList.toggle("is-copied", success);
    feedback.textContent = success ? "Prompt copiado!" : "Não foi possível copiar automaticamente.";

    if (button.copyTimeoutId) {
      window.clearTimeout(button.copyTimeoutId);
    }

    button.copyTimeoutId = window.setTimeout(() => {
      button.textContent = defaultText;
      button.classList.remove("is-copied");
      feedback.textContent = "";
      button.copyTimeoutId = null;
    }, 1700);
  };

  const createCard = (item) => {
    const card = document.createElement("article");
    card.className = "prompt-card maternity-prompt-card";

    const figure = document.createElement("figure");
    figure.className = "prompt-card-image-wrap";

    const image = document.createElement("img");
    image.className = "prompt-card-image";
    image.loading = "lazy";
    image.decoding = "async";
    image.width = 1000;
    image.height = 1000;
    image.src = buildPlaceholder(item);
    image.alt = `Referencia visual abstrata para ${item.title}`;
    figure.appendChild(image);

    const top = document.createElement("div");
    top.className = "prompt-card-top";

    const title = document.createElement("h2");
    title.className = "prompt-card-title";
    title.textContent = item.title;

    const tag = document.createElement("span");
    tag.className = "prompt-card-tag";
    tag.textContent = item.category;

    top.appendChild(title);
    top.appendChild(tag);

    const description = document.createElement("p");
    description.className = "prompt-card-description";
    description.textContent = item.description;

    const prompt = document.createElement("pre");
    prompt.className = "prompt-card-prompt";
    prompt.textContent = item.prompt;

    const actions = document.createElement("div");
    actions.className = "prompt-card-actions";

    const copyButton = document.createElement("button");
    copyButton.type = "button";
    copyButton.className = "prompt-copy-btn";
    copyButton.textContent = "Copiar Prompt";

    const feedback = document.createElement("p");
    feedback.className = "prompt-copy-feedback";
    feedback.setAttribute("aria-live", "polite");

    copyButton.addEventListener("click", async () => {
      const copied = await copyWithFallback(item.prompt);
      showCopyFeedback(copyButton, feedback, copied);
    });

    actions.appendChild(copyButton);
    actions.appendChild(feedback);

    card.appendChild(figure);
    card.appendChild(top);
    card.appendChild(description);
    card.appendChild(prompt);
    card.appendChild(actions);

    return card;
  };

  const buildFilterButtons = () => {
    const filters = getAllFilters();
    elements.filterGroup.replaceChildren(
      ...filters.map((filter, index) => {
        const count = filter === "Todos"
          ? prompts.length
          : prompts.filter((item) => item.tags.includes(filter)).length;
        const button = document.createElement("button");
        button.type = "button";
        button.className = `prompt-filter${index === 0 ? " is-active" : ""}`;
        button.dataset.filter = filter;
        button.textContent = `${filterLabels[filter] || filter} (${count})`;
        button.setAttribute("aria-label", `${filterLabels[filter] || filter}: ${count} prompts`);
        return button;
      })
    );
  };

  const render = () => {
    const term = normalizeText(searchTerm.trim());
    const filtered = prompts.filter((item) => {
      const filterMatch = activeFilter === "Todos" || item.tags.includes(activeFilter);
      if (!filterMatch) {
        return false;
      }

      if (!term) {
        return true;
      }

      return normalizeText(`${item.title} ${item.category} ${item.tags.join(" ")} ${item.description} ${item.prompt}`).includes(term);
    });

    elements.grid.replaceChildren(...filtered.map(createCard));
    elements.count.textContent = `${filtered.length} prompt${filtered.length === 1 ? "" : "s"} encontrado${filtered.length === 1 ? "" : "s"}`;
    elements.emptyState.hidden = filtered.length !== 0;
  };

  elements.searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value;
    render();
  });

  elements.filterGroup.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) {
      return;
    }

    const filter = target.dataset.filter;
    if (!filter || filter === activeFilter) {
      return;
    }

    activeFilter = filter;
    elements.filterGroup
      .querySelectorAll(".prompt-filter")
      .forEach((button) => button.classList.toggle("is-active", button === target));
    render();
  });

  buildFilterButtons();
  render();
})();
