import * as Svg from "./iconTech/SvgTech";
import type { ConstantsAbout } from "../../../types/types";

export const StackTech: ConstantsAbout[] = [
    { 
        nameTech: 'Frontend',
        technologies: [
            { name: 'React', icon: Svg.ReactIcon },
            { name: 'TypeScript', icon: Svg.TypeScript },
            { name: 'Next JS', icon: Svg.NextJS },
            { name: 'MobX', icon: Svg.MobX },
            { name: 'Tailwind CSS', icon: Svg.TailwindCSS },
            { name: 'SCSS', icon: Svg.SCSS },
            { name: 'Angular', icon: Svg.Angular },
            { name: 'Vue', icon: Svg.Vue },
            { name: 'jQuery', icon: Svg.jQuery }
        ]
    },
    { 
        nameTech: 'Backend',
        technologies: [
            { name: 'Node.js', icon: Svg.NodeJS },
            { name: 'Nest JS', icon: Svg.NestJS },
            { name: 'Express', icon: Svg.Express },
            { name: 'PostgreSQL', icon: Svg.PostgeSQL },
            { name: 'MongoDB', icon: Svg.MongoDB },
            { name: 'Prisma', icon: Svg.Prisma },
            { name: 'WebSocket', icon: Svg.WebSocket },
            { name: 'Docker', icon: Svg.Docker },
            { name: 'Yandex Cloud', icon: Svg.YandexCloud }
        ]
    },
    { 
        nameTech: 'Прочее',
        technologies: [
            { name: 'C#', icon: Svg.CSharp },
            { name: 'Unity', icon: Svg.Unity },
            { name: 'Linux', icon: Svg.Linux },
            { name: 'Figma', icon: Svg.Figma },
            { name: 'Swift', icon: Svg.Swift }
        ]
    },
];