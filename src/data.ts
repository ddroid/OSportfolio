import {
   mdiLanguageJavascript,
   mdiLanguageTypescript,
   mdiLanguageHtml5,
   mdiLanguagePhp,
   mdiApi,
   mdiReact,
   mdiNodejs,
   mdiDatabase,
   mdiMicrosoftVisualStudioCode,
   mdiGithub,
   mdiDocker,
   mdiTailwind,
   mdiWeb,
   mdiLightningBolt,
   mdiLanguageGo,
   mdiLock,
   mdiConsole,
   mdiLinux,
   mdiLanguageCpp,
   mdiApplicationBrackets,
   mdiGraphql,
   mdiSourceBranch,
} from '@mdi/js';

const languages: Skill[] = [
  {name:"Rust", mdi:mdiApplicationBrackets, stars:5},
  {name:"TypeScript", mdi:mdiLanguageTypescript, stars:5},
  {name:"C", mdi:mdiLanguageCpp, stars:4},
  {name:"Elixir", mdi:mdiLightningBolt, stars:4},
  {name:"JavaScript", mdi:mdiLanguageJavascript, stars:4},
  {name:"Go", mdi:mdiLanguageGo, stars:3},
  {name:"Clarity", mdi:mdiSourceBranch, stars:3},
  {name:"HTML & CSS", mdi:mdiLanguageHtml5, stars:4},
  {name:"PHP", mdi:mdiLanguagePhp, stars:2},
]

const frameworks: Skill[] = [
  {name:"React", mdi:mdiReact, stars:4},
  {name:"Node.js", mdi:mdiNodejs, stars:4},
  {name:"Bun", mdi:mdiLightningBolt, stars:4},
  {name:"GTK / Rust", mdi:mdiApplicationBrackets, stars:4},
  {name:"Tauri", mdi:mdiApplicationBrackets, stars:3},
  {name:"Tailwind CSS", mdi:mdiTailwind, stars:4},
  {name:"Preact", mdi:mdiReact, stars:3},
  {name:"Vite", mdi:mdiLightningBolt, stars:4},
  {name:"Graph tooling", mdi:mdiGraphql, stars:3},
  {name:"API design", mdi:mdiApi, stars:4},
]

const db: Skill[] = [
  {name:"PostgreSQL", mdi:mdiDatabase, stars:4},
  {name:"SQLite", mdi:mdiDatabase, stars:4},
  {name:"MongoDB", mdi:mdiDatabase, stars:3},
  {name:"Redis", mdi:mdiDatabase, stars:3},
]

const tools: Skill[] = [
  {name:"Linux", mdi:mdiLinux},
  {name:"CachyOS", mdi:mdiLinux},
  {name:"GNOME", mdi:mdiApplicationBrackets},
  {name:"Wayland", mdi:mdiWeb},
  {name:"Vicinae", mdi:mdiConsole},
  {name:"Visual Studio Code", mdi:mdiMicrosoftVisualStudioCode},
  {name:"GitHub", mdi:mdiGithub},
  {name:"Docker", mdi:mdiDocker},
  {name:"Dev tooling", mdi:mdiConsole},
  {name:"Smart contracts", mdi:mdiLock},
]

