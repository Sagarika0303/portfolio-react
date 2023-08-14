import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BE in Information Technology"
            subTitle="Gokaraju Lailavathi Women's Engineering College (2021 - 2025)"
            result="8.6/10"
            des="Being a student of the first batch of this college, I witness the effort that our college puts to 
            give its students all-around support. A patient and Humble Principal, Friendly and experienced Academic Director, Supportive mentors, Responsible coordinators, Experienced and Interactive faculty, Enthusiastic students, and a Peaceful Environment makes learning happier and easier."
          />
          <ResumeCard
            title="Intermediate College"
            subTitle="Sri Chaitanya Junior College (2019 - 2021)"
            result="97.4/100"
            des=" I enhanced my basic skills like time management, consistency, and self-analysis, which were found to be helpful in competitive exams like Eamcet and JEE. Competitive environment that acknowledged my inner potential."
          />
          <ResumeCard
            title="School Education"
            subTitle="Vivekananda Vidya Mandir High School (2011 - 2019)"
            result="10/10"
            des=" We were given opportunities to participate in many Elocution competitions, Essay Writing competitions, State-level Science Expos, Arts and Crafts competitions, National-level competitive exams like SEMS olympiad, Tata-building India write-ups, Awareness campaigns on hygiene, Indian missions, Music competitions, Field tours, Hand-writing competitions, English speaking clubs and many more."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web developer and designer"
            subTitle="Oasis Infobyte - (2023 - Present)"
            result="Hyderabad - Remote"
            des="Completing tasks level wise and enhancing skills."
          />
          
        </div>
      </div>
    </motion.div>
  );
}

export default Education