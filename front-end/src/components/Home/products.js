import React from "react";
import { useHistory } from "react-router";

import download from "../../assets/images/download.png";


const Products = () => {
  const history=useHistory()
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
    <div class="mt-sm-0 mt-2 col">
      <div class="row justify-content-between align-items-start">
        <div class=" col-lg-4 col-md-6 col-12 p-2 pointer" onClick={()=>history.push("/preview")}>
          
          <div class="card">
            <img class="card-img-top" src={download} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>

       
        <div class=" col-lg-4 col-md-6 col-12 p-2 pointer">
          
          <div class="card">
            <img class="card-img-top" src={download} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div class=" col-lg-4 col-md-6 col-12 p-2 pointer ">
          
          <div class="card">
            <img class="card-img-top" src={download} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        {/* <div class="col"></div>

        <div class="col-12">
  <ul class="pagination">
    <li class="page-item disabled">
      <span class="page-link">Previous</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <span class="page-link">
        2
        <span class="sr-only">(current)</span>
      </span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</div> */}

      </div>
    </div>
  );
};

export default Products;
