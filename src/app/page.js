import Head from 'next/head';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>DEX Dashboard</title>
        <meta name="description" content="A decentralized exchange dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Dashboard />
    </div>
  );
}
