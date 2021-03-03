import React, { useEffect, useState } from 'react';
import styles from './Weather.module.scss';

import WeatherService from '../../services/WeatherService';

import Current from './Current/Current';
import Card from './Card/Card';
import Preloader from '../Preloader/Preloader';

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

  if (!current || !daily) return <div className={styles['weather_placeholder']}>
    <Preloader />
  </div>;

  return <div className={styles['weather']}>
    <Current className={styles['weather__current']} {...current}></Current>
    <div className={styles['weather__list']}>
      {daily && daily.map((elem) => <Card className={styles['weather__card']} key={elem.dt} {...elem}/>)}
    </div>
  </div>;
};

export default Weather;
