import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    // Address Data Array for cleaner code
    const addresses = [
        {
            title: "Head Office - Dhaka",
            subtitle: "Main Branch",
            address: "135/4, Diyabari Khalpar, Sector 12, Uttara, Dhaka-1230",
            email: "info@muktitechnical.com"
        },
        {
            title: "Branch Office - Chittagong",
            subtitle: "Chittagong Regional Office",
            address: "Nayabazar, Halishahar Road, Rampura, Chittagong-4000",
            email: "chittagong@muktitechnical.com"
        },
        {
            title: "Branch Office - Sylhet",
            subtitle: "Sylhet Regional Office",
            address: "Al-Aman Masjid Market, Sadar, Sylhet-3100, Bangladesh",
            email: "sylhet@muktitechnical.com"
        },
        {
            title: "Branch Office - Rajshahi",
            subtitle: "Rajshahi Regional Office",
            address: "Rajshahi-6000, Bangladesh",
            email: "rajshahi@muktitechnical.com"
        }
    ];

    return (
        <footer className="bg-[#0F172A] w-full pt-16 pb-6">
            <div className="lg:w-9/12 w-11/12 mx-auto">
                
                {/* Section Title */}
                <div className="flex flex-col items-center justify-center mb-10">
                    <h2 className="text-white text-[24px] font-bold mb-2">Our Address</h2>
                    <div className="w-16 h-1 bg-[#3B82F6] rounded-full"></div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {addresses.map((item, index) => (
                        <div key={index} className="bg-[#1E293B] rounded-lg p-6 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
                            {/* Icon Circle */}
                            <div className="w-14 h-14 bg-[#2563EB] rounded-full flex items-center justify-center text-white text-[22px] mb-4 shadow-lg shadow-blue-900/50">
                                <FaMapMarkerAlt />
                            </div>
                            
                            {/* Content */}
                            <h3 className="text-white font-bold text-[18px] mb-1">{item.title}</h3>
                            <p className="text-gray-400 text-[14px] mb-3">{item.subtitle}</p>
                            <p className="text-gray-300 text-[14px] leading-relaxed mb-6 h-[60px] flex items-center justify-center">
                                {item.address}
                            </p>
                            
                            {/* Email */}
                            <div className="mt-auto flex items-center gap-2 text-gray-300 text-[13px]">
                                <MdEmail className="text-[16px]" />
                                <a href={`mailto:${item.email}`} className="hover:text-white transition-colors">
                                    {item.email}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-700 mt-14 pt-6">
                    <p className="text-center text-gray-400 text-[14px]">
                        © 2025 Mukti Technical Training Center. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;