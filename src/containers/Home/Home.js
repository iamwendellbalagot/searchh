import React from 'react';
import './Home.css';

import Input from '../../components/Input/Input';

const Home = () => {
    return (
        <div className='home'>
            <a href='https://github.com/iamwendellbalagot' target='_blank' rel='nonreferrer'>Developer</a>
            <img src = 'logo.png' alt='Logo' />
            <Input />
        </div>
    )
}

export default Home
