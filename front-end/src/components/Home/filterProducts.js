import React, { useState } from "react";
const FilterProducts = () => {
  const [toggleObject, setToggle] = useState({
    category: true,
    location: true,
  });
  const { category, location } = toggleObject;

  const handleToggle = (target) => {
    let rest = "location";
    if (target == "location") rest = "category";
    if (toggleObject[rest] && !toggleObject[target]) {
      setToggle({
        [target]: !toggleObject[target],
        [rest]: !toggleObject[rest],
      });
      return;
    }
    setToggle({ ...toggleObject, [target]: !toggleObject[target] });
  };

  return (
    <div class="col-lg-3 col-md-4  col-sm-6 bg-white col-12">
      <div class="mt-4">
        <span class="bold ml-2">Filters</span>
        <hr color="black"></hr>
      </div>

      <div class="accordion  " id="accordionExample">
        <section class="p-2">
          <div
            data-toggle="collapse"
            data-target="#collapseCateg"
            aria-expanded="true"
            aria-controls="collapseCateg"
            class="bold pointer pb-2"
            onClick={() => handleToggle("category")}
          >
            Categories
            <i
              class={`fa fa-chevron-${
                category ? `down` : `up`
              } float-right m-auto`}
              aria-hidden="true"
            ></i>
          </div>
          <div
            id="collapseCateg"
            class="collapse show ml-4"
            data-parent="#accordionExample"
          >
            All Categories
          </div>
          <hr color="black"></hr>
        </section>

        <section class="p-2">
          <div
            data-toggle="collapse"
            data-target="#collapseLoc"
            aria-expanded="true"
            aria-controls="collapseLoc"
            class="bold pointer pb-2"
            onClick={() => handleToggle("location")}
          >
            Location
            <i
              class={`fa fa-chevron-${
                location ? `down` : `up`
              } float-right m-auto`}
              aria-hidden="true"
            ></i>
          </div>
          <div
            id="collapseLoc"
            class="collapse show ml-4"
            data-parent="#accordionExample"
          >
            All locations
          </div>
        </section>
      </div>
    </div>
  );
};

export default FilterProducts;
