import { FaCheckCircle, FaUserGraduate, FaChalkboardTeacher, FaAward } from "react-icons/fa";
import aboutImg from '../assets/image/cours.jpg'; 

const AboutPart = () => {
    const features = [
        "Government Recognized Certification",
        "Hands-on Practical Training",
        "Experienced Industry Experts",
        "Job Placement Assistance"
    ];

    const stats = [
        { icon: <FaUserGraduate />, count: "5000+", label: "Graduates" },
        { icon: <FaChalkboardTeacher />, count: "50+", label: "Expert Trainers" },
        { icon: <FaAward />, count: "10+", label: "Years Experience" },
    ];

    return (
        <section className="py-16 lg:py-24 bg-white overflow-hidden">
            <div className="w-11/12 lg:w-9/12 mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-[#880b48] rounded-tr-[50px] rounded-bl-[50px] -z-10 hidden lg:block"></div>
                        
                        <div className="relative rounded-tr-[50px] rounded-bl-[50px] overflow-hidden shadow-2xl">
                            <img 
                                src={aboutImg} 
                                alt="About Our Institute" 
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 right-0 bg-[#3E2723] text-white p-6 rounded-tl-[30px]">
                                <p className="text-3xl font-bold text-center">10+</p>
                                <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:w-1/2">
                        <h4 className="text-[#880b48] font-bold uppercase tracking-wider text-sm mb-2">
                            About Us
                        </h4>
                        <h2 className="text-[#3E2723] font-serif text-3xl lg:text-[40px] leading-tight font-bold mb-6">
                            Empowering Your Journey in Beauty & Wellness
                        </h2>
                        <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
                            Welcome to the International Institute of Beauty and Wellness. We are dedicated to providing world-class vocational training in cosmetology, aesthetics, and makeup artistry. Our mission is to bridge the gap between talent and opportunity by offering government-recognized courses designed by industry leaders.
                        </p>
                        
                        <p className="text-gray-600 text-[16px] leading-relaxed mb-8">
                            Whether you are starting your career or looking to upgrade your skills, our state-of-the-art campus and expert mentors ensure you get the best hands-on learning experience.
                        </p>

                        {/* Feature List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {features.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <FaCheckCircle className="text-[#880b48] text-xl flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                        <button className="bg-[#880b48] text-white px-8 py-3 rounded-md font-medium hover:bg-[#3E2723] transition-colors duration-300 shadow-lg">
                            Learn More About Us
                        </button>
                    </div>

                </div>

                {/* Optional: Stats Section Below */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-gray-100 pt-10">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="text-[#880b48] text-4xl mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-bold text-[#3E2723]">{stat.count}</h3>
                            <p className="text-gray-500 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutPart;