import React, { FormEvent, useState } from 'react';
import { type BaseError, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { contractABI, contractAddress } from '../DeployedContract';
import { parseEther, type Hex } from 'viem'

export function MintCertification() {
    const [transactionHash, setTransactionHash] = useState<`0x${string}` | null>(null);

    const { writeContract, data: hash, error, isPending } = useWriteContract()

    const { isLoading: isConfirming, /*isSuccess: isConfirmed*/ } = useWaitForTransactionReceipt({
        hash,
    })

    async function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const courseName = formData.get('coursName') as string
        const address = formData.get('address') as Hex
        const tokenURI = formData.get('tokenURI') as string
        const amount = formData.get('value') as string

        writeContract({
            abi: contractABI,
            address: contractAddress,
            functionName: 'safeMintCertificate',
            args: [courseName, address, tokenURI],
            value: parseEther(amount)
        })
    }

    React.useEffect(() => {
        if (hash) {
            setTransactionHash(hash);
        }
    }, [hash]);

    const getTransactionLink = (txHash: `0x${string}`) => {
        return `https://sepolia.basescan.org/tx/${txHash}`;
    }

    return (
        <div className="pb-7">
            <form className="set" onSubmit={submit}>
                <div className="space-y-2 mt-7 mb-7">
                    <label htmlFor="">Course Name</label>
                    <input
                        name="coursName"
                        className='block px-5 w-full lg:w-[28rem] bg-[#040B35] border h-12'
                        placeholder='Course Name'
                        type="text"
                        required
                    />
                </div>
                <div className="space-y-2 mb-7">
                    <label htmlFor="">Recipient Address</label>
                    <input
                        name="address"
                        placeholder="Address To Recieve cert"
                        className='block px-5 w-full lg:w-[28rem] bg-[#040B35] border h-12'
                        type="text"
                        required
                    />
                </div>
                <div className="space-y-2 mb-7">
                    <label htmlFor="">Token URI</label>
                    <input
                        name="tokenURI"
                        placeholder="Token URI"
                        className='block px-5 w-full lg:w-[28rem] bg-[#040B35] border h-12'
                        type="text"
                        required
                    />
                </div>
                <div className="space-y-2 mb-7">
                    <label htmlFor="">Amount</label>
                    <input
                        name="value"
                         placeholder="AMount"
                        className='block px-5 w-full lg:w-[28rem] bg-[#040B35] border h-12'
                        type="number"
                        step="0.000000001"
                        required
                    />
                </div>
                <button type='submit' disabled={isPending} className="border text-white hover:border-[#E6169B] p-3 w-full flex-shrink-0 text-sm lg:text-lg md:text-lg">{isPending ? 'Minting Your NFT...' : 'Mint'}</button>
            </form>
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
            {/* {isConfirming && <div className="mt-2">Waiting for confirmation...</div>} */}
            {isConfirming && <div className="mt-2 text-green-500">Token Minted successfully.</div>}
            {error && (<div className="mt-2 text-red-500">Error: {(error as BaseError).shortMessage || error.message}</div>)}
        </div>
    )
}
