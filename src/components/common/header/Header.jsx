import React from 'react'
import style from './Header.module.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
            <div className={style.logo}>
                <img src="https://preview.colorlib.com/theme/blogger/img/logo.png" alt="" />
            </div>
            <div className={style.navbar}>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">NEWS</a></li>
                    <li><a href="#">TRAVEL</a></li>
                    <li><a href="#">FASHION</a></li>
                    <li><a href="#">TEAM</a></li>
                    <li><a href="#">PAGES</a></li>

                </ul>
            </div>

            <div className={style.icon}>
                <Link to={"/wishlist"}><div className={style.heart}><FaHeart /></div></Link>
                <Link to={"/basket"}><div className={style.basket}>
            <MdLocalGroceryStore />
            </div></Link>
            </div>
            <div className={style.bar}><GiHamburgerMenu/></div>
        </div>
    </div>
  )
}

export default Header