import React, { useEffect, useState } from 'react'
import pin from '../Assets/pin.png'
import email from '../Assets/email.png'
import call from '../Assets/call.png'
import ContactComp from './ContactComp'
import ContactForm from './ContactForm'
import Thanks from './Thanks'

export default function (props) {
    const [user,setUser] = useState("");
    const [check,setCheck] = useState(false);
    const updateUser = (newUser) =>{
        setUser(newUser);
    }
    const updateCheck = (newCheck)=>{
        setCheck(newCheck);
    }
    const [mainDiv, setMainDiv] = useState("w-[60%] bg-gray-950 mt-12 py-10 overflow-y-scroll px-14 space-y-4");
    const [connect, setConnect] = useState("text-2xl font-serif text-gray-200 font-bold");
    const contact_item = [
        {
            image : pin , text : "India"
        },
        {
            image : call , text : "+91-9818-67-5634"
        },
        {
            image : email , text : "priyanshugunwant0408@gmail.com"
        }
    ]
    useEffect(()=>{
        const head1 = document.querySelector('.head1');
        const head2 = document.querySelector('.head2');
        if(props.currentTheme==="light"){
            setMainDiv("w-[60%] bg-cyan-50 mt-12 py-10 overflow-y-scroll px-14 space-y-4");
            setConnect("text-2xl font-serif text-gray-900 font-bold");
            head1.classList.add("text-slate-950");
            head1.classList.remove("text-gray-400");
            head2.classList.add("text-slate-600");
            head2.classList.remove("text-gray-300");
        }
        else{
            setMainDiv("w-[60%] bg-gray-950 mt-12 py-10 overflow-y-scroll px-14 space-y-4");
            setConnect("text-2xl font-serif text-gray-200 font-bold");
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
        {/* Contact  */}
        <div className="font-mono text-4xl font-extrabold head1">
            Contact
        </div>
        {/* Single Line  */}
        <div className="font-mono font-light head2">
            Get in touch
        </div>
        {/* Items Container  */}
        <div className="flex justify-between">
            {/* Items  */}
            {
                contact_item.map((items,i)=>
                <ContactComp currentTheme={props.currentTheme} image={items.image} text={items.text} />
                )
            }
        </div>
        <div>
            <div className="flex justify-center mt-20 mb-16">
                {/* Map Container  */}
                <iframe className="w-1/2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.758813002997!2d77.13065917465644!3d28.81626047571519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1923ada2e3%3A0x1169930518add2fe!2sNational%20Institute%20of%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1695040317102!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
                {/* Form Container  */}
                
                {check ? (
                    <div className="w-1/2 mx-4">
                        <Thanks currentUser={user}/>
                    </div>
                ) : (
                    <div className="w-1/2 py-8 px-3 space-y-16">
                    {/* Heading  */}
                    <div className={connect}>
                        Let's connect
                    </div>
                    <ContactForm updateCheck={updateCheck} updateUser={updateUser} />
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}
