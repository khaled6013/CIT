import React from 'react';
import { FaCertificate, FaUserTie, FaHandHoldingHeart, FaBriefcase } from "react-icons/fa";
import img1 from '../assets/image/cours.jpg';
import img2 from '../assets/image/coursTwo.jpg';

const Choose = () => {
    
    const benefits = [
        {
            id: 1,
            icon: <FaCertificate />,
            title: "Government Recognized",
            description: "We provide 100% valid government-certified courses accepted globally."
        },
        {
            id: 2,
            icon: <FaUserTie />,
            title: "Expert Industry Trainers",
            description: "Learn directly from top beauty experts with 10+ years of experience."
        },
        {
            id: 3,
            icon: <FaHandHoldingHeart />,
            title: "Hands-on Practical",
            description: "Our curriculum focuses on 80% practical training in modern labs."
        },
        {
            id: 4,
            icon: <FaBriefcase />,
            title: "Job Placement Support",
            description: "Dedicated career cell to help you get jobs in top salons & corporate."
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-[#FFF5F7]"> 
            <div className="w-11/12 lg:w-9/12 mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2 relative">
                        <div className="absolute top-10 left-10 w-full h-full border-2 border-[#880b48] rounded-2xl -z-0 hidden lg:block"></div>
                        <div className="relative z-10">
                            <img 
                                src={img1} 
                                alt="Classroom Training" 
                                className="w-[85%] rounded-2xl shadow-xl border-4 border-white"
                            />
                            <img 
                                src={img2} 
                                alt="Practical Session" 
                                className="absolute -bottom-10 -right-4 w-[55%] rounded-xl shadow-2xl border-4 border-white object-cover"
                            />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#3E2723] text-white p-6 rounded-full shadow-lg w-32 h-32 flex flex-col items-center justify-center text-center bg-opacity-95 backdrop-blur-sm border-4 border-white/20">
                                <span className="text-3xl font-bold">100%</span>
                                <span className="text-[10px] uppercase tracking-wider mt-1">Job Support</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-10 lg:mt-0">
                        <h4 className="text-[#880b48] font-bold uppercase tracking-wider text-sm mb-2">
                            Why Choose Us
                        </h4>
                        <h2 className="text-[#3E2723] font-serif text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                            We Don't Just Teach, <br/> We Build Careers.
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            At International Institute of Beauty and Wellness, we combine art with science. Our state-of-the-art facilities and curriculum are designed to make you industry-ready from day one.
                        </p>
                        <div className="space-y-6">
                            {benefits.map((item) => (
                                <div key={item.id} className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 bg-white border border-gray-100 rounded-lg flex items-center justify-center text-[#880b48] text-xl shadow-sm group-hover:bg-[#880b48] group-hover:text-white transition-all duration-300 shrink-0 mt-1">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-[#3E2723] font-bold text-lg mb-1 group-hover:text-[#880b48] transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Choose;