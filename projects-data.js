// Project details for "Know more" pages
const PROJECTS_DATA = {
  orica: {
    name: "Orica",
    description: "AI-powered decision-making web app that helps users choose between two options using structured pros, cons, and mindset analysis.",
    whatItIs: "Orica is an intelligent decision-making platform designed to help users make thoughtful and balanced choices. Instead of random voting or flipping a coin, the app generates structured pros and cons for two options and allows users to rate them. It analyzes emotional and practical factors to provide a logical yet personalized recommendation. The goal is to make decision-making clearer, more structured, and less overwhelming.",
    detailedFeatures: "Orica features secure user authentication, a streamlined UI for side-by-side comparison, real-time AI processing to generate pros and cons, and an interactive rating system. The backend efficiently stores user decisions, allowing them to revisit past choices.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "AI Integration"],
    screenshots: ["Orica.png"],
    whyBuilt: "I built Orica because I realized how often people struggle with everyday decisions, whether small or life-changing. Many choices are influenced by emotions, overthinking, or external opinions. I wanted to create a platform that blends logic and emotional awareness to guide users toward more confident decisions. It also allowed me to explore how AI-based reasoning can enhance user experiences in real-world scenarios.",
    experienceBuilding: "Building Orica helped me understand the intersection of AI and user experience. I explored prompt engineering to generate structured and meaningful outputs, and worked on transforming unstructured AI responses into usable UI components. I also implemented backend logic for decision evaluation and tested it using Jest to ensure accuracy and reliability. One of the key challenges was maintaining balance in AI-generated suggestions while keeping the interface simple and intuitive. This project strengthened my skills in full-stack development, debugging, and designing user-centric AI systems.",
    website: "https://oricaa.netlify.app/",
    github: "https://github.com/sayeedeshmukh/pickee"
  },
  "diary-say": {
    name: "Diary Say",
    description: "Minimal digital journaling web app designed for emotional reflection and mood tracking.",
    whatItIs: "Diary Say is a personal digital diary platform designed for emotional expression, self-reflection, and creative journaling. It allows users to document thoughts, moods, and daily experiences in a clean, distraction-free environment. The goal is to create a safe, aesthetic digital space where writing feels calming and natural.",
    detailedFeatures: "Diary Say provides a distraction-free writing interface with auto-save capabilities. It includes a mood tracker that visualizes emotional trends over time, categorization for entries, and secure data handling to keep user thoughts private.",
    techStack: ["React", "JavaScript (ES6+)", "HTML5 & CSS3"],
    screenshots: ["Diary Say.png"],
    whyBuilt: "I built Diary Say because I noticed that most journaling platforms are either too cluttered, too productivity-focused, or emotionally disconnected. Writing should feel calm and personal — not like completing a task. As someone who values reflection and structured thinking, I wanted to create a digital space that feels safe, minimal, and intentional. A place where users can pause, express their thoughts freely, and track their emotional patterns over time.",
    experienceBuilding: "Building Diary Say helped me understand the importance of creating a distraction-free environment for emotional expression. I focused on designing a clean, intuitive interface that encourages regular journaling without overwhelming the user. Implementing the mood tracker required me to work with data visualization techniques to represent emotional trends effectively. This project strengthened my skills in user-centered design and creating spaces that support mental well-being.",
    website: "https://diarysay.netlify.app/",
    github: "https://github.com/sayeedeshmukh/blogsay"
  },
  "virtual-labs": {
    name: "Virtual Labs",
    description: "An Interactive learning platform designed to make technical concepts more accessible and engaging.",
    whatItIs: "It provides a structured environment where students can explore and practice topics like Data Structures through guided simulations and hands-on experimentation. The goal of this project was to create a simple, intuitive interface that supports self-paced learning while making complex topics feel less intimidating. With a clean design and focused structure, Virtual Labs encourages learners to understand concepts not just theoretically, but practically.",
    detailedFeatures: "Virtual Labs includes step-by-step visual simulations for common data structures like Stacks, Queues, and Linked Lists. The platform tracks user progress and provides interactive coding challenges that offer immediate feedback to reinforce learning.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    screenshots: [],
    whyBuilt: "I’ve often felt that learning technical subjects can become too theoretical and overwhelming. Sometimes, you understand the concept on paper — but not how it actually works. I wanted to create a space where students could explore topics like Data Structures in a more interactive and less intimidating way. A place where learning feels guided, structured, and practical rather than rushed or confusing. This project reflects my belief that technology should simplify learning — not complicate it.",
    experienceBuilding: "While building Virtual Labs, I focused on translating real-world lab processes into intuitive digital interactions. I worked on handling user-driven events to simulate experiment steps and provide immediate visual feedback. Designing structured experiment flows helped me improve my ability to break down complex processes into clear, interactive stages. I also worked on creating a clean and responsive interface to ensure usability across devices. This project strengthened my skills in event-driven programming, UI design for educational tools, and building interactive learning experiences.",
    website: "https://virtualabss.netlify.app/",
    github: "https://github.com/sayeedeshmukh/virtual-labs"
  },
  "type-yatra": {
    name: "Type Yatra",
    description: "Interactive typing practice web platform designed to improve keyboard speed and accuracy through structured lessons.",
    whatItIs: "Type Yatra is a web-based typing learning platform created to help users improve their typing speed, accuracy, and consistency. The platform provides structured exercises, real-time feedback, and progress tracking to make learning engaging and effective. It focuses on building muscle memory and proper finger placement while maintaining a simple and user-friendly interface.",
    detailedFeatures: "Type Yatra calculates typing speed (WPM) and accuracy in real-time. It features multiple difficulty levels, a custom lesson generator based on user weaknesses, and a gamified progression system to keep users motivated.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    screenshots: ["typeyatra.png"],
    whyBuilt: "I built Type Yatra to address the importance of typing efficiency in today’s digital world. Many students and professionals struggle with speed and accuracy due to lack of structured practice. I wanted to create a platform that makes typing practice interactive and measurable. This project also helped me understand user engagement, real-time feedback systems, and interface clarity in learning applications.",
    experienceBuilding: "While building Type Yatra, I focused on creating a smooth real-time interaction between user input and on-screen content. Handling continuous typing input and updating the UI dynamically helped me understand event-driven programming and state flow in frontend development. I also worked on designing transitions and pacing the story to maintain user engagement. Using LESS helped in structuring styles efficiently while maintaining a consistent visual theme. This project strengthened my skills in building interactive web experiences, managing UI state without frameworks, and designing for engagement and flow.",
    website: "https://typeyatra.netlify.app/",
    github: "https://github.com/sayeedeshmukh/type-yatra"
  },
  blubble: {
    name: "Blubble",
    description: "Interactive web app where users create and animate custom floating creatures using a built-in drawing tool.",
    whatItIs: "Blubble is an interactive web app where users create and animate custom floating creatures using a built-in drawing tool. It focuses on creativity and engaging user experience by allowing users to draw and bring to life their own unique blubbles.",
    detailedFeatures: "Blubble utilizes the HTML5 Canvas API to provide a smooth, responsive drawing experience. Users can create custom shapes which are then brought to life using custom physics and animation algorithms. The app is fully responsive and optimized for both desktop and touch devices.",
    techStack: ["HTML5", "LESS", "JavaScript", "Canvas API"],
    screenshots: ["blubble.png"],
    whyBuilt: "I wanted to create an interactive drawing platform that feels alive. It combines creative tools with engaging animations, offering a playful and dynamic user experience.",
    experienceBuilding: "Building Blubble was a deep dive into creating an interactive, real-time web experience from scratch. I worked extensively with the HTML Canvas API to implement a smooth drawing system, handling continuous mouse input, stroke rendering, and tool-based interactions like brush, eraser, and fill. One of the key challenges was managing drawing state efficiently, especially for features like undo and persistent storage. I designed a structured approach to store drawing data (coordinates, colors, strokes) in LocalStorage and reconstruct it dynamically when the user revisits the app. I also focused heavily on user experience by making the interface playful and intuitive. Implementing draggable UI elements and floating animations for saved “blubs” required combining CSS animations with JavaScript logic to create a fluid, engaging feel.Using LESS helped me organize styles better and maintain consistency across components, especially while handling animations and UI states. Overall, this project strengthened my understanding of event handling, real-time rendering, state management without frameworks, and designing creative, user-centric web interactions.",
    website: "https://blubble.netlify.app/",
    github: "https://github.com/sayeedeshmukh/blubble"
  }
};
