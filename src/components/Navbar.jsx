import { IoChevronDown } from "react-icons/io5";
import { MdLanguage } from "react-icons/md"; 
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#8c0443] w-full lg:py-4 py-3">
        <div className="lg:w-10/12 w-11/12 mx-auto ">
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
                                    <a href="#" className="block px-4 py-3 text-black hover:bg-gray-100 text-[16px] border-b">Web Design</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-3 text-black hover:bg-gray-100 text-[16px] border-b">Graphic Design</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-3 text-black hover:bg-gray-100 text-[16px]">Digital Marketing</a>
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
                <button className='bg-[#0A2C3D] text-white font-poppins font-normal text-[14px] lg:py-3 py-2 px-4 cursor-pointer flex items-center gap-2 rounded-md'>
                    <MdLanguage className="text-[18px]" />
                    English 
                    <IoChevronDown />
                </button>
                <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <ul className="bg-white w-[120px] shadow-lg rounded-md overflow-hidden text-black">
                        <li className="hover:bg-gray-100 border-b cursor-pointer">
                            <a href="#" className="block px-4 py-2 text-[14px]">English</a>
                        </li>
                        <li className="hover:bg-gray-100 cursor-pointer">
                            <a href="#" className="block px-4 py-2 text-[14px]">Bangla</a>
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