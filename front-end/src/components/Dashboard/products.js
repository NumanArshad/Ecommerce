import React from "react";

import download from "../../assets/images/download.png";

import style from "../../assets/css/products.module.css";

const Products = () => {
  return (
    // <div className={style.products_body}>
    //     <div className={style.products_container}>

    //         <div className={style.product_card}>
    //             <img src={download} style={{ width: '100%', height: '100%' }} alt="img" />
    //             <section>fnejbfeb nfcn vj eev vev e bv e  eh ve ehn nje  cehv he vehv h ehv eh ev ed</section>
    //         </div>
    //         <div className={style.product_card}>
    //             <img src={download} style={{ width: '100%', height: '100%' }} alt="img" />
    //             <section>fnejbfeb nfcn vj eev vev e bv e  eh ve ehn nje cehv he vehv h ehv eh ev ed</section></div>
    //         <div className={style.product_card}>
    //             <img src={download} style={{ width: '100%', height: '100%' }} alt="img" /> <section>fnejbfeb nfcn vj eev vev e bv e  eh ve ehn nje cehv he vehv h ehv eh ev ed</section></div>

    //         <div className={style.product_card}>
    //             <img src={download} style={{ width: '100%', height: '100%' }} alt="img" />
    //             <section>fnejbfeb nfcn vj eev vev e bv e  eh ve ehn nje cehv he vehv h ehv eh ev ed</section>
    //         </div>

    //         <div className={style.product_card}>
    //             <img src={download} style={{ width: '100%', height: '100%' }} alt="img" />
    //             <section>fnejbfeb nfcn vj eev vev e bv e  eh ve ehn nje cehv he vehv h ehv eh ev ed</section>
    //         </div>
    //     </div>

    // </div>

    <div class="card-deck container m-auto ">
      <div class="card">
        <img class="card-img-top" src={download} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src={download} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src={download} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
