// Enter all your detials in this file
// Logo images
// Profile Image
import profile from "./assets/profile.jpeg";
import logo from "./assets/logo.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import kafka from "./assets/techstack/image.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";

// Logos
export const logos = {
  // logogradient: logogradient,
  logo: logo,
};
// Enter your Personal Details here
export const personalDetails = {
  name: "Dheeraj Inuganti",
  tagline: " Java Developer",
  img: profile,
  about: `Results-driven Software Engineer with over 4 years of experience in full-stack development, specializing in Java, Spring Boot, Microservices, and React.js. Proven expertise in building scalable, high-performance enterprise applications for global clients like Barclays and Capgemini. Adept at system optimization, database design, and DevOps practices, including CI/CD, Docker, and OpenShift. Strong background in cloud-native development with hands-on experience in AWS services such as Lambda, S3, and API Gateway.Skilled in delivering secure, efficient, and user-centric solutions across banking, enterprise training, and research-based platforms.`
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/dheeraj-inuganti/",
  github: "https://www.github.com/ivldheeraj"
};
// Enter your Work Experience here
export const workDetails = [
  
  {
    Position: "Research Assistant",
    Company: "Central Michigan University",
    Location: "United States",
    Type: "Research",
    Duration: "Jan 2024 – Dec 2024",
    Description: [
      "Scraped and processed 2,000+ user comments using Python for innovation research.",
      "Boosted data quality by 35% through NLP preprocessing and segmentation.",
      "Applied topic modeling and visualizations to identify product lead user segments."
    ]
  },
  {
    Position: "Associate Consultant",
    Company: "Barclays",
    Location: "India",
    Type: "Full Time",
    Duration: "Dec 2022 - Aug 2023",
    Description: [
      "Enhanced system performance for 5,000+ users by optimizing microservices-based Java, Spring Boot, Spring Cloud, and Spring Security code.",
      "Improved system stability by 25% through bug triaging and root cause analysis.",
      "Handled over 2M+ daily transactions with <200ms response via high-performance SQL/NoSQL databases.",
      "Leveraged OpenShift, Kafka, JMS for scalable, real-time data streaming and containerized deployments.",
      "Followed Agile/Scrum and SDLC methodologies for on-time high-quality delivery."
    ]
  },
  {
    Position: "Senior Software Engineer",
    Company: "Capgemini",
    Location: "India",
    Type: "Full Time",
    Duration: "Dec 2020 - Dec 2022",
    Description: [
      "Migrated legacy systems to Spring Boot microservices and React.js, improving UX and reducing workload by 40%.",
      "Developed RESTful APIs supporting 10,000+ concurrent users with 50% improved response time.",
      "Implemented Redis caching, cutting page load times by 40%.",
      "Led UI prototyping and CI/CD integration using Git, Jenkins, OpenShift, Bitbucket.",
      "Improved code quality and testing coverage by 18% following Agile best practices."
    ]
  },
  {
    Position: "Application Developer",
    Company: "Suntek Corp Solutions",
    Location: "India",
    Type: "Full Time",
    Duration: "Sep 2019 - Oct 2020",
    Description: [
      "Developed Learning Management System improving onboarding efficiency by 30%.",
      "Implemented role-based access, performance dashboards, and secure authentication (Spring Security).",
      "Enhanced backend performance using optimized Spring Boot and MySQL queries.",
      "Collaborated across teams for feature design, feedback, and agile delivery cycles."
    ]
  }
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Masters in Information Systems",
    Company: `Central Michigan University`,
    Location: "United States",
    Type: "Full Time",
    Duration: "Aug 2023 - May 2025",
  },
  {
    Position: "Bachelor in Electronics & Communication",
    Company: `CMR Technical Campus`,
    Location: "Hyderabad, India",
    Type: "Full Time",
    Duration: "Aug 2016 - May 2020",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  springboot: "https://img.icons8.com/color/48/000000/spring-logo.png",
  java: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
  mysql: "https://img.icons8.com/color/48/000000/mysql-logo.png",
  postgresql: "https://img.icons8.com/color/48/000000/postgreesql.png",
  mongodb: "https://img.icons8.com/color/48/000000/mongodb.png",
  redis: "https://img.icons8.com/color/48/000000/redis.png",
  kafka: kafka,
  
  docker: "https://img.icons8.com/color/48/000000/docker.png",
  jenkins: "https://img.icons8.com/color/48/000000/jenkins.png",
  openShift: "https://img.icons8.com/color/48/000000/openshift.png",
  aws: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
  eclipse: "https://img.icons8.com/color/48/000000/eclipse.png",
  intellij: "https://img.icons8.com/color/48/000000/intellij-idea.png",
 
};

// Enter your Project Details here
// Enter your Project Details here
export const projectDetails = [
  {
    title: "Companion Match – Event-Based Matching Platform",
    image: projectImage1,
    description: `Engineered a full-stack platform using Flask and React.js for pairing companions based on event participation. Developed RESTful APIs for user auth, event management, and match workflows. Designed relational schema for data integrity and integrated real-time match actions using Axios.`,
    techstack: "Python (Flask), React.js, SQL, Axios",
    githubLink: "https://github.com/ivldheeraj/Companion-Match",
  },
  {
    title: "Healthify – Nutrition & Diet Planning App",
    image: projectImage2,
    description: `Developed a BMI-based nutrition planner with secure login using OAuth2, JWT, and Spring Security. Enabled dynamic plan selection and management through React.js front-end and Spring Boot backend. Focused on data integrity, responsive UI, and optimized performance.`,
    techstack: "Java 8, Spring Boot 2.5, React.js, PostgreSQL, OAuth2, JWT",
    githubLink: "https://github.com/ivldheeraj/NutritionApp_Sprint3/tree/main/healthify",
  },
  {
    title: "Employment Management System",
    image: projectImage3,
    description: `Designed a distributed HR application using Spring Boot and Thymeleaf. Built RESTful APIs for employee record CRUD operations with secure access via Spring Security. Integrated MySQL via Spring Data JPA and Hibernate to ensure optimized, secure data handling.`,
    techstack: "Java, Spring Boot, Spring Security, MySQL, Thymeleaf, Bootstrap",
    githubLink: "https://github.com/ivldheeraj/Employee-Management-System",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "ivldheeraj@gmail.com",
};
