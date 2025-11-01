import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const Description = () => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <SectionTitle title={'Who we are'} descrip={'Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.'}></SectionTitle>
            <SectionTitle title={'Our history'} descrip={'Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.'}></SectionTitle>
            <SectionTitle title={'Our mission'} descrip={'Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.'}></SectionTitle>
        </div>
    );
};

export default Description;