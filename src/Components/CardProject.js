import React, { useEffect, useState } from 'react'

export default function CardProject(props) {
  const [background,setBackground] = useState("card-body bg-black");
  const [heading,setHeading] = useState("card-text font-sans text-2xl text-slate-400 font-bold flex justify-center")
  useEffect(()=>{
    if (props.currentTheme === "light"){
      setBackground('card-body bg-cyan-200');
      setHeading('card-text font-sans text-2xl text-slate-950 font-bold flex justify-center');
    }
    else{
      setBackground('card-body bg-black');
      setHeading('card-text font-sans text-2xl text-slate-400 font-bold flex justify-center');
    } 
  },[props.currentTheme])
  return (
    <div className="inline my-4">
        <div className="card border-0 " style={{ width: '18rem' }}>
            <img src={props.data.image} className="card-img-top" alt="shown"/>
            <div className={background}>
                <p className={heading}>{props.data.title}</p>
            </div>
        </div>
    </div>
  )
}
