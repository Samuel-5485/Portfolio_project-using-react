import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About = () => {
  return (
    <div id='about'className='about'>
      <div className='about-title'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt=''/>
      </div>
      <div className ='about-sections'>
        <div className='about-left'>
            <img src={profile_img} alt=''/>
            </div>
        <div className='about-right'>
            <div className = 'about-para'>
            <p>Hello!My name is Samuel Diriba Yadeta. i was born in Nov/11/2003 G.C.
              i were born at Nedjo city, Oromya, Ethiopia.From grade one upto six(1 - 6),
               i had been attended my education at Nedjo city, after that from grade seven up to 
               tewelv i had been attended my education at Shager city, Addis Ababa. 
               now i am learning at Ambo University.as we se from the above it is my history & 
               that i tried to write it about me
                I am experienced Web Developer, also i am studying more about
                 of Artifitial Intelligece Career Essentials from 
                ALX, and i had been certified from freeCodeCamp by 
                Responsive Web Design,in addition i had been participated in A2SV Hackaton 
                within my teamets & we certified for the Quarter finals in august 2024</p>
              <p>I am attending my course at the Ambo University. and i wish i will we a SoftWare Enginner</p>
              </div>
           <div className = 'about-skills'>
            <div className = 'about-skill'><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
            <div className = 'about-skill'><p>JavaScript</p><hr style={{width:"70%"}}/></div>
            <div className = 'about-skill'><p>React JS</p><hr style={{width:"60%"}}/></div>
            <div className = 'about-skill'><p>Python</p><hr style={{width:"50%"}}/></div>
      </div>
      </div></div>
    <div className='about-achivements'>
        <div className='about-achivement'>
            <h1>5+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div> 
        <hr/>
        <div className='about-achivement'>
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
    </div>
   <hr/>
        <div className='about-achivement'>
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
    
    </div> 
    </div>
    </div>
  )
}

export default About
