import React from 'react';

const Welcome = ({ image }) => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 p-4 sm:p-6 lg:p-10">

            {/* Left side image */}
            <img
                className="w-full sm:w-3/4 md:w-96 rounded-2xl shadow-md mx-auto md:mx-0"
                src="/assets/gril.png"
                alt="cooking"
            />

            {/* Right side content */}
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-[#253D4E] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    Welcome to Nest
                </h1>

                <div className="space-y-4 mb-6 px-2 sm:px-0">
                    <p className="text-[#7E7E7E] text-sm sm:text-base leading-relaxed">
                        Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus.
                    </p>
                    <p className="text-[#7E7E7E] text-sm sm:text-base leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est.
                    </p>
                </div>

                {/* Image Carousel */}
                <div className="carousel carousel-center bg-white rounded-box max-w-full sm:max-w-lg space-x-4 p-4">
                    {image.map(pic => (
                        <div key={pic.id} className="carousel-item">
                            <img
                                src={pic.imageUrl}
                                alt={`Slide ${pic.id}`}
                                className="w-48 sm:w-56 md:w-60 h-32 sm:h-36 object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Welcome;
