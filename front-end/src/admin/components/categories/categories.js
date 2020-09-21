import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import common from "../../../assets/css/common_styles.module.css";
import { allCategory } from "../../actions/categoryActions";
import ReactPaginate from "react-paginate";
import Modal from "../../../common/layouts/modal";
import Autocomplete from "react-autocomplete";
import CreateEditCategory from "./createEditCategories";
const lst = [
  { id: 1, name: "lwmk", Descriptiom: "lwlgmrmk ksfndne md n dk" },
  { id: 1, name: "lwmk", Descriptiom: "lwdk" },
  { id: 1, name: "lwmk", Descriptiom: "lwdk" },
  { id: 1, name: "lwmk", Descriptiom: "lwdk" }
];
const Categories = () => {
  const [paginateState, setPaginate] = useState({ total_pages: 0 });
  const { total_pages } = paginateState;
  const { categories } = useSelector(state => state.categoryReducer);
  const { loading } = useSelector(state => state.loadingReducer);
  const [bit, setBit] = useState(false);
  const [vl, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCategory(1));
  }, [dispatch]);

  useEffect(() => {
    console.log("change loading state", loading);
    console.dir(categories);
    if (!loading && categories.length && !bit) {
      console.log("has been", Math.ceil(11 / 5));
      setPaginate(prevState => ({ ...prevState, total_pages: 3 }));
      setBit(true);
    }
  }, [loading, categories]);

  const handlePageClick = event => {
    dispatch(allCategory(event.selected + 1));
  };

  return (
    <div class="container card">
      <div class="form row card-body">
        <table class="table table-striped table-responsive-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
              <div class="btn-group" style={{margin:'-4px 0px -4px 0px'}}>
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
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <div class="btn-group" style={{margin:'-4px 0px -4px 0px'}}>
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
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
              <div class="btn-group" style={{margin:'-4px 0px -4px 0px'}}>
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
          </tbody>
        </table>
      </div>
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
