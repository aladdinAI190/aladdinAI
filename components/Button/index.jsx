import React from 'react';
import classnames from 'classnames';

import { Button as MUIButton } from '@mui/material';
import textStyles from '../Text/index.module.scss';
import styles from './index.module.scss';

export function Button({ className, children, ...props }) {
  return (
    <MUIButton className={classnames(styles.defaultButton, className)} {...props}>
      {children}
    </MUIButton>
  );
}

export function NavButton({ className, children, ...props }) {
  return (
    <MUIButton className={classnames(styles.navButton, className)} {...props}>
      {children}
    </MUIButton>
  );
}

export function WalletButton({ className, children, ...props }) {
  return (
    <MUIButton className={classnames(styles.walletButton, className)} {...props}>
      <div className={classnames(styles.gradientText, textStyles.orange)}>
        {children}
      </div>
    </MUIButton>
  );
}
