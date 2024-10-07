import { useState } from 'react';
import LessonsInProgress from './LessonsInProgress';
import LessonCompleted from './LessonCompleted';
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
            </div>
            <Footer />
        </div>

    );
};

export default MyLessons;
