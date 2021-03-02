import React from 'react';
import styles from './Property.module.scss';

const Property = ({ className, title, value }) => <div className={[styles['property'], className].join(' ')}>
  <span className={styles['property__value']}>
    {value}
  </span>
  <span className={styles['property__title']}>
    {title}
  </span>
</div>;

export default Property;
