import React from "react"


import download from "../../../assets/images/download.png"

import style from "../../../assets/css/products.module.css"


const Products = () => {

    return (

        <div className={style.products_body}>
            <div className={style.products_container}>

                <div className={style.product_card}>
                    <img src={download} style={{ width: '100%', height: '100%' }} alt="img" />
                    <section>fnejbfeb nfcn vj eev vev e bv e  eh ve ehn nje  cehv he vehv h ehv eh ev ed</section>
                </div>
                <div className={style.product_card}>
                    <img src={download} style={{ width: '100%', height: '100%' }} alt="img" />
                    <section>fnejbfeb nfcn vj eev vev e bv e  eh ve ehn nje cehv he vehv h ehv eh ev ed</section></div>
                <div className={style.product_card}>
                    <img src={download} style={{ width: '100%', height: '100%' }} alt="img" /> <section>fnejbfeb nfcn vj eev vev e bv e  eh ve ehn nje cehv he vehv h ehv eh ev ed</section></div>

                <div className={style.product_card}>
                    <img src={download} style={{ width: '100%', height: '100%' }} alt="img" />
                    <section>fnejbfeb nfcn vj eev vev e bv e  eh ve ehn nje cehv he vehv h ehv eh ev ed</section>
                </div>


                <div className={style.product_card}>
                    <img src={download} style={{ width: '100%', height: '100%' }} alt="img" />
                    <section>fnejbfeb nfcn vj eev vev e bv e  eh ve ehn nje cehv he vehv h ehv eh ev ed</section>
                </div>
            </div>
         

        </div>

    )
}

export default Products