import React from 'react'
import style from './Card.module.css'
const Card = ({item,addtobasket}) => {
  return (
    <div className={style.container}>
        <div className={style.imgBox}>
            <img src={item.thumbnail} alt={item.title} />
        </div>
        <p className={style.title}>{item.title}</p>
        <p className={style.price}>{item.price}</p>
        <button onClick={addtobasket}>add to cart</button>
        <button>add to wish</button>
    </div>
  )
}

export default Card