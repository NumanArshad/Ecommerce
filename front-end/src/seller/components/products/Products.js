import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import common from "../../../assets/css/common_styles.module.css";
import { allProducts } from "../../actions/productsActions";
import ReactPaginate from "react-paginate";
import Modal from "../../../common/layouts/modal";
import Autocomplete from "react-autocomplete";
import queryString from "query-string";
import isEmpty from "../../../utils/isEmpty";
import { useHistory, useLocation } from "react-router-dom";

const lst = [
  { id: 1, name: "lwmk", Descriptiom: "lwlgmrmk ksfndne md n dk" },
  { id: 1, name: "lwmk", Descriptiom: "lwdk" },
  { id: 1, name: "lwmk", Descriptiom: "lwdk" },
  { id: 1, name: "lwmk", Descriptiom: "lwdk" }
];
const Categories = () => {
  const { products } = useSelector(state => state.productReducer);
  const { categories } = useSelector(state => state.categoryReducer);

  const { loading } = useSelector(state => state.loadingReducer);
  const dispatch = useDispatch();
  const [sort, setSort] = useState({ key: "id", order: "asc" });
  const location = useLocation();

  const parsed = queryString.parse(location.search);
  const [pageNumber, setPage] = useState(parsed._start / 2 || 0);

  useEffect(() => {
    dispatch(allProducts(location.search));
    // dispatch(allCategory("all"));
  }, [dispatch, location]);

  const history = useHistory();

  const handlePageClick = event => {
    const { key, order } = sort;
    updateUrl(event.selected * 2, key, order);
  };

  const updateUrl = (offset, sortBy, sortType) => {
    const queryParams = {};
    if (offset) queryParams._start = offset;
    if (sortType) queryParams._order = sortType;
    if (sortBy) queryParams._sort = sortBy;
    history.push(
      `/seller/dashboard/products?${queryString.stringify(queryParams)}`
    );
  };

  const handleSort = id => {
    let update = "desc";
    if (id === sort.key && sort.order === "desc") {
      update = "asc";
    }
    alert(JSON.stringify(parsed));
    setSort({ key: id, order: update });
    updateUrl(parsed._start, id, update);
  };

  return (
    <div class="container card">
      <div class="form row card-body">
        {loading && <span>...loading</span>}
        {/* {JSON.stringify(categories)} */}
        {pageNumber}
        <table class="table table-striped table-responsive-sm">
          <thead>
            <tr>
              <th scope="col" onClick={() => handleSort("id")}>
                #
                {sort.key === "id" && (
                  <i
                    class={`fa fa-chevron-${
                      sort.order === "desc" ? `down` : "up"
                    }`}
                    aria-hidden="true"
                  ></i>
                )}
              </th>
              <th scope="col" onClick={() => handleSort("name")}>
                Name{" "}
                {sort.key === "name" && (
                  <i
                    class={`fa fa-chevron-${
                      sort.order === "desc" ? `down` : "up"
                    }`}
                    aria-hidden="true"
                  ></i>
                )}
              </th>
              <th scope="col">Category</th>
              <th scope="col" onClick={() => handleSort("quantity")}>
                Quantity{" "}
                {sort.key === "quantity" && (
                  <i
                    class={`fa fa-chevron-${
                      sort.order === "desc" ? `down` : "up"
                    }`}
                    aria-hidden="true"
                  ></i>
                )}
              </th>
              <th scope="col" onClick={() => handleSort("price")}>
                Price{" "}
                {sort.key === "price" && (
                  <i
                    class={`fa fa-chevron-${
                      sort.order === "desc" ? `down` : "up"
                    }`}
                    aria-hidden="true"
                  ></i>
                )}
              </th>

              {/* <th scope="col">Handle</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {products.map(({ id, name, categoryId, quantity, price }) => {
              return (
                <tr>
                  <th scope="row">{id}</th>
                  <td>{name}</td>
                  <td>{categoryId} </td>
                  <td>{quantity}</td>
                  <td>{price}</td>
                  <td>
                    <div
                      class="btn-group"
                      style={{ margin: "-4px 0px -4px 0px" }}
                    >
                      <button
                        type="button"
                        class="btn btn-primary dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Action
                      </button>
                      <div class="dropdown-menu w-25">
                        <a class="dropdown-item" href="#">
                          View
                        </a>
                        <a class="dropdown-item" href="#">
                          Edit
                        </a>
                        <a class="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={4}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          forcePage={pageNumber}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};
export default Categories;
