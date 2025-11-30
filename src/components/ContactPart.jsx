import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaClock } from "react-icons/fa";

const ContactPart = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#F9FAFB] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#880b48] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3E2723] opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="w-11/12 lg:w-9/12 mx-auto relative z-10">
        <div className="text-center mb-16">
            <h4 className="text-[#880b48] font-bold uppercase tracking-widest text-sm mb-3">
                Get In Touch
            </h4>
            <h2 className="text-[#3E2723] font-serif text-3xl lg:text-5xl font-bold mb-4">
                We'd Love To Hear From You
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-[16px]">
                Have a question about our courses or want to visit our campus? 
                Fill out the form below or reach out to us directly.
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1 space-y-6">
                
                {/* Address Card */}
                <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-transparent hover:border-[#880b48] transition-all duration-300 group">
                    <div className="w-12 h-12 bg-[#FFF5F7] text-[#880b48] rounded-full flex items-center justify-center text-xl mb-4 group-hover:bg-[#880b48] group-hover:text-white transition-colors">
                        <FaMapMarkerAlt />
                    </div>
                    <h3 className="text-[#3E2723] font-bold text-lg mb-2">Our Location</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        135/4, Diyabari Khalpar, <br/> Sector 12, Uttara, Dhaka-1230
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-transparent hover:border-[#880b48] transition-all duration-300 group">
                    <div className="w-12 h-12 bg-[#FFF5F7] text-[#880b48] rounded-full flex items-center justify-center text-xl mb-4 group-hover:bg-[#880b48] group-hover:text-white transition-colors">
                        <FaPhoneAlt />
                    </div>
                    <h3 className="text-[#3E2723] font-bold text-lg mb-2">Contact Info</h3>
                    <p className="text-gray-500 text-sm mb-1">
                        <span className="font-semibold text-gray-700">Phone:</span> +880 1234 567890
                    </p>
                    <p className="text-gray-500 text-sm">
                        <span className="font-semibold text-gray-700">Email:</span> info@muktitechnical.com
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-transparent hover:border-[#880b48] transition-all duration-300 group">
                    <div className="w-12 h-12 bg-[#FFF5F7] text-[#880b48] rounded-full flex items-center justify-center text-xl mb-4 group-hover:bg-[#880b48] group-hover:text-white transition-colors">
                        <FaClock />
                    </div>
                    <h3 className="text-[#3E2723] font-bold text-lg mb-2">Office Hours</h3>
                    <p className="text-gray-500 text-sm">Sat - Thu: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-400 text-xs mt-1">Friday Closed</p>
                </div>

            </div>
            <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100 h-full">
                    <h3 className="text-2xl font-bold text-[#3E2723] mb-6 font-serif">Send us a Message</h3>
                    
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-600">Full Name</label>
                                <input 
                                    type="text" 
                                    placeholder="ex: Sarah Khan" 
                                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#880b48] focus:ring-1 focus:ring-[#880b48] transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-600">Phone Number</label>
                                <input 
                                    type="text" 
                                    placeholder="ex: +880 1700 000000" 
                                    className="w-full bg-[#F9FAFB] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#880b48] focus:ring-1 focus:ring-[#880b48] transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-600">Email Address</label>
                            <input 
                                type="email" 
                                placeholder="ex: sarah@example.com" 
                                className="w-full bg-[#F9FAFB] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#880b48] focus:ring-1 focus:ring-[#880b48] transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-600">Subject</label>
                            <select className="w-full bg-[#F9FAFB] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#880b48] focus:ring-1 focus:ring-[#880b48] transition-all text-gray-500">
                                <option>Select a Topic</option>
                                <option>Admission Inquiry</option>
                                <option>Course Details</option>
                                <option>General Question</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-600">Your Message</label>
                            <textarea 
                                rows="4" 
                                placeholder="Write your message here..." 
                                className="w-full bg-[#F9FAFB] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#880b48] focus:ring-1 focus:ring-[#880b48] transition-all resize-none"
                            ></textarea>
                        </div>
                        <button className="w-full bg-[#3E2723] text-white font-bold py-4 rounded-lg hover:bg-[#880b48] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg transform active:scale-95">
                            Send Message <FaPaperPlane />
                        </button>
                    </form>
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default ContactPart;