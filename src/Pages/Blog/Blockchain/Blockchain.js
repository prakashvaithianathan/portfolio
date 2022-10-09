import React from 'react'
import style from './Blockchain.module.css'

const Blockchain = () => {
  return (
    <div className={style.container}>
      <h1>
        What is Blockchain Technology?
      </h1>
      <img src="https://www.visiott.com/wp-content/uploads/2021/03/BlockChain_System.jpg" alt="javascript"  style={{width:'100%'}}/>
      <ul>
        <li>
        Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system.
        </li>
        <li>
        A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain. Each block in the chain contains a number of transactions, and every time a new transaction occurs on the blockchain, a record of that transaction is added to every participant’s ledger. The decentralised database managed by multiple participants is known as Distributed Ledger Technology (DLT).
        </li>
        <li>
        This means if one block in one chain was changed, it would be immediately apparent it had been tampered with. If hackers wanted to corrupt a blockchain system, they would have to change every block in the chain, across all of the distributed versions of the chain.
        </li>
        <h5>Why is there so much hype around blockchain technology?</h5>
        <li>
        Bitcoin was designed to solve this problem by using a specific type of database called a blockchain. Most normal databases, such as an SQL database, have someone in charge who can change the entries (e.g. giving themselves a million X dollars). Blockchain is different because nobody is in charge; it’s run by the people who use it. What’s more, bitcoins can’t be faked, hacked or double spent – so people that own this money can trust that it has some value.
        </li>
        
       
        <h5>How does a transaction get into the blockchain?</h5>
        <h5>Authentication</h5>
        <li>
        The original blockchain was designed to operate without a central authority (i.e. with no bank or regulator controlling who transacts), but transactions still have to be authenticated.

This is done using cryptographic keys, a string of data (like a password) that identifies a user and gives access to their “account” or “wallet” of value on the system. 

Each user has their own private key and a public key that everyone can see. Using them both creates a secure digital identity to authenticate the user via digital signatures and to ‘unlock’ the transaction they want to perform. 
        </li>
        <h5>Authorization</h5>
        <li>
        Once the transaction is agreed between the users, it needs to be approved, or authorised, before it is added to a block in the chain.

For a public blockchain, the decision to add a transaction to the chain is made by consensus. This means that the majority of “nodes” (or computers in the network) must agree that the transaction is valid. The people who own the computers in the network are incentivised to verify transactions through rewards. This process is known as ‘proof of work’.
        </li>
        <h5>Proof of Work</h5>
        <li>
        Proof of Work requires the people who own the computers in the network to solve a complex mathematical problem to be able to add a block to the chain. Solving the problem is known as mining, and ‘miners’ are usually rewarded for their work in cryptocurrency.

But mining isn’t easy. The mathematical problem can only be solved by trial and error and the odds of solving the problem are about 1 in 5.9 trillion. It requires substantial computing power which uses considerable amounts of energy. This means the rewards for undertaking the mining must outweigh the cost of the computers and the electricity cost of running them, as one computer alone would take years to find a solution to the mathematical problem.
        </li>
       
      </ul>
    </div>
  )
}

export default Blockchain