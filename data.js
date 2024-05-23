//RESPONSVIDADE, INFOS E LINKS DA ABA CURSOS

const courses = [
    {
        id: 1,
        title: "Introdução ao Desenvolvimento WEB",
        description: "Aprenda o básico de desenvolvimento WEB em: HTML, CSS e JavaScript.",
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
   
    ];

const userProfile = {
    name: "Thomas Henry",
    enrolledCourses: [1, 2, 3]
};
