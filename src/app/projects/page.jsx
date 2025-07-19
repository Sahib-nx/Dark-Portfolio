'use client';

import { motion } from 'framer-motion';
import ProjectCard from '../../components/projects/ProjectCard';
import styles from './Projects.module.css';


const projectsData = [
  {
    id: 1,
    title: "NeuviAI",
    description: "A fully responsive, production-ready AI video call SaaS platform built with Next.js, tRPC, Drizzle, Neon, OpenAI, Stream, Inngest, BetterAuth & ShadCN UI. Schedule meetings with AI agents, get recordings, transcripts, summaries, AI Q&A & Polar payments—all in one powerful app.",
    note: "Note: I have temporarily stopped the working of API for people using it aggressively",
    image: "./neuvi-logo.svg", // Add your logo here
    technologies: ["Next.js", "tRPC", "Drizzle", "Neon", "OpenAI", "Stream", "Inngest", "BetterAuth", "ShadCN UI"],
    githubUrl: "https://github.com/Sahib-nx/NeuviAI",
    liveUrl: "https://neuvi-ai.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "Codexa",
    description: "Codexa is a production-ready AI website builder with sleek modern design. Built using Next.js, Prisma, Neon, TRPC, Inngest, E2B sandboxes, OpenAI, Docker, and Clerk for auth & billing—Codexa lets you create websites effortlessly with AI agents.",
    note: "Note: I have temporarily stopped the working of API for people using it aggressively",
    image: "./codexa-logo.svg", // Add your logo here
    technologies: ["Next.js", "Prisma", "Neon", "TRPC", "Inngest", "E2B", "OpenAI", "Docker", "Clerk"],
    githubUrl: "https://github.com/Sahib-nx/Codexa.AI",
    liveUrl: "https://codexa.com",
    featured: true
  },
  {
    id: 3,
    title: "InkSphere",
    description: "InkSphere is a modern full-stack blog platform built with Next.js. It features a sleek UI, secure auth (JWT, cookies), role-based access, real-time preview, and post management. Fast, responsive, and elegant—your voice on the web, powered by modern tools. More features coming soon, Insha'Allah.",
    image: "./inksphere-logo.png",
    technologies: ["Next.js", "JWT", "React", "Node.js", "CSS Modules"],
    githubUrl: "https://github.com/yourusername/inksphere",
    liveUrl: "https://ink-sphere.vercel.app/",
    featured: true
  },
  {
    id: 4,
    title: "ديوان العود",
    description: "This is a full-fledged web application built using ASP.NET Core MVC. It consists of both frontend and backend. The application includes a payment gateway integration using a web server callback to securely handle transactions.",
    image: "./diwan-logo.png",
    technologies: ["ASP.NET Core", "MVC", "C#", "Payment Gateway", "SQL Server"],
    githubUrl: "https://github.com/Sahib-nx/-Diwan-Al-Oud-",
    liveUrl: "https://diwan-aloud.com",
    featured: false
  },
  {
    id: 5,
    title: "Aithur",
    description: "Aithur is an AI-powered chat assistant built with DeepSeek LLM and the MERN stack. It features a clean, professional UI and delivers smart, real-time responses. Designed for seamless interaction and extendability in modern web applications.",
    image: "./aithur-logo.png",
    technologies: ["MongoDB-Atlas", "Express.js", "React", "Node.js", "DeepSeek LLM"],
    githubUrl: "https://github.com/Sahib-nx/Aithur-Ai",
    liveUrl: "https://aithur-ai.vercel.app/",
    featured: false
  },
  {
    id: 6,
    title: "Orbix",
    description: "Orbix is a modern, responsive chat app using React Context, Express, and Socket.io. It supports real-time encrypted messaging, photo sharing, and 3D visuals via Three.js. All chats and media are securely encrypted and stored, ensuring a private and seamless experience.",
    image: "./orbix-logo.png", // Add your logo here
    technologies: ["React", "Express.js", "Socket.io", "Three.js", "Node.js"],
    githubUrl: "https://github.com/Sahib-nx/Orbix",
    liveUrl: "https://orbix-beta.vercel.app/",
    featured: false
  },
  {
    id: 7,
    title: "WeatherApp",
    description: "Built a weather app in React just for fun and experience. It features real-time weather data, a clean responsive UI, and a dark/light mode toggle. A small yet useful project to enhance my experience and API integration knowledge.",
    image: "./weather-app-logo.svg",
    technologies: ["React", "Weather API", "CSS3", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/Sahib-nx/Weather_App",
    liveUrl: "https://weather-app-demo.com",
    featured: false
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function ProjectsPage() {
  return (
    <div className={styles.projectsPage}>
      <div className={styles.container}>
        <motion.header
          className={styles.header}
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            My Projects
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore my collection of modern web applications and AI-powered solutions
          </motion.p>
        </motion.header>

        <motion.div
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
          
          {/* Placeholder for future projects */}
          <motion.div
            className={styles.comingSoon}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className={styles.comingSoonContent}>
              <div className={styles.plusIcon}>+</div>
              <h3>More Projects Coming Soon</h3>
              <p>Stay tuned for more exciting projects</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
