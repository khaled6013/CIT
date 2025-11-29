import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { AiFillYoutube } from "react-icons/ai";


const Header = () => {
    return (
        <>
            <div className='bg-[#0F172A] w-full lg:py-3 py-3'>
                <div className="lg:w-10/12 w-11/12 mx-auto ">
                    <div className="lg:flex justify-between items-center">
                        <div className="lg:flex items-center  gap-2 text-white">
                            <div className="flex items-center justify-center gap-2 border-r-2 lg:pr-4 ">
                                <IoLocationOutline />
                                <p className='font-normal font-nunito text-[14px] text-white'>254 Lillian Blvd, Holbrook</p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <TfiEmail />
                                <p className='font-normal font-nunito text-[14px] text-white'>info@santizex-site.com</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-6 text-white lg:mt-0 mt-3">
                            <div className="flex items-center gap-4 text-[20px]">
                                <TiSocialFacebook />
                                <IoLogoWhatsapp />
                                <AiFillYoutube />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header