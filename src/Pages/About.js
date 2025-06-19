import React from "react";
import { interests } from "../extras"
import { styles } from "../styles";
import { placeh } from "../Assets";

const IntCard = ({title, icon }) => (
    <div className='xs:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-20 h-20 object-contain'
          />
  
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
        </div>
        </div>
  );

export const About = () => {
  const PlaceholderBanner = placeh;
  return (
    <section className={`flex flex-col w-full mx-auto`}>
    <div className={`top-[40px] ${styles.padding} max-w-7xl mx-auto`}>
    <div className={`grid grid-cols-1 lg:grid-cols-3 divide-x-0`}>
      <div className='col-span-2'>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={` ${styles.sectionHeadText} text-center`}>Education</h2>
        <p className='mt-4 pr-4 col-span-2 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        <p>Bachelor in Computer Science @ University of California Riverside</p>
        <p>
        Associates in Mathematics and Technology @ San Diego Mesa College
        </p>
        </p>
        <h2 className={` ${styles.sectionHeadText} text-center`}>About Me</h2>
        <p className='mt-4 pr-4 col-span-2 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        <p>I'm Austin, Studying CS from the University of California Riverside.</p>
        <br />
        <p>
          I am passionate about software development and looking to build my
          skills as a developer. Here are some areas of interest that I have
          explored through my projects and work experience.
        </p>
        </p>
      </div>
      <div className= "mt-4 pl-4">
      <img
              src={PlaceholderBanner}
              alt="profile"
              className="w-[300] h-[300] hidden lg:block rounded-lg object-contain"
            />     
      </div>
    </div>
    <div className={`top-[40px] ${styles.padding} max-w-7xl mx-auto relative z-0`}>
    <h2 className={` ${styles.sectionHeadText} text-center`}>Skills & Interests</h2>
    <div className='mt-20 flex flex-wrap justify-center gap-10'>
    {interests.map((interest, index) => (
          <IntCard key={interest.title} {...interest} />
        ))}
    </div>
    </div>
    </div>
    </section>
  );
};

export default About;
