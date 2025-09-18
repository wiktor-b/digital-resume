export const profile = {
  name: "Wiktor Bechciński",
  role: "Front-End Developer",
  email: "wiktor.bechcinski@gmail.com",
  phone: "+48 881 705 318",
  linkedin: "https://www.linkedin.com/in/wiktor-bechcinski/",
  location: "Łódź / Warszawa, Poland",
  avatarUrl: "/avatar.jpg",
  summary:
    "I'm a front-end–focused engineer who's also comfortable diving into back-end tasks when needed. In my previous roles, I've enjoyed creating user-centric solutions that emphasize code quality, performance, and reliability, bridging design and engineering along the way. Ultimately, I'm looking for a team that values innovation, collaboration, and real-world impact—where I can continue honing my skills and deliver software that truly benefits its users.",
} as const;

export const sidebarSections = [
  {
    title: "Tech stack",
    items: [
      "JavaScript | TypeScript",
      "React.js",
      "React Native | Expo",
      "Next.js | Vite",
      "HTML5 | CSS3",
      "SASS | LESS | Tailwind",
      "REST | GraphQL",
      "Redux | Zustand",
      "Git | GitHub",
      "Azure | AWS",
      "Jest | Jenkins",
    ],
  },
  {
    title: "Soft skills",
    items: [
      "Curious fast-learner",
      "Creative at problem solving",
      "Hyperfocus on complex problems",
      "Adaptability in dynamic environments",
      "High energy and enthusiasm",
      "Great pattern recognition and attention to detail",
      "Collaborative teamwork",
      "Great communication",

    ],
  },
  {
    title: "Languages",
    items: ["Polish (Native)", "English (Fluent)", "Japanese (Beginner)"],
  },
];

export const work = [
  {
    period: "03.2025 - PRESENT",
    company: "Accenture",
    role: "Product Engineering Senior Analyst",
    tech: "React, ReactNative, Redux, TypeScript, Vite, styled-components, AWS, Jest, Jenkins",
    bullets: [
      "Currently outsourced to Product Company developing a React web application feature for real-time IoT device diagnostics and monitoring, utilizing Redux, Vite and AWS for optimal performance",
      "Previously worked on an ecommerce mobile app project, building AI-powered meal planning features with chat interface, smart filtering system, and personalized recommendations",
    ],
  },
  {
    period: "02.2024 - 02.2025",
    company: "Comarch",
    role: "Full Stack Developer",
    tech: "Angular, TypeScript, Java(Spring), Node.js , Docker, AWS, CI/CD, Less",
    bullets: [
      "Contributed to the development and maintenance of a high-traffic Angular-based application for major insurance companies",
      "Identified and resolved production bugs to maintain application stability and reliability under real-time conditions",
    ],
  },
  {
    period: "12.2022 - 06.2023",
    company: "Sinom",
    role: "Frontend Developer",
    tech: "React, TypeScript, Next.js, Tailwind, GraphQL, Redux, tRPC, Tanstack, MaterialUI",
    bullets: [
      "Developed a web climate-smart planning tool for renovation and maintenance of properties",
      "Refactored legacy components, optimizing their performance and aligning them with modern coding practices",
      "Maintained and updated existing codebase, optimizing performance and addressing bugs",
    ],
  },
  {
    period: "07.2021 - 02.2024",
    company: "LSI Software",
    role: "Software Developer",
    tech: "JavaScript, Python, Jenkins, Postman, SQL, TestComplete, Jira, RabbitMQ",
    bullets: [
      "Developed and maintained automated test scripts for software quality assurance",
      "Analyzed and debugged software issues identified during automated testing, implemented fixes",
      "Maintained comprehensive testing documentation and quality assurance processes",
    ],
  },
];
