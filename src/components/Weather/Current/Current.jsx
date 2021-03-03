import React from 'react';
import styles from './Current.module.scss';

import {
  convertKelTemperatureToCel,
} from '../../../utils';

import Icon from '../Icon/Icon';
import Property from '../Property/Property';
import DateService from '../../../services/DateService';

const Current = ({ 
  className,
  name,
  clouds,
  visibility,
  weather,
  main,
  wind,
  sys,
}) => {
  const mainTemp = Math.round(convertKelTemperatureToCel(main.temp));
  const feelsTemp = Math.round(convertKelTemperatureToCel(main.feels_like));
  const sunriseTime = DateService.getTimeCode(new Date(sys.sunrise * 1000));
  const sunsetTime = DateService.getTimeCode(new Date(sys.sunset * 1000));

  return <div className={[styles['current'], className].join(' ')}>
    <div className={styles['current__heading']}>
      <div className={styles['current__city']}>{name}</div>
      <div className={styles['current__date']}>Сегодня</div>
    </div>
    <div className={styles['current__info']}>
      <Icon {...weather[0]} className={styles['current__icon']}/>
      <div className={styles['current__temp']}>
        <span className={styles['temp-main']}>{mainTemp}&deg;C</span>
        <span className={styles['temp-feels']}>Ощущается: {feelsTemp}&deg;C</span>
      </div>
      <div className={styles['info__table']}>
        <Property title={'Восход'} value={sunriseTime}/>
        <Property title={'Закат'} value={sunsetTime}/>
        <Property title={'Облачность'} value={clouds.all + '%'}/>
        <Property title={'Видимость'} value={visibility + 'm'}/>
        <Property title={'Давление'} value={main.pressure + 'hPa'}/>
        <Property title={'Влажность'} value={main.humidity + '%'}/>
        <Property title={'Скорость ветра'} value={wind.speed + 'm/h'}/>
        <Property title={'Направление ветра'} value={wind.deg + '°'}/>
      </div>
    </div>
  </div>
};

export default Current;
