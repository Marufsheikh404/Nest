import React from 'react';
import { FaHome } from 'react-icons/fa';

const LittleNav = ({items}) => {
        const filter = items.filter(item => ["Home","About","Pages"].includes(item.text))
    return (
        <div className='flex items-center gap-3 mt-4 border border-gray-200 p-6'>
            <p className='text-[#3BB77E]'><FaHome/></p>
            {
                filter.map(data =>(
                    <h1
                    key={data.id}
                    style={{color: data.text ==="Home" ? "#3BB77E" : "gray"}}
                    >{data.text}</h1>
                ))
            }
        </div>
    );
};

export default LittleNav;