

const Welcome = ({image}) => {

    return (
        <div className='flex gap-6 flex-col md:flex-row items-start p-6'>
            {/* Left side image */}
            <img className='w-96 rounded-2xl shadow-md' src="/assets/gril.png" alt="cooking" />

            {/* Right side content */}
            <div className='flex-1'>
                <h1 className="text-[#253D4E] text-5xl font-bold mb-4">Welcome to Nest</h1>

                <div className="space-y-4 mb-6">
                    <p className="text-[#7E7E7E]">
                        Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus.
                    </p>
                    <p className="text-[#7E7E7E]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est 
                    </p>
                </div>

                {/* Image Carousel */}
                <div className="carousel carousel-center bg-white rounded-box max-w-lg space-x-4 p-4">
                    {image.map(pic => (
                        <div key={pic.id} className="carousel-item">
                            <img
                                src={pic.imageUrl}
                                alt={`Slide ${pic.id}`}
                                className="w-60 h-38 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Welcome;
