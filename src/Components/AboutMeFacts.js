import React, { useEffect, useState } from 'react'

export default function AboutMeFacts(props) {
    const [container, setContainer] = useState('bg-gray-700 bg-opacity-10 py-3 px-3 rounded-xl ');
    const [heading, setHeading] = useState('flex justify-center font-serif text-gray-300 font-light text-xl ');
    const [content, setContent] = useState('flex font-sans font-light text-gray-400 text-3xl justify-center')
    useEffect(()=>{
        if(props.currentTheme==="light"){
            setContainer("bg-sky-600 bg-opacity-40 py-3 px-3 rounded-xl ");
            setHeading("flex justify-center font-serif text-gray-700 font-light text-xl ");
            setContent("flex font-sans font-light text-blue-900 text-3xl justify-center");
        }
        else{
            setContainer("bg-gray-700 bg-opacity-10 py-3 px-3 rounded-xl ");
            setHeading("flex justify-center font-serif text-gray-300 font-light text-xl");
            setContent("flex font-sans font-light text-gray-400 text-3xl justify-center");
        }
    },[props.currentTheme])
  return (
    <div>
        <div className={container}>
          {/* Heading  */}
          <div className={heading}>
            {props.heading}
          </div>
          {/* Content  */}
          <div className={content}>
            {props.value}
          </div>
        </div>
    </div>
  )
}
