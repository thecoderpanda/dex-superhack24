import { useAccount, useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

const WalletConnectButton = () => {
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { isConnected } = useAccount();

  return (
    <button onClick={() => connect()} style={{ background: '#0070f3', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none' }}>
      {isConnected ? 'Connected' : 'Connect Wallet'}
    </button>
  );
};

export default WalletConnectButton;
