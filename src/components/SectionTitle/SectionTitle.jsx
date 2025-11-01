import React from 'react';

const SectionTitle = ({title ,descrip}) => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-[#253D4E] text-center my-6'>{title}</h1>
            <p className='text-[#7d7a7a]'>{descrip}</p>
        </div>
    );
};

export default SectionTitle;