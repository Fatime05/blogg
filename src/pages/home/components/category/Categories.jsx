import React from 'react'
import style from './Categories.module.css'
const Categories = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
            <div className={style.title}>
            <h1>Latest News from all categories</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
            </div>

            <div className={style.item}>
                <div className={style.imgBox}>
                    <img src="https://preview.colorlib.com/theme/blogger/img/c1.jpg" alt="" />
                    <button>10 Jan 2018</button>
                    <h1>Les Houches Season Visiting</h1>
                </div>

                <div className={style.imgBox}>
                    <img src="https://preview.colorlib.com/theme/blogger/img/c3.jpg" alt="" />
                    <button>10 Jan 2018</button>
                    <h1>It s Hurricane Season Visiting</h1>
                </div>

                <div className={style.imgBox}>
                    <img src="https://preview.colorlib.com/theme/blogger/img/c2.jpg" alt="" />
                    <button>10 Jan 2018</button>
                    <h1>What makes A Hotel Boutique</h1>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default Categories