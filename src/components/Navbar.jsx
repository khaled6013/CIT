import React, { useState } from "react"; 
import { IoChevronDown } from "react-icons/io5";
import { MdLanguage } from "react-icons/md"; 
import { Link } from "react-router-dom";

const Navbar = () => {
  const [currentLang, setCurrentLang] = useState("English");

  const handleLangChange = (lang) => {
    setCurrentLang(lang);
  };

  return (
    <>
      <div className="bg-[#8c0443] w-full lg:py-4 py-3">
        <div className="lg:w-9/12 w-11/12 mx-auto ">
          <div className="flex items-center justify-between">
            <div className="">
                <Link to='/' className="text-white font-bold text-[28px]">LOGO</Link>
            </div>
            <div className="">
                <ul className="flex items-center gap-7">
                    <li>
                        <Link to='/' className="text-white font-medium text-[18px]">Home</Link>
                    </li>
                    <li>
                        <Link to='/about' className="text-white font-medium text-[18px]">About</Link>
                    </li>
                    <li className="relative group">
                        <Link to='/courses' className="text-white font-medium text-[18px] flex items-center gap-1 cursor-pointer">
                            courses <IoChevronDown />
                        </Link>
                        <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                            <ul className="bg-white w-[200px] shadow-lg rounded-md overflow-hidden">
                                <li>
                                    <Link to='/web-design' className="block px-4 py-3 text-black hover:bg-gray-100 text-[16px] border-b">Web Design</Link>
                                </li>
                                <li>
                                    <Link to='/graphic-design' className="block px-4 py-3 text-black hover:bg-gray-100 text-[16px] border-b">Graphic Design</Link>
                                </li>
                                <li>
                                    <Link to='/digital-marketing' className="block px-4 py-3 text-black hover:bg-gray-100 text-[16px]">Digital Marketing</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                     <li>
                        <Link to='/faq' className="text-white font-medium text-[18px]">FAQ</Link>
                    </li>
                     <li>
                        <Link to='/contact' className="text-white font-medium text-[18px]">Contact</Link>
                    </li>
                </ul>
            </div>
            
            <div className="relative group">
                <button className='bg-[#0A2C3D] text-white font-poppins font-normal text-[14px] lg:py-3 py-2 px-4 cursor-pointer flex items-center gap-2 rounded-md w-[120px] justify-between'>
                    <div className="flex items-center gap-2">
                        <MdLanguage className="text-[18px]" />
                        {currentLang} 
                    </div>
                    <IoChevronDown />
                </button>
                
                <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <ul className="bg-white w-[120px] shadow-lg rounded-md overflow-hidden text-black">
                        <li 
                            onClick={() => handleLangChange("English")}
                            className={`hover:bg-gray-100 border-b cursor-pointer px-4 py-2 text-[14px] ${currentLang === 'English' ? 'bg-gray-50 font-bold text-[#8c0443]' : ''}`}
                        >
                            English
                        </li>
                        <li 
                            onClick={() => handleLangChange("Bangla")}
                            className={`hover:bg-gray-100 cursor-pointer px-4 py-2 text-[14px] ${currentLang === 'Bangla' ? 'bg-gray-50 font-bold text-[#8c0443]' : ''}`}
                        >
                            Bangla
                        </li>
                    </ul>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar