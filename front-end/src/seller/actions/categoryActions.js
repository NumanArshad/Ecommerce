import {
  ALL_CATEGORIIES,
  START_LOADING,
  STOP_LOADING
} from "../../utils/types";
import axios from "../../utils/httpInterceptors";
import updateQuery from "../../utils/queryParser"
export const newCategory = category => dispatch => {
  axios
    .post("/categories", category)
    .then(res => alert(JSON.stringify(res.data))
        //dispatch(allCategory())

)
    .catch(err => alert(JSON.stringify(err)));
};

export const allCategory = params => dispatch => {
  //console.log("callled");
  dispatch({ type: START_LOADING });
  axios
    .get(`/categories?${params!=="all" ?  updateQuery(params):``}`)
    .then(res => {
      dispatch({ type: STOP_LOADING });

      dispatch({ type: ALL_CATEGORIIES, payload: res.data });
    })
    // .catch(err => alert(JSON.stringify(err)));
};
