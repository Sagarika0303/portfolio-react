import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Eco chakra abhiyan"
          des=" A website created for a non-profit organisation that works for a meaningful cause having features like subscribe, donate, membership, certifications, etc"
          src={projectOne}
       />
        <ProjectsCard
          title="Tourism - website"
          des=" Built using basic Html, css, javascript, a guide to all tourists visiting hyderabad. It has maps, contacts, places categorized based on views like monument view, lake view, etc."
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des="Explore seamless communication with the 'Chatting App' – a platform that fosters real-time interactions, connecting individuals and groups through instant messaging for enhanced connectivity."
          src={projectThree}
        />
        <ProjectsCard
          title="web scraping dynamic website"
          des="Web scraping websites like naukri.com using python libraries like beautiful soup and analysing data scraped using pandas library in python."
          src={projectFour}
        />
        <ProjectsCard
          title="Trip Planner"
          des=" Web application created using react and bootstrap that plans trip considering filters like number of members, budget, distance, etc"
          src={projectFive}
        />
      </div>
    </section>
  );
}

export default Projects