import React from 'react'
import checked from '../Assets/checked.png'

export default function Thanks(props) {
  return (
    <div class="flex-col justify-center items-center bg-sky-100 p-10 space-y-4 my-8">
        <div class=" flex items-center justify-center text-3xl font-serif font-extrabold">
            THANK  YOU!
        </div>
        <div className="flex justify-center items-center">
            <img className="w-20 h-20" src={checked} alt="emoji"/>
        </div>
        <div className="flex justify-center text-3xl font-extrabold ">
            {props.currentUser} 
        </div>
        <div className="flex justify-center text-3xl">
            for Connecting!. 
        </div>
    </div>
  )
}
