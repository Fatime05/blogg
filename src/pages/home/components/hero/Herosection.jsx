import React from 'react'
import style from './Herosection.module.css'
import { FaRegComment } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const Herosection = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
            <div className={style.text}>
               <div className={style.title}> <h1>A Discount Toner Cartridge <br /> Is Better Than Ever.</h1></div>

            
            </div>

            <div className={style.mark}>
                    <div className={style.left}>
                    <p className={style.heart}><CiHeart /> 15 Likes</p>
                    <p className={style.comment}><FaRegComment /> 02 Comments</p>
                    </div>

                    <div className={style.right}>
                        <div className={style.name}>
                            <h1>Mark wiens</h1>
                            <h3>12 Dec, 2017 11:21 am</h3>
                        </div>
                        <div className={style.img}>
                            <img src="https://preview.colorlib.com/theme/blogger/img/user.jpg" alt="" />
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Herosection