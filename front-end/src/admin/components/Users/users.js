import React from "react"
import common from "../../../assets/css/common_styles.module.css"
import Modal from "../../../common/layouts/modal"
import CreateEditUsers from "./createEditUsers"
const lst = [
    { id: 1, name: "lwmk",email:"lefkklem",contact:"0908494",city:"jfeb",postalCode:"ewhu",type:"seller" },   { id: 1, name: "lwmk",email:"lefkklem",contact:"0908494",city:"jfeb",postalCode:"ewhu",type:"seller" },
    { id: 1, name: "lwmk",email:"lefkklem",contact:"0908494",city:"jfeb",postalCode:"ewhu",type:"seller" },   { id: 1, name: "lwmk",email:"lefkklem",contact:"0908494",city:"jfeb",postalCode:"ewhu",type:"seller" }
]
const Users = () => {
    return (

        <div class="container card">
          <Modal title="Create"><CreateEditUsers modal="modal"/></Modal>
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
      // <div className={com
    )
}
export default Users