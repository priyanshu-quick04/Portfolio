import React, { useEffect, useState } from 'react'

export default function ContactComp(props) {
    const [back,setBack] = useState("bg-slate-900 bg-opacity-80 px-3 py-3 rounded-md flex flex-col justify-center items-center space-y-2");
    const [desc,setDesc] = useState("font-sans font-normal text-semibold text-white");
    useEffect(()=>{
        if(props.currentTheme==="light"){
            setBack("bg-cyan-200 bg-opacity-80 px-3 py-3 rounded-md flex flex-col justify-center items-center space-y-2");
            setDesc("font-sans font-normal text-semibold text-black ")
        }
        else{
            setBack("bg-slate-900 bg-opacity-80 px-3 py-3 rounded-md flex flex-col justify-center items-center space-y-2");
            setDesc("font-sans font-normal text-semibold text-white")
        }
    },[props.currentTheme])
  return (
    <div className="w-1/3 pt-10 pl-2">
        <div className={back}>
            <img className="w-10 h-10" src={props.image} alt="icon" />
            <div className={desc}>
                {props.text}
            </div>
        </div>
    </div>
  )
}
