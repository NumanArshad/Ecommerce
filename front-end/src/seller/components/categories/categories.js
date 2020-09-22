import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import common from "../../../assets/css/common_styles.module.css";
import { allCategory } from "../../actions/categoryActions";
import ReactPaginate from "react-paginate";
import Modal from "../../../common/layouts/modal";
import Autocomplete from "react-autocomplete";
import CreateEditCategory from "./createEditCategories";
import queryString from "query-string";
import isEmpty from "../../../utils/isEmpty";
import { useHistory, useLocation } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const lst = [
  { id: 1, name: "lwmk", Descriptiom: "lwlgmrmk ksfndne md n dk" },
  { id: 1, name: "lwmk", Descriptiom: "lwdk" },
  { id: 1, name: "lwmk", Descriptiom: "lwdk" },
  { id: 1, name: "lwmk", Descriptiom: "lwdk" }
];
const Categories = () => {
  const { categories } = useSelector(state => state.categoryReducer);
  const { loading } = useSelector(state => state.loadingReducer);
  const dispatch = useDispatch();

  const location = useLocation();

  const parsed=queryString.parse(location.search)
 const [pageNumber]=useState(parsed._start/2 || 0)
const [sort,setSort]=useState({key:parsed._sort || "id",order:parsed._order || "desc"})
  useEffect(() => {
    dispatch(allCategory(location.search));
  }, [dispatch, location]);

  const history = useHistory();


  const handlePageClick = event => {
    // const queryParams = {};
    // queryParams._start = event.selected * 2;
    // history.push(
    //   `/seller/dashboard/categories?${event.selected>0 ? queryString.stringify(queryParams):``}`
    // );
    updateUrl(event.selected * 2,sort.key,sort.order)
  };

  const handleSort=key=>{
    alert(key)
    let sortType="desc";
    if(sort.key===key && sort.order==="desc"){
      sortType="asc"
    }
    setSort({key:key,order:sortType})
    updateUrl(parsed._start,key,sortType)

  }

  const updateUrl=(offset,sortBy,order)=>{
    const queryParams={}
    if(offset) queryParams._start=offset;
  if(sortBy)  queryParams._sort=sortBy;
   if(order) queryParams._order=order
    history.push(
      `/seller/dashboard/categories?${queryString.stringify(queryParams)}`
    );
  }



  return (
    <div class="container card">
      <div class="form row card-body">
        {loading && <span>...loading</span>}
        <table class="table table-striped table-responsive-sm">
          <thead>
            <tr>
              <th scope="col" onClick={()=>handleSort("id")}>#
              {sort.key === "id" && 
                  <i
                    class={`fa fa-chevron-${
                      sort.order === "desc" ? `down` : "up"
                    }`}
                    aria-hidden="true"
              ></i>}
              </th>
              <th scope="col" onClick={()=>handleSort("name")}>Name
              {sort.key === "name" && 
                  <i
                    class={`fa fa-chevron-${
                      sort.order === "desc" ? `down` : "up"
                    }`}
                    aria-hidden="true"
              ></i>}
              </th>
              <th scope="col">Descriptiom</th>
              {/* <th scope="col">Handle</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {categories.map(({ id, name, description }) => {
              return (
                <tr>
                  <th scope="row">{id}</th>
                  <td>{name}</td>
                  <td>{description}</td>

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
   {loading &&   <Skeleton count={3} />}
  

    </div>
    // <div className={common.table_container}>
    // <Modal title="Create">
    //   <CreateEditCategory modal="modal" />
    // </Modal>
    /* <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Descriptiom</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {categories.map(({ id, name, description }) => {
            return (
              <tr>
                <td>{id}</td>
                <td>{name}</td> <td>{description}</td>
                <td>
                  <button className={common.edit}>edit</button>
                  <button className={common.delete}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table> */

    //   <Autocomplete
    //     items={[
    //       { id: "foo", label: "foo" },
    //       { id: "bar", label: "bar" },
    //       { id: "baz", label: "baz" }
    //     ]}
    //     shouldItemRender={(item, value) => {
    //       return (
    //         value.length > 0 &&
    //         item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
    //       );
    //     }}
    //     getItemValue={item => item.label}
    //     renderItem={(item, highlighted) => {
    //       console.log(item, highlighted);
    //       return (
    //         <div
    //           key={item.id}
    //           style={{ backgroundColor: highlighted ? "red" : "yellow" }}
    //         >
    //           {item.label}
    //         </div>
    //       );
    //     }}
    //     renderMenu={(items, value) => (
    //       <div>
    //         {value === "" ? (
    //           <span>Search value</span>
    //         ) : items.length === 0 && value.length > 2 ? (
    //           <span>no match found</span>
    //         ) : (
    //           items
    //         )}
    //       </div>
    //     )}
    //     value={vl}
    //     onChange={e => setValue(e.target.value)}
    //     onSelect={value => {
    //       setValue(value);
    //     }}
    //   />
    //   <ReactPaginate
    //     previousLabel={"prev"}
    //     nextLabel={"next"}
    //     breakLabel={"..."}
    //     breakClassName={"break-me"}
    //     pageCount={total_pages}
    //     marginPagesDisplayed={2}
    //     pageRangeDisplayed={5}
    //     onPageChange={handlePageClick}
    //     containerClassName={"pagination"}
    //     subContainerClassName={"pages pagination"}
    //     activeClassName={"active"}
    //   />
    // </div>
  );
};
export default Categories;
