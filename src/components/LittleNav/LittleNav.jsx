import React from 'react';
import { FaHome } from 'react-icons/fa';

const LittleNav = ({ items }) => {
    const filter = items.filter(item => ["Home", "About", "Pages"].includes(item.text));

    return (
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-4 border border-gray-200 p-4 sm:p-6 rounded-md">
            <p className="text-[#3BB77E] text-lg sm:text-xl">
                <FaHome />
            </p>
            {
                filter.map(data => (
                    <h1
                        key={data.id}
                        className="text-sm sm:text-base font-semibold"
                        style={{ color: data.text === "Home" ? "#3BB77E" : "gray" }}
                    >
                        {data.text}
                    </h1>
                ))
            }
        </div>
    );
};

export default LittleNav;
