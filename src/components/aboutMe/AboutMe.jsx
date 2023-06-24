import React from 'react'
import './AboutMe.css';
import NewNavbar from '../newNavbar/NewNavbar';

export default function AboutMe() {
  return (
    <>
      <div className='aboutme-wrapper'>
        <NewNavbar />
        <div className='box'>
          <p className='para'>
            Hello! I am Vandana Maurya. I completed my Bachelor Of Computer Application from Shambhunath College of Education prayagraj. I did my intermediate from Varanasi. I have six months of experience as a UI/UX Designer from DPG.There I learnt many things about web designing and UI/UX Designing.I worked on Figma software. Now, My goal is to be the part of organization where I can utilizemy skills and knowledge for the growth of the organization as well as my own growth.
          </p>
        </div>
      </div>
    </>
  );
}
