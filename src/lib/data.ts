export const projects = [
  {
    id: "orica",
    name: "Orica",
    tagline: "AI-powered decision-making web app",
    description: "An intelligent platform designed to help users make thoughtful and balanced choices using structured pros, cons, and mindset analysis.",
    role: "Full Stack Developer",
    techStack: ["React", "Node.js", "Express", "MongoDB", "AI Integration", "Tailwind CSS"],
    image: "/Orica.png",
    website: "https://oricaa.netlify.app/",
    github: "https://github.com/sayeedeshmukh/pickee",
    figma: "https://www.figma.com/proto/ohBfSt1ifpJ9QCGNUS9iiu/orica",
    caseStudy: {
      overview: "Orica is an intelligent decision-making platform designed to help users make thoughtful and balanced choices. Instead of random voting or flipping a coin, the app generates structured pros and cons for two options and allows users to rate them.",
      problemStatement: "Many choices are influenced by emotions, overthinking, or external opinions. People often struggle with everyday decisions, whether small or life-changing. There is a need for a tool that blends logic and emotional awareness to guide users toward more confident decisions.",
      research: "I explored prompt engineering to generate structured and meaningful outputs, and worked on transforming unstructured AI responses into usable UI components.",
      designDecisions: "I wanted a streamlined UI for side-by-side comparison. The challenge was maintaining balance in AI-generated suggestions while keeping the interface simple, intuitive, and distraction-free.",
      developmentProcess: "Implemented backend logic for decision evaluation and tested it using Jest to ensure accuracy and reliability. Explored how AI-based reasoning can enhance user experiences in real-world scenarios.",
      challenges: "One of the key challenges was maintaining balance in AI-generated suggestions while keeping the interface simple and intuitive. Working with unstructured AI responses and turning them into predictable UI elements was tricky.",
      finalUI: "/Orica.png",
      reflections: "Building Orica helped me understand the intersection of AI and user experience. It strengthened my skills in full-stack development, debugging, and designing user-centric AI systems."
    }
  },
  {
    id: "diary-say",
    name: "Diary Say",
    tagline: "Minimal digital journaling web app",
    description: "A calming digital diary platform designed for emotional expression, self-reflection, and creative journaling with mood tracking.",
    role: "Frontend Developer & Designer",
    techStack: ["React", "JavaScript", "HTML5", "CSS3", "Framer Motion"],
    image: "/Diary Say.png",
    website: "https://diarysay.netlify.app/",
    github: "https://github.com/sayeedeshmukh/blogsay",
    caseStudy: {
      overview: "Diary Say is a personal digital diary platform designed for emotional expression, self-reflection, and creative journaling. It allows users to document thoughts, moods, and daily experiences in a clean, distraction-free environment.",
      problemStatement: "Most journaling platforms are either too cluttered, too productivity-focused, or emotionally disconnected. Writing should feel calm and personal — not like completing a task.",
      research: "Studied existing journaling platforms and identified the need for a minimal interface. Focus was placed on emotional resonance and removing friction from the writing process.",
      designDecisions: "Designed a distraction-free writing interface. The goal is to create a safe, aesthetic digital space where writing feels calming and natural. Included a mood tracker that visualizes emotional trends.",
      developmentProcess: "Built with React and focused on managing state for auto-save capabilities. Implemented categorization for entries and secure data handling to keep user thoughts private.",
      challenges: "Implementing the mood tracker required working with data visualization techniques to represent emotional trends effectively without cluttering the UI.",
      finalUI: "/Diary Say.png",
      reflections: "Building Diary Say helped me understand the importance of creating a distraction-free environment for emotional expression. This project strengthened my skills in user-centered design and creating spaces that support mental well-being."
    }
  },
  {
    id: "blubble",
    name: "Blubble",
    tagline: "Interactive floating creatures canvas",
    description: "An interactive web app where users create and animate custom floating creatures using a built-in drawing tool.",
    role: "Frontend Developer",
    techStack: ["HTML5 Canvas", "LESS", "JavaScript", "CSS Animations"],
    image: "/blubble.png",
    website: "https://blubble.netlify.app/",
    github: "https://github.com/sayeedeshmukh/blubble",
    behance: "https://www.behance.net/gallery/247036179/Blubble",
    caseStudy: {
      overview: "Blubble is an interactive web app where users create and animate custom floating creatures using a built-in drawing tool. It focuses on creativity and engaging user experience.",
      problemStatement: "I wanted to create an interactive drawing platform that feels alive. A place that combines creative tools with engaging animations, offering a playful and dynamic user experience.",
      research: "Researched HTML5 Canvas API and custom physics algorithms to bring the drawn shapes to life realistically.",
      designDecisions: "Focused heavily on user experience by making the interface playful and intuitive. Implementing draggable UI elements and floating animations for saved 'blubs'.",
      developmentProcess: "Worked extensively with the HTML Canvas API to implement a smooth drawing system, handling continuous mouse input, stroke rendering, and tool-based interactions like brush, eraser, and fill.",
      challenges: "Managing drawing state efficiently, especially for features like undo and persistent storage. Designed a structured approach to store drawing data in LocalStorage and reconstruct it dynamically.",
      finalUI: "/blubble.png",
      reflections: "Building Blubble was a deep dive into creating an interactive, real-time web experience from scratch. It strengthened my understanding of event handling, real-time rendering, and state management without frameworks."
    }
  },
  {
    id: "type-yatra",
    name: "Type Yatra",
    tagline: "Interactive typing practice platform",
    description: "Web-based typing learning platform to help users improve speed and accuracy through structured exercises.",
    role: "Frontend Developer",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    image: "/typeyatra.png",
    website: "https://typeyatra.netlify.app/",
    github: "https://github.com/sayeedeshmukh/type-yatra",
    caseStudy: {
      overview: "Type Yatra is a web-based typing learning platform created to help users improve their typing speed, accuracy, and consistency. It provides structured exercises, real-time feedback, and progress tracking.",
      problemStatement: "Many students and professionals struggle with speed and accuracy due to lack of structured practice. There's a need for a platform that makes typing practice interactive and measurable.",
      research: "Focused on building muscle memory and proper finger placement while maintaining a simple and user-friendly interface.",
      designDecisions: "Maintained a clean and engaging interface with gamified progression to keep users motivated. Real-time WPM and accuracy metrics are highlighted.",
      developmentProcess: "Calculates typing speed and accuracy in real-time. Created smooth real-time interaction between user input and on-screen content using vanilla JavaScript.",
      challenges: "Handling continuous typing input and updating the UI dynamically without frameworks required careful state and event-driven programming management.",
      finalUI: "/typeyatra.png",
      reflections: "This project strengthened my skills in building interactive web experiences, managing UI state without frameworks, and designing for engagement and flow."
    }
  },
  {
    id: "virtual-labs",
    name: "Virtual Labs",
    tagline: "Interactive technical learning platform",
    description: "An interactive environment where students can explore and practice topics like Data Structures through guided simulations.",
    role: "Frontend Developer",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    image: "/virtuallabs.png",
    website: "https://virtualabss.netlify.app/",
    github: "https://github.com/sayeedeshmukh/virtual-labs",
    caseStudy: {
      overview: "Virtual Labs provides a structured environment where students can explore and practice topics like Data Structures through guided simulations and hands-on experimentation.",
      problemStatement: "Learning technical subjects can become too theoretical and overwhelming. Often, students understand concepts on paper but not how they actually work practically.",
      research: "Researched ways to translate real-world lab processes into intuitive digital interactions with step-by-step visual simulations.",
      designDecisions: "Created a simple, intuitive interface that supports self-paced learning. The design focuses on breaking down complex processes into clear, interactive stages.",
      developmentProcess: "Built interactive coding challenges that offer immediate feedback. Handled user-driven events to simulate experiment steps visually.",
      challenges: "Translating complex algorithms like Stacks, Queues, and Linked Lists into easy-to-understand visual simulations was challenging but rewarding.",
      finalUI: "/virtuallabs.png",
      reflections: "This project reflects my belief that technology should simplify learning. It improved my ability to break down complex processes into clear, interactive stages."
    }
  }
];

export const creativeWorks = [
  { id: "doggie", name: "Doggie", image: "/doggie.jpg" },
  { id: "sheru", name: "Sher Khan", image: "/sheru.jpg" },
  { id: "metro", name: "Metro Train", image: "/metro.png" },
  { id: "graphics", name: "Graphics", image: "/printables.png", link: "https://www.canva.com/design/DAG238IIJ7w/myH-MkLNg2-0qIutJUuJYw/view" }
];
