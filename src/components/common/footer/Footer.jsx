import React from 'react'
import { FaHeart } from "react-icons/fa";
import style from './Footer.module.css'
const Footer = () => {
  return (
    <div className={style.container}><p>Copyright @2018 All rights reserved | This template is made with <FaHeart className={style.heart}/> by Colorlib</p></div>
  )
}

export default Footer