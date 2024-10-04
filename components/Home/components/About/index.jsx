import React from 'react';
import { TEXT_COLOR, Text, Title } from '../../../Text';

import commonStyles from '../../index.module.scss';
import styles from './index.module.scss';

function About() {
  return (
    <div className={commonStyles.segmentContainer}>
      <Title>ABOUT US</Title>
      <div className={styles.content}>
        <Text className={styles.contentText} color={TEXT_COLOR.WHITE}>
            ALADDIN AI ASSISTS MEMECOIN TRADERS<br />
            TO FIND THE OPTIMAL TRADING OPPOTUNITY<br />
            TO MAXIMIZE RETURN<br />
            AND MINIMIZE RISK<br />
        </Text>
      </div>
      <img className={styles.image} src="/images/about1.png" alt="about us" />
    </div>
  );
}

export default About;
