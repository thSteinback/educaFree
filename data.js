//RESPONSVIDADE, INFOS E LINKS DA ABA CURSOS

const courses = [
    {
        id: 1,
        title: "Introdução ao Desenvolvimento WEB",
        description: "Aprenda o básico de desenvolvimento WEB em: HTML, CSS e JavaScript.",
        Image:"https://codiacademy.com/wp-content/uploads/2023/02/cursointroducaonovo.png/",
        lessons: [ {
            title: "Noções básicas de HTML",
            youtubeLink: "https://www.youtube.com/watch?v=3oSIqIqzN3M"
        },
        {
            title: "Fundamentos de CSS",
            youtubeLink: "https://www.youtube.com/watch?v=LWU2OR19ZG4"
        },
        {
            title: "Fundamentos de JavaScript",
            youtubeLink: "https://www.youtube.com/watch?v=RvcRxEeJqi8"
        }
    ]
    },
    {
        id: 2,
        title: "Técnicas avançadas de JavaScript",
        description: "Aprimore suas habilidades em JavaScript com técnicas e padrões avançados.",
        lessons: [ {
            title: "JavaScript assíncrono",
            youtubeLink: "https://www.youtube.com/watch?v=bmFExIvaJV0"
        },
        {
            title: "Padrões de design JavaScript",
            youtubeLink: "https://www.youtube.com/watch?v=UL-FdBvthHU"
        },
        {
            title:  "Funções Avançadas" ,
            youtubeLink: "https://www.youtube.com/watch?v=kGbbPBRFCE0&list=PL-R1FQNkywO4sD42B6OI6KjG3uOPT0aNl"
        }
    ]
    },
    {
        id: 3,
        title: "Padrões de Projeto em Engenharia de Software",
        description: "Compreender padrões de design comuns e como aplicá-los no desenvolvimento de software.",
        lessons: [   {
            title: "Padrão de Singleton",
            youtubeLink: "https://www.youtube.com/watch?v=yimeXZ1twWs"
        },
        {
            title: "Padrão Observador",
            youtubeLink: "https://www.youtube.com/watch?v=7zwksOohxI4"
        },
        {
            title: "Padrão de Fábrica",
            youtubeLink: "https://www.youtube.com/watch?v=uyOJ2jjBtBs"
        }
    ]
    },
    {
        id: 4,
        title: "Desenvolvimento de Aplicativos Móveis",
        description: "Aprenda a criar aplicativos móveis para iOS e Android.",
        lessons: [{
            title: "Desenvolvimento iOS com Swift",
            youtubeLink: "https://www.youtube.com/watch?v=r18Bvr3Dyfg"
        },
        {
            title: "Desenvolvimento Android com Kotlin",
            youtubeLink: "https://www.youtube.com/watch?v=X60vXSlwvmY"
        },
        {
            title: "UI/UX Design para Mobile",
            youtubeLink: "https://www.youtube.com/watch?v=d6xn5uflUjg"
        }
    ]
    },
    {
        id: 5,
        title: "Análise de Dados com Python",
        description: "Explore técnicas de análise de dados e visualização com Python.",
        lessons: [  {
            title: "Manipulação de dados com Pandas",
            youtubeLink: "https://www.youtube.com/watch?v=iSOQ5Vx43IA"
        },
        {
            title: "Visualização de dados com Matplotlib",
            youtubeLink: "https://www.youtube.com/watch?v=cqjnhgR2j90"
        },
        {
            title: "Aprendizado de Máquina com Scikit-learn",
            youtubeLink: "https://www.youtube.com/watch?v=oEIhkoRu9bw"
        }
    ]
    },
    {
        id: 6,
        title: "Segurança Cibernética",
        description: "Entenda os fundamentos da segurança cibernética e como proteger sistemas e dados.",
        lessons: [  
        {
            title: "Noções básicas de criptografia",
            youtubeLink: "https://www.youtube.com/watch?v=K7iXNwYjk38"
        },
        {
            title: "Testes de Invasão",
            youtubeLink: "https://www.youtube.com/watch?v=9yV2_f5wZxs"
        },
        {
            title: "Segurança de rede" ,
            youtubeLink: "https://www.youtube.com/watch?v=q0S75nKpmcw"
        }
    ]
    },
    {
        id: 7,
        title: "Desenvolvimento de Jogos com Unity",
        description: "Crie jogos incríveis com a popular engine Unity.",
        lessons: [    {
            title: "Introdução ao Unity",
            youtubeLink: "https://www.youtube.com/watch?v=hMrPCkCqb4U"
        },
        {
            title: "Desenvolvimento de jogabilidade",
            youtubeLink: "https://www.youtube.com/watch?v=Sv6D63-SVXo"
        },
        {
            title: "Gráficos avançados" ,
            youtubeLink: "https://www.youtube.com/watch?v=Sh2n4hPGRIw"
        }
    ]
    },
    {
    id: 8,
    title: "Desenvolvimento de Aplicações Web com Django",
    description: "Construa aplicações web robustas utilizando o framework Django em Python.",
    lessons: ["Introdução ao Django", "Criação de modelos de dados", "Desenvolvimento de APIs RESTful"]
    },
    {
    id: 9,
    title: "Aprendizado de Máquina",
    description: "Explore os conceitos e técnicas do aprendizado de máquina.",
    lessons: ["Aprendizado supervisionado", "Aprendizado não supervisionado", "Redes neurais profundas"]
    },
    {
    id: 10,
    title: "Desenvolvimento de Aplicações Desktop com Java",
    description: "Crie aplicações desktop multiplataforma utilizando Java.",
    lessons: ["Interfaces gráficas com Swing", "Persistência de dados com JDBC", "Threads e concorrência"]
    },
    {
    id: 11,
    title: "Desenvolvimento de Aplicações Web com Ruby on Rails",
    description: "Aprenda a construir aplicações web rapidamente com o framework Ruby on Rails.",
    lessons: ["Introdução ao Ruby on Rails", "CRUD com ActiveRecord", "Testes automatizados"]
    },
    {
    id: 12,
    title: "Desenvolvimento de Jogos com Unreal Engine",
    description: "Explore a Unreal Engine para criar jogos AAA.",
    lessons: ["Introdução à Unreal Engine", "Desenvolvimento de ambientes 3D", "Blueprints para lógica de jogo"]
    },
    {
    id: 13,
    title: "Desenvolvimento de Aplicações Web com Flask",
    description: "Construa aplicações web em Python de forma simples e flexível com Flask.",
    lessons: ["Introdução ao Flask", "Criação de rotas e views", "Integração com bancos de dados"]
    },
    {
    id: 14,
    title: "Desenvolvimento de Jogos com Phaser",
    description: "Crie jogos HTML5 2D incríveis com o framework Phaser.",
    lessons: ["Fundamentos do Phaser", "Criação de jogabilidade", "Publicação de jogos"]
    },
    {
    id: 15,
    title: "Desenvolvimento de Aplicações Desktop com Electron",
    description: "Construa aplicações desktop multiplataforma usando tecnologias web com Electron.",
    lessons: ["Introdução ao Electron", "Integração com APIs nativas", "Empacotamento e distribuição"]
    },
    {
    id: 16,
    title: "Desenvolvimento de APIs com Node.js",
    description: "Crie APIs escaláveis e eficientes com Node.js.",
    lessons: ["Introdução ao Node.js", "Express.js para criação de rotas", "Autenticação e autorização"]
    },
    {
    id: 17,
    title: "Desenvolvimento de Jogos com Godot Engine",
    description: "Explore a Godot Engine para criar jogos 2D e 3D.",
    lessons: ["Introdução à Godot Engine", "Desenvolvimento de lógica de jogo", "Animação e efeitos"]
    },
    {
    id: 18,
    title: "Desenvolvimento de Aplicações Web com Vue.js",
    description: "Crie interfaces web interativas e reativas com Vue.js.",
    lessons: ["Introdução ao Vue.js", "Componentização", "Gerenciamento de estado com Vuex"]
    },
    {
    id: 19,
    title: "Desenvolvimento de Jogos com C# e Unity",
    description: "Crie jogos com a poderosa combinação de C# e Unity.",
    lessons: ["Introdução ao C#", "Desenvolvimento de jogabilidade avançada", "Integração de scripts"]
    },
    {
    id: 20,
    title: "Desenvolvimento de Aplicações Nativas com React Native",
    description: "Crie aplicativos móveis nativos para iOS e Android com React Native.",
    lessons: ["Introdução ao React Native", "Componentização", "Navegação e fluxo de dados"]
    },
    {
    id: 21,
    title: "Desenvolvimento de Jogos com LibGDX",
    description: "Explore o framework LibGDX para criar jogos multiplataforma em Java.",
    lessons: ["Fundamentos do LibGDX", "Desenvolvimento de jogabilidade", "Otimização de desempenho"]
    },
    {
    id: 22,
    title: "Desenvolvimento de Aplicações Web com ASP.NET Core",
    description: "Construa aplicações web modernas e escaláveis com ASP.NET Core.",
    lessons: ["Introdução ao ASP.NET Core", "Model-View-Controller (MVC)", "Segurança e autorização"]
    },
    {
    id: 25,
    title: "Desenvolvimento de Jogos com Pygame",
    description: "Crie jogos 2D com a biblioteca Pygame em Python.",
    lessons: ["Introdução ao Pygame", "Desenvolvimento de jogabilidade", "Colisões e física"]
    },
    {
    id: 26,
    title: "Desenvolvimento de Aplicações Web Progressivas (PWA)",
    description: "Construa aplicações web que se comportam como aplicativos nativos com PWA.",
    lessons: ["Fundamentos de PWA", "Service Workers", "Instalação e atualização"]
    },
    {
    id: 27,
    title: "Desenvolvimento de Jogos com Unity e C#",
    description: "Aprenda a criar jogos usando Unity e a linguagem de programação C#.",
    lessons: ["Introdução ao C#", "Desenvolvimento de jogabilidade avançada", "Integração de scripts"]
    },
    {
    id: 28,
    title: "Desenvolvimento de Aplicações Web com Django Rest Framework",
    description: "Construa APIs RESTful poderosas e flexíveis com Django Rest Framework.",
    lessons: ["Introdução ao Django Rest Framework", "Serialização de dados", "Autenticação e permissões"]
    },
    {
    id: 29,
    title: "Desenvolvimento de Jogos com Construct",
    description: "Crie jogos sem programação com a plataforma Construct.",
    lessons: ["Introdução ao Construct", "Desenvolvimento de jogabilidade", "Publicação de jogos"]
    },
    {
    id: 30,
    title: "Desenvolvimento de Aplicações Desktop com Qt",
    description: "Construa aplicativos desktop modernos e poderosos com o framework Qt.",
    lessons: ["Introdução ao Qt", "Desenvolvimento de interfaces gráficas", "Comunicação com banco de dados"]
    },
    {
    id: 31,
    title: "Desenvolvimento de Jogos com RPG Maker",
    description: "Crie seus próprios jogos de RPG com o RPG Maker.",
    lessons: ["Introdução ao RPG Maker", "Criação de mapas e eventos", "Personalização avançada"]
    },
    {
    id: 32,
    title: "Desenvolvimento de Aplicações Web com Meteor.js",
    description: "Construa aplicações web em tempo real com o framework Meteor.js.",
    lessons: ["Introdução ao Meteor.js", "Sincronização de dados em tempo real", "Publicação de aplicativos"]
    },
    {
    id: 33,
    title: "Desenvolvimento de Jogos com GameMaker Studio",
    description: "Crie jogos multiplataforma com o GameMaker Studio.",
    lessons: ["Introdução ao GameMaker Studio", "Desenvolvimento de jogabilidade", "Exportação e distribuição"]
    },
    {
    id: 34,
    title: "Desenvolvimento de Aplicações Web com ASP.NET MVC",
    description: "Construa aplicações web robustas com o framework ASP.NET MVC.",
    lessons: ["Introdução ao ASP.NET MVC", "Criação de controllers e views", "Validação de dados"]
    },
    {
    id: 35,
    title: "Desenvolvimento de Jogos com GameSalad",
    description: "Crie jogos para dispositivos móveis de forma rápida e fácil com o GameSalad.",
    lessons: ["Introdução ao GameSalad", "Desenvolvimento de jogabilidade", "Publicação de jogos"]
    },
    {
    id: 36,
    title: "Desenvolvimento de Aplicações Desktop com WPF",
    description: "Construa aplicativos desktop modernos e ricos em recursos com WPF.",
    lessons: ["Introdução ao WPF", "XAML para criação de interfaces", "Data binding e estilos"]
    },
    {
    id: 37,
    title: "Desenvolvimento de Jogos com Game Development with C++",
    description: "Aprenda a criar jogos usando C++ e as principais bibliotecas de jogos.",
    lessons: ["Introdução ao C++ para jogos", "Desenvolvimento de jogabilidade avançada", "Otimização de desempenho"]
    },
    {
    id: 38,
    title: "Desenvolvimento de Aplicações Web com Svelte",
    description: "Construa aplicativos web eficientes e reativos com o framework Svelte.",
    lessons: ["Introdução ao Svelte", "Componentização", "Reatividade e animações"]
    },
    {
    id: 39,
    title: "Desenvolvimento de Jogos com Corona SDK",
    description: "Crie jogos multiplataforma com facilidade usando o Corona SDK.",
    lessons: ["Introdução ao Corona SDK", "Desenvolvimento de jogabilidade", "Publicação de jogos"]
    },
    {
    id: 40,
    title: "Desenvolvimento de Aplicações Desktop com GTK",
    description: "Construa aplicativos desktop modernos e personalizáveis com GTK.",
    lessons: ["Introdução ao GTK", "Desenvolvimento de interfaces gráficas", "Personalização avançada"]
    },
    {
    id: 41,
    title: "Introdução à Lógica de Programação com Portugol",
    description: "Aprenda os fundamentos da lógica de programação utilizando Portugol.",
    lessons: ["Variáveis e tipos de dados", "Estruturas de controle", "Funções e procedimentos"]
    },
    {
    id: 42,
    title: "Desenvolvimento de Aplicações Desktop com Delphi",
    description: "Construa aplicativos desktop poderosos com Delphi.",
    lessons: ["Introdução ao Delphi", "Desenvolvimento de interfaces gráficas", "Acesso a banco de dados"]
    },
    {
    id: 43,
    title: "Desenvolvimento de APIs RESTful com Spring Boot",
    description: "Construa APIs RESTful escaláveis e eficientes com Spring Boot em Java.",
    lessons: ["Introdução ao Spring Boot", "Criação de endpoints REST", "Documentação com Swagger"]
    },
    {
    id: 44,
    title: "Desenvolvimento de Aplicações Web com ASP.NET Core MVC",
    description: "Construa aplicações web modernas com o framework ASP.NET Core MVC.",
    lessons: ["Introdução ao ASP.NET Core MVC", "Roteamento e controllers", "Views e layouts"]
    },
    {
    id: 45,
    title: "Desenvolvimento de Aplicações Web com Flask",
    description: "Construa aplicações web em Python de forma simples e flexível com Flask.",
    lessons: ["Introdução ao Flask", "Criação de rotas e views", "Integração com bancos de dados"]
    },
    {
    id: 46,
    title: "Desenvolvimento de Aplicações Web com Laravel",
    description: "Construa aplicações web elegantes e eficientes com o framework Laravel em PHP.",
    lessons: ["Introdução ao Laravel", "Criação de rotas e controllers", "Eloquent ORM"]
    },
    {
    id: 47,
    title: "Desenvolvimento de Aplicações Web com Ruby on Rails",
    description: "Aprenda a construir aplicações web rapidamente com o framework Ruby on Rails.",
    lessons: ["Introdução ao Ruby on Rails", "CRUD com ActiveRecord", "Testes automatizados"]
    },
    {
    id: 48,
    title: "Desenvolvimento de Aplicações Web com Vue.js",
    description: "Crie interfaces web interativas e reativas com Vue.js.",
    lessons: ["Introdução ao Vue.js", "Componentização", "Gerenciamento de estado com Vuex"]
    },
    {
    id: 49,
    title: "Desenvolvimento de Aplicações Web com Angular",
    description: "Construa aplicações web escaláveis com o framework Angular.",
    lessons: ["Introdução ao Angular", "Componentes e diretivas", "Comunicação com servidor"]
    },
    {
    id: 50,
    title: "Desenvolvimento de Aplicações Web com Django",
    description: "Construa aplicações web robustas utilizando o framework Django em Python.",
    lessons: ["Introdução ao Django", "Criação de modelos de dados", "Desenvolvimento de APIs RESTful"]
    },
    {
    id: 51,
    title: "Desenvolvimento de Aplicações Web com ASP.NET Core Web API",
    description: "Construa APIs web poderosas e escaláveis com ASP.NET Core.",
    lessons: ["Introdução ao ASP.NET Core Web API", "Roteamento e controllers", "Autenticação e autorização"]
    },
    {
    id: 52,
    title: "Desenvolvimento de Aplicações Web com Express.js",
    description: "Construa aplicações web rápidas e escaláveis com o framework Express.js em Node.js.",
    lessons: ["Introdução ao Express.js", "Rotas e middlewares", "Integração com bancos de dados"]
    },
    {
    id: 53,
    title: "Desenvolvimento de Aplicações Web com ASP.NET MVC",
    description: "Construa aplicações web robustas com o framework ASP.NET MVC em C#.",
    lessons: ["Introdução ao ASP.NET MVC", "Criação de controllers e views", "Validação de dados"]
    },
    {
    id: 54,
    title: "Desenvolvimento de Aplicações Web com React.js",
    description: "Construa interfaces web dinâmicas com React.js.",
    lessons: ["Introdução ao React.js", "Componentes e props", "Gerenciamento de estado"]
    },
    {
    id: 55,
    title: "Desenvolvimento de Aplicações Web com Ruby on Rails",
    description: "Aprenda a construir aplicações web rapidamente com o framework Ruby on Rails.",
    lessons: ["Introdução ao Ruby on Rails", "CRUD com ActiveRecord", "Testes automatizados"]
    },
    {
    id: 56,
    title: "Desenvolvimento de Aplicações Web com Spring MVC",
    description: "Construa aplicações web escaláveis com o framework Spring MVC em Java.",
    lessons: ["Introdução ao Spring MVC", "Configuração e roteamento", "Validação de formulários"]
    },
    {
    id: 57,
    title: "Desenvolvimento de Aplicações Web com Flask",
    description: "Construa aplicações web em Python de forma simples e flexível com Flask.",
    lessons: ["Introdução ao Flask", "Criação de rotas e views", "Integração com bancos de dados"]
    },
    {
    id: 58,
    title: "Desenvolvimento de Aplicações Web com ASP.NET Core Razor Pages",
    description: "Construa aplicações web com Razor Pages usando o ASP.NET Core.",
    lessons: ["Introdução ao ASP.NET Core Razor Pages", "Criação de páginas Razor", "Validação de entrada"]
    },
   
    ];

    const userProfile = {
        name: "Thomas Henry",
        enrolledCourses: [1, 2, 3]
    };

   /* const courseContainer = document.getElementById('course');

    // Criar e adicionar imagem do curso
    const courseImage = document.createElement('img');
    courseImage.src = "https://codiacademy.com/wp-content/uploads/2023/02/cursointroducaonovo.png/ ";
    courseImage.alt = 'Imagem do Curso';
    courseImage.className = 'course-image';
    courseContainer.appendChild(courseImage);

    // Criar e adicionar título e descrição do curso
    const courseTitle = document.createElement('h1');
    courseTitle.textContent = course.title;
    courseContainer.appendChild(courseTitle);

    const courseDescription = document.createElement('p');
    courseDescription.textContent = course.description;
    courseContainer.appendChild(courseDescription);

    // Criar e adicionar lições
    course.lessons.forEach(lesson => {
        const lessonDiv = document.createElement('div');
        lessonDiv.className = 'lesson';

        const lessonImage = document.createElement('img');
        lessonImage.src = lesson.image;
        lessonImage.alt = `Imagem da ${lesson.title}`;
        lessonImage.className = 'lesson-image';
        lessonDiv.appendChild(lessonImage);

        const lessonTitle = document.createElement('h2');
        lessonTitle.textContent = lesson.title;
        lessonDiv.appendChild(lessonTitle);

        const lessonLink = document.createElement('a');
        lessonLink.href = lesson.youtubeLink;
        lessonLink.textContent = 'Assistir no YouTube';
        lessonDiv.appendChild(lessonLink);

        courseContainer.appendChild(lessonDiv);
    });*/