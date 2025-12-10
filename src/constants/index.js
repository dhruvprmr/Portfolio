import {
  mobile,
  backend,
  creator,
  web,

  // TECH ICONS
  javascript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  figma,
  docker,

  // NEW ICONS
  dart,
  flutter,
  python,
  java,
  gemini,
  githubIcon,

  // COMPANIES
  CEI,
  superstars,
  mouser,

  // PROJECTS
  mouserImg,
  classwhisperer,
  clearpass,

  // TESTIMONIAL IMAGES
  gnana,
  mohana,
  erdun,
} from "../assets";


export const navLinks = [
  { id: "about", title: "About" },
  { id: "resume", title: "Resume" },
  { id: "work", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "Software Developer", icon: web },
  { title: "HCI & UX Engineer", icon: creator },
  { title: "Mobile App Developer", icon: mobile },
  { title: "AI / ML Enthusiast", icon: backend },
];

export const technologies = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: reactjs },
  { name: "Node.js", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
  { name: "GitHub", icon: githubIcon },
  { name: "Dart", icon: dart },
  { name: "Flutter", icon: flutter },
  { name: "Python", icon: python },
  { name: "Java", icon: java },
  { name: "Gemini AI", icon: gemini },
];


export const experiences = [
  {
    title: "Software Development Intern",
    company_name: "Superstars (USA)",
    icon: superstars,
    iconBg: "#3b2349",
    date: "May 2025 – Aug 2025",
    points: [
      "Rebuilt the company’s Flutter mobile app architecture.",
      "Improved navigation and interaction flows.",
      "Optimized loading performance for job modules.",
      "Collaborated using GitHub, PR reviews, and agile sprints.",
    ],
  },
  {
    title: "Full-Stack Developer (Open Source)",
    company_name: "Mouser · SLU / Rerum",
    icon: mouser,
    iconBg: "#241b4a",
    date: "May 2025 – June 2025",
    points: [
      "Worked on Mouser annotation platform.",
      "Improved metadata retrieval and researcher workflows.",
      "Enhanced annotation UI for better usability.",
      "Refactored legacy code and added tests.",
    ],
  },
  {
    title: "Android Developer",
    company_name: "Cutting Edge Infotech (India)",
    icon: CEI,
    iconBg: "#4b2838",
    date: "Nov 2022 – May 2023",
    points: [
      "Developed Android features using XML + REST APIs.",
      "Created reusable UI components.",
      "Fixed bugs improving app stability.",
      "Collaborated with designers + backend teams.",
    ],
  },
];

export const testimonials = [
  {
    testimonial:
      "Dhruv ramped up quickly during our internship at Superstars. He delivered clean, scalable code and helped remove blockers for the team.",
    name: "Mohana Siddhartha Chivukula",
    designation: "Software Developer Intern",
    company: "Superstars",
    image: mohana,
  },
  {
    testimonial:
      "Dhruv was a reliable teammate throughout our Superstars internship. His Flutter expertise improved both design and functionality.",
    name: "Gnana Chand Mallangi",
    designation: "UI Developer",
    company: "Superstars",
    image: gnana,
  },
  {
    testimonial:
      "Dhruv demonstrated strong Flutter & Dart skills and consistently delivered high-quality features.",
    name: "Erdun E",
    designation: "Software Developer",
    company: "Superstars",
    image: erdun,
  },
];

export const projects = [
  {
    name: "Class Whisperer – AI Classroom Assistant",
    description:
      "AI assistant that converts lectures into structured, searchable summaries. Built using Whisper AI, Python, and Streamlit.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "whisper-ai", color: "green-text-gradient" },
      { name: "streamlit", color: "pink-text-gradient" },
    ],
    image: classwhisperer,
    source_code_link: "https://github.com/dhruvprmr/class_whisperer",
  },
  {
    name: "ClearPass AI – Interview Assessment",
    description:
      "Desktop mock interview tool with structured flows, evaluation logic, and a Java-based UI.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "desktop-ui", color: "green-text-gradient" },
      { name: "evaluation-logic", color: "pink-text-gradient" },
    ],
    image: clearpass,
    source_code_link: "https://github.com/dhruvprmr/clearpass_ai",
  },
  {
    name: "Mouser–Rerum Integration",
    description:
      "Full-stack improvements for a research annotation platform, including metadata retrieval and workflow optimization.",
    tags: [
      { name: "javascript", color: "pink-text-gradient" },
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
    ],
    image: mouserImg,
    source_code_link: "https://github.com/oss-slu/Mouser",
  },
];
