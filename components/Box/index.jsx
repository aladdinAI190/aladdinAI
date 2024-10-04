import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

export default function Box({
  isRevert = false, className, children, ...props
}) {
  return (
    <div className={classnames(styles.box, className, { [styles.revert]: isRevert })} {...props}>
      {children}
    </div>
  );
}
