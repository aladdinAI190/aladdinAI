import React from 'react';
import classnames from 'classnames';
import { TEXT_COLOR, Text } from '../../../Text';
import Box from '../../../Box';
import { Button } from '../../../Button';

import commonStyles from '../../index.module.scss';
import styles from './index.module.scss';

function Banner() {
  return (
    <div className={commonStyles.segmentContainer}>
      <div className={styles.title}>
        <Text color={TEXT_COLOR.WHITE} className={styles.title1}>
          EMPOWERING MEMECOIN TRADERS WITH AI TOOLKIT&nbsp;
        </Text>
      </div>
      <div className={styles.boxContainer}>
        <Box className={classnames(styles.box, styles.left)}>
          <div className={styles.description}>AI-Driven Due Diligence Toolkit</div>
        </Box>
        <Box isRevert className={classnames(styles.box, styles.right)}>
          <div className={styles.description}>Personalized Trading Experience</div>
        </Box>
      </div>
      <img className={styles.image} src="/images/aladdin1.png" alt="background" />
      <div className={styles.subscribeContainer}>
        <div className={styles.subscribeTitle}>
        Trade with more information edge with AI-powered toolkit
        </div>
        <Button className={styles.subscribeButton}>Subscribe</Button>
      </div>
    </div>
  );
}

export default Banner;
