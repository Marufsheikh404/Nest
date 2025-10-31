import React from 'react';
import Header from './Header/Header';
import UnderHeader from './UnderHeader/UnderHeader';
import LittleNav from './LittleNav/LittleNav';
import { useState } from 'react';
import { useEffect } from 'react';

const Navber = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/public/Header.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <UnderHeader data={data}></UnderHeader>
            <LittleNav></LittleNav>
        </div>
    );
};

export default Navber;