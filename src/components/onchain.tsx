import React from 'react';
import { ConnectWallet, WalletDropdown, WalletDropdownDisconnect } from '@coinbase/onchainkit/wallet';
import { Avatar, Name, Address, EthBalance } from '@coinbase/onchainkit/identity';

function WalletComponent() {
  return (
    <div>
      <ConnectWallet className='bg-red-700'>
        <Avatar />
        <Name />
        <Address />
        <EthBalance />
      </ConnectWallet>
      <WalletDropdown>
        <WalletDropdownDisconnect />
      </WalletDropdown>
    </div>
  );
}

export default WalletComponent;
