import React from 'react';
import { ConnectWallet, WalletDropdown, WalletDropdownDisconnect } from '@coinbase/onchainkit/wallet';
import { Avatar, Name, Address, EthBalance } from '@coinbase/onchainkit/identity';

function WalletComponent() {
  return (
    <div>
      <ConnectWallet className='border text-white text-sm lg:text-2xl bg-[#040B35]  mr-8 lg:mr-0 md:mr-8 p-3'>
        <Avatar className='bg-white'/>
        <Name className='text-white'/>
        <div className="block">
          <Address isSliced={true} className='text-white sm-hidden' />
          <EthBalance className='text-white sm-hidden' />
        </div>
      </ConnectWallet>
      <WalletDropdown className='right-10'>
        <WalletDropdownDisconnect className='mr-10' />
      </WalletDropdown>
    </div>
  );
}

export default WalletComponent;
