import React from 'react';
import { FiSend } from 'react-icons/fi';

const Search = () => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className="bg-cover bg-center bg-no-repeat rounded-xl py-10 mt-25"
            style={{ backgroundImage: "url('/assets/ak.png')" }}
        >
            <div className="flex flex-col lg:flex-row items-center lg:justify-between container mx-auto px-4 sm:px-6 lg:px-24">
                {/* Left Content */}
                <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                    <h1 className="text-[#253D4E] text-3xl sm:text-4xl lg:text-5xl font-bold pb-4">
                        Stay home & get your daily needs from our shop
                    </h1>
                    <p className="text-[#7E7E7E] text-base sm:text-lg pb-4">
                        Start Your Daily Shopping with{" "}
                        <span className="text-[#3BB77E]">Nest Mart</span>
                    </p>

                    {/* Input Container */}
                    <div className="relative w-full sm:w-[400px] lg:w-[480px] mt-5 mx-auto lg:mx-0">
                        <div className="flex items-center w-full h-[50px] sm:h-[60px] bg-white rounded-full shadow-md px-4 sm:px-5">
                            <FiSend className="text-gray-400 mr-2" size={22} />
                            <input
                                type="email"
                                placeholder="Your email address"
                                required
                                className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400 text-sm sm:text-base"
                            />
                        </div>

                        <button
                            onClick={handleClick}
                            className="absolute right-0 top-1/2 -translate-y-1/2 px-4 sm:px-6 py-2 sm:py-3 bg-[#3BB77E] text-white text-sm sm:text-base font-semibold rounded-full hover:bg-[#FDC040] transition-all duration-300 shadow-lg"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                    <img
                        className="w-64 sm:w-96 lg:w-[450px] object-cover"
                        src="/assets/kopi.png"
                        alt="Illustration"
                    />
                </div>
            </div>
        </div>
    );
};

export default Search;
