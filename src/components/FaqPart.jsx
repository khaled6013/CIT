import React, { useState } from 'react';
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const FaqPart = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null); 
        } else {
            setActiveIndex(index); 
        }
    };
    const faqData = [
        {
            question: "How do I apply for a course?",
            answer: "You can apply online through our website by visiting the specific course page and clicking 'Apply Now'. Alternatively, you can visit our campus to fill out the admission form physically."
        },
        {
            question: "What are the payment options available?",
            answer: "We accept payments via Bank Transfer, bKash, Nagad, and Credit/Debit cards. We also offer installment facilities for specific long-term diploma courses."
        },
        {
            question: "Do you provide government-recognized certificates?",
            answer: "Yes, all our major courses are government-recognized and certified. Upon successful completion, you will receive a certificate that is valid both locally and internationally."
        },
        {
            question: "Is there any job placement support after course completion?",
            answer: "Absolutely! We have a dedicated placement cell that helps students prepare for interviews and connects them with top beauty salons, corporate offices, and IT firms depending on their course."
        },
        {
            question: "Can I take classes online?",
            answer: "Yes, we offer hybrid learning models for Digital Marketing, Web Design, and Graphics Design. However, Beauty and Wellness courses require hands-on practical sessions at our campus."
        },
        {
            question: "What is the duration of the courses?",
            answer: "Course duration varies depending on the program. Short courses are typically 1-3 months, while Advanced Diploma programs can range from 6 months to 1 year."
        },
        {
            question: "Do I need any prior experience to join?",
            answer: "No prior experience is required for most of our beginner-level courses. Our instructors will guide you from the very basics to advanced levels."
        },
        {
            question: "What happens if I miss a class?",
            answer: "If you miss a class, you can access the recorded session (for online courses) or schedule a backup class with your instructor (subject to availability)."
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="lg:w-9/12 w-11/12 mx-auto">
                
                <div className="text-center mb-12">
                    <h4 className="text-[#880b48] font-bold uppercase tracking-wider text-sm mb-2">Common Questions</h4>
                    <h2 className="text-[#3E2723] font-serif text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Find answers to the most common questions about our admission process, courses, payment methods, and certification.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {faqData.map((item, index) => (
                        <div 
                            key={index} 
                            className={`border rounded-lg overflow-hidden transition-all duration-300 ${activeIndex === index ? 'border-[#880b48] shadow-md' : 'border-gray-200'}`}
                        >
                            {/* Question Header */}
                            <button 
                                onClick={() => toggleFaq(index)}
                                className="w-full flex items-center justify-between p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                            >
                                <span className={`font-semibold text-lg ${activeIndex === index ? 'text-[#880b48]' : 'text-gray-800'}`}>
                                    {item.question}
                                </span>
                                <span className="text-[#880b48] text-xl">
                                    {activeIndex === index ? <IoChevronUp /> : <IoChevronDown />}
                                </span>
                            </button>

                            {/* Answer Body */}
                            <div 
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-5 text-gray-600 text-[15px] leading-relaxed border-t border-gray-100">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <p className="text-gray-600">
                        Still have questions? 
                        <a href="/contact" className="text-[#880b48] font-bold ml-2 hover:underline">Contact our support</a>
                    </p>
                </div>

            </div>
        </section>
    );
};

export default FaqPart;