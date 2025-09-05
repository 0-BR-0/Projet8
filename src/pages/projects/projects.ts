export interface Project {
  id: string;
  name: string;
  description?: string;
  demoLink: string;
  demoLinkRel?: string;
  postLink?: string;
  tags?: string[];
  issues?: string[];
  skills?: string[];
  stargazers_count?: number;
  html_url?: string;
}

export const projects: Project[] = [
  {
    id: 'kasa',
    name: 'Projet – Kasa',
    description: 'Refonte d’un site d’annonces immobilières avec React. Dynamique et responsive',
    demoLink: 'https://github.com/0-BR-0/Projet5',
    tags: ['React', 'Saas'],
    issues: [
      'Navigation fluide : Utilisation de React Router pour gérer les pages.',
      'Affichage dynamique : Utilisation des props et state pour la gestion des annonces.'
    ],
    skills: [
      'Utilisation de React et création de composants',
      'Routage avec React Router',
      'Responsive design',
    ]
  },
  {
    id: 'nina',
    name: 'Projet – Nina Carducci',
    description: 'Optimisation des performances et debug d’un site web d’une photographe professionnelle',
    demoLink: 'https://github.com/0-BR-0/Projet4',
    tags: ['Performance', 'SEO'],
    issues: [
      'Temps de chargement : Compression des images et optimisation des ressources CSS/JS.',
      'Accessibilité : Corrections selon les recommandations Lighthouse.',
      'Debug : Utilisation des Chrome DevTools pour identifier les erreurs.'
    ],
    skills: [
      'Analyse des performances web (Lighthouse, DevTools)',
      'Debugging avancé',
      'Accessibilité',
      'Optimisation SEO de base'
    ]
  },
  {
    id: 'grimoire',
    name: 'Projet – Mon Vieux Grimoire',
    description: 'Développement d’un site web de gestion de bibliothèque avec Node.js. Back-end sécurisé et fonctionnel',
    demoLink: 'https://github.com/0-BR-0/Projet6',
    tags: ['NodeJS', 'Express'],
    issues: [
      'Gestion des données utilisateurs : Implémentation d’un modèle de base de données sécurisé conforme à la réglementation.',
      'Opérations CRUD : Mise en œuvre d’opérations CRUD avec des contrôles de sécurité.',
      'Sécurisation des données : Utilisation de middleware pour protéger les informations sensibles.'
    ],
    skills: [
      'Développement back-end : Node.js pour gérer les requêtes et la logique du site.',
      'Sécurité des données : Mise en œuvre de protocoles sécurisés pour le stockage et la gestion des données.'
    ]
  },
  {
    id: 'sophie',
    name: 'Projet – Sophie Bluet',
    description: 'Création d’un site de galerie d’art interactif avec JavaScript. Manipulation du DOM pour une expérience utilisateur dynamique',
    demoLink: 'https://github.com/0-BR-0/Projet3',
    postLink: 'https://devaradise.com/how-i-build-paradise-ui-react-component-library/',
    tags: ['HTML', 'JS'],
    issues: [
      'Interactivité des galeries : Utilisation de JavaScript pour gérer l’ajout dynamique d’œuvres d’art.',
      'Gestion des événements : Implémentation de gestionnaires d’événements pour les actions des utilisateurs.',
      'Optimisation : Amélioration de la réactivité du site en réduisant le temps de chargement et les appels réseau.'
    ],
    skills: [
      'Manipulation du DOM : Utilisation de JavaScript pour modifier le contenu dynamique.',
      'Gestion des événements : Mise en place de fonctionnalités interactives avec des événements personnalisés.',
      'Optimisation des performances : Techniques pour améliorer la fluidité du site.'
    ]
  }
];
