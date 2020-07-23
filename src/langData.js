const langData = {
  en: {
    header:
      "I like elegant solutions to everyday problems and I hate bureaucracy. I currently live in Montréal, Canada",
    nav: {
      home: "Me",
      email: "Email",
      resume: "Resume",
      readingList: "Reading List",
    },
    home: {
      whoami: {
        title: "whoami",
        content: "A software engineer from Montréal who tries to make the world a cooler place by solving problems",
      },
      personality: {
        title: "Personality",
        insights: {
          text1: "According to the",
          text2: "test, I'm an Observer.",
          text3:
            "Observers are precise, cautious and disciplined, and are painstaking and conscientious in work which requires attention and accuracy.",
          text4: "Here are the main graphs:",
          personaGraphTitle: "Persona (Conscious)",
          flowGraphTitle: "Preference Flow",
          outro: "You can ask me my full insights discovery report by email",
        },
      },
      workstyle: {
        title: "Workstyle",
        text1: "When building software, I mostly follow the guidelines detailed in the Apple's",
        text2: "talk by Josh Tidsbury. I recommend it to everyone who is serious about software.",
        guidelines: {
          title: "Here are the main guidelines:",
          organize: { title: "Organize", content: "Have a clean and tidy workspace" },
          track: { title: "Track", content: "Source control, small commits and useful messages" },
          document: {
            title: "Document",
            content: '"My code self documents itself" does not document why the code is there',
          },
          test: {
            title: "Test",
            content: "A test does not test if a feature works, it tests if that feature does not break in the future",
          },
          analyze: {
            title: "Analyze",
            content:
              "Watch out for overflows, race conditions 👀 and use every tools available to simulate end user environment",
          },
          evaluate: { title: "Evaluate", content: "Code reviews, code reviews and code reviews" },
          decouple: { title: "Decouple", content: "Package shared code and share them to the community ❤️" },
          manage: {
            title: "Manage",
            content:
              "Ask yourself if you really need a dependency and understand that dependency. Talking to you node_modules (ノಠ益ಠ)ノ彡┻━┻",
          },
        },
      },
      social: {
        title: "Social",
      },
      education: {
        title: "Education",
        ets: "Bachelor's degree in Software Engineering at",
        cegep: "DEC in natural sciences at",
      },
      interests: {
        title: "Interests outside the matrix",
        text1: "Alpine skiing",
        text2: "Scuba diving",
        text3: "Microbrewery beer, wine and cheese",
        text4: "Cooking (p.s. my cookies are the best)",
      },
      quotes: {
        title: "Quotes",
      },
    },
    email: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
    },
    resume: {
      download: "Download PDF version",
    },
    readingList: {},
  },
  fr: {
    header:
      "J'aime réaliser des produits simples pour répondre à des besoins simples et je n'aime pas la bureaucratie. J'habite à Montréal",
    nav: {
      home: "Moi",
      email: "Email",
      resume: "CV",
      readingList: "À lire",
    },
    home: {
      whoami: {
        title: "whoami",
        content:
          "Je suis un ingénieur logiciel (B. ing.) de Montréal qui aime résoudre des problèmes de tous les jours.",
      },
      personality: {
        title: "Personnalité",
        insights: {
          text1: "Selon le test",
          text2: ", Je suis un Observateur",
          text3:
            "Les observateurs sont précis et disciplinées, ils portent une grande importance au travail qui nécessite une grande attention.",
          text4: "Voici les graphiques principaux de mon profil:",
          personaGraphTitle: "Persona (Consciente)",
          flowGraphTitle: "Évolution des énergies",
          outro: "Vous pouvez me demander mon rapport complet par email.",
        },
      },
      workstyle: {
        title: "Style de travail",
        text1: "Quand vient le temps de bâtir un logiciel, je me base sur la conférence",
        text2: "de Apple par Josh Tidsbury. Je la recommande à toute personne dans le domaine.",
        guidelines: {
          title: "TL;DW, voici les principaux points:",
          organize: { title: "Organize", content: "Garder son espace de travail simple et bien organisé" },
          track: {
            title: "Track",
            content: "Utiliser un version control comme git, faire de petits commits avec de bon messages",
          },
          document: {
            title: "Document",
            content:
              "\"Mon code n'a pas besoin de commentaire\" ne documente pas pourquoi le code est là et sa relation avec le reste de l'application",
          },
          test: {
            title: "Test",
            content: "Un test ne test pas si la fonctionnalité marche, il test si elle marche toujours dans le futur",
          },
          analyze: {
            title: "Analyze",
            content:
              "Attention aux overflows, aux race conditions 👀 et utiliser tout outil disponible pour simuler l'environnement de l'utilisateur final",
          },
          evaluate: { title: "Evaluate", content: "Code reviews, code reviews et code reviews" },
          decouple: {
            title: "Decouple",
            content: "Mettre en commun le code réutilisable et le partager avec la communauté ❤️",
          },
          manage: {
            title: "Manage",
            content:
              "Se demander si on a vraiment besoin d'une certaine dépendance et prendre le temps de comprendre ce qu'elle fait. C'est à toi que je parle node_modules (ノಠ益ಠ)ノ彡┻━┻",
          },
        },
      },
      social: {
        title: "Social",
      },
      education: {
        title: "Formation",
        ets: "Baccalauréat en génie logiciel à",
        cegep: "DEC en sciences de la nature au",
      },
      interests: {
        title: "Intérêts en dehors de la matrice",
        text1: "Ski alpin",
        text2: "Plongée sous-marine. Requins ❤️",
        text3: "La bière de microbrasserie, le vin et le fromage 🧀",
        text4: "Cuisiner (p.s. mes biscuits sont les meilleurs au monde)",
      },
      quotes: {
        title: "Citations",
      },
    },
    email: {
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer",
    },
    resume: {
      download: "Télécharger la version PDF",
    },
    readingList: {},
  },
};

export { langData };
