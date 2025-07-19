import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaNpm, 
  FaDocker,
  FaServer,
  FaCode,
  FaCog,
  FaStream,
  FaShieldAlt,
  FaCloud, // Fallback for Vercel/Netlify
  FaDatabase, // Fallback for Prisma
  FaCubes, // Fallback for Shadcn
  FaArrowRight // Fallback for Next.js
} from 'react-icons/fa';

import { 
  DiMongodb, 
  DiDotnet, 
  DiMsqlServer,
  DiPostgresql // Alternative PostgreSQL icon
} from 'react-icons/di';

import { 
  BiLogoTypescript, 
  BiLogoTailwindCss, 
  BiLogoBootstrap
} from 'react-icons/bi';

import { 
  TbBrandReactNative, 
  TbBrandCSharp, 
  TbBrandRedux, 
  TbBrandVscode, 
  TbDatabase
} from 'react-icons/tb';

import { 
  SiDrizzle, 
  SiRender, 
  SiTrpc, 
  SiClerk,
  SiNextdotjs, // Alternative Next.js icon
  SiVercel, // Try this Vercel icon
  SiNetlify, // Try this Netlify icon
  SiPrisma // Alternative Prisma icon
} from 'react-icons/si';

/**
 * Skills data array
 * 
 * @typedef {Object} Skill
 * @property {string} name - The name of the skill
 * @property {React.ComponentType} icon - The React Icon component
 * @property {string} category - Category (frontend, backend, database, tools, cloud, auth)
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
    icon: SiNextdotjs, // Changed to Simple Icons version
    category: 'frontend', 
    level: 4, 
    color: '#ffffff' // Keeping white for visibility
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
    level: 5, 
    color: '#7952B3' 
  },
  { 
    name: 'Shadcn UI', 
    icon: FaCubes, // Changed to a reliable fallback icon
    category: 'frontend', 
    level: 4, 
    color: '#6366f1' // Changed to a visible purple color
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
    color: '#68cc00' // Changed to a visible green color
  },
  { 
    name: 'tRPC', 
    icon: SiTrpc, 
    category: 'backend', 
    level: 4, 
    color: '#2596BE' 
  },
  { 
    name: 'Inngest', 
    icon: FaCog, 
    category: 'backend', 
    level: 3, 
    color: '#6366F1' 
  },
  
  // Database & ORM
  { 
    name: 'MongoDB', 
    icon: DiMongodb, 
    category: 'database', 
    level: 5, 
    color: '#47A248' 
  },
  { 
    name: 'SQL Server', 
    icon: DiMsqlServer, 
    category: 'database', 
    level: 5, 
    color: '#CC2927' 
  },
  { 
    name: 'PostgreSQL', 
    icon: DiPostgresql, // Using DiIcons version which is more reliable
    category: 'database', 
    level: 4, 
    color: '#336791' 
  },
  { 
    name: 'Prisma', 
    icon: SiPrisma, // Using Simple Icons version
    category: 'database', 
    level: 4, 
    color: '#2D3748' 
  },
  { 
    name: 'Drizzle ORM', 
    icon: SiDrizzle, 
    category: 'database', 
    level: 3, 
    color: '#C5F74F' 
  },
  { 
    name: 'Neon', 
    icon: TbDatabase, 
    category: 'database', 
    level: 3, 
    color: '#00E5FF' 
  },
  
  // Cloud & Deployment
  { 
    name: 'Vercel', 
    icon: FaCloud, // Using reliable fallback icon
    category: 'cloud', 
    level: 4, 
    color: '#ffffff' // Keeping white for visibility
  },
  { 
    name: 'Netlify', 
    icon: FaCloud, // Using reliable fallback icon
    category: 'cloud', 
    level: 4, 
    color: '#00C7B7' 
  },
  { 
    name: 'Render', 
    icon: SiRender, 
    category: 'cloud', 
    level: 3, 
    color: '#46E3B7' 
  },
  { 
    name: 'Docker', 
    icon: FaDocker, 
    category: 'cloud', 
    level: 3, 
    color: '#2496ED' 
  },
  
  // Authentication & Security
  { 
    name: 'Clerk', 
    icon: SiClerk, 
    category: 'auth', 
    level: 4, 
    color: '#6C47FF' 
  },
  { 
    name: 'Better Auth', 
    icon: FaShieldAlt, 
    category: 'auth', 
    level: 3, 
    color: '#10B981' 
  },
  
  // Developer Tools & Services
  { 
    name: 'Git', 
    icon: FaGitAlt, 
    category: 'tools', 
    level: 4, 
    color: '#F05032' 
  },
  { 
    name: 'npm', 
    icon: FaNpm, 
    category: 'tools', 
    level: 5, 
    color: '#CB3837' 
  },
  { 
    name: 'VS Code', 
    icon: TbBrandVscode, 
    category: 'tools', 
    level: 5, 
    color: '#007ACC' 
  },
  { 
    name: 'E2B Sandboxes', 
    icon: FaCode, 
    category: 'tools', 
    level: 3, 
    color: '#FF6B35' 
  },
  { 
    name: 'Stream', 
    icon: FaStream, 
    category: 'tools', 
    level: 3, 
    color: '#005FFF' 
  },
];

// Category definitions for better organization
export const categories = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database & ORM',
  cloud: 'Cloud & Deployment',
  auth: 'Authentication',
  tools: 'Tools & Services'
};

// Helper function to get skills by category
export const getSkillsByCategory = (category) => {
  return skills.filter(skill => skill.category === category);
};

// Helper function to get all categories
export const getAllCategories = () => {
  return [...new Set(skills.map(skill => skill.category))];
};

// Helper function to get skills by level
export const getSkillsByLevel = (level) => {
  return skills.filter(skill => skill.level === level);
};

// Helper function to get skill count by category
export const getSkillCountByCategory = () => {
  const counts = {};
  skills.forEach(skill => {
    counts[skill.category] = (counts[skill.category] || 0) + 1;
  });
  return counts;
};
