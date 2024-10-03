import { useState } from 'react';
import { useConnect } from 'wagmi';
import { coinbaseWallet, metaMask } from 'wagmi/connectors';


const WalletSelector = () => {
  const { connect } = useConnect();
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  const handleConnect = (walletType: 'coinbase' | 'metamask') => {
    setSelectedWallet(walletType);
    if (walletType === 'coinbase') {
      connect({ connector: coinbaseWallet() });
    } else if (walletType === 'metamask') {
      connect({ connector: metaMask() });
    }
  };

  return (
    <div className='flex justify-center'>
        <div className="text-center space-y-5">
            <h2 className="text-lg font-bold mb-4">Choose Your Wallet</h2>
            <button
              onClick={() => handleConnect('coinbase')}
              className={`bg-blue-500 text-white p-3 rounded-lg mr-4 ${selectedWallet === 'coinbase' ? 'border border-white' : ''}`}
            >
              Connect Coinbase Wallet
            </button>
            <button
              onClick={() => handleConnect('metamask')}
              className={`bg-yellow-500 text-black p-3 rounded-lg ${selectedWallet === 'metamask' ? 'border border-black' : ''}`}
            >
              Connect MetaMask
            </button>
        </div>
    </div>
  );
};

export default WalletSelector;
