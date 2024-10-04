import React, { useState } from 'react';
import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import { NavButton, WalletButton } from '../Button';

import styles from './index.module.scss';

const menu = [
  { name: 'Home', link: '/', isExternal: false },
  { name: 'About', link: '/', isExternal: false },
  { name: 'Product', link: '/', isExternal: false },
  { name: 'Contact', link: '/', isExternal: false },
];

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className={styles.fixedContainer}>
      <div className={styles.container}>
        <button type="button" className={styles.mobileMenuButton} onClick={() => setShowMobileMenu(true)}>
          <i className="fa-solid fa-bars" />
        </button>
        <Drawer anchor="left" open={showMobileMenu} onClose={() => setShowMobileMenu(false)}>
          <div className={styles.menuSm}>
            {
            menu.map((item) => (
              <NavButton key={item.name} className={styles.menuItemSm}>
                <Link href={item.link} target={item.isExternal ? '_blank' : '_self'} onClick={() => setShowMobileMenu(false)}>
                  {item.name}
                </Link>
              </NavButton>
            ))
          }
          </div>
        </Drawer>
        <div className={styles.logo}>
          <img src="/images/logo1.png" alt="logo" />
        </div>
        <div className={styles.menu}>
          {menu.map((item) => (
            <NavButton key={item.name} className={styles.menuItem}>
              <Link href={item.link} target={item.isExternal ? '_blank' : '_self'}>
                {item.name}
              </Link>
            </NavButton>
          ))}
        </div>
        <WalletButton className={styles.walletButton}>Connect Wallet</WalletButton>
      </div>

    </div>
  );
}

export default Navbar;
