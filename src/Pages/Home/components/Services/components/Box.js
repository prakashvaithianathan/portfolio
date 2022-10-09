import React from 'react'
import style from './Box.module.css'
import {Fade} from 'react-reveal'

const box = ({image,title,content,list1,list2,list3}) => {
    return (
       <Fade bottom>
            <div  className={style.containerList}>
            <img className={style.logo} src={image} alt="logo" />
            <h3>{title}</h3>
            <p>{content}</p>
            <ul>
                <li className={style.list1}>{list1}</li>
                <li className={style.list2}>{list2}</li>
                <li className={style.list3}>{list3}</li>
            </ul>
        </div>
       </Fade>
    )
}

export default box
