import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div id="Experience" className="z-10 relative flex flex-col items-center mt-12">
      <div className="relative flex flex-col justify-between items-center gap-3 w-full max-w-6xl">
        <h1 className="font-megrim text-4xl xl:text-7xl title-color">What I've Built</h1>
        <p className="mb-10 font-semibold text-gray-600 dark:text-gray-400 md:text-base text-lg text-center"></p>

        <VerticalTimeline > 
          <ProjectCard
            title="Real-Estate Website"
            githubLink="https://github.com/garima-203/Estately-RealEstate"
            liveLink="https://garima-203.github.io/Estately-RealEstate/"
            icon={'../plotListingLogo.jpg'}
            srcImg={'../Real-Estate.png'} 
          />
          <ProjectCard
            title="E-Commerce Template"
            githubLink="https://github.com/garima-203/Ecommerce-template"
            liveLink="https://garima-203.github.io/Ecommerce-template/" 
            icon={'../ecomLogo.png'}
            srcImg={'../ECOM-PROJECT.png'}
          />
          <ProjectCard
            title="Doctor's Dashboard"
            githubLink="https://github.com/garima-203/Doctor-Dashboard"
           liveLink=" https://garima-203.github.io/Doctor-Dashboard/"
            icon="https://img.icons8.com/?size=100&id=958&format=png&color=000000"
            srcImg={'../DASHBOARD-PROJECT.png'}
          />          
          <ProjectCard
            title="Yoga Web Template" 
            githubLink="https://github.com/garima-203/YOGA-TEMPLATE"
           liveLink="https://garima-203.github.io/YOGA-TEMPLATE/"
            icon={'../yogaLogo.png'}
            srcImg={'../YOGA-PROJECT.png'}
          />
          <ProjectCard
            title="Portfolio Web Template" 
            githubLink="https://github.com/garima-203/PORTFOLIO-TEMPLATE"
           liveLink=" https://garima-203.github.io/PORTFOLIO-TEMPLATE/"
             icon="https://www.mijnzzp.nl/image/3/0/5/8/0/favicon2.jpg-400x400.png"
            srcImg={'../Portfolio-Project.png'}
          />
        </VerticalTimeline>


      </div>

    </div>
  );
};

export default Project;
