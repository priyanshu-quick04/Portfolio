import React, { useEffect, useState } from 'react'
import Portfolio from '../Assets/Portfolio.png'
import ECommerce from '../Assets/E-Commerce.png'
import NewsApp from '../Assets/NewsApp.png'
import CardProject from './CardProject'

export default function Projects(props) {
    const [mainDiv, setMainDiv] = useState("w-[60%] bg-gray-950 mt-12 py-10 overflow-y-scroll px-14 space-y-4");
    const projects = [
        {
            title: 'Portfolio Website', date: '20 Aug 2023', image : Portfolio
        },
        {
            title: 'TrendTeller', date: '10 May 2023', image : NewsApp
        },
        {
            title: 'E-Commerce Website', date: '18 July 2023', image : ECommerce
        }
    ]
    useEffect(()=> {
        const head1 = document.querySelector('.head1');
        const head2 = document.querySelector('.head2');
        if(props.currentTheme==="light"){
            setMainDiv("w-[60%] bg-cyan-50 mt-12 py-10 overflow-y-scroll px-14 space-y-4");
            head1.classList.add("text-slate-950");
            head1.classList.remove("text-gray-400");
            head2.classList.add("text-slate-600");
            head2.classList.remove("text-gray-300");
        }
        else{
            setMainDiv("w-[60%] bg-gray-950 mt-12 py-10 overflow-y-scroll px-14 space-y-4");
            head1.classList.remove("text-slate-950");
            head1.classList.add("text-gray-400");
            head2.classList.add("text-gray-300");
            head2.classList.remove("text-slate-600");
        }
    },[props.currentTheme])
  return (
    // Main Divison 
    <div className={mainDiv}
    style={{
      height: '550px', // Adjust the height as needed
      overflowY: 'auto', // Add vertical scroll if content exceeds the fixed height
      
    }}>
        {/* Heading  */}
        <div className="font-sans text-4xl font-bold head1">
            Projects
        </div>
        {/* Tag Line  */}
        <div className='font-mono text-xl font-medium head2'>
            My Prominent Works
        </div>

        <div className="flex flex-wrap justify-center space-x-10">
        {
            projects.map((items,i)=>
            <CardProject currentTheme={props.currentTheme} data={items} key={i}/>)
        }
        </div>
    </div>
  )
}
