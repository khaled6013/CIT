import React from 'react';
import courseImg from '../assets/image/cours.jpg'; // আপনার ইমেজ পাথ
import { FaStar, FaClock, FaBookOpen, FaArrowRight } from "react-icons/fa";

const Courses = () => {
    // ডামি ডেটা (আপনি চাইলে পরে API থেকে লোড করতে পারবেন)
    const coursesData = [
        {
            id: 1,
            title: "Advanced Diploma in Cosmetology",
            category: "Cosmetology",
            price: "25,000৳",
            rating: 4.8,
            reviews: 124,
            duration: "6 Months",
            lessons: "48 Lessons"
        },
        {
            id: 2,
            title: "Professional Hair Cutting & Styling",
            category: "Hair Care",
            price: "15,000৳",
            rating: 4.9,
            reviews: 85,
            duration: "3 Months",
            lessons: "24 Lessons"
        },
        {
            id: 3,
            title: "Expert Makeup Artistry Course",
            category: "Makeup",
            price: "18,500৳",
            rating: 5.0,
            reviews: 200,
            duration: "4 Months",
            lessons: "36 Lessons"
        }, 
        {
            id: 4,
            title: "Expert Makeup Artistry Course",
            category: "Makeup",
            price: "18,500৳",
            rating: 5.0,
            reviews: 200,
            duration: "4 Months",
            lessons: "36 Lessons"
        },
        {
            id: 4,
            title: "Expert Makeup Artistry Course",
            category: "Makeup",
            price: "18,500৳",
            rating: 5.0,
            reviews: 200,
            duration: "4 Months",
            lessons: "36 Lessons"
        },
        {
            id: 4,
            title: "Expert Makeup Artistry Course",
            category: "Makeup",
            price: "18,500৳",
            rating: 5.0,
            reviews: 200,
            duration: "4 Months",
            lessons: "36 Lessons"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="lg:w-9/12 w-11/12 mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h4 className="text-[#880b48] font-bold uppercase tracking-wider text-sm mb-2">Our Popular Courses</h4>
                    <h2 className="text-[#3E2723] font-serif text-3xl lg:text-4xl font-bold">Explore Our Featured Courses</h2>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coursesData.map((course) => (
                        <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col">

                            {/* Image Section */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={courseImg}
                                    alt={course.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 bg-[#880b48] text-white text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    {course.category}
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-6 flex-1 flex flex-col">
                                {/* Rating & Duration Row */}
                                <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                                    <div className="flex items-center gap-1 text-amber-500">
                                        <FaStar />
                                        <span className="text-gray-700 font-bold">{course.rating}</span>
                                        <span className="text-gray-400">({course.reviews})</span>
                                    </div>
                                    <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                                        <FaClock className="text-[#880b48]" />
                                        <span>{course.duration}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-[#3E2723] font-bold text-xl mb-3 leading-snug group-hover:text-[#880b48] transition-colors cursor-pointer">
                                    {course.title}
                                </h3>

                                {/* Lessons Info */}
                                <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                                    <FaBookOpen className="text-gray-400" />
                                    <span>{course.lessons} (Practical & Theory)</span>
                                </div>

                                {/* Footer: Price & Button */}
                                <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between">
                                    <div>
                                        <span className="text-xs text-gray-500 block">Course Fee</span>
                                        <span className="text-2xl font-bold text-[#880b48]">{course.price}</span>
                                    </div>
                                    <button className="w-10 h-10 rounded-full bg-[#3E2723] text-white flex items-center justify-center hover:bg-[#880b48] transition-colors duration-300 shadow-md">
                                        <FaArrowRight />
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Courses;