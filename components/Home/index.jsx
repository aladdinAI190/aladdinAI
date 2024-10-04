import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Banner from './components/Banner';
import Investment from './components/Investment';
import About from './components/About';
import FAQ from './components/FAQ';

import styles from './index.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <Fade triggerOnce>
        <Banner />
      </Fade>
      <Fade triggerOnce>
        <Investment />
      </Fade>
      <Fade triggerOnce>
        <About />
      </Fade>
      <Fade triggerOnce>
        <FAQ />
      </Fade>
    </div>
  );
}

export default Home;
