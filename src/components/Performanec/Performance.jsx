import React from 'react';

const Performance = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-10 p-6 lg:p-12 bg-white">
            {/* Left Side Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <img
                    src="/assets/imgi_37_about-5.png"
                    alt="Good Looking girls"
                    className="w-full max-w-md lg:max-w-lg rounded-2xl object-cover shadow-md"
                />
            </div>

            {/* Right Side Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-[#B6B6B6] text-2xl md:text-3xl font-semibold">
                    Our Performance
                </h2>
                <h1 className="text-[#253D4E] text-3xl md:text-5xl lg:text-6xl font-semibold mt-3 leading-tight">
                    Your Partner for e-commerce grocery solution
                </h1>

                <div className="mt-6 space-y-4 text-[#7d7a7a] text-sm md:text-base">
                    <p>
                        Ed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto.
                    </p>
                    <p>
                        Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Performance;
