import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Front-End Developer.", "Project Manager."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Sagarika</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#fffc25"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a dedicated and creative front-end developer with a passion for crafting engaging and user-centric web experiences. Armed with a strong proficiency in HTML, CSS, and JavaScript, I specialize in transforming design concepts into responsive and intuitive interfaces. With an eye for detail and a commitment to staying updated with the latest industry trends, I consistently strive to deliver visually appealing and seamless digital solutions that enhance user satisfaction and drive meaningful interactions.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner