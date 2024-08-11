import Head from 'next/head';
import Header from '../components/Header';
import YieldDashboard from '../components/YieldDashboard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>DEX Yield</title>
        <meta name="description" content="A decentralized exchange yield dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <YieldDashboard />
    </div>
  );
}
