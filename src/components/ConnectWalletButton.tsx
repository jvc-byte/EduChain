import { useState } from 'react';
import { ConnectWallet, WalletDropdown, WalletDropdownDisconnect } from '@coinbase/onchainkit/wallet';
import { Avatar, Name, Address, EthBalance } from '@coinbase/onchainkit/identity';
import { getUserCountryFromIP } from './locationUtils';  // Import the utility function
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function WalletComponent() {
  const [location, setLocation] = useState<string | null>(null);

  const checkLocationAndShowToast = async () => {
    try {
      const country = await getUserCountryFromIP();
      setLocation(country);

      if (country === 'Nigeria') {
        // Show toast warning for Nigeria
        toast("Access detected from Nigeria. Please use a VPN. We recommend Proton VPN. Refresh the page and try again.");
      }
    } catch (error) {
      console.error("Error fetching user location:", error);
    }
  };

  return (
    <div>
      <div className='bg-none' onClick={checkLocationAndShowToast}>
      <ConnectWallet className='border text-white text-sm lg:text-2xl bg-[#040B35] mr-8 lg:mr-0 md:mr-8 p-3'>
        <Avatar className='bg-white'/>
        <Name className='text-white text-xs lg:text-lg md:text-sm'/>
        <div className="block">
          <Address isSliced={true} className='text-white sm-hidden' />
          <EthBalance className='text-white sm-hidden' />
        </div>
      </ConnectWallet>
      </div>
      
      <WalletDropdown className='right-10'>
        <WalletDropdownDisconnect className='mr-10' />
      </WalletDropdown>

   
      <ToastContainer autoClose={false} pauseOnFocusLoss={true} />

    </div>
  );
}

export default WalletComponent;
