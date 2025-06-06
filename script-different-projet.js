document.addEventListener("DOMContentLoaded", () => {
  const projets = {
    1: {
      titre: "Classement de dépêche",
      description: "L'objectif du projet était de développer, en groupe de deux, un programme sans interface en Java capable de classer un certain nombre de dépêches portant sur différentes catégories comme le sport, la politique, l'économie, la musique à l'aide d'un lexique de mots construit dans un premier temps manuellement puis automatiquement.",
      realisation: {
        intro: "",
        points: [
          "METHODE DE CALCUL DES SCORES : Pour pouvoir classer les dépêches, j'ai dû créer une méthode en Java capable, en fonction des mots contenus dans la dépêche de donnée un score à chaque catégorie pour sélectionner celle dont le score était le plus élevé.",
          "METHODE D'ATRIBUTION D'UN POID : afin de calculer le score d'une dépêche, il fallait donner un poids entre (1 et 3) à chaque mot de la dépêche pour ensuite comparer les mots dont le poids était élevé avec le lexique.",
          "BILAN : moi et mon coéquipier avons dû réaliser un bilan en anglais parlant du projet, avec une analyse de complexité pour certaines méthodes ainsi que la comparaison des différents résultats obtenus."
        ]
      },
      competences: {
        points: [
          "Réaliser un développement d'application : c'est-à-dire concevoir, coder, tester et intégrer une solution informatique pour un client.",
          "Optimiser des applications informatiques : proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d'exécution, précision, consommation de ressources."
        ]
      },
      images: ["image/Java.webp", "image/word.webp"],
      subtitles: ["JAVA", "WORD"],
      lien: "https://github.com/Nth-C/CLASSEMENT-DE-DEPECHE"
    },
    2: {
      titre: "Installation et configuration d'un poste de travail",
      description: "L'objectif de ce projet était d'installer un système d'exploitation Linux et de l'environnement de travail KDE Plasma sur une machine virtuelle. Une fois l'installation terminée, il fallait installer l'environnement de développement IDEA IntelliJ de trois façons différentes : sous forme d'archive (.tar.gz) et depuis les magasins d'applications Snap et Flatpak.",
      realisation: {
        intro: "",
        points: [
          "Installation d'un système d'exploitation Debian 12 sur une machine virtuelle.",
          "Installation de l'environnement de travail KDE Plasma.",
          "Installation de logiciel sous forme d'archive (.tar.gz) et depuis les magasins d'applications Snap et Flatpak.",
          "Réalisation d'un schéma d'installation complet de Debian 12 et de l'IDE.",
          { image: "image/carte-mental.svg" },
        ]
      },
      competences: {
        points: [
          "Administrer des systèmes informatiques communicants complexes : Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d'une organisation."
        ]
      },
      images: ["image/debian-logo.png", "image/drawIo.png"],
      subtitles: ["DEBIAN-12", "DRAW.IO"],
      lien: "https://github.com/Nth-C/Installation-et-configuration-d-un-poste-de-travail"
    },
    3: {
      titre: "Création d'une base de données pour un centre de bowling",
      description: "L'objectif de ce projet était de créer une base de données en groupe de deux pour un club de bowling nommé SUPERBALL. Le but était de stocker les informations liées à la réservation d'une piste de jeu, à la réservation de chaussures spécialisées pour la pratique de ce sport. Pour réaliser ce projet, on nous a fourni les règles de gestion et d'organisation, le SEA de la future Base de données et les expressions des besoins.",
      realisation: {
        intro: "",
        points: [
          "En appliquant les règles de passage d'un SEA à un SLR, j'ai dû réaliser le schéma relationnel (SLR) de la Base de données BOWLING.",
          "Création d'un fichier creat.sql pour créer le script de création de la Base de données (fichier de création des différentes tables composant la base de données).",
          "Création d'un fichier drop.sql contenant les instructions de suppression des relations de la Base de données (suppression de toutes les tables de la base de données).",
          "Création d'un fichier test.sql contenant les instructions de test du script de création de la BD (Instructions INSERT destinées à la vérification de la prise en compte des différentes contraintes).",
          "Peuplement et modification de la base de données : Création d'un jeu de données initial, puis ajout des demandes de réservation au jeu de données initial."
        ]
      },
      competences: {
        points: [
          "Gérer des données de l’information : Concevoir, gérer, administrer et exploiter les données et mettre à disposition toutes les informations pour un bon pilotage"
        ]
      },
      images: ["image/sql.png", "image/word.webp"],
      subtitles: ["SQL", "WORD"],
      lien: "https://github.com/Nth-C/Creation-d-une-base-de-donnees-pour-un-centre-de-bowling"
    },
    4: {
      titre: "Création d'un site web institutionnel",
      description: "L'objectif de ce projet était, en groupe de trois, de créer un site web institutionnel dans le secteur du numérique à destination d'élèves de 3ème qui ne connaissent pas le monde de l’entreprise et qui veulent choisir un stage. Pour ce projet, nous devions respecter plusieurs contraintes comme le fait que le site web devait être pratique, sobre écologiquement et visuellement. Nous avions le choix entre six entreprises et nous avons choisi le groupe ALTEN",
      realisation: {
        intro: "",
        points: [
          "Pour débuter le projet, nous avons dû créer un Recueil du besoin. Nous avons dû rechercher des informations présentant l’entreprise dans sa globalité (activité de l’entreprise, les produits et/ou services qu’elles proposent, la transition numérique et écologique de cette entreprise). Le vocabulaire devait être expliqué pour qu’il soit compréhensible pour des personnes non-initiées, comme des élèves de 3ième, en recherche de stage",
          "Conception et implémentation du site Web : pour cette partie nous avons dû réaliser la conception (sous forme de maquette) et l’implémentation du nouveau site internet de l’entreprise",
        ]
      },
      competences: {
        points: [
          "Conduire un projet : Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.",
          "Collaborer au sein d’une équipe informatique : Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique."
        ]
      },
      images: ["image/HTML5.png", "image/CSS.png", "image/word.webp"],
      subtitles: ["HTML5", "CSS", "WORD"],
      lien: "https://nth-c.github.io/site-web-institutionnel/"
    },
    5: {
      titre: "Exploitation d'une base de données",
      description: "Tout au long de ce projet, nous étions deux membres d’une petite association sensible à l'accès libre aux données et souhaitant informer les usagers sur les accidents de la route en France ces vingt dernières années. L'objectif de ce projet est, à partir d’une base de données disponible en opendata, de réaliser une étude simple contenant des graphiques appropriés pour répondre à une question précise (dans notre cas, notre thème était l'étude des accidents de la route pour la région 'Auvergne-Rhône-Alpes' et les cyclistes (conducteurs ou passagers), entre les années 2006 à 2023). Pour ce faire, le projet s'est déroulé en trois grandes étapes.",
      realisation: {
        intro: "",
        points: [
          "Étape 1 : L'objectif de cette première phase était d'explorer les données, nettoyer ces données, en extraire celles qui sont utiles pour notre sujet d'étude, commencer à les transformer en ajoutant quelques données calculées et enfin d'exporter le résultat dans quatre fichiers CSV pour l'étape 2.",
          "Etape 2 : production des graphiques, nous avons dû à l'aide du langage R réaliser différents graphiques (que l'on pouvait choisir) à l'aide des données que nous avions triées précédemment.",
          "Etape 3 : Création d'un document sur les contraintes et risques du projet, pour cette dernière étape nous avons dû réaliser une analyse des contraintes (temporelle, économique et qualité, et indiquer quel en est l’impact sur notre travail), des risques (liés à la qualité, aux ressources, aux délais et les risques externes) du projet et évaluer la criticité du risque sur une échelle [faible-moyenne-forte] sous forme d'un document PDF."
        ]
      },
      competences: {
        points: [
          "Gérer des données de l’information : Concevoir, gérer, administrer et exploiter les données et mettre à disposition toutes les informations pour un bon pilotage"
        ]
      },
      images: ["image/sql.png", "image/R-logo.png", "image/word.webp"],
      subtitles: ["PostgreSQL", "R", "WORD"],
      lien: "https://github.com/Nth-C/Exploitation-d-une-base-de-donnees"
    },
    6: {
      titre: "Guide d'installation d'un serveur Debian équipé",
      description: "L'objectif de ce projet était de réaliser un guide d'installation (de manière individuelle) rédigé en anglais d'un serveur Debian 12 équipé d'Apache, PostgreSQL et PHP fonctionnel et interrogeable depuis la machine hôte. Le guide devait être être rédigé pour un étudiant en BUT1 INFO qui aurait suivi le module R1.04",
      realisation: {
        intro: "",
        points: [
          "Pour débuter le projet, j'ai dû moi-même, sur une machine virtuelle, réaliser l'installation d'Apache, PostgreSQL, PHP et PHPPgAdmin",
          "En deuxième partie j'ai réalisé la préparation du guide d'installation à l'aide d'un éditeur de documents tel que LibreOffice Writer, Microsoft Word",
        ]
      },
      competences: {
        points: [
          "Administrer des systèmes informatiques communicants complexes : Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d'une organisation."
        ]
      },
      images: ["image/debian-logo.png", "image/sql.png", "image/word.webp"],
      subtitles: ["DEBIAN-12", "PostgreSQL", "WORD"],
      lien: "https://github.com/Nth-C/Guide-d-installation-d-un-serveur-Debian"
    },
    7: {
      titre: "APPLICATION DE GESTION D'ÉVÉNEMENT",
      description: "L'objectif de ce projet était de réaliser en équipe de six l’analyse, la conception et le développement d'un outil d’aide au service des organisateurs d'événements. Dans le cadre de ce projet, nous nous sommes intéressés particulièrement à la réalisation d’un outil pour l’administration d'un ou plusieurs événements. Cet outil devait être implanté comme une application lourde. Nous lui avons donné le nom de GuildeBuilding",
      realisation: {
        intro: "",
        points: [
          "Document de cadrage du projet : pour commencer le projet, nous avons dû définir nos objectifs (Quel type d’événement allez-vous prendre en charge? Pourquoi?), les contraintes et leurs impacts sur le projet, l’analyse et la gestion des risques et enfin nous avons dû définir l’organisation de notre équipe (Qui fait quoi?, etc...).",
          "Dossier de modélisation : dans ce dossier, nous avons dû faire deux parties (analyse et conception). Il fallait décrire et modéliser les besoins, puis les hiérarchiser afin de mettre en avant les besoins principaux, puis décrire et modéliser les processus",
          "Mise en œuvre des concepts mathématiques (théorie des graphes) : nous avons dû réaliser l’ordonnancement de tâches en vue de l’organisation d’un colloque. L’objectif était d’abord d’identifier les différentes tâches et proposer par la suite un graphe afin d’obtenir les dates au plus tôt, les dates au plus tard ainsi que les marges disponibles pour les différentes tâches.",
          "Mise en œuvre des concepts mathématiques (optimisation) : L'objectif était de modéliser le problème sous forme d’une optimisation d’une fonction (nous avons choisi une fonction à 3 variables).",
          "Réalisation/Implémentation : nous avons dû réaliser le code de l'application en Java ainsi que l'interface de l'application.",
        ]
      },
      competences: {
        points: [
          "Réaliser un développement d'application : c'est-à-dire concevoir, coder, tester et intégrer une solution informatique pour un client.",
          "Optimiser des applications informatiques : proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d'exécution, précision, consommation de ressources.",
          "Conduire un projet : Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.",
          "Collaborer au sein d’une équipe informatique : Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique."
        ]
      },
      images: ["image/word.webp", "image/Java.webp", "image/Java-FX.png", "image/R-logo.png", "image/whimsical.png"],
      subtitles: ["WORD", "JAVA", "JavaFX", "R", "WHIMSICAL"],
      lien: "https://github.com/Nth-C/APPLICATION-DE-GESTION-D-EVENEMENT"
    }
  };

    function renderSection(section) {
    if (typeof section === "string") {
      return `<p>${section.replace(/\n/g, "<br>")}</p>`;
    }

    if (typeof section === "object" && Array.isArray(section.points)) {
      const intro = section.intro ? `<p>${section.intro}</p>` : "";
      let html = intro;
      let listItems = "";
      let imageBlocks = "";

      section.points.forEach((item) => {
        if (typeof item === "string") {
          listItems += `<li>${item}</li>`;
        } else if (typeof item === "object" && item.image) {
          imageBlocks += `
            <div class="inline-image">
              <img src="${item.image}" alt="${item.alt || "Illustration"}">
            </div>
          `;
        }
      });

      if (listItems) {
        html += `<ul>${listItems}</ul>`;
      }

      html += imageBlocks;
      return html;
    }

    return "";
  }

  const id = new URLSearchParams(window.location.search).get("id");
  const projet = projets[id];

  if (!projet) {
    document.body.innerHTML = "<h1 style='text-align:center;'>Projet introuvable</h1>";
    return;
  }

  const sections = document.querySelectorAll(".espacement-30 > p");
  const h1Main = document.querySelector(".espacement-30 h1");
  const h2Main = document.querySelector(".espacement-30 h2");
  const competenceTitle = document.querySelector(".competence-projet h2");
  const competenceText = document.querySelector(".competence-projet p");
  const imageContainer = document.querySelector("main");
  const lienProjet = document.querySelector(".accee-projet");

  h1Main.textContent = projet.titre;
  sections[0].innerHTML = renderSection(projet.description);
  h2Main.textContent = "Ce que j'ai fait";
  sections[1].innerHTML = renderSection(projet.realisation);
  sections[2].innerHTML = "";

  competenceTitle.textContent = "Compétences utilisées";
  if (Array.isArray(projet.competences?.points)) {
    competenceText.innerHTML = renderSection(projet.competences);
  } else if (Array.isArray(projet.competences)) {
    competenceText.innerHTML = `<ul>${projet.competences.map(c => `<li>${c}</li>`).join("")}</ul>`;
  } else {
    competenceText.innerHTML = "";
  }

  // Images principales avec sous-titres
  imageContainer.innerHTML = "";
  projet.images.forEach((src, index) => {
    const div = document.createElement("div");
    div.classList.add("image-with-subtitle");

    const img = document.createElement("img");
    img.src = src;
    img.alt = `Image du projet ${index + 1}`;
    div.appendChild(img);

    const subtitleText = projet.subtitles?.[index] || "";
    if (subtitleText) {
      const subtitle = document.createElement("div");
      subtitle.classList.add("subtitle");
      subtitle.textContent = subtitleText;
      div.appendChild(subtitle);
    }

    imageContainer.appendChild(div);
  });

  lienProjet.href = projet.lien;

  // ✅ Ajoute la classe active-projet à l'élément du menu déroulant correspondant
  const navLinks = document.querySelectorAll(".menue-deroulant-cache a");

  navLinks.forEach(link => {
    const linkId = new URL(link.href).searchParams.get("id");

    if (linkId === id) {
      link.classList.add("active-projet");
    } else {
      link.classList.remove("active-projet");
    }
  });
});
