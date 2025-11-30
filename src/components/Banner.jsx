import bannerImg from '../assets/image/banImg.webp'; 

const Banner = () => {
  return (
    <section className="bg-[#F3F4F6] py-12 lg:pt-20 overflow-hidden">
      <div className="lg:w-9/12 w-11/12 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="font-serif text-[#3E2723] text-4xl lg:text-[52px] leading-tight font-medium">
              Welcome to International Institute of Beauty and Wellness
            </h1>
            <p className="text-gray-600 text-[15px] lg:w-4/5">
              Professional Beauty, Skin, Hair & Makeup Courses with Hands-on Practice & Government-Recognized Certification.
            </p>
            <div className="border-l-4 border-[#3E2723] pl-4 py-1">
              <p className="text-gray-700 font-medium text-[15px] italic">
                Learn from industry experts, get certified, and start your journey in the world of cosmetology, aesthetics, and beauty care.
              </p>
            </div>
            <div className="pt-4">
              <button className="bg-[#2D1B18] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg">
                Explore Courses
              </button>
            </div>
          </div>

          {/* Right Side: Image & Shapes */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="relative mt-8">
                <div className="w-[280px] h-[350px] lg:w-[350px] lg:h-[420px] bg-[#880b48] rounded-t-full mx-auto relative z-0"></div>
                <img 
                  src={bannerImg} 
                  alt="Beauty Institute Student" 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[320px] lg:max-w-[400px] z-10 drop-shadow-xl"
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Banner;