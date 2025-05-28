document.addEventListener("DOMContentLoaded", () => {
  const projets = {
    1: {
      titre: "Classement de dépèche",
      description: "Classification automatique de dépêches dans des catégories. Choix des différentes catégories en fonction d'un lexique qui est généré premièrement manuellement puis automatiquement (en fonction du nombre de fois où un mot est présent dans toutes les dépêches (dépêches d'exemple), puis nous allons lui donner un poids (3, 2, 1), ensuite nous comparons les mots des dépêches que nous voulons ranger par catégories avec les mots du lexique. S'il y a dans la dépêche analysée un grand nombre de mots qui ont un poids élevé, la dépêche sera donc rangée dans cette catégorie",
      realisation: {
        intro: "Système de calcul des scores pour une dépèche et association d'un poids pour chaque mot dans une dépèche.",
        points: [
          "METHODE DE CLASSEMENT : classement d'une dépêche en fonction des mots en commun avec un lexique généré automatiquement en fonction du poids des mots en commun",
          "BILAN : Bilan réalisé en anglais avec une analyse de complexité pour certaines méthodes et la comparaison des différents résultats obtenus"
        ]
      },
      competences: {
        points: [
          "Réaliser un développement d'application : c'est-à-dire concevoir, coder, tester et intégrer une solution informatique pour un client.",
          "Optimiser des applications informatiques : proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d'exécution, précision, consommation de ressources"
        ]
      },
      images: ["image/java.webp", "image/word.webp"],
      subtitles: ["JAVA", "WORD"],
      lien: "https://exemple.com/projet1"
    },
    2: {
      titre: "Installation et configuration d'un poste de travail",
      description: "Installation complète d'un système d'exploitation Debian 12 sur une machine virtuelle ainsi que de l'IDE Intelij IDEA",
      realisation: {
        intro: "",
        points: [
          "Installation d'un système d'exploitation Debian 12 sur une machine virtuelle",
          "Installation de logiciel avec trois bibliothèques différentes",
          "Réalisation d'un schéma d'installation complet de Debian 12 et de l'IDE",
          { image: "image/css.png" },
        ]
      },
      competences: {
        points: [
          "Administrer des systèmes informatiques communicants complexes : Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d'une organisation."
        ]
      },
      images: ["image/debian-logo.png", "image/drawIo.png"],
      subtitles: ["DEBIAN-12", "DRAW.IO"],
      lien: "https://exemple.com/projet1"
    },
    3: {
      titre: "Création d'une base de données pour un centre de bowling",
      description: "Création, test et modification d'une base de données d'un centre de bowling destinée à la réservation de parties pour les différent adhérent du club de bowling",
      realisation: {
        intro: "",
        points: [
          "Passage d'un SEA à un SLR",
          "Création d'un fichier creat.sql pour créer les différentes tables de la base de données",
          "Création d'un fichier de suppression (delete.sql) des différentes tables",
          "Création d'un fichier de test (test.sql) pour tester les différentes contraintes définies lors de la création des différentes tables",
          "Peuplement et modification de la base de données sont des contraintes des différentes tables"
        ]
      },
      competences: {
        points: [
          "Gérer des données de l’information : Concevoir, gérer, administrer et exploiter les données et mettre à disposition toutes les informations pour un bon pilotage"
        ]
      },
      images: ["image/sql.png", "image/word.webp"],
      subtitles: ["SQL", "WORD"],
      lien: "https://exemple.com/projet1"
    },
    4: {
      titre: "Création d'un site web institutionnel",
      description: "Création d'un site web institutionnel du secteur du numérique à destination de la génération Alpha. Le site a comme contrainte d'être sobre et écologique. L'entreprise choisit et le groupe ALTEN",
      realisation: {
        intro: "",
        points: [
          "Création d'un site web interractif",
          "Création d'un Recceuil des besoins qui convertit des phrases d'un langage professionnel à un langage plus simple, compréhensible pour la génération ALPHA",
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
      lien: "https://exemple.com/projet1"
    },
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