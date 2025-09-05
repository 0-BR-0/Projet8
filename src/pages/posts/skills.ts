export interface Skill {
    title: string;
    description: string;
    category: string;
}

export const skills: Skill[] = [
    {
        title: 'Développement Front-End',
        description: 'Création d’interfaces web dynamiques avec HTML, CSS, JavaScript, React.',
        category: 'Front-End'
    },
    {
        title: 'Développement Back-End',
        description: 'Conception d’APIs avec Node.js, Express et gestion de bases de données (MongoDB).',
        category: 'Back-End'
    },
    {
        title: 'Optimisation SEO & Performance',
        description: 'Optimisation Lighthouse, bonnes pratiques Core Web Vitals et référencement naturel.',
        category: 'Performance / SEO'
    },
    {
        title: 'Accessibilité Web',
        description: 'Conformité aux normes WCAG, navigation clavier, expérience utilisateur inclusive.',
        category: 'UX / Accessibilité'
    },
    {
        title: 'Outils et gestion de projet',
        description: 'Versioning avec Git/GitHub, collaboration via GitLab, Figma, méthode Agile.',
        category: 'Outils'
    }
];
