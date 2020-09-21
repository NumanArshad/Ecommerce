import React from "react";
import download from "../../assets/images/download.png";

const AddProduct = () => {
  return (
    <div class="container row bg-white m-auto p-2">
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
  );
};

export default AddProduct;
