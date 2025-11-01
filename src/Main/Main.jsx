import React, { useEffect, useState } from 'react';
import Navber from '../components/Navber';
import Welcome from '../Pages/Welcome/Welcome';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Card from '../Pages/CardSection/Card';
import Performance from '../components/Performanec/Performance';
import Description from '../components/Description/Description';
import Team from '../Team/Team';

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
            <div className='my-8 container px-8'>
                <Welcome image={image}></Welcome>
            </div>
            <div className='my-8 container px-8'>
                <Card cards={cardDatas}></Card>
            </div>
            <div className='my-8 container px-8'>
                <Performance></Performance>
            </div>
            <div className='my-8 container px-8'>
                <Description></Description>
            </div>
            <div className='my-8 container px-8'>
                <Team></Team>
            </div>
        </div>
    );
};

export default Main;