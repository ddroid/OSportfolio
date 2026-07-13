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
      title: "TABI (2026)",
      subtitleEN: "Pakistan clothing storefront on Medusa + Next.js.",
      subtitleFR: "Boutique de vêtements pakistanaise sur Medusa + Next.js.",
      descriptionEN:
          "A full commerce stack for ta-bi.pk: Medusa v2 backend, Next.js storefront, PKR pricing, cash-on-delivery, and S3-compatible product media. Built as a production-ready local clothing brand experience.",
      descriptionFR:
          "Une stack e-commerce complète pour ta-bi.pk : backend Medusa v2, storefront Next.js, prix en PKR, paiement à la livraison et médias produits compatibles S3. Pensé comme une expérience de marque locale prête pour la production.",
      image: "/projects/tabi.png",
      link: "https://beta.ta-bi.pk",
      skillsName: ["Next.js", "Medusa", "TypeScript", "Commerce"]
    },
    {
      title: "Ronin (2026)",
      subtitleEN: "Native Linux AI workbench with chat, memory, and artifacts.",
      subtitleFR: "Workbench IA natif Linux avec chat, mémoire et artefacts.",
      descriptionEN:
          "A local-first AI workbench for Linux: threaded chat, explicit context tools, memories/artifacts, and hybrid local/cloud model support. Built around a fast CLI launcher and native desktop workflows.",
      descriptionFR:
          "Un workbench IA local-first pour Linux : chat en fils, outils de contexte explicites, mémoires/artefacts et support de modèles locaux/cloud. Construit autour d'un lanceur CLI rapide et de workflows desktop natifs.",
      image: "/projects/ronin.png",
      link: "https://github.com/roninchat/ronin",
      skillsName: ["Rust", "AI", "Linux", "GPUI"]
    },
    {
      title: "linkdrop (2026)",
      subtitleEN: "Push HTML and get a shareable link.",
      subtitleFR: "Poussez du HTML et obtenez un lien partageable.",
      descriptionEN:
          "A CLI and server for AI agents and humans to upload HTML and get a short shareable URL. Supports push, delete, list, slugs, TTL, and token-authenticated deployments.",
      descriptionFR:
          "Un CLI et un serveur pour que les agents IA et les humains uploadent du HTML et obtiennent une URL courte partageable. Supporte push, delete, list, slugs, TTL et des déploiements authentifiés par token.",
      image: "/projects/linkdrop.png",
      link: "https://github.com/ddroid/linkdrop",
      skillsName: ["Rust", "CLI", "HTTP", "Dev Tooling"]
    },
    {
      title: "weekplan (2026)",
      subtitleEN: "A GTK app for planning weekly recurring tasks.",
      subtitleFR: "Une app GTK pour planifier des tâches hebdomadaires récurrentes.",
      descriptionEN:
          "A native GTK application for organizing recurring weekly tasks by day. Focused on a calm desktop UX for routines like work blocks, errands, and habits.",
      descriptionFR:
          "Une application GTK native pour organiser des tâches hebdomadaires récurrentes par jour. Pensée pour une UX desktop calme autour des routines, blocs de travail et habitudes.",
      image: "/projects/weekplan.png",
      link: "https://github.com/ddroid/weekplan",
      skillsName: ["Rust", "GTK", "Linux", "Desktop"]
    },
    {
      title: "spacep2p (2026)",
      subtitleEN: "Peer-to-peer multiplayer space combat with no game server.",
      subtitleFR: "Combat spatial multijoueur peer-to-peer sans serveur de jeu.",
      descriptionEN:
          "A real-time multiplayer space shooter that uses WebRTC/Nostr peer discovery instead of a dedicated game server. Create an arena, share a room link, and dogfight in the browser.",
      descriptionFR:
          "Un shooter spatial multijoueur temps réel qui utilise la découverte WebRTC/Nostr au lieu d'un serveur de jeu dédié. Créez une arène, partagez un lien de room et combattez dans le navigateur.",
      image: "/projects/spacep2p.png",
      link: "https://spacep2p.ddroid.dev/",
      skillsName: ["TypeScript", "P2P", "WebRTC", "Game"]
    },
    {
      title: "smart-apply (2026)",
      subtitleEN: "AI job hunting assistant with match scoring and company research.",
      subtitleFR: "Assistant IA de recherche d'emploi avec scoring et recherche d'entreprises.",
      descriptionEN:
          "A full-stack AI job assistant that discovers roles, scores them against a user profile, researches companies, and tracks applications from a clean dashboard.",
      descriptionFR:
          "Un assistant emploi full-stack IA qui trouve des offres, les score par rapport au profil, recherche les entreprises et suit les candidatures depuis un dashboard clair.",
      image: "/projects/smart-apply.png",
      link: "https://smartapply.me",
      skillsName: ["Next.js", "AI", "TypeScript", "Product"]
    },
    {
      title: "gnome-nord-rice (2025)",
      subtitleEN: "Dotfiles for an awesome Nord-themed GNOME Linux desktop rice.",
      subtitleFR: "Dotfiles pour un rice GNOME Linux avec un thème Nord.",
      descriptionEN:
          "A public Linux desktop customization project focused on a polished GNOME setup, Nord aesthetics, and reproducible dotfiles. It reflects my interest in Linux, open source workflows, and building personal tooling around the desktop experience.",
      descriptionFR:
          "Un projet public de personnalisation de bureau Linux autour de GNOME, d'une esthétique Nord et de dotfiles reproductibles. Il reflète mon intérêt pour Linux, l'open source et les outils autour de l'expérience desktop.",
      image: "/projects/gnome-nord-rice.png",
      link: "https://github.com/ddroid/gnome-nord-rice",
      skillsName: ["Linux", "GNOME", "Shell", "Open Source"]
    },
    {
      title: "Tinas (2026)",
      subtitleEN: "Open-source .pak modder for Chromium-based browsers.",
      subtitleFR: "Moddeur .pak open source pour navigateurs basés sur Chromium.",
      descriptionEN:
          "A GTK4 Rust app (Pak Assets Manager) for browsing, viewing, and editing Chrome/Brave .pak resource files. Includes Brave detection, image editing tools, and export workflows for browser resource packs.",
      descriptionFR:
          "Une app GTK4 en Rust (Pak Assets Manager) pour parcourir, visualiser et éditer les fichiers de ressources .pak Chrome/Brave. Inclut la détection de Brave, des outils d'édition d'images et des workflows d'export pour les packs de ressources navigateur.",
      image: "/projects/tinas.png",
      link: "https://github.com/ddroid/Tinas",
      skillsName: ["Rust", "GTK", "Brave", "Desktop"]
    },
    {
      title: "ui-components (2025)",
      subtitleEN: "Reusable UI components including a tiled editor surface.",
      subtitleFR: "Composants UI réutilisables, dont une surface d'éditeur en tuiles.",
      descriptionEN:
          "A showcase of 15+ reusable UI components built for PlayProject tooling. The tile_manager surface is one of them: multi-file tabs, compact toolbar actions, and a layout pattern for prototyping apps.",
      descriptionFR:
          "Une vitrine de 15+ composants UI réutilisables construits pour l'outillage PlayProject. La surface tile_manager en fait partie : onglets multi-fichiers, actions de toolbar compactes et un layout pour apps de prototypage.",
      image: "/projects/ui-components.png",
      link: "https://github.com/ddroid/ui-components",
      skillsName: ["JavaScript", "UI", "Components", "PlayProject"]
    },
    {
      title: "graph-explorer (2025)",
      subtitleEN: "A graph-like hierarchical file tree explorer experiment.",
      subtitleFR: "Une expérimentation d'explorateur hiérarchique de fichiers sous forme de graphe.",
      descriptionEN:
          "A UI experiment around navigating trees as graphs: not just expanding children, but also moving through multiple parent/super entries. It reflects my interest in tooling, developer experience, and better ways to explore complex information.",
      descriptionFR:
          "Une expérimentation UI autour de la navigation dans des arbres comme des graphes: pas seulement développer les enfants, mais aussi explorer plusieurs entrées parentes. Elle reflète mon intérêt pour l'outillage, la DX et de meilleures façons d'explorer l'information complexe.",
      image: "/projects/graph-explorer.png",
      link: "https://github.com/ddroid/graph-explorer",
      skillsName: ["JavaScript", "UI", "Graph", "Dev Tooling"]
    },
  ];

export {languages, frameworks, db, tools, projects}
