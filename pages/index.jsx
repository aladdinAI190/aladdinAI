import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeCom from '../components/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aladdin</title>
        <meta name="description" content="Aladdin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HomeCom />
      <Footer />
    </>
  );
}
