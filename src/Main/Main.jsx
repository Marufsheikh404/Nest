import React, { useEffect, useState } from 'react';
import Navber from '../components/Navber';
import Welcome from '../Pages/Welcome/Welcome';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Card from '../Pages/CardSection/Card';

const Main = () => {
    const [image, setImage] = useState([]);
    const [cardDatas, setCardDatas] = useState([]);

    useEffect(() => {
        fetch('/public/Image.json')
            .then(res => res.json())
            .then(data => setImage(data))
    }, [])

    useEffect(() => {
        fetch('/public/Card.json')
            .then(res => res.json())
            .then(data => setCardDatas(data))
    }, [])

    return (
        <div className='container px-5 mx-auto'>
            <Navber></Navber>
            <div className='my-6 container px-8'>
                <Welcome image={image}></Welcome>
            </div>
            <div className='my-6 container px-8'>
                <Card cards={cardDatas}></Card>
            </div>
        </div>
    );
};

export default Main;