const projects: Project[] = [
    {
      title: "gnome-nord-rice (2025-...)",
      subtitleEN: "Dotfiles for an awesome Nord-themed GNOME Linux desktop rice.",
      subtitleFR: "Dotfiles pour un rice GNOME Linux avec un thème Nord.",
      descriptionEN:
          "A public Linux desktop customization project focused on a polished GNOME setup, Nord aesthetics, and reproducible dotfiles. It reflects my interest in Linux, open source workflows, and building personal tooling around the desktop experience.",
      descriptionFR:
          "Un projet public de personnalisation de bureau Linux autour de GNOME, d'une esthétique Nord et de dotfiles reproductibles. Il reflète mon intérêt pour Linux, l'open source et les outils autour de l'expérience desktop.",
      image: "/projets/optikserverscom.webp",
      link: "https://github.com/ddroid/gnome-nord-rice",
      skillsName: ["Linux", "GNOME", "Shell", "Open Source"]
    },
    {
      title: "STXWorx (2026)",
      subtitleEN: "TypeScript/Web3 work around Stacks tooling and blockchain products.",
      subtitleFR: "Travail TypeScript/Web3 autour de Stacks, d'outils blockchain et de produits décentralisés.",
      descriptionEN:
          "A Web3-focused codebase connected to the Stacks ecosystem. It represents my work across TypeScript applications, blockchain tooling, and product experiments in decentralized systems.",
      descriptionFR:
          "Une base de code orientée Web3 liée à l'écosystème Stacks. Elle représente mon travail sur des applications TypeScript, des outils blockchain et des expérimentations produit en systèmes décentralisés.",
      image: "/projets/shadowsdash.webp",
      link: "https://github.com/ddroid/stxworx",
      skillsName: ["TypeScript", "Web3", "Stacks", "Blockchain"]
    },
    {
      title: "smartcontracts-stxworx (2026)",
      subtitleEN: "Clarity smart contracts for Stacks/Web3 experiments.",
      subtitleFR: "Smart contracts Clarity pour des expérimentations Stacks/Web3.",
      descriptionEN:
          "A collection of Clarity smart contracts and blockchain-side experiments. This project highlights my interest in Web3 contracts, decentralized products, and protocol-level development.",
      descriptionFR:
          "Une collection de smart contracts Clarity et d'expérimentations côté blockchain. Ce projet met en avant mon intérêt pour les contrats Web3, les produits décentralisés et le développement au niveau protocole.",
      image: "/projets/sudoku.webp",
      link: "https://github.com/ddroid/smartcontracts-stxworx",
      skillsName: ["Clarity", "Smart Contracts", "Stacks", "Web3"]
    },
    {
      title: "yup (2026)",
      subtitleEN: "A POSIX wrapper for yay with a 24-hour AUR safety delay.",
      subtitleFR: "Un wrapper POSIX pour yay avec un délai de sécurité AUR de 24 heures.",
      descriptionEN:
          "A small security-focused Linux tool that wraps yay and enforces a 24-hour delay on AUR package installations and updates. The goal is to reduce exposure to fresh supply-chain attacks while keeping the Arch workflow ergonomic.",
      descriptionFR:
          "Un petit outil Linux orienté sécurité qui encapsule yay et impose un délai de 24 heures sur les installations et mises à jour AUR. L'objectif est de réduire l'exposition aux attaques de supply chain récentes tout en gardant un workflow Arch pratique.",
      image: "/projets/quackhost.webp",
      link: "https://github.com/ddroid/yup",
      skillsName: ["Shell", "Linux", "Security", "AUR"]
    },
    {
      title: "Tinas (2026)",
      subtitleEN: "A Rust project from my systems/tooling experiments.",
      subtitleFR: "Un projet Rust issu de mes expérimentations systèmes/outillage.",
      descriptionEN:
          "A Rust codebase that fits my focus on systems programming and developer tooling. I use projects like this to explore strong typing, performance, reliability, and clean CLI-oriented workflows.",
      descriptionFR:
          "Une base de code Rust liée à mon intérêt pour la programmation système et l'outillage développeur. J'utilise ce type de projet pour explorer le typage fort, la performance, la fiabilité et des workflows CLI propres.",
      image: "/projets/hostapp.webp",
      link: "https://github.com/ddroid/Tinas",
      skillsName: ["Rust", "CLI", "Systems", "Dev Tooling"]
    },
    {
      title: "graph-explorer (2025-...)",
      subtitleEN: "A graph-like hierarchical file tree explorer experiment.",
      subtitleFR: "Une expérimentation d'explorateur hiérarchique de fichiers sous forme de graphe.",
      descriptionEN:
          "A UI experiment around navigating trees as graphs: not just expanding children, but also moving through multiple parent/super entries. It reflects my interest in tooling, developer experience, and better ways to explore complex information.",
      descriptionFR:
          "Une expérimentation UI autour de la navigation dans des arbres comme des graphes: pas seulement développer les enfants, mais aussi explorer plusieurs entrées parentes. Elle reflète mon intérêt pour l'outillage, la DX et de meilleures façons d'explorer l'information complexe.",
      image: "/projets/dartnodes.webp",
      link: "https://github.com/ddroid/graph-explorer",
      skillsName: ["JavaScript", "UI", "Graph", "Dev Tooling"]
    },
    {
      title: "datashell (2026-...)",
      subtitleEN: "A prototyping environment connected to PlayProject work.",
      subtitleFR: "Un environnement de prototypage lié à mon travail chez PlayProject.",
      descriptionEN:
          "A prototyping environment for experimenting quickly with data, interfaces, and project ideas. It connects with my work at PlayProject and my broader interest in developer tools that shorten feedback loops.",
      descriptionFR:
          "Un environnement de prototypage pour expérimenter rapidement avec des données, des interfaces et des idées produit. Il est lié à mon travail chez PlayProject et à mon intérêt pour les outils développeur qui réduisent les boucles de feedback.",
      image: "/projets/pepsitube.webp",
      link: "https://github.com/ddroid/datashell",
      skillsName: ["JavaScript", "Prototyping", "Dev Tooling"]
    },
    {
      title: "OSportfolio (2024-...)",
      subtitleEN: "This operating-system-inspired portfolio site.",
      subtitleFR: "Ce portfolio inspiré d'un système d'exploitation.",
      descriptionEN:
          "My personal portfolio that behaves like a small operating system, with desktop icons, windows, terminal commands, wallpaper customization, and app-like sections for projects, skills, GitHub, and contact.",
      descriptionFR:
          "Mon portfolio personnel inspiré d'un petit système d'exploitation, avec icônes de bureau, fenêtres, commandes terminal, personnalisation du fond d'écran et sections façon applications pour les projets, compétences, GitHub et contact.",
      image: "/projets/my-optikservers.webp",
      link: "https://github.com/ddroid/OSportfolio",
      skillsName: ["Preact", "TypeScript", "TailwindCSS", "Vite"]
    },
  ];
 
export {languages, frameworks, db, tools, projects}
