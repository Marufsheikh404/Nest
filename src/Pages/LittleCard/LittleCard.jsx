import React from 'react';

const LittleCard = ({ cardDatas }) => {

    const filter = cardDatas.filter(data =>[1,2,3,4].includes(data.id))
    return (
        <div className='flex flex-col lg:flex-row  gap-3'>
            {
                filter.map(data => (
                    <div className="card card-side bg-[#F4F6FA] shadow-sm px-2">
                        <figure>
                            <img
                                className='w-40 h-10 rounded-full transition-transform duration-500 ease-in-out hover:scale-y-125'
                                src={data.imageUrl}
                                alt="Movie" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-sm">{data.title}</h2>
                            <p className='text-sm'>{data.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default LittleCard;