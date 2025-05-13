import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    bootstrap,
    vscode,
    git,
    github,
    npm,
    postman,
    springboot,
    java,
    mysql,
    postgresql,
    mongodb,
    redis,
    kafka,
    docker,
    jenkins,
    openShift,
    aws,
    eclipse,
    intellij,
  } = techStackDetails;
  

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      {/* Tech Stack */}
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
  <img src={html} title="HTML" alt="HTML" className="w-22 h-16 object-contain" />
  <img src={css} title="CSS" alt="CSS" className="w-22 h-16 object-contain" />
  <img src={js} title="JavaScript" alt="JavaScript" className="w-22 h-16 object-contain" />
  <img src={react} title="React" alt="React" className="w-22 h-16 object-contain" />
  <img src={redux} title="Redux" alt="Redux" className="w-22 h-16 object-contain" />
  <img src={bootstrap} title="Bootstrap" alt="Bootstrap" className="w-22 h-16 object-contain" />
  <img src={springboot} title="Spring Boot" alt="Spring Boot" className="w-22 h-16 object-contain" />
  <img src={java} title="Java" alt="Java" className="w-22 h-16 object-contain" />
  <img src={mysql} title="MySQL" alt="MySQL" className="w-22 h-16 object-contain" />
  <img src={postgresql} title="PostgreSQL" alt="PostgreSQL" className="w-22 h-16 object-contain" />
  <img src={mongodb} title="MongoDB" alt="MongoDB" className="w-22 h-16 object-contain" />
  <img src={redis} title="Redis" alt="Redis" className="w-22 h-16 object-contain" />
  <img src={kafka} title="Kafka" alt="Kafka" className="w-22 h-16 object-contain" />
  <img src={docker} title="Docker" alt="Docker" className="w-22 h-16 object-contain" />
  <img src={aws} title="AWS" alt="AWS" className="w-22 h-16 object-contain" />
</section>

     
      {/* Skills - Creative Style */}
<section>
  <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
    Skills
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 text-sm md:text-base">
    
    {/* Backend */}
    <div className="bg-white dark:bg-dark-secondary p-5 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
      <div className="text-lg font-semibold mb-2 text-dark-heading dark:text-light-heading">🛠 Backend</div>
      <p className="text-content">
        Java, Spring Boot, Spring Cloud, Microservices, Spring Security, Hibernate
      </p>
    </div>

    {/* Frontend */}
    <div className="bg-white dark:bg-dark-secondary p-5 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
      <div className="text-lg font-semibold mb-2 text-dark-heading dark:text-light-heading">🎨 Frontend</div>
      <p className="text-content">
        React, Web development (HTML, CSS, JavaScript)
      </p>
    </div>

    {/* Cloud & DevOps */}
    <div className="bg-white dark:bg-dark-secondary p-5 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
      <div className="text-lg font-semibold mb-2 text-dark-heading dark:text-light-heading">☁️ Cloud & DevOps</div>
      <p className="text-content">
        AWS (API Gateway, Lambda, IAM, S3), Docker
      </p>
    </div>

    {/* Database */}
    <div className="bg-white dark:bg-dark-secondary p-5 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
      <div className="text-lg font-semibold mb-2 text-dark-heading dark:text-light-heading">🗃 Database</div>
      <p className="text-content">
        PostgreSQL, MySQL, MongoDB
      </p>
    </div>

    

    {/* Architecture & Security */}
    <div className="bg-white dark:bg-dark-secondary p-5 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
      <div className="text-lg font-semibold mb-2 text-dark-heading dark:text-light-heading">🔐 Architecture & Security</div>
      <p className="text-content">
        Microservices Design, API Security
      </p>
    </div>
  </div>

  
</section>
 {/* Tools */}
 <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>

      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
  <img src={vscode} title="VS Code" alt="VS Code" className="w-22 h-16 object-contain" />
  <img src={git} title="Git" alt="Git" className="w-22 h-16 object-contain" />
  <img src={github} title="GitHub" alt="GitHub" className="w-22 h-16 object-contain" />
  <img src={npm} title="NPM" alt="NPM" className="w-22 h-16 object-contain" />
  <img src={postman} title="Postman" alt="Postman" className="w-22 h-16 object-contain" />
  <img src={jenkins} title="Jenkins" alt="Jenkins" className="w-22 h-16 object-contain" />
  <img src={eclipse} title="Eclipse" alt="Eclipse" className="w-22 h-16 object-contain" />
  <img src={intellij} title="IntelliJ" alt="IntelliJ" className="w-22 h-16 object-contain" />
</section>



    </main>
  );
}

export default Technologies;
