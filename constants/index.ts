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
    name: "Carrière",
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
    "Je suis Julien Roselli, Développeur Full-stack autodidacte de plus de 5 ans d’expérience dans le développement \
     d’application web de type ERP ayant pour but d’automatiser les processus de gestion \
     de l’entreprise et l’interfaçage avec les différentes APIs et outils du client. \
     Ces deux dernières années m’ont aussi amenée à prendre en charge l’administration \
      système et des serveurs baremetal chez ovh-cloud.   Il serait difficile d’être exhaustif sur la liste des \
      technologies utilisées car une partie de mes fonctions était la veille technologique et R&D \
      qui m’ont permis de travailler avec beaucoup de technologies et applications, comme couchdb, \
      Lucene, apache2, C, C#, React Native, Katalon ou encore python mais n’ayant jamais utilisé ces \
      outils et langage en mode production je ne peux pas prétendre les maitriser. Je suis un passioné \
      de A a Z qu'on parle de Frontend ou de backend, que l'on parle d'automatiser des processus machine \
      ou de designe d'iterface web ou encore d'architecture de base de données. "
};

export const dataCarriere: objectDataCards = {
  titre: "Carrière",
  texte: ""
  // "Ma carrière on peut dire que j'en ai eu trois 7 ans en hotelleries a ouvrir \
  //  des hotels ibis en espagne puis mon bar pendant 7 ans \
  //  puis l'informatique je suis depuis 7 ans chez euroerp "
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
    entreprise: "Euro Erp France",
    date: "2022 - Auj.",
    logo: euroerp,
    poste: "Responsable technique/Administration réseaux",
    bgLogo: "#ffff",
    desciption: [
      "Full remote depuis 2020",
      "Assurer le suivi technique des différents projets",
      "Suivi développeur et revu de code",
      "Assurer le bon fonctionnement des différents serveurs",
      "Réparations et maintenance des bases de données",
      "Veille technologique et R&D",
      "Installation serveurs et Vms (Proxmox)",
      "administration de l'architecture serveurs "
    ]
  },
  {
    id: 2,
    entreprise: "Euro Erp Maroc",
    date: "2019 - 2022",
    logo: euroerp,
    poste: "Responsable technique",
    bgLogo: "#ffff",
    desciption: [
      "Full remote depuis 2020",
      "Assurer le suivi technique des différents projets",
      "Suivi développeur et revu de code",
      "Assurer le bon fonctionnements des différents serveurs",
      "Réparations et maintenance des bases de données",
      "Veille technologique et R&D"
    ]
  },
  {
    id: 3,
    entreprise: "Euro Erp Maroc",
    date: "2017 - 2019",
    logo: euroerp,
    poste: "Responsable service client",
    bgLogo: "#ffff",
    desciption: [
      "Création du service",
      "Création de protocole de tests",
      "Test de l'application",
      "Gestion des bugs avec les développeurs",
      "Gestion des clients",
      "Définitions fonctionnels des développements",
      "Essai d'automatisation des tests"
    ]
  },
  {
    id: 4,
    entreprise: "Café Claudine - Grao de Gandia",
    date: "2010 - 20017",
    logo: ibis,
    poste: "Propriétaire",
    bgLogo: "#ffff",
    desciption: [
      "Gestion du stock",
      "Comptabilité",
      "Gestion des achats",
      "Gestion des clients",
      "Gestion du personnel",
      "Ouverture et fermeture du bar",
      "et tout le reste..."
    ]
  },

  {
    id: 5,
    entreprise: "Hôtel Ibis Madrid Alcobendas- Accor Hoteles España",
    date: "2007 - 2010",
    logo: ibis,
    poste: "Responsable réception",
    bgLogo: "#ffff",
    desciption: [
      "Gestion du planning des équipes de réception",
      "Vérifications des procédures de nuit de la veilles",
      "Remise en banque des caisses",
      "Etat général de l'hôtel",
      "Gestion de la maintenance des chambres",
      "Vérification du ménage des chambres",
      "Gestion des clients",
      "Veiller au bon fonctionnement général de l'hôtel et de ces clients"
    ]
  },
  {
    id: 6,
    entreprise: "Hôtel Ibis Murcia- Accor Hoteles España",
    date: "2005 - 2007",
    logo: ibis,
    poste: "Réceptionniste/cuisinier ",
    bgLogo: "#ffff",
    desciption: [
      "Prendre les réservations",
      "Check-in et check-out des clients de l'hôtel",
      "Etat des lieux de l'hôtel",
      "Gestion des demandes clients",
      "Préparation du plat du jour",
      "Gréparations des commandes",
      "Gestion du stock et inventaires",
      "Gestion des commandes fournisseurs",
      "Réception de marchandise"
    ]
  },
  {
    id: 7,
    entreprise: "Hôtel Ibis Valencia Bonaire - Accor Hoteles España",
    date: "2003 - 2005",
    logo: ibis,
    poste: "Réceptionniste jour/nuit ",
    bgLogo: "#ffff",
    desciption: [
      "Prendre les réservations",
      "Assurer le service de nuit",
      "Check-in et check-out des clients de l'hôtel",
      "exécuter les protocoles de clôture de nuit",
      "Contrôle des caisses du jour",
      "Etat des lieux de l'hôtel",
      "Gestion des demandes clients",
      "Préparation du buffet petit déjeuner"
    ]
  },
  {
    id: 8,
    entreprise: "Hôtel Ibis Murcia - Accor Hoteles España",
    date: "2002 - 2003",
    logo: ibis,
    poste: "Réceptionniste de nuit",
    bgLogo: "#ffff",
    desciption: [
      "Assurer le service de nuit",
      "Check-in et check-out des clients de l'hôtel",
      "exécuter les protocoles de clôture de nuit",
      "Contrôle des caisses du jour",
      "Etat des lieux de l'hôtel",
      "Gestion des demandes clients",
      "Préparation du buffet petit déjeuner"
    ]
  },
  {
    id: 9,
    entreprise: "Hôtel Mercure Gentilly - Accor",
    date: "2001 - 2002",
    logo: mercure,
    poste: "Réceptionniste de nuit",
    bgLogo: "#ffff",
    desciption: [
      "Assurer le service de nuit",
      "Check-in et check-out des clients de l'hôtel",
      "exécuter les protocoles de clôture de nuit",
      "Contrôle des caisses du jour",
      "Etat des lieux de l'hôtel",
      "Gestion des demandes clients",
      "Préparation du buffet petit déjeuner"
    ]
  }
];

export type TechListType = {
  name: string;
  icon: StaticImageData;
  bgColor?: string | "#ffffff";
  positionDecal?: [number, number, number];
};
