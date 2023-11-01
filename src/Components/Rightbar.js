import React from 'react'
import User from '../Assets/user.png'
import call from '../Assets/call.png'
import project from '../Assets/project.png'
import RightBarComp from './RightBarComp'
import ArrowComp from './ArrowComp'

export default function Rightbar() {
    const Element = [
        {
            Image : User, site:'/'
        },
        {
            Image : call, site:'/contact'
        },
        {
            Image : project, site:'/projects'
        },
        
    ]
  return (
    // Main Divison 
    <div className="w-auto mr-10 bg-gray-950 mt-12 flex flex-col justify-between"
    style={{
      height: '550px', // Adjust the height as needed
      
    }}>
        {/* Top Section */}
        <div className="px-3 py-4 ">
            {
                Element.map((items,i)=>
                <RightBarComp image={items.Image} Site={items.site}/>)
            }
        </div>
        {/* Bottom Button Section  */}
        <div className=" bg-slate-300 flex flex-col justify-center items-center">
            <ArrowComp/>
            {/* {
                extra.map((items,i)=>
                <ArrowComp image={items.Image} Site={items.site}/>)
            } */}
        </div>
    </div>
  )
}

