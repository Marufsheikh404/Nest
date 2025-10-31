import { useEffect, useState, } from 'react';
import { FaPhone } from 'react-icons/fa';

const UnderHeader = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/public/Header.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <div className='flex items-center gap-6 justify-between mt-5'>
                <div> <h1 className='bg-[#3BB77E] px-5 py-2 text-white text-sm font-bold rounded-md '>Browser All Categories</h1></div>
                {
                    data.map(text => (
                        <>
                            <div>
                                <h1 className='text-black text-sm font-bold ' key={text.id}>{text.text}</h1>
                            </div>
                        </>
                    ))
                }
                <div className='flex items-center gap-5'> 
                    <FaPhone size={30}/>
                   <div>
                     <h1 className='text-[#3BB77E] text-xl font-bold'>01719199642</h1>
                     <p className='text-gray-500 text-xs'>24/7 support Center</p>
                   </div>
                </div>
            </div>

        </div>
    );
};

export default UnderHeader;