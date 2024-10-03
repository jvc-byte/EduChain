import { useState, useEffect } from 'react';
import { ConnectWallet, WalletDropdown, WalletDropdownDisconnect } from '@coinbase/onchainkit/wallet';
import { Avatar, Name, Address, EthBalance, getName } from '@coinbase/onchainkit/identity';
import { getUserCountryFromIP } from './locationUtils'; // Import the utility function
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WalletSelector from './WalletSelector';
import { base } from 'viem/chains';

function WalletComponent() {
  const [location, setLocation] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [address, setAddress] = useState<string | null>(null); // Store wallet address
  const [ensName, setEnsName] = useState<string | null>(null); // Store ENS name or base name

  // Function to check location and show toast
  const checkLocationAndShowToast = async () => {
    try {
      const country = await getUserCountryFromIP();
      setLocation(country);

      if (country === 'Nigeria') {
        toast("Access detected from Nigeria. Please use a VPN. We recommend Proton VPN. Refresh the page and try again.");
      }
    } catch (error) {
      console.error("Error fetching user location:", error);
    }
  };

  // Fetch the ENS name or base name based on the wallet address
  useEffect(() => {
    const fetchEnsName = async () => {
      if (address) {
        try {
          const name = await getName({ address, chain: base });
          setEnsName(name || 'No ENS Name Found');
        } catch (error) {
          console.error("Error fetching ENS name:", error);
        }
      }
    };

    fetchEnsName();
  }, [address]);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="" onClick={() => { checkLocationAndShowToast(); toggleModal(); }}>
        <ConnectWallet className="border text-white text-sm lg:text-2xl bg-[#040B35] mr-8 lg:mr-0 md:mr-8 p-3" 
          onConnect={(connectedAddress) => setAddress(connectedAddress)} // Set the address when wallet is connected
        >
          <Avatar chain={base} defaultComponent={false} className="bg-white" />
          
          {/* Display the fetched ENS or base name */}
          <div className="text-white text-xs lg:text-lg md:text-sm">
            {ensName ? ensName : 'No Base Name'}
          </div>
          
          <div className="block">
            <Address isSliced={true} className="text-white sm-hidden" />
            <EthBalance className="text-white sm-hidden" />
          </div>
        </ConnectWallet>
      </div>

      <WalletDropdown className="right-10">
        <WalletDropdownDisconnect className="mr-10" />
      </WalletDropdown>

      <ToastContainer autoClose={false} pauseOnFocusLoss={true} />

      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-4 w-96">
            <button onClick={toggleModal} className="text-right mb-4">X</button>
            <WalletSelector />
          </div>
        </div>
      )}
    </div>
  );
}

export default WalletComponent;
