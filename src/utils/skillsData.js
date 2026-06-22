/** Content for the dedicated /skills page (stack + certifications). */

export const skillCategories = [
    {
        key: 'frontend',
        iconKey: 'monitor',
        iconColor: 'var(--color-info)',
        accent: 'frontend',
        title: '프론트엔드',
        subtitle: '개발',
        skills: [
            { name: 'React', percent: 95 },
            { name: 'JavaScript', percent: 90 },
            { name: 'SASS', percent: 88 },
            { name: 'framer-motion', percent: 85 },
        ],
        tags: ['React', 'JavaScript', 'SASS', 'framer-motion'],
    },
    {
        key: 'backend',
        iconKey: 'server',
        iconColor: 'var(--color-success)',
        accent: 'backend',
        title: '백엔드',
        subtitle: '개발',
        skills: [
            { name: 'Node.js', percent: 95 },
            { name: 'SpringBoot', percent: 92 },
            { name: 'Java', percent: 90 },
            { name: 'MySQL', percent: 85 },
        ],
        tags: ['Node.js', 'Springboot', 'Java', 'MySQL'],
    },
   
    {
        key: 'devops',
        iconKey: 'cloud',
        iconColor: 'var(--color-warning)',
        accent: 'devops',
        title: '클라우드 & 데브옵스',
        subtitle: '서버',
        skills: [
            { name: 'Docker', percent: 88 },
            { name: 'AWS', percent: 82 },
            { name: 'GitHub', percent: 90 },
            { name: 'Vercel', percent: 80 },
            
        ],
        tags: ['Docker', 'GitHub', 'AWS', 'Vercel'],
    },
]

export const certifications = [
    {
        key: 'aws',
        monogram: 'AWS',
        brandColor: 'var(--color-info)',
        title: 'AWS Solutions Architect',
        issuer: 'Amazon Web Services',
        year: '2023',
        detail: 'Professional-level certification.',
    },
    {
        key: 'gcp',
        monogram: 'GCP',
        brandColor: 'var(--color-success)',
        title: 'Google Cloud Professional',
        issuer: 'Google',
        year: '2022',
        detail: 'Cloud DevOps Engineer track.',
    },
    {
        key: 'meta',
        monogram: 'MR',
        brandColor: 'var(--color-primary)',
        title: 'Meta advanced React',
        issuer: 'Meta',
        year: '2021',
        detail: 'Advanced React patterns & performance.',
    },
]
