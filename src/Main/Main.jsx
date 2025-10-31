import React, { useEffect, useState } from 'react';
import Navber from '../components/Navber';
import Welcome from '../Pages/Welcome/Welcome';

const Main = () => {
    const [image,setImage] = useState([]);

    useEffect(()=>{
        fetch('/public/Image.json')
        .then(res => res.json())
        .then(data => setImage(data))
    },[])

    return (
        <div className='container px-5 mx-auto'>
            <Navber></Navber>
            <div className='my-6 container px-8'>
                <Welcome image ={image}></Welcome>
            </div>
        </div>
    );
};

export default Main;