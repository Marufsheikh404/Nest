import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const Description = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            <SectionTitle
                title="Who we are"
                descrip="Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. Tellus eros donec ac odio orci ultrices in."
            />
            <SectionTitle
                title="Our history"
                descrip="Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. Tellus eros donec ac odio orci ultrices in."
            />
            <SectionTitle
                title="Our mission"
                descrip="Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. Tellus eros donec ac odio orci ultrices in."
            />
        </div>
    );
};

export default Description;
