import { useState } from "react"; 
import { navLinks } from "../constants";
import {close, logo, menu } from '../assets'

const Navbar = ({statePage, setStatePage}) => {
  const [toggle, setToggle] = useState(false);
  function handleLinkClick(event, nav) {
    event.preventDefault()
    setStatePage(nav.id)
  }

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className={`font-poppins font-normal cursor-pointer text-[16px] mr-10  text-white  `}>
        <h1 className={`font-poppins font-semibold cursor-pointer text-[24px] mr-10  bg-blue-green-gradient-text`}>{`{JG}`}</h1>
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins  cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }  ${statePage==nav.id ? 'font-semibold bg-blue-gradient-text' : 'font-normal text-white'}  `}
          >
            <a onClick={(event)=>handleLinkClick(event, nav)}  >{nav.title}</a>
          </li>
        ))}
         
        
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle? close : menu} 
            alt="menu" 
            className='w-[28px] cursor-pointer h-[28px]object-contain' 
            onClick={()=>setToggle((prev)=>!prev)}
          />

          <div 
            className={`${toggle? 'flex': 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]  rounded-xl sidebar`}
          >
            <ul className='list-none flex flex-col justify-end items-start flex-1'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins  cursor-pointer text-[16px]    ${statePage==nav.id ? 'font-semibold bg-blue-gradient-text' : 'font-normal text-white'}  `}
                >
                  <a onClick={(event)=>handleLinkClick(event, nav)}  >{nav.title}</a>
                </li>
              ))}
         
            </ul>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
