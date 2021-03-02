import React from 'react';
import styles from './Icon.module.scss';

import config from '../../../config';

const Icon = ({ icon, description, className }) => <div className={[styles['icon'], className].join(' ')}>
  <img src={`${config.IMG_API_URL}/${icon}@2x.png`} alt={description}/>
</div>;

export default Icon;
