import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

export const TEXT_COLOR = {
  ORANGE: 'orange',
  WHITE: 'white',
};

export function Text({
  color, className, children, ...props
}) {
  return (
    <div className={classnames(styles[color], className)} {...props}>
      {children}
    </div>
  );
}

export function Title({ className, children, ...props }) {
  return (
    <Text color={TEXT_COLOR.ORANGE} className={classnames(styles.title, className)} {...props}>
      {children}
    </Text>
  );
}
