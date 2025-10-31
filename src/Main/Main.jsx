import React from 'react';
import Navber from '../components/Navber';
import Welcome from '../Pages/Welcome/Welcome';

const Main = () => {
    return (
        <div className='container px-5 mx-auto'>
            <Navber></Navber>
            <div className='my-6'>
                <Welcome></Welcome>
            </div>
        </div>
    );
};

export default Main;