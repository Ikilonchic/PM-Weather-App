import React from 'react';
import styles from './Card.module.scss';
import { roundTemp } from '../../../utils';

import DateService from '../../../services/DateService';

import Icon from '../Icon/Icon';

const Card = ({ className, temp, dt, weather }) => {
  const dateFormat = DateService.getReadableFormat('ru', new Date(dt * 1000));
  const tempMin = Math.round(temp.min);
  const tempMax = Math.round(temp.max);

  return (<div className={[styles['card'], className].join(' ')}>
    <Icon className={styles['card__icon']} {...weather[0]}/>
    <div className={styles['card__info']}>
      <div className={styles['card__date']}>{dateFormat}</div>
      <div className={styles['card__temp']}>От <span>{tempMin}</span> до <span>{tempMax}&deg;C</span></div>
    </div>
  </div>);
}

export default Card;
