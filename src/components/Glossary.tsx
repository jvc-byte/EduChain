import { useState } from 'react';
import LearningHeader from './LearningHeader';
import Footer from './Footer';

const MyLessons = () => {

    return (
        <div className="bg-color h-full text-white">
            <LearningHeader />
            <h1 className="text-5xl px-12 lg:px-32 md:px-32 pt-10 pb-5">Glossary</h1>
            <div className="gap-4 mx-12 lg:mx-32 md:mx-32 mb-5">
                <p className='text-4xl px-12 lg:px-32 md:px-32 pt-10 pb-5'>#</p>
                <p className='text-3xl pt-10 pb-5'>51% attack</p>
                <p className='text-2xl'>
                    A type of attack where a group gains control of the majority of nodes. This would allow them to defraud the blockchain by reversing transactions and double spending ether and other tokens. <br /><br />

                    In Ethereum proof-of-stake this would be achieved by accumulating more than half of the total staked ether. This would allow an attacker to decide which new blocks are added to the blockchain. However, to revert the chain or double-spend an attacker would require at least 66% of the total
                </p>

            </div><br /><br /><br />

            <hr className="w-32 lg:w-64 md:w-64 border-t-2 border-gray-300 mx-auto my-5" />

            <div className="gap-4 mx-12 lg:mx-32 md:mx-32 mb-5">
                <p className='text-4xl px-12 lg:px-32 md:px-32 pt-10 pb-5'>A</p>

                <p className='text-3xl pt-10 pb-5'>Account</p>
                <p className='text-2xl'>
                    An Ethereum account is a digital identity on the Ethereum blockchain, allowing users to send, receive Ether, and interact with smart contracts. <br /><br />
                    <p className="font-bold">Technical:</p>
                    Its an object containing an address, balance, nonce, and optional storage and code. An account can be a contract account or an externally owned account (EOA).
                </p> <br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Address</p>
                <p className='text-2xl'>
                    An Ethereum address is a unique identifier used for receiving tokens, functions similar to a bank account number for cryptocurrencies. Its used to identify your Ethereum account. <br /><br />
                    It is the rightmost 160 bits of a Keccak hash of an ECDSA public key.
                </p><br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Application Binary Interface (ABI)</p>
                <p className='text-2xl'>
                    A JSON file that defines the functions and variables included in a smart contract. The ABI allows bytecode to be mapped into human-readable formats.
                </p><br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Anti-Sybil</p>
                <p className='text-2xl'>
                    Are ways to stop people from pretending to be many users at once on the internet, ensuring each user is a real, separate person. This helps keep online interactions fair and honest.
                </p><br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Application Programming Interface (API)</p>
                <p className='text-2xl'>
                    An Application Programming Interface (API) is a set of definitions for how to use a piece of software.
                    An API sits between an application and a web server, and facilitates the transfer of data between them.
                </p> <br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>APR</p>
                <p className='text-2xl'>
                    APR, or Annual Percentage Rate, reflects the yearly cost of borrowing money, including interest and fees, as a percentage.
                </p> <br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>ASIC</p>
                <p className='text-2xl'>
                    Application-Specific Integrated Circuit. This usually refers to an integrated circuit, custom-built for cryptocurrency mining.
                </p> <br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>assert</p>
                <p className='text-2xl'>
                    In Solidity, `assert(false)` compiles to `0xfe`, an invalid opcode, which uses up all remaining gas and reverts all changes.
                    When an `assert()` statement fails, something very wrong and unexpected is happening, and you will need to fix your code.
                    You should use `assert()` to avoid conditions that should never, ever occur.
                </p> <br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Attestation</p>
                <p className='text-2xl'>
                    A claim made by an entity that something is true. In the context of Ethereum, consensus validators must make a claim as
                    to what they believe the state of the chain to be. Validators publish attestations declaring their view of the chain at designated times.
                </p> <br /><br /><br />

                <hr className="w-32 lg:w-64 md:w-64 border-t-2 border-gray-300 mx-auto my-5" />

                <p className='text-4xl px-12 lg:px-32 md:px-32 pt-10 pb-5'>B</p>

                <p className='text-3xl pt-10 pb-5'>Base fee</p>
                <p className='text-2xl'>
                    Every block has a reserve price known as the 'base fee'. It is the minimum gas fee a user must pay to include a transaction in the next block.
                </p> <br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Beacon Chain</p>
                <p className='text-2xl'>
                    The Beacon Chain was the blockchain that introduced proof-of-stake and validators to Ethereum. It ran alongside the
                    proof-of-work Ethereum Mainnet from December 2020 until the two chains were merged in September 2022 to form the Ethereum of today.
                </p> <br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Block</p>
                <p className='text-2xl'>
                    A block is where transactions or digital actions are stored. Once a block is full, it gets linked to the previous one, creating a chain of blocks or a "blockchain".
                    Each block contains an ordered list of transactions and consensus-related information. Blocks are proposed by validators, shared across the network,
                    and validated according to consensus rules.
                </p><br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Block Explorer</p>
                <p className='text-2xl'>
                    An interface that allows a user to search for information from, and about, a blockchain. This includes retrieving individual transactions, activity associated with specific addresses, and general information about the network.
                </p><br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Block Header</p>
                <p className='text-2xl'>
                    A collection of metadata about a block, summarizing its transactions in the execution payload. It includes essential information such as the previous block’s hash, timestamp, and Merkle root.
                </p><br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Block Header</p>
                <p className='text-2xl'>
                    A collection of metadata about a block, summarizing its transactions in the execution payload. It includes essential information such as the previous block’s hash, timestamp, and Merkle root.
                </p><br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Block Propagation</p>
                <p className='text-2xl'>
                    The process of transmitting a newly confirmed block to all other nodes across the network to maintain synchronization.
                </p><br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Block Proposer</p>
                <p className='text-2xl'>
                    The validator responsible for creating a block during a particular slot in the blockchain network. The selection of the proposer is often based on the consensus algorithm in use (e.g., proof-of-stake).
                </p><br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Block Reward</p>
                <p className='text-2xl'>
                    The amount of cryptocurrency (e.g., ether) awarded to the proposer of a new, valid block as compensation for maintaining the network.
                </p><br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Block Status</p>
                <p className='text-2xl'>
                    A collection of metadata about a block, summarizing its transactions in the execution payload. It includes essential information such as the previous block’s hash, timestamp, and Merkle root.
                </p><br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Block Header</p>
                <p className='text-2xl'>The states that a block can exist in. These include:</p><br />
                <ul>
                    <li className='text-2xl'><span className='font-bold'>- Proposed:</span> Block was proposed by a validator.</li>
                    <li className='text-2xl'><span className='font-bold'>- Scheduled:</span> Validators are currently submitting data.</li>
                    <li className='text-2xl'><span className="font-bold">- Missed/Skipped:</span> The proposer did not propose a block within the eligible time frame.</li>
                    <li className='text-2xl'><span className="font-bold">- Orphaned:</span> The block was reorganized out by the fork choice algorithm.</li>
                </ul>
                <br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Block Time</p>
                <p className='text-2xl'>
                    The interval of time between two consecutive blocks being added to the blockchain. For example, in Ethereum, this is around 12 seconds.
                </p><br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Block Validation</p>
                <p className='text-2xl'>
                    The process of verifying that a new block contains valid transactions, signatures, and follows all the consensus rules. A valid block is added to the head of the chain and propagated across the network, while invalid blocks are disregarded.
                </p><br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Blockchain</p>
                <p className='text-2xl'>
                    A distributed database of transactions that is duplicated and shared across all computers in the network. Each block links to its predecessor, creating a secure chain of data. Blockchain’s integrity is cryptographically maintained through consensus mechanisms such as proof-of-stake.
                </p><br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Bootnode</p>
                <p className='text-2xl'>
                    A specialized node used during the node discovery process. It helps new nodes on the network find peers to connect with by introducing them to existing nodes.
                </p><br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Bridge</p>
                <p className='text-2xl'>
                    A blockchain bridge allows assets (like tokens) to be transferred from one blockchain network to another. For example, ETH can be transferred from Ethereum mainnet to Layer 2 scaling solutions using a bridge.
                </p><br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Bytecode</p>
                <p className='text-2xl'>
                    Code written in a compact, numeric format that is executed by the Ethereum Virtual Machine (EVM). It is the lower-level representation of smart contracts after compilation.
                </p><br /><br /><br />

                <p className='text-3xl pt-10 pb-5'>Byzantium Fork</p>
                <p className='text-2xl'>
                    A hard fork in Ethereum’s Metropolis development stage that included the delay of the Ice Age and a reduction in the block reward from 5 to 3 ether. This upgrade was part of the transition to proof-of-stake.
                </p><br /><br /><br />


            </div>
            <Footer />
        </div>

    );
};

export default MyLessons;
