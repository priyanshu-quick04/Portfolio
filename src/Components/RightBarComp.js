import React from 'react'
import { Link } from 'react-router-dom'
export default function RightBarComp(props) {
  return (
    // Main Divison 
    <Link to={props.Site}>
        <div className="w-8 h-8 cursor-pointer my-4">
            <img src={props.image} alt="icon" />
        </div>
    </Link>
  )
}
