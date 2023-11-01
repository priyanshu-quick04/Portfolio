import React from 'react'
import { useEffect ,useState } from 'react'
import About from '../Assets/About-me-image.png'
import { Link } from 'react-router-dom'
import AboutMeComp from './AboutMeComp'
import AboutMeFacts from './AboutMeFacts'
export default function AboutMe(props) {
  const category = [
    {
      title: "Web Development", description: "Hello, I'm passionate about web development. For me, web development is more than just lines of code; it's a canvas for creativity and a medium for problem-solving."
    },
    {
      title: "Hobbies", description: "I love to play Cricket , Badminton & Table Tennis. Aand I also like reading books in my free time."
    },
  ]
  const facts = [
    {
      heading : "Problems Solved" , value : "550+"
    },
    {
      heading : "Projects Completed" , value : "6+"
    },
    {
      heading : "Hobby" , value : "Playing Volleyball"
    },
  ]
  const [heading,setHeading] = useState('font-mono text-slate-400 text-3xl font-bold mb-8');
  useEffect(()=>{
    const mainDivison = document.querySelector('.main-divison');
    const topDivison = document.querySelector('.top-section');
    
    if(props.currentTheme==="light"){
      mainDivison.classList.add('bg-cyan-50');
      mainDivison.classList.remove('bg-gray-950');
      topDivison.classList.add('text-gray-950');
      topDivison.classList.remove('text-gray-400');
      setHeading('font-mono text-slate-800 text-3xl font-bold mb-8')
    }
    else{
      mainDivison.classList.remove('bg-cyan-50');
      mainDivison.classList.add('bg-gray-950');
      topDivison.classList.remove('text-gray-950');
      topDivison.classList.add('text-gray-400');
      setHeading('font-mono text-slate-400 text-3xl font-bold mb-8');
    }
  },[props.currentTheme])
  return (
    //Main Divison
    <div className="w-[60%] mt-12 py-8 overflow-y-scroll main-divison"
    style={{
      height: '550px', // Adjust the height as needed
      overflowY: 'auto', // Add vertical scroll if content exceeds the fixed height
    }}>
      {/* Divison containing top section  */}
      <div className="flex mx-14 my-10 justify-between top-section" >
        {/* Left Divison  */}
        <div className="flex-1 px-10 space-y-8">
          {/* First Box  */}
          <div className="space-y-3">
            <div className="font-mono  font-thin text-1xl opacity-50">
              Student, NIT Delhi
            </div>
            <div className="font-sans  font-bold text-5xl">
              Priyanshu<br/> Gunwant
            </div>
          </div>
          {/* Second Box  */}
          <div className="font-sans font-normal text-1xl inline-block leading-7">
            I am a student of NIT Delhi. Currently pursuing my Bachelor's in Electrical and Electronics Engineering. Along with that I am expanding my skills
            and knowledge in the field of Software Development and Web Development.
          </div>
          {/* Third Box  */}
          <div className="py-3">
            <a href="https://drive.google.com/file/d/1WzHJzgXi_tFe4q8vkyR7l5wQ2ePC0qkk/view" target="_blank">
            <button className="px-5 py-3 rounded-md text-white bg-sky-500 text-1xl font-bold block mb-3">
              Download CV
            </button>
            </a>
            <Link to="/contact">
            <button className="px-3 py-2 rounded-md bg-gray-800  font-sans text-white  text-1xl  font-normal block border-2 border-gray-500">
            Contact Me
            </button>
            </Link>
          </div>
        </div>
        {/* Right Divison  */}
        <div className="flex-1">
          <img src={About} alt="portfolio" />
        </div>
      </div>
      {/* Section Containing about some interest */}
      <div className="mx-14 my-10 interest-section">
        {/* Divison for heading */}
        <div className={heading} >
          What I do
        </div>
        {/* Divison containing the interest  */}
        <div className="flex justify-between space-x-10">
          {/* All Interest  */}
          {
            category.map((items,i)=>
              <AboutMeComp currentTheme={props.currentTheme} title={items.title} description={items.description} />
            )
          }
        </div>
      </div>
      {/* Divison containg achievements */}
      <div className="mx-14 my-10 achievement-section">
        {/* Divison containing heading  */}
        <div className={heading}>
          Few Facts
        </div>
        {/* Divison for containing all the achievements  */}
        <div className="flex justify-between space-x-6">
          {/* All Facts  */}
          {
            facts.map((items,i)=>
              <AboutMeFacts currentTheme={props.currentTheme} heading={items.heading} value={items.value} />
            )
          }
        </div>
      </div>
    </div>
  )
}
