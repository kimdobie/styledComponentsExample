import React from 'react';
import styles from './fancyBoxes.module.scss';

const FancyBoxes = () => (
  <>
    <div className={styles.greenBox}>
      <p>I am a green box!</p>
    </div>

    <div className={styles['no-style']}>
      <p>I am a box with a green outline</p>
    </div>
  </>
);

export default FancyBoxes;
