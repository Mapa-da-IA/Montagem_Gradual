(() => {
  const sections = [
    {
      id: "poses-base",
      label: "Pose",
      items: [
        {
          title: "Three-Quarter Relaxed Stance",
          subtitle: "Pose 45 graus com mãos no bolso",
          usage: "Ensaio masculino casual, perfil, moda, retrato externo.",
          emotion: "Confiança calma, naturalidade, presença sem exagero.",
          prompt: "Using the attached reference image as PERSON_A, preserve the exact same face, skin tone, hairstyle, body proportions and identity. Create a realistic male portrait with PERSON_A standing in a relaxed three-quarter pose, body turned 45 degrees from the camera, both hands casually inside the pockets, shoulders relaxed, calm confident expression, slightly off-camera gaze. Modern casual menswear, clean urban background, eye-level camera, 85mm portrait lens, medium-full vertical framing, soft natural light, shallow depth of field, premium editorial portrait, realistic skin texture, 4:5 aspect ratio."
        },
        {
          title: "Wall Lean",
          subtitle: "Encostado na parede",
          usage: "Fotos urbanas, streetwear, lifestyle, ensaio externo.",
          emotion: "Atitude, seguranca, estilo jovem.",
          prompt: "Using the attached reference image as PERSON_A, keep the exact identity, face, skin tone, hair and body proportions. Create a realistic urban male portrait of PERSON_A leaning one shoulder against a textured wall, one knee slightly bent, relaxed posture, confident neutral expression, casual streetwear outfit with sneakers and denim. Shot with a 50mm lens, medium vertical framing, soft side daylight, shallow depth of field, urban concrete background, cinematic lifestyle photography, natural realistic look, 4:5 aspect ratio."
        },
        {
          title: "Walking Candid",
          subtitle: "Caminhando naturalmente",
          usage: "Lifestyle, moda urbana, fotos para Instagram, ensaio externo.",
          emotion: "Movimento, espontaneidade, vida real.",
          prompt: "Using the attached reference image as PERSON_A, preserve the exact same face and identity. Create a candid walking portrait of PERSON_A walking naturally toward the camera on an urban sidewalk, relaxed stride, one hand slightly moving, confident posture, soft off-camera gaze, stylish casual outfit. Shot on a 35mm lens, full-body vertical framing, realistic city background, soft daylight, subtle motion energy, shallow depth of field, premium lifestyle photography, authentic and natural, 4:5 aspect ratio."
        },
        {
          title: "Arms Crossed Power Pose",
          subtitle: "Bracos cruzados",
          usage: "Retrato profissional, academia, moda, perfil masculino.",
          emotion: "Autoridade, forca, firmeza.",
          prompt: "Using the attached reference image as PERSON_A, preserve exact facial identity, body proportions, skin tone and hairstyle. Create a strong male portrait with PERSON_A standing with arms crossed, squared shoulders, direct confident eye contact, controlled expression, fitted dark shirt or casual blazer. Slight low-angle camera, 85mm lens, medium framing, Rembrandt lighting, clean blurred background, sharp jawline emphasis, premium realistic portrait, 4:5 aspect ratio."
        },
        {
          title: "Outfit Adjust Pose",
          subtitle: "Ajustando relogio, manga ou jaqueta",
          usage: "Moda masculina, old money, editorial, ensaio premium.",
          emotion: "Elegância, refinamento, cuidado com imagem.",
          prompt: "Using the attached reference image as PERSON_A, keep the exact same identity, face and proportions. Create a candid editorial portrait of PERSON_A adjusting his jacket cuff and wristwatch, calm focused expression, refined masculine styling with a blazer, linen shirt or smart casual outfit. Shot on an 85mm lens, medium portrait framing, soft directional loop lighting, shallow depth of field, elegant neutral background, premium menswear editorial photography, realistic details, 4:5 aspect ratio."
        },
        {
          title: "Seated Forward Lean",
          subtitle: "Sentado inclinado para frente",
          usage: "Retrato de marca pessoal, estúdio, perfil profissional, criador de conteúdo.",
          emotion: "Proximidade, inteligencia, escuta, confianca.",
          prompt: "Using the attached reference image as PERSON_A, preserve exact identity and facial structure. Create a seated male portrait with PERSON_A leaning slightly forward, elbows resting naturally on the knees, hands relaxed, open posture, attentive confident expression. Premium casual outfit, modern studio or lounge background, 85mm lens, medium shot, soft clamshell lighting, shallow depth of field, realistic skin texture, clean professional portrait, 4:5 aspect ratio."
        },
        {
          title: "Urban Squat",
          subtitle: "Agachado em ambiente urbano",
          usage: "Streetwear, rap/skate aesthetic, ensaio jovem, moda urbana.",
          emotion: "Atitude, rebeldia, energia de rua.",
          prompt: "Using the attached reference image as PERSON_A, preserve exact face, hairstyle, skin tone and identity. Create an urban editorial portrait of PERSON_A in a low squat pose, elbows resting on the knees, intense confident gaze, oversized streetwear outfit with cargo pants, hoodie and sneakers. Low-angle 35mm lens, full-body vertical framing, textured concrete street background, overcast daylight, shallow depth of field, bold realistic street fashion aesthetic, 4:5 aspect ratio."
        },
        {
          title: "Clasped Hands / Thinker Pose",
          subtitle: "Mãos unidas ou mão no queixo",
          usage: "Retrato profissional, criador de conteúdo, ensaio intelectual.",
          emotion: "Profundidade, pensamento, maturidade.",
          prompt: "Using the attached reference image as PERSON_A, keep exact identity, face and body proportions. Create a reflective male portrait with PERSON_A seated or standing with lightly clasped hands near the chin or chest, thoughtful expression, refined dark knitwear or blazer styling. 85mm lens, medium-close framing, soft side lighting, subtle background blur, premium personal-brand portrait, realistic skin texture, 4:5 aspect ratio."
        },
        {
          title: "Over-the-Shoulder Glance",
          subtitle: "Olhando por cima do ombro",
          usage: "Editorial masculino, moda, ensaio sofisticado.",
          emotion: "Mistério, elegância, magnetismo.",
          prompt: "Using the attached reference image as PERSON_A, preserve exact facial identity and body proportions. Create a fashion portrait of PERSON_A turned slightly away from the camera and looking back over the shoulder, composed serious expression, elegant jawline, monochrome or tailored menswear outfit. 85mm lens, medium portrait framing, soft directional side light, blurred minimalist background, high-end editorial realism, 4:5 aspect ratio."
        }
      ]
    },
    {
      id: "estudio-editorial",
      label: "Editorial",
      items: [
        {
          title: "Studio Stool Portrait",
          subtitle: "Sentado em banco alto no estúdio",
          usage: "Book masculino, retrato clean, perfil profissional, ensaio minimalista.",
          emotion: "Controle, elegância, simplicidade.",
          prompt: "Using the attached reference image as PERSON_A, keep the exact same face, body proportions and identity. Create a minimalist studio portrait of PERSON_A seated on a tall stool, one elbow resting on one knee, relaxed masculine posture, calm confident expression. Clean casual outfit in neutral tones, seamless gray studio backdrop, 85mm lens, medium-full vertical framing, butterfly lighting with soft fill, shallow depth of field, commercial studio realism, 4:5 aspect ratio."
        },
        {
          title: "Head Tilt Close-Up",
          subtitle: "Close com leve inclinação da cabeça",
          usage: "Foto de perfil, retrato masculino, headshot, perfil dark.",
          emotion: "Mistério, foco no olhar, sofisticação.",
          prompt: "Using the attached reference image as PERSON_A, preserve the exact identity, facial structure, skin texture and hairstyle. Create a tight male head-and-shoulders portrait with a subtle head tilt, body slightly turned away from the camera, eyes sharp and expressive, neutral serious expression, black or neutral outfit. 85mm lens, close framing, soft Rembrandt lighting, dark neutral background, shallow depth of field, refined cinematic headshot, 4:5 aspect ratio."
        },
        {
          title: "Dark Profile Portrait",
          subtitle: "Retrato escuro dramático",
          usage: "Foto de perfil, ensaio masculino dark, capa de artista, editorial.",
          emotion: "Intensidade, mistério, sensualidade controlada.",
          prompt: "Using the attached reference image as PERSON_A, keep exact face, skin tone, hair and identity. Create a cinematic dark male profile portrait with only part of the face illuminated, intense eyes, serious expression, black turtleneck or leather jacket, dark studio background or nighttime bokeh. 85mm lens, close-up framing, split lighting or Rembrandt lighting, deep shadows, shallow depth of field, premium moody realism, 4:5 aspect ratio."
        },
        {
          title: "Fine Art Black and White",
          subtitle: "Retrato preto e branco",
          usage: "Retrato artistico, perfil sofisticado, ensaio autoral.",
          emotion: "Maturidade, profundidade, forca emocional.",
          prompt: "Using the attached reference image as PERSON_A, keep exact identity, face and body proportions. Create a fine-art black-and-white portrait of PERSON_A with dramatic side lighting, expressive eyes, simple dark clothing, close or medium framing, 85mm lens, high tonal contrast, deep shadows, realistic skin texture, elegant cinematic realism, 4:5 aspect ratio."
        },
        {
          title: "Creative Studio Gel Light",
          subtitle: "Luz colorida em estúdio",
          usage: "Artista, cantor, DJ, criador de conteúdo, ensaio moderno.",
          emotion: "Ousadia, energia pop, personalidade forte.",
          prompt: "Using the attached reference image as PERSON_A, preserve exact identity, face, hair and body proportions. Create a creative studio portrait of PERSON_A with teal and magenta gel lighting, modern fashion styling, bold expression, clean dark background, 85mm lens, shallow depth of field, glossy pop-editorial realism, vibrant but realistic lighting, 4:5 aspect ratio."
        },
        {
          title: "Tattoo / Detail Portrait",
          subtitle: "Detalhes de tatuagem, maos e rosto",
          usage: "Ensaio alternativo, lifestyle, estética masculina, close editorial.",
          emotion: "Identidade, personalidade, textura visual.",
          prompt: "Using the attached reference image as PERSON_A, preserve exact identity and facial features. Create a detailed masculine portrait focusing on PERSON_A's face, hands, jawline and visible tattoos if present, dark premium styling, realistic skin texture, moody studio or tattoo-studio environment. 85mm lens, close-up framing, contrasty directional light, shallow depth of field, gritty editorial realism, 4:5 aspect ratio."
        }
      ]
    },
    {
      id: "moda-estilo",
      label: "Estilo",
      items: [
        {
          title: "Streetwear Oversized Look",
          subtitle: "Ensaio streetwear",
          usage: "Moda urbana, jovem 18-30, Instagram, TikTok, editorial urbano.",
          emotion: "Atitude, cultura de rua, identidade jovem.",
          prompt: "Using the attached reference image as PERSON_A, preserve exact facial identity, skin tone, hairstyle and body proportions. Create a Brazilian-inspired oversized streetwear portrait with PERSON_A wearing cargo pants, hoodie, layered jacket and statement sneakers, confident youthful stance, urban skate-influenced energy. 35mm lens, medium-full vertical frame, realistic street backdrop, soft overcast light or direct flash editorial look, shallow depth of field, authentic street fashion realism, 4:5 aspect ratio."
        },
        {
          title: "Old Money / Quiet Luxury",
          subtitle: "Ensaio elegante masculino",
          usage: "Ensaio premium, moda masculina, perfil sofisticado.",
          emotion: "Status discreto, elegância, autocontrole.",
          prompt: "Using the attached reference image as PERSON_A, keep exact face, skin tone, hairstyle and proportions. Create a refined old-money menswear portrait of PERSON_A wearing a knit polo or linen shirt, tailored trousers, loafers and an elegant watch, beige, navy and white color palette. Relaxed three-quarter stance, calm self-assured expression, upscale architectural or garden background, 85mm lens, soft daylight, subtle background blur, quiet luxury realism, 4:5 aspect ratio."
        },
        {
          title: "Relaxed Tailoring",
          subtitle: "Alfaiataria casual",
          usage: "Ensaio profissional, LinkedIn, editorial, marca pessoal.",
          emotion: "Maturidade jovem, credibilidade, sofisticação moderna.",
          prompt: "Using the attached reference image as PERSON_A, preserve exact identity and facial structure. Create a modern mens editorial portrait with PERSON_A wearing relaxed tailoring: unstructured blazer, straight trousers, soft shirt or premium T-shirt, youthful refined attitude. Medium-full portrait, 85mm lens, soft loop lighting, neutral seamless backdrop or minimalist architectural background, shallow depth of field, modern tailoring realism, 4:5 aspect ratio."
        },
        {
          title: "Monochrome All Black",
          subtitle: "Look todo preto",
          usage: "Perfil masculino, moda, dark aesthetic, ensaio urbano.",
          emotion: "Autoridade, mistério, elegância simples.",
          prompt: "Using the attached reference image as PERSON_A, preserve exact face, hair, body proportions and identity. Create a monochromatic male portrait with PERSON_A wearing a full black outfit, clean lines, confident controlled expression, modern masculine styling. 85mm lens, medium portrait framing, soft contrast lighting, minimalist dark background, premium fashion realism, realistic skin texture, 4:5 aspect ratio."
        },
        {
          title: "Earth-Tone Minimalist Look",
          subtitle: "Tons terrosos minimalistas",
          usage: "Ensaio lifestyle, moda casual, estética premium natural.",
          emotion: "Equilíbrio, calma, modernidade.",
          prompt: "Using the attached reference image as PERSON_A, keep exact identity and body proportions. Create a minimalist male portrait with PERSON_A wearing an earth-tone outfit, beige, brown, olive or cream color palette, relaxed posture, calm natural expression. 50mm lens, medium vertical framing, soft natural daylight, clean architectural or neutral background, shallow depth of field, premium lifestyle realism, 4:5 aspect ratio."
        },
        {
          title: "Grunge / Alternative Style",
          subtitle: "Estilo alternativo",
          usage: "Ensaio artistico, perfil dark, moda alternativa.",
          emotion: "Rebeldia, individualidade, intensidade emocional.",
          prompt: "Using the attached reference image as PERSON_A, keep exact facial identity, hairstyle, skin tone and proportions. Create a grunge-inspired male portrait with PERSON_A wearing black denim, flannel or leather layers, slightly rebellious expression, textured urban backdrop with brick, metal or night street elements. 50mm lens, medium-full framing, split lighting or direct flash, shallow depth of field, realistic alternative-fashion aesthetic, 4:5 aspect ratio."
        },
        {
          title: "Techwear / Futuristic Urban",
          subtitle: "Visual tecnologico",
          usage: "Ensaio moderno, moda urbana futurista, perfil criativo.",
          emotion: "Precisao, forca, modernidade, atitude.",
          prompt: "Using the attached reference image as PERSON_A, preserve exact face, skin tone, hairstyle and body proportions. Create a futuristic utilitarian street portrait with PERSON_A wearing a techwear jacket, cargo pants and tactical-modern sneakers, strong controlled stance, sleek industrial architecture around him. 35mm lens, medium-full vertical framing, cool daylight, subtle depth of field, premium realistic techwear editorial, 4:5 aspect ratio."
        }
      ]
    },
    {
      id: "profissional-fitness",
      label: "Perfil",
      items: [
        {
          title: "Corporate Casual / Personal Brand",
          subtitle: "Marca pessoal",
          usage: "LinkedIn, WhatsApp profissional, site, perfil de trabalho.",
          emotion: "Credibilidade, lideranca, proximidade.",
          prompt: "Using the attached reference image as PERSON_A, preserve exact face, hairstyle, skin tone and identity. Create a professional personal-brand portrait of PERSON_A wearing corporate-casual styling, blazer with open-collar shirt or refined T-shirt, calm approachable confidence, polished grooming. 85mm lens, medium-close framing, soft clean studio lighting, seamless gray backdrop or modern office environment, subtle depth of field, premium LinkedIn-ready realism, 1:1 aspect ratio."
        },
        {
          title: "Fitness / Gym Portrait",
          subtitle: "Ensaio fitness",
          usage: "Academia, personal trainer, atleta, lifestyle fitness.",
          emotion: "Disciplina, forca, foco, evolucao corporal.",
          prompt: "Using the attached reference image as PERSON_A, preserve exact identity, face and body proportions. Create a realistic fitness portrait of PERSON_A wearing premium athleisure clothing, athletic posture, focused expression, defined lighting on shoulders, arms and jawline, realistic gym environment. 50mm lens, medium-full vertical framing, dramatic but realistic contrast lighting, shallow depth of field, strong disciplined mood, premium sports editorial realism, 4:5 aspect ratio."
        },
        {
          title: "Post-Workout Pose",
          subtitle: "Pós-treino com toalha ou garrafa",
          usage: "Academia, conteúdo fitness, ensaio de personal.",
          emotion: "Esforco, superacao, rotina real.",
          prompt: "Using the attached reference image as PERSON_A, keep exact identity, face and body proportions. Create a realistic post-workout portrait of PERSON_A standing in a gym, holding a towel or water bottle, slightly sweaty skin, focused but calm expression, athletic outfit, natural muscular definition. 50mm lens, medium vertical framing, controlled gym lighting, soft background blur, realistic sports lifestyle photography, 4:5 aspect ratio."
        },
        {
          title: "Outdoor Athletic Lifestyle",
          subtitle: "Fitness ao ar livre",
          usage: "Corrida, treino funcional, personal trainer, lifestyle saudavel.",
          emotion: "Energia, movimento, liberdade.",
          prompt: "Using the attached reference image as PERSON_A, preserve exact face, identity and body proportions. Create an outdoor athletic lifestyle portrait of PERSON_A wearing modern training clothes, standing or walking after a workout in a park or urban running area, confident focused expression. 35mm lens, full-body vertical framing, natural morning light, realistic background, shallow depth of field, energetic sports lifestyle realism, 4:5 aspect ratio."
        },
        {
          title: "Creator Multi-Look Portrait",
          subtitle: "Ensaio para criador/influencer",
          usage: "Instagram, TikTok, YouTube, perfil profissional, thumbnails.",
          emotion: "Versatilidade, presenca digital, imagem moderna.",
          prompt: "Using the attached reference image as PERSON_A, preserve exact identity, face, hairstyle and body proportions. Create a premium creator portrait session look with PERSON_A in modern casual menswear, confident approachable expression, clean background, subtle lifestyle props such as a phone, laptop or camera. 50mm and 85mm photography feel, soft studio lighting, shallow depth of field, social-branding aesthetic, realistic and polished, 4:5 aspect ratio."
        }
      ]
    },
    {
      id: "lifestyle-cenarios",
      label: "Lifestyle",
      items: [
        {
          title: "Mirror Flash Selfie Aesthetic",
          subtitle: "Foto no espelho com flash",
          usage: "Foto jovem, academia, streetwear, perfil social.",
          emotion: "Intimidade digital, espontaneidade, estética de rede social.",
          prompt: "Using the attached reference image as PERSON_A, preserve exact identity, face, body and hairstyle. Create a stylish mirror-flash portrait of PERSON_A holding a smartphone in front of a mirror, relaxed online-photo pose, masculine outfit in dark or neutral tones, realistic bathroom, elevator or gym mirror environment. Direct flash lighting, crisp reflection, slight nostalgic social-media aesthetic, realistic details, 4:5 aspect ratio."
        },
        {
          title: "Resort Linen / Beach Sophisticated",
          subtitle: "Praia sofisticada",
          usage: "Ensaio praia, verao, lifestyle premium, old money tropical.",
          emotion: "Leveza, liberdade, elegância solar.",
          prompt: "Using the attached reference image as PERSON_A, preserve exact identity, face and body proportions. Create a sunlit resort-style portrait of PERSON_A wearing a white or beige linen shirt and relaxed summer menswear, calm elegant expression, natural beachside or tropical background. 50mm lens, medium-full framing, warm golden-hour light, soft background blur, airy summer editorial realism, 4:5 aspect ratio."
        },
        {
          title: "Home Lifestyle",
          subtitle: "Ensaio em casa",
          usage: "Criador de conteúdo, lifestyle, ensaio intimista, fotos naturais.",
          emotion: "Conforto, autenticidade, rotina real.",
          prompt: "Using the attached reference image as PERSON_A, preserve exact facial identity, hairstyle, skin tone and body proportions. Create an in-home lifestyle portrait of PERSON_A in a realistic apartment setting, soft window light, relaxed natural body language, white shirt or casual knitwear, sitting on a sofa, bed or near a window, warm intimate atmosphere. 35mm lens, shallow depth of field, cinematic home portrait realism, 4:5 aspect ratio."
        },
        {
          title: "Coffee Shop / Creator Lifestyle",
          subtitle: "Cafe ou trabalho criativo",
          usage: "Marca pessoal, criador de conteúdo, estudante, empreendedor.",
          emotion: "Criatividade, rotina produtiva, modernidade.",
          prompt: "Using the attached reference image as PERSON_A, keep exact identity and facial structure. Create a realistic lifestyle portrait of PERSON_A sitting in a modern coffee shop, using a laptop or holding a coffee cup, relaxed confident posture, smart casual outfit, natural candid expression. 50mm lens, medium framing, soft window light, warm background bokeh, premium creator lifestyle photography, 4:5 aspect ratio."
        },
        {
          title: "Night City / Neon Mood",
          subtitle: "Ensaio noturno urbano",
          usage: "Streetwear premium, perfil dark, capa musical, editorial.",
          emotion: "Magnetismo, mistério, energia noturna.",
          prompt: "Using the attached reference image as PERSON_A, preserve exact face, hair, skin tone and identity. Create a cinematic night urban portrait of PERSON_A standing in a city street with blurred lights and subtle neon reflections, black leather jacket or dark tailored outfit, calm intense gaze, serious expression. 85mm lens, shallow depth of field, realistic nighttime bokeh, premium cinematic nightlife realism, 4:5 aspect ratio."
        },
        {
          title: "Barbershop Portrait",
          subtitle: "Barbearia",
          usage: "Estilo masculino, autocuidado, estética premium, lifestyle.",
          emotion: "Vaidade, identidade, masculinidade refinada.",
          prompt: "Using the attached reference image as PERSON_A, keep exact face, skin tone, hairstyle and identity. Create a detailed masculine portrait of PERSON_A inside a premium barbershop, sharp haircut, clean grooming, dark stylish outfit, relaxed confident expression. 50mm or 85mm portrait lens, contrasty directional lighting, shallow depth of field, warm realistic barbershop background, gritty-luxury realism, 4:5 aspect ratio."
        },
        {
          title: "Faceless Outfit Detail",
          subtitle: "Foto sem mostrar totalmente o rosto",
          usage: "Moda, look do dia, streetwear, estética misteriosa.",
          emotion: "Estilo, mistério, foco na roupa.",
          prompt: "Using the attached reference image as PERSON_A, preserve body proportions and clothing fit while keeping the face partially hidden or cropped naturally. Create a stylish faceless male outfit portrait focusing on the clothing, posture, hands, accessories and sneakers, urban background, relaxed stance. 35mm lens, medium-full framing, shallow depth of field, realistic fashion photography, premium streetwear or minimalist menswear aesthetic, 4:5 aspect ratio."
        },
        {
          title: "Low-Angle Hero Portrait",
          subtitle: "Camera baixa",
          usage: "Retrato de impacto, moda, fitness, editorial.",
          emotion: "Poder, superioridade, presenca forte.",
          prompt: "Using the attached reference image as PERSON_A, preserve exact face, identity and body proportions. Create a low-angle hero portrait of PERSON_A standing confidently, shoulders back, strong posture, direct gaze, modern masculine outfit. Camera positioned slightly below chest level, 35mm or 50mm lens, medium-full vertical framing, dramatic natural or studio lighting, subtle background blur, powerful cinematic realism, 4:5 aspect ratio."
        },
        {
          title: "High-Angle Soft Portrait",
          subtitle: "Camera levemente alta",
          usage: "Foto de perfil, retrato mais suave, lifestyle jovem.",
          emotion: "Proximidade, vulnerabilidade, naturalidade.",
          prompt: "Using the attached reference image as PERSON_A, preserve exact facial identity and proportions. Create a soft high-angle male portrait with the camera slightly above eye level, PERSON_A looking calmly toward the lens, relaxed expression, casual outfit, natural posture. 50mm lens, close or medium-close framing, soft window light, shallow depth of field, clean background, realistic lifestyle portrait, 4:5 aspect ratio."
        }
      ]
    },
    {
      id: "casal-grupo",
      label: "Grupo",
      items: [
        {
          title: "Couple Urban Walk",
          subtitle: "Casal caminhando",
          usage: "Ensaio de casal jovem, lifestyle urbano.",
          emotion: "Conexao, leveza, romance natural.",
          prompt: "Using the attached reference images as PERSON_A and PERSON_B, preserve both identities exactly. Create a natural urban couple portrait of PERSON_A and PERSON_B walking hand in hand outdoors, coordinated casual outfits, warm interaction, candid smiles or side glances. Shot on a 35mm lens, full-body vertical framing, soft golden-hour light, realistic urban or park background, lifestyle couple photography, 4:5 aspect ratio."
        },
        {
          title: "Couple Side Embrace",
          subtitle: "Abraco lateral",
          usage: "Ensaio de casal, noivado, lifestyle, fotos para feed.",
          emotion: "Cumplicidade, proximidade, proteção.",
          prompt: "Using the attached reference images as PERSON_A and PERSON_B, preserve both identities exactly. Create an urban couple portrait with a side embrace, subtle intimate body language, coordinated stylish outfits in black, denim or soft neutrals. 50mm lens, medium-full framing, city wall or glass background, soft evening light or natural side light, shallow depth of field, premium realistic couple portrait, 4:5 aspect ratio."
        },
        {
          title: "Group Streetwear Friends",
          subtitle: "Grupo de amigos masculino",
          usage: "Ensaio de marca, moda urbana, clipe, lifestyle jovem.",
          emotion: "Pertencimento, energia de grupo, cultura de rua.",
          prompt: "Using the attached reference images as PERSON_A, PERSON_B and PERSON_C, preserve each identity consistently. Create a realistic streetwear group portrait with three young men standing together in an urban location, relaxed confident poses, layered oversized outfits, sneakers, natural group chemistry, different body angles, strong visual hierarchy. 35mm lens, medium-wide vertical framing, concrete city background, soft daylight or direct flash editorial style, premium street fashion realism, 4:5 aspect ratio."
        },
        {
          title: "Editorial Two-Men Fashion Pose",
          subtitle: "Dois homens em editorial",
          usage: "Moda masculina, campanha, lookbook, editorial.",
          emotion: "Presença, contraste, sofisticação.",
          prompt: "Using the attached reference images as PERSON_A and PERSON_B, preserve both identities exactly. Create a high-end men's fashion editorial with two male subjects in coordinated but distinct outfits, one standing slightly forward and the other positioned behind at a different angle, strong body language, serious model expressions. 50mm lens, medium-wide framing, minimalist architectural background, cinematic directional lighting, premium magazine editorial realism, 4:5 aspect ratio."
        }
      ]
    },
    {
      id: "formula",
      label: "Fórmula",
      items: [
        {
          title: "Fórmula universal para adaptar qualquer prompt",
          subtitle: "Modelo editável",
          usage: "Trocar pose, expressão, roupa, local, lente, enquadramento, luz e formato.",
          emotion: "Controle criativo e consistência visual.",
          prompt: "Using the attached reference image as PERSON_A, preserve the exact same face, hairstyle, skin tone, body proportions and identity. Create [POSE OR PHOTOSHOOT STYLE], with [BODY POSITION], [FACIAL EXPRESSION], [OUTFIT STYLE], in [LOCATION]. Shot with [LENS], [CAMERA ANGLE], [FRAMING], [LIGHTING STYLE], shallow depth of field, realistic skin texture, premium editorial photography, [ASPECT RATIO]."
        },
        {
          title: "Formatos recomendados",
          subtitle: "Feed, story/Reels e perfil",
          usage: "Use como guia rápido antes de trocar o aspect ratio.",
          emotion: "Organização para publicação.",
          prompt: "Para Nano Banana, os melhores formatos para esse tipo de ensaio sao: 4:5 para feed, 9:16 para story/Reels e 1:1 para foto de perfil."
        }
      ]
    }
  ];

  const referenceImageBase = "./assets/images/Masculina/";
  const referenceImagesByTitle = {
    "Three-Quarter Relaxed Stance": "Three-Quarter Relaxed Stance.jpeg",
    "Wall Lean": "Wall Lean.jpeg",
    "Walking Candid": "Walking Candid.jpeg",
    "Arms Crossed Power Pose": "Arms Crossed Power Pose.jpeg",
    "Outfit Adjust Pose": "Outfit Adjust Pose.jpeg",
    "Seated Forward Lean": "Seated Forward Lean.jpeg",
    "Urban Squat": "Urban Squat.jpeg",
    "Clasped Hands / Thinker Pose": "Clasped Hands-Thinker Pose.jpeg",
    "Over-the-Shoulder Glance": "Over-the-Shoulder Glance.jpeg",
    "Studio Stool Portrait": "Studio Stool Portrait.jpeg",
    "Head Tilt Close-Up": "Head Tilt Close-Up.jpeg",
    "Dark Profile Portrait": "Dark Profile Portrait.jpeg",
    "Fine Art Black and White": "Fine Art Black and White.jpeg",
    "Creative Studio Gel Light": "Creative Studio Gel Light.jpeg",
    "Tattoo / Detail Portrait": "Tatto - Detail Portrait.jpeg",
    "Streetwear Oversized Look": "Urban Squat.jpeg",
    "Old Money / Quiet Luxury": "Resort Linen Beach Sophisticated.jpeg",
    "Relaxed Tailoring": "Corporate Casual.jpeg",
    "Monochrome All Black": "Dark Profile Portrait.jpeg",
    "Earth-Tone Minimalist Look": "Earth -Tone Minimalist Look.jpeg",
    "Grunge / Alternative Style": "Grunce -Alternative Style.jpeg",
    "Techwear / Futuristic Urban": "Techwear - Futuristic Urban.jpeg",
    "Corporate Casual / Personal Brand": "Corporate Casual.jpeg",
    "Fitness / Gym Portrait": "Fitness GYM Portrait.jpeg",
    "Post-Workout Pose": "Post-Workout Pose.jpeg",
    "Outdoor Athletic Lifestyle": "Outdoor Athletic Lifestyle.jpeg",
    "Creator Multi-Look Portrait": "Creator Multi-Look Portrait.jpeg",
    "Mirror Flash Selfie Aesthetic": "Mirror Flash Selfie Aesthetic.jpeg",
    "Resort Linen / Beach Sophisticated": "Resort Linen Beach Sophisticated.jpeg",
    "Home Lifestyle": "Home Lifestyle.jpeg",
    "Coffee Shop / Creator Lifestyle": "Coffee Shop  Creator Lifestyle.jpeg",
    "Night City / Neon Mood": "Night City Neon Mood.jpeg",
    "Barbershop Portrait": "Barbershop Portrait.jpeg",
    "Faceless Outfit Detail": "Faceless Outfit Detail.jpeg",
    "Low-Angle Hero Portrait": "Low-Angle Hero Portrait.jpeg",
    "High-Angle Soft Portrait": "High-Angle Soft Portrait.jpeg",
    "Couple Urban Walk": "Couple Urban Walk.jpeg",
    "Couple Side Embrace": "Couple Side Embrace.jpeg",
    "Group Streetwear Friends": "Group Streetwear Friends.jpeg",
    "Editorial Two-Men Fashion Pose": "Editorial Two-Men Fashion Pose.jpeg",
    "Formula universal para adaptar qualquer prompt": "Creator Multi-Look Portrait.jpeg",
    "Formatos recomendados": "Three-Quarter Relaxed Stance.jpeg"
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

  const appendMeta = (container, label, value) => {
    if (!value) {
      return;
    }

    const item = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = `${label}: `;
    item.appendChild(strong);
    item.append(value);
    container.appendChild(item);
  };

  const createPromptCard = (item, index, label) => {
    const card = document.createElement("article");
    card.className = "prompt-box";

    const titleWrap = document.createElement("div");
    titleWrap.className = "prompt-title";

    const eyebrow = document.createElement("span");
    eyebrow.textContent = `${label} ${String(index + 1).padStart(2, "0")}`;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const referenceFile = item.image || referenceImagesByTitle[item.title];
    if (referenceFile) {
      const figure = document.createElement("figure");
      figure.className = "prompt-reference";

      const image = document.createElement("img");
      image.src = `${referenceImageBase}${referenceFile}`;
      image.alt = `Referencia visual de ${item.title}`;
      image.loading = "lazy";
      image.decoding = "async";

      figure.appendChild(image);
      card.appendChild(figure);
    }

    titleWrap.appendChild(eyebrow);
    titleWrap.appendChild(title);

    if (item.subtitle) {
      const subtitle = document.createElement("p");
      subtitle.textContent = item.subtitle;
      titleWrap.appendChild(subtitle);
    }

    const meta = document.createElement("div");
    meta.className = "prompt-meta";
    appendMeta(meta, "Uso", item.usage);
    appendMeta(meta, "Emocao", item.emotion);

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
    if (meta.childElementCount) {
      card.appendChild(meta);
    }
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
