import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import teamImg1 from '../assets/image/musk.jpg';

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Senior Cosmetologist",
            image: teamImg1, 
        },
        {
            id: 2,
            name: "David Smith",
            role: "Hair Stylist Expert",
            image: teamImg1,
        },
        {
            id: 3,
            name: "Maria Garcia",
            role: "Makeup Artist",
            image: teamImg1, 
        },
        {
            id: 4,
            name: "Emily Davis",
            role: "Skin Care Specialist",
            image: teamImg1,
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="w-11/12 lg:w-9/12 mx-auto">
                <div className="text-center mb-16">
                    <h4 className="text-[#880b48] font-bold uppercase tracking-widest text-sm mb-3">
                        Our Professionals
                    </h4>
                    <h2 className="text-[#3E2723] font-serif text-3xl lg:text-5xl font-bold">
                        Our Team
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="flex flex-col items-center text-center group">
                            
                            <div className="relative w-48 h-48 mb-6">
                                <div className="absolute inset-0 border-2 border-dashed border-[#880b48] rounded-full opacity-30 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-700 ease-in-out"></div>
                                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
                                    <img 
                                        src={member.image} 
                                        alt={member.name} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="absolute bottom-1 right-2 bg-[#3E2723] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-20 group-hover:bg-[#880b48] transition-colors duration-300">
                                    <FaInstagram />
                                </div>
                            </div>
                            <h3 className="text-[#3E2723] font-serif font-bold text-2xl mb-1 group-hover:text-[#880b48] transition-colors duration-300">
                                {member.name}
                            </h3>
                            <p className="text-gray-500 text-sm font-medium uppercase tracking-wide mb-4">
                                {member.role}
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="text-gray-400 hover:text-[#880b48] transition-colors"><FaFacebookF /></a>
                                <a href="#" className="text-gray-400 hover:text-[#880b48] transition-colors"><FaTwitter /></a>
                                <a href="#" className="text-gray-400 hover:text-[#880b48] transition-colors"><FaLinkedinIn /></a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Team;