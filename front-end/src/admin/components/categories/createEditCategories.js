import React, { useState } from "react";
import { useDispatch } from "react-redux";
import commonstyles from "../../../assets/css/common_styles.module.css";

import InputField from "../../../common/layouts/inputField";
import { newCategory } from "../../actions/categoryActions";
const CreateEditCategory = ({ modal }) => {
  const [category, setCategory] = useState({ name: "", description: "" });
  const dispatch = useDispatch();
  const handleChange = event => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
  };
  const handleSubmit = () => {
    dispatch(newCategory(category));
  };

  return (
    <div class={`container ${!modal && `card`}`}>
      <div class={`form row ${!modal && `card-body`}`}>
        <InputField
          label="Name"
          name="name"
          placeholder="name here"
          classes={`${!modal ? `col-md-6` : `col-12`} mb-3`}
        />

        <InputField
          label="Description"
          name="description"
          classes={`${!modal ? `col-md-6` : `col-12`} mb-3`}
          placeholder="description here"
        />

        <button
          class="btn btn-primary ml-3"
          type="button"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Save
        </button>
        <button class="btn btn-danger ml-2">Cancel</button>
      </div>
    </div>
  );
};
export default CreateEditCategory;
