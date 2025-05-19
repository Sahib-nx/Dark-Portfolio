// Import React Icons with verified available icons
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaGitAlt, 
  FaNpm, 
  FaDocker,
  FaServer,
  FaMicrosoft,
  FaCode,
  FaWindows,
  FaFileCode
} from 'react-icons/fa';

import { DiMongodb, DiDotnet, DiMsqlServer } from 'react-icons/di';
import { BiLogoTypescript, BiLogoTailwindCss, BiLogoFirebase, BiLogoBootstrap } from 'react-icons/bi';
import { TbBrandReactNative, TbBrandNextjs, TbBrandCSharp, TbBrandRedux, TbBrandVscode } from 'react-icons/tb';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { BsFiletypeJson } from 'react-icons/bs';

/**
 * Skills data array
 * 
 * @typedef {Object} Skill
 * @property {string} name - The name of the skill
 * @property {React.ComponentType} icon - The React Icon component
 * @property {string} category - Category (frontend, backend, database)
 * @property {number} level - Proficiency level from 1-5
 * @property {string} color - Brand color for the icon
 */
export const skills = [
  // Frontend Skills
  { 
    name: 'HTML5', 
    icon: FaHtml5, 
    category: 'frontend', 
    level: 5, 
    color: '#E34F26' 
  },
  { 
    name: 'CSS3', 
    icon: FaCss3Alt, 
    category: 'frontend', 
    level: 5, 
    color: '#1572B6' 
  },
  { 
    name: 'JavaScript', 
    icon: FaJs, 
    category: 'frontend', 
    level: 5, 
    color: '#F7DF1E' 
  },
  { 
    name: 'TypeScript', 
    icon: BiLogoTypescript, 
    category: 'frontend', 
    level: 4, 
    color: '#3178C6' 
  },
  { 
    name: 'React', 
    icon: FaReact, 
    category: 'frontend', 
    level: 4, 
    color: '#61DAFB' 
  },
  { 
    name: 'Next.js', 
    icon: TbBrandNextjs, 
    category: 'frontend', 
    level: 4, 
    color: '#ffffff' 
  },
  { 
    name: 'React Native', 
    icon: TbBrandReactNative, 
    category: 'frontend', 
    level: 3, 
    color: '#61DAFB' 
  },
  { 
    name: 'Redux', 
    icon: TbBrandRedux, 
    category: 'frontend', 
    level: 4, 
    color: '#764ABC' 
  },
  { 
    name: 'Tailwind CSS', 
    icon: BiLogoTailwindCss, 
    category: 'frontend', 
    level: 4, 
    color: '#06B6D4' 
  },
  { 
    name: 'Bootstrap', 
    icon: BiLogoBootstrap, 
    category: 'frontend', 
    level: 4, 
    color: '#7952B3' 
  },
  
  // Backend Skills
  { 
    name: 'C#', 
    icon: TbBrandCSharp, 
    category: 'backend', 
    level: 4, 
    color: '#239120' 
  },
  { 
    name: 'ASP.NET Core', 
    icon: DiDotnet, 
    category: 'backend', 
    level: 4, 
    color: '#512BD4' 
  },
  { 
    name: 'Node.js', 
    icon: FaNodeJs, 
    category: 'backend', 
    level: 4, 
    color: '#339933' 
  },
  { 
    name: 'Express.js', 
    icon: FaServer, 
    category: 'backend', 
    level: 3, 
    color: '#ffffff' 
  },
  
  // Database & Tools
  { 
    name: 'MongoDB', 
    icon: DiMongodb, 
    category: 'database', 
    level: 3, 
    color: '#47A248' 
  },
  { 
    name: 'SQL Server', 
    icon: DiMsqlServer, 
    category: 'database', 
    level: 4, 
    color: '#CC2927' 
  },
  { 
    name: 'Firebase', 
    icon: BiLogoFirebase, 
    category: 'database', 
    level: 3, 
    color: '#FFCA28' 
  },
  { 
    name: 'Git', 
    icon: FaGitAlt, 
    category: 'database', 
    level: 4, 
    color: '#F05032' 
  },
  { 
    name: 'npm', 
    icon: FaNpm, 
    category: 'database', 
    level: 4, 
    color: '#CB3837' 
  },
  { 
    name: 'VS Code', 
    icon: TbBrandVscode, 
    category: 'database', 
    level: 5, 
    color: '#007ACC' 
  },
  { 
    name: 'Docker', 
    icon: FaDocker, 
    category: 'database', 
    level: 3, 
    color: '#2496ED' 
  },
];

// Example of how to add new skills:
/* 
To add a new skill:
1. Import the appropriate icon from react-icons
2. Add a new object to the skills array following the structure above
3. Make sure to set the proper 'category' so it appears in the right section
4. Set the proficiency 'level' from 1-5
5. Add the brand 'color' for the icon
*/