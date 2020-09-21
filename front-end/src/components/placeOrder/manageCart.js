import React from "react"
import download from "../../assets/images/download.png";

const ShoppingCart=()=>{
    return(<>
    <div class="container row bg-white mx-auto p-2 my-2">
      <div class="col-md-3 col-sm-4 col-6 ">
        <img src={download} class="w-100 h-100" alt="Card image cap" />
      </div>
      <div class="col  p-4">
        <h5>
          Card title <i class="fas fa-shopping-cart pointer float-right"></i>
        </h5>
        <p>
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p>
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
    <div class="container row bg-white mx-auto p-2 my-2">
      <div class="col-md-3 col-sm-4 col-6">
        <img src={download} class="w-100 h-100" alt="Card image cap" />
      </div>
      <div class="col  p-4">
        <h5>
          Card title <i class="fas fa-shopping-cart pointer float-right"></i>
        </h5>
        <p>
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p>
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
    <div class="container">
    <button class="btn btn-success float-right ml-2">Checkout proceed</button>
    <button class="btn btn-primary float-right">Update Cart</button>

    </div>
    {/* <button class="btn btn-success">Checkout proceed</button> */}

    </>)
}

export default ShoppingCart