import React from 'react'
import style from './Nft.module.css'

const Nft = () => {
  return (
    <div className={style.container}>
      <h1>
        Top 10 Expensive NFT
      </h1>
      <img src="https://sensoriumxr.com/static/The_Merge_NFT_a143a37274.jpg" alt="javascript" style={{width:'100%'}} />
      <ul>
        <li>
        1. The Merge - $91.8 million
        </li>
        <li>
        2. The First 5000 Days - $69.3 million
        </li>
        <li>
        3. Clock - $52.7 million
        </li>
       
        <li>
        4. HUMAN ONE - $28.9 million
        </li>
        <li>
        5. CryptoPunk #5822 - $23.7 million
        </li>
        <li>
        6. Alien Cryptopunk #7523 - $11.75 million
        </li>
       
        <li>
        7. TPunk #3442 - $10.5 million
        </li>
        <li>
        8. CryptoPunk #4156 - $10.26 million
        </li>
        <li>
        9. CryptoPunk #5577 - $7.7 million
        </li>
        <li>
        10. CryptoPunk #3100 - $7.6 million
        </li>
        
      </ul>
    </div>
  )
}

export default Nft