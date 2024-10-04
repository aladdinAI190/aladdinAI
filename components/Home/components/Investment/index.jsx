import React from 'react';
import { Title } from '../../../Text';
import Box from '../../../Box';

import commonStyles from '../../index.module.scss';
import styles from './index.module.scss';

function Investment() {
  return (
    <div className={commonStyles.segmentContainer}>
      <Title>INVESTMENT PROCESS</Title>
      <div className={styles.boxContainer}>
        <Box className={styles.box}>
          <img className={styles.image} src="/images/invest1.png" alt="User preference configuration" />
          <div className={styles.boxTitle}>
            User preference configuration
          </div>
        </Box>
        <Box className={styles.box}>
          <img className={styles.image} src="/images/invest2.png" alt="Fraud Detection & Opportunity Identification" />
          <div className={styles.boxTitle}>
            Fraud Detection & Opportunity Identification
          </div>
        </Box>
        <Box className={styles.box}>
          <img className={styles.image} src="/images/invest3.png" alt="Automated Execution" />
          <div className={styles.boxTitle}>
            Automated Execution
          </div>
        </Box>
        <Box className={styles.box}>
          <img className={styles.image} src="/images/invest4.png" alt="Risk Monitoring & Reporting" />
          <div className={styles.boxTitle}>
            Risk Monitoring & Reporting
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Investment;
