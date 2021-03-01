import React, { useEffect, useState } from 'react';

import WeatherService from '../../services/WeatherService';

import Current from './Current/Current';
import Card from './Card/Card';

const Weather = ({ city }) => {
    const [current, setCurrent] = useState();
    const [daily, setDaily] = useState();

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        const { current, daily } = await WeatherService.get(city)
        
        setDaily(daily);
        setCurrent(current);
    };

    return <div>
        {(current && <Current {...current}></Current>) || 'Loading...'}
        <ul>
            {daily && daily.map((elem) => (<li><Card key={elem.dt} {...elem} /></li>))}
        </ul>
    </div>;
};

export default Weather;
