import React, { FormEvent, useState } from 'react';
import { useWriteContract, useWaitForTransactionReceipt, useAccount } from 'wagmi';
import { contractABI, contractAddress } from '../DeployedContract';
import { parseEther, type Hex } from 'viem';
import { useSelector } from 'react-redux';

export function MintCertification() {
    const [transactionHash, setTransactionHash] = useState<`0x${string}` | null>(null);

    const { address: connectedAddress, isConnected } = useAccount();
    const completedCourses = useSelector((state) => state.course.completedCourses);
    const { writeContract, data: hash, error, isPending } = useWriteContract();
    const { isLoading: isConfirming } = useWaitForTransactionReceipt({
        hash,
    });

    async function submit(e: FormEvent<HTMLFormElement>, course: any) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const address = formData.get('address') as Hex;

        // Ensure that the certificate price is converted to a string before passing it to parseEther
        const price = course.certificatePrice ? parseEther(course.certificatePrice.toString()) : '0';

        writeContract({
            abi: contractABI,
            address: contractAddress,
            functionName: 'safeMintCertificate',
            args: [course.title, address, course.tokenURI],
            value: price,
        });
    }

    React.useEffect(() => {
        if (hash) {
            setTransactionHash(hash);
        }
    }, [hash]);

    const getTransactionLink = (txHash: `0x${string}`) => {
        return `https://sepolia.basescan.org/tx/${txHash}`;
    };

    return (
        <div className="pb-7">
            {isConnected && (
                <div className="mb-4 text-green-500">
                    Connected Wallet Address: {connectedAddress}
                </div>
            )}
            {completedCourses.map((course) => (
                <form key={course.id} className="set" onSubmit={(e) => submit(e, course)}>
                    <div className="space-y-2 mt-7 mb-7">
                        <label htmlFor="">Course Name</label>
                        <input
                            value={course.title}
                            disabled
                            className='block px-5 w-full lg:w-[28rem] bg-[#040B35] border h-12 cursor-not-allowed'
                            type="text"
                        />
                    </div>
                    <div className="space-y-2 mb-7">
                        <label htmlFor="">Recipient Address</label>
                        <input
                            name="address"
                            placeholder={isConnected ? 'Copy/paste wallet or edit' : 'Connect wallet to proceed'}
                            className='block px-5 w-full lg:w-[28rem] bg-[#040B35] border h-12'
                            type="text"
                            required
                        />
                    </div>
                    <div className="space-y-2 mb-7">
                        <label htmlFor="">Token URI</label>
                        <input
                            value={course.tokenURI}
                            className='block px-5 w-full lg:w-[28rem] bg-[#040B35] border h-12'
                            type="text"
                            disabled
                        />
                    </div>
                    <div className="space-y-2 mb-7">
                        <label htmlFor="">Amount</label>
                        <input
                            value={course.certificatePrice}
                            placeholder="Amount"
                            className='block px-5 w-full lg:w-[28rem] bg-[#040B35] border h-12 cursor-not-allowed'
                            type="text"
                            disabled
                        />
                    </div>
                    <button
                        type='submit'
                        disabled={isPending}
                        className="border text-white hover:border-[#E6169B] p-3 w-full flex-shrink-0 text-sm lg:text-lg md:text-lg"
                    >
                        {isPending ? 'Minting Your NFT...' : 'Mint'}
                    </button>
                </form>
            ))}
            {transactionHash && (
                <div className="mt-4">
                    <p>Transaction Hash: {transactionHash}</p>
                    <a
                        href={getTransactionLink(transactionHash)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 underline"
                    >
                        View transaction on Sepolia Basescan
                    </a>
                </div>
            )}
            {isConfirming && <div className="mt-2 text-green-500">Token Minted successfully.</div>}
            {error && (<div className="mt-2 text-red-500 w-52 sm-hidden max-w-96">Error: {error.message}</div>)}
        </div>
    );
}
