import React from 'react'
import style from './Travel.module.css'
import { FaRegComment } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
const Travel = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
        <div className={style.title}>
            <h1>Hot topics from Travel Section</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
          </div>

          <div className={style.item}>
              <div className={style.card}>
                <div className={style.date}>
                  <img src="https://preview.colorlib.com/theme/blogger/img/t1.jpg" alt="" />
                  <button>20 DEC</button>
                </div>

                <div className={style.text}>
                  <h2>Addiction When Gambling <br /> Becomes A Problem</h2>
                  <p>inappropriate behavior Lorem ipsum dolor sit <br /> amet, consectetur.</p>
                  <div className={style.likcom}>
                  <p className={style.heart}><CiHeart /> 15 Likes</p>
                  <p className={style.comment}><FaRegComment /> 02 Comments</p>
                  </div>
                </div>
              </div>    


              <div className={style.card}>
                <div className={style.date}>
                  <img src="https://preview.colorlib.com/theme/blogger/img/t2.jpg" alt="" />
                  <button>20 DEC</button>
                </div>

                <div className={style.text}>
                <h2>Addiction When Gambling <br /> Becomes A Problem</h2>
                  <p>inappropriate behavior Lorem ipsum dolor sit <br /> amet, consectetur.</p>
                  <div className={style.likcom}>
                  <p className={style.heart}><CiHeart /> 15 Likes</p>
                  <p className={style.comment}><FaRegComment /> 02 Comments</p>
                  </div>
                </div>
              </div>



              <div className={style.card}>
                <div className={style.date}>
                  <img src="https://preview.colorlib.com/theme/blogger/img/t3.jpg" alt="" />
                  <button>20 DEC</button>
                </div>

                <div className={style.text}>
                  <h2>Addiction When Gambling <br /> Becomes A Problem</h2>
                  <p>inappropriate b ehavior Lorem ipsum dolor sit <br /> amet, consectetur.</p>
                  <div className={style.likcom}>
                  <p className={style.heart}><CiHeart /> 15 Likes</p>
                  <p className={style.comment}><FaRegComment /> 02 Comments</p>
                  </div>
                </div>
              </div>



              <div className={style.card}>
                <div className={style.date}>
                  <img src="https://preview.colorlib.com/theme/blogger/img/t4.jpg" alt="" />
                  <button>20 DEC</button>
                </div>

                <div className={style.text}>
                <h2>Addiction When Gambling <br /> Becomes A Problem</h2>
                  <p>inappropriate behavior Lorem ipsum dolor sit <br /> amet, consectetur.</p>
                  <div className={style.likcom}>
                  <p className={style.heart}><CiHeart /> 15 Likes</p>
                  <p className={style.comment}><FaRegComment /> 02 Comments</p>
                  </div>
                </div>
              </div>



              
                    
          </div>
        </div>
    </div>
  )
}

export default Travel