// eslint-disable-next-line react-hooks/exhaustive-deps
import React,{useEffect} from 'react'
import humanIcon from '../Assets/humanIcon.png'
import Github from '../Assets/github.png';
import Leetcode from '../Assets/leetcode.png';
import LinkedIN from '../Assets/linkedin.png';

export default function Leftbar(props) {
  // declaring a function that will change the state of the variable
  function changeThemeLight() {
    props.updateTheme("light");
  };
  function changeThemeDark() {
    props.updateTheme("dark");
  };
  useEffect(() => {
    const lightElement = document.querySelector('.detail-section');
    const footer = document.querySelector('.footer');
    if (lightElement) {
      // console.log('lightElement found');
      if (props.currentTheme === "light") {
        // console.log('Changing to dark theme');
        lightElement.classList.add('text-black');
        lightElement.classList.remove('text-white');
        footer.classList.add('text-black');
        footer.classList.remove('text-white'); // Remove the opposite class
      } else {
        // console.log('Changing to light theme');
        lightElement.classList.add('text-white');
        lightElement.classList.remove('text-black'); // Remove the opposite class
        footer.classList.add('text-white');
        footer.classList.remove('text-black');
      }
    }
  }, [props.currentTheme]);
  return (
    // Main Division 
    <div className="bg-blue-700 bg-opacity-30 w-[28%] h-[550px] space-y-6 py-6 flex justify-center flex-col items-center relative mt-12 ml-14">
         {/* Theme Selection Button  */}
        <div className="absolute top-3 right-[4%]">
          <div className="flex justify-between py-1 px-2 space-x-2 bg-gray-900 rounded-md bg-opacity-80 w-auto">
            <div onClick={changeThemeLight} className="text-gray-50 rounded-md px-1 cursor-pointer hover:bg-white hover:text-black hover:font-bold">Light</div>
            <div onClick={changeThemeDark} className="text-white rounded-md px-1 cursor-pointer hover:bg-black ">Dark</div>
          </div>
        </div>
        {/* Image Divison  */}
        <div>
          <img className="rounded-full border-4 border-white w-36 h-36" src={humanIcon} alt="This is showing myself" />
        </div>
        {/* Detail Containing Section  */}
        <div className="flex justify-center flex-col items-center space-y-3 detail-section">
          <div className="text-3xl font-bold">
            Priyanshu Gunwant
          </div>
          <div className="font-serif text-2xl font-thin">
            Web Developer
          </div>
          <div className="flex rounded-lg px-2 py-1 space-x-2 bg-black opacity-70 text-white justify-between w-auto">
            <a href="https://github.com/priyanshu-quick04"><img className="h-5 w-5" src={Github} alt="github" /></a>
            <a href="https://www.linkedin.com/in/priyanshu-gunwant-78978622a/"><img className="h-5 w-5" src={LinkedIN} alt="LinkedIN" /></a>
            <a href="https://leetcode.com/Priyanshu_Gunwant/"><img className="h-5 w-5" src={Leetcode} alt="Leetcode" /></a>
          </div>
          <div className="text-1xl font-semibold">
            +91 9818675634
          </div>
          <div className="text-1xl font-semibold">
            priyanshugunwant0408@gmail.com
          </div>
        </div>
        {/* CV Button division  */}
        <div>
          <a href="https://drive.google.com/file/d/1WzHJzgXi_tFe4q8vkyR7l5wQ2ePC0qkk/view" target="_blank">
          <button className="border-3 border-white px-4 py-2 text-white font-sans font-bold rounded-md">
            Download CV
          </button>
          </a>
        </div>
        {/* Footer Section  */}
        <div className="footer text-sm font-mono">
           © 2023 All rights reserved 
        </div>
    </div>
  )
}

