import Head from 'next/head';
import Reviews from '../components/reviews/Reviews';

export default function Home() {
  return (
    <>
      <Head>
        <title>Slider</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Reviews />
    </>
  );
}
