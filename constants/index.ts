import {
  accor,
  bash,
  bootstrap,
  couchdb,
  css,
  debian,
  edgedb,
  euroerp,
  git,
  gitea,
  github,
  haproxy,
  html,
  ibis,
  javascript,
  jquery,
  kali,
  mercure,
  nextjs,
  nginx,
  nodejs,
  pfsense,
  postgresql,
  powershell,
  reactjs,
  tailwind,
  typescript,
} from "@/assets";
import { icons } from "lucide-react";
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
    path: "#introduction",
  },
  {
    id: "carriere",
    name: "Carriere",
    path: "#carriere",
  },
  {
    id: "technologies",
    name: "Technologies",
    path: "#technologies",
  },
  {
    id: "projets",
    name: "Projets",
    path: "#projets",
  },
  // {
  //   id: "connaissances",
  //   name: "Connaissances",
  //   path: "#connaissances",
  // },
];

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
      ".......... a completer",
    ],
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
      ".......... a completer",
    ],
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
      ".......... a completer",
    ],
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
      "...",
    ],
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
      "Preparation du buffet petit dej",
    ],
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
      "Preparation du buffet petit dej",
    ],
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
      "Preparation du buffet petit dej",
    ],
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
      "Preparation du buffet petit dej",
    ],
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
      "Preparation du buffet petit dej",
    ],
  },
];

export type TechListType = { name: string; icon: StaticImageData };

export const TechList: Array<TechListType> = [
  // {
  //   name: "4D",
  //   icon: db,
  // },
  { name: "bash", icon: bash },
  { name: "couchdb", icon: couchdb },
  { name: "debian", icon: debian },
  { name: "edgedb", icon: edgedb },
  { name: "gitea", icon: gitea },
  { name: "github", icon: github },
  { name: "jquery", icon: jquery },
  { name: "haproxy", icon: haproxy },
  { name: "kali", icon: kali },
  { name: "nextjs", icon: nextjs },
  { name: "nginx", icon: nginx },
  { name: "postgresql", icon: postgresql },
  { name: "pfsense", icon: pfsense },
  { name: "powershell", icon: powershell },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
];
