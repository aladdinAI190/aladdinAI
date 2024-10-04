import React, { useState } from 'react';
import classnames from 'classnames';
import { Title } from '../../../Text';
import { Button } from '../../../Button';

import commonStyles from '../../index.module.scss';
import styles from './index.module.scss';

const list = [
  {
    q: 'Who is behind AladdinAI',
    a: 'A bunch of AI and crypto veterans',
  }, {
    q: 'How does AladdinAI assist memecoin traders?',
    a: 'AladdinAI conducts thorough due diligence, aiding traders in fraud detection and identifying lucrative opportunities within the memecoin market',
  }, {
    q: 'How does AladdinAI identify profitable opportunities for memecoin traders?',
    a: 'AladdinAI analyzes market trends, social media sentiment, and other relevant data sources to pinpoint potential investment opportunities, empowering traders to make informed and strategic decisions.',
  }, {
    q: 'Can AladdinAI be integrated into existing trading platforms?',
    a: 'Yes, AladdinAI offers seamless integration options with popular trading bots, allowing traders to leverage its AI-powered due diligence capabilities directly within their existing workflows.',
  }, {
    q: 'What chain does AladdinAI operate on?',
    a: 'AladdinAI is set to start on Solana and expand to multi-chain support',
  },
];

function FAQ() {
  const [expandIds, setExpandIds] = useState([]);
  return (
    <div className={commonStyles.segmentContainer}>
      <Title>FAQ</Title>
      <div className={styles.faqContainer}>
        {list.map(({ q, a }, index) => (
          <Button
            key={q}
            className={classnames(styles.faqItem, {
              [styles.expand]: expandIds.includes(index),
            })}
            onClick={() => {
              setExpandIds((values) => {
                if (values.includes(index)) {
                  return values.filter((v) => v !== index);
                }

                return [...values, index];
              });
            }}
          >
            <i className={classnames(styles.icon, 'fa-solid', 'fa-chevron-down', {
              [styles.expand]: expandIds.includes(index),
            })}
            />
            <div className={styles.question}>{q}</div>
            <div className={styles.answer}>{a}</div>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
