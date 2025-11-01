import { FaPhone } from 'react-icons/fa';

const UnderHeader = ({ data }) => {
    return (
        <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-between gap-4 mt-5">

                {/* Category Button */}
                <div className="w-full sm:w-auto text-center sm:text-left">
                    <h1 className="bg-[#3BB77E] px-5 py-2 text-white text-sm rounded-md inline-block">
                        Browser All Categories
                    </h1>
                </div>

                {/* Menu Items */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-4 flex-1">
                    {
                        data.map(text => (
                            <div key={text.id}>
                                <h1 className="text-black text-sm font-bold">{text.text}</h1>
                            </div>
                        ))
                    }
                </div>

                {/* Phone Section */}
                <div className="flex items-center justify-center sm:justify-end gap-3 w-full sm:w-auto">
                    <FaPhone size={25} className="text-[#3BB77E]" />
                    <div className="text-center sm:text-left">
                        <h1 className="text-[#3BB77E] text-lg sm:text-xl font-bold">01719199642</h1>
                        <p className="text-gray-500 text-xs">24/7 support Center</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnderHeader;
