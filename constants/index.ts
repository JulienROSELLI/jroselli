import { euroerp, ibis, mercure } from "@/assets";

import { StaticImageData } from "next/image";

export type objectLink = {
  id: string;
  name: string;
  path: string;
};

export const navLinks: Array<objectLink> = [
  // {
  //   id: "home",
  //   name: "Home",
  //   path: "/",
  // },
  {
    id: "introduction",
    name: "Introduction",
    path: "#introduction"
  },
  {
    id: "carriere",
    name: "Carriere",
    path: "#carriere"
  },
  {
    id: "technologies",
    name: "Technologies",
    path: "#technologies"
  },
  {
    id: "projets",
    name: "Projets",
    path: "#projets"
  }
  // {
  //   id: "connaissances",
  //   name: "Connaissances",
  //   path: "#connaissances",
  // },
];

export type objectDataCards = {
  titre: string;
  texte: string;
};

export const dataPresentation: objectDataCards = {
  titre: "Présentation",
  texte:
    "Développeur Full-stack de plus de 5 ans d’expérience dans le développement \
     d’application web de type ERP ayant pour but d’automatiser les processus de gestion \
     de l’entreprise et l’interfaçage avec les différentes APIs et outils du client. \
     Ces deux dernières années m’ont aussi amenée à prendre en charge l’administration \
      système et des serveurs cloud.   Il serait difficile d’être exhaustif sur la liste des \
      technologies utilisées car une partie de mes fonctions était la veille technologique et R&D \
      qui m’ont permis de travailler avec beaucoup de technologies et applications comme couchdb, \
      Lucene, apache2, C, C#, React Native, Katalon ou encore python mais n’ayant jamais utilisé ces \
      outils et langage en mode production je ne peux pas prétendre les maitriser."
};

export const dataCarriere: objectDataCards = {
  titre: "Carriere",
  texte:
    "Ma carriere on peut dire que j'en ai eu trois 7 ans en hotelleries a ouvrir \
     des hotels ibis en espagne puis mon bar pendant 7 ans \
     puis l'informatique je suis depuis 7 ans chez euroerp "
};

export const dataTecnologies: objectDataCards = {
  titre: "Langages et frameworks",
  texte: "Mes projest m'ont ammené a utilisé diverses technologies"
};

export const dataProjets: objectDataCards = {
  titre: "Projets",
  texte: "Les diferrents projets construits"
};

export type objectExperience = {
  id: number;
  entreprise: string;
  date: string;
  logo: StaticImageData;
  poste: string;
  bgLogo: string | "#ffff";
  desciption: Array<string>;
};

export const experiences: Array<objectExperience> = [
  {
    id: 1,
    entreprise: "Euroerp France",
    date: "2022 - Aujourd'hui",
    logo: euroerp,
    poste: "Responsable technique",
    bgLogo: "#ffff",
    desciption: [
      "r&d",
      "suivi developpeur",
      "revud de code",
      "veille technologique",
      ".......... a completer"
    ]
  },
  {
    id: 2,
    entreprise: "Euroerp Maroc",
    date: "2019 - 2022",
    logo: euroerp,
    poste: "Responsable technique",
    bgLogo: "#ffff",
    desciption: [
      "r&d",
      "suivi developpeur",
      "revud de code",
      "veille technologique",
      ".......... a completer"
    ]
  },
  {
    id: 3,
    entreprise: "Euroerp Maroc",
    date: "2017 - 2019",
    logo: euroerp,
    poste: "Responsable service client",
    bgLogo: "#ffff",
    desciption: [
      "creation du service",
      "creation de protocole de tests",
      "gestion des bugs",
      "gestion des clients",
      "definitions fonctionnels des developpements",
      ".......... a completer"
    ]
  },
  {
    id: 4,
    entreprise: "Cafe Claudine",
    date: "2010 - 20017",
    logo: ibis,
    poste: "Proprietaire",
    bgLogo: "#ffff",
    desciption: [
      "Tout",
      "gestion de stock",
      "comptabilte",
      "gestion des achets",
      "gestion des clients",
      "..."
    ]
  },

  {
    id: 5,
    entreprise: "Hotel Ibis Madrid Alcobendas- Accor Hoteles España",
    date: "2007 - 2010",
    logo: ibis,
    poste: "Responsable reception",
    bgLogo: "#ffff",
    desciption: [
      "Ouverture de l'hotel",
      "Assurer le service de nuit",
      "C-in et c-out des clients de l'hotel",
      "procedure de cloture de nuit",
      "Etat des lieux du hotel",
      "Gestion des clients",
      "Preparation du buffet petit dej"
    ]
  },
  {
    id: 6,
    entreprise: "Hotel Ibis Murcia- Accor Hoteles España",
    date: "2005 - 2007",
    logo: ibis,
    poste: "Receptionniste/cuisinier ",
    bgLogo: "#ffff",
    desciption: [
      "Assurer le service de nuit",
      "C-in et c-out des clients de l'hotel",
      "procedure de cloture de nuit",
      "Etat des lieux du hotel",
      "Gestion des clients",
      "Preparation du buffet petit dej"
    ]
  },
  {
    id: 7,
    entreprise: "Hotel Ibis Valencia Bonaire - Accor Hoteles España",
    date: "2003 - 2005",
    logo: ibis,
    poste: "Receptionniste ",
    bgLogo: "#ffff",
    desciption: [
      "Assurer le service de nuit",
      "C-in et c-out des clients de l'hotel",
      "procedure de cloture de nuit",
      "Etat des lieux du hotel",
      "Gestion des clients",
      "Preparation du buffet petit dej"
    ]
  },
  {
    id: 8,
    entreprise: "Hotel Ibis Murcia - Accor Hoteles España",
    date: "2002 - 2003",
    logo: ibis,
    poste: "Receptionniste de nuit",
    bgLogo: "#ffff",
    desciption: [
      "Ouverture de l'hotel",
      "Assurer le service de nuit",
      "C-in et c-out des clients de l'hotel",
      "procedure de cloture de nuit",
      "Etat des lieux du hotel",
      "Gestion des clients",
      "Preparation du buffet petit dej"
    ]
  },
  {
    id: 9,
    entreprise: "Hotel Mercure Gentilly - Accor",
    date: "2001 - 2002",
    logo: mercure,
    poste: "Receptionniste de nuit",
    bgLogo: "#ffff",
    desciption: [
      "Assurer le service de nuit",
      "C-in et c-out des clients de l'hotel",
      "procedure de cloture de nuit",
      "Etat des lieux du hotel",
      "Gestion des clients",
      "Preparation du buffet petit dej"
    ]
  }
];

export type TechListType = {
  name: string;
  icon: StaticImageData;
  bgColor?: string | "#ffffff";
  positionDecal?: [number, number, number];
};
