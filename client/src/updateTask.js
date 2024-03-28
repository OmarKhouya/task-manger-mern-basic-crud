import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UpdateTask() {
  const [infos, setInfos] = useState();
  const { name } = useParams();
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (checked) {
      setInfos((prev) => {
        return { ...prev, [name]: type === "checkbox" ? true : value };
      });
    } else {
      setInfos((prev) => {
        return { ...prev, [name]: type === "checkbox" ? false : value };
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/api/tasks/${name}`, { data: infos })
      .then(() => {
        alert("task changed");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit} className="d-block mt-3 border p-3 rounded">
        <h1>name : {name}</h1>
      <label>description : </label>
      <input
        type="text"
        name="description"
        className="form-control"
        onChange={handleChange}
      />
      <div>
        <label>priority : </label>
        <input
          type="checkbox"
          name="priority"
          className="ms-3"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>is done : </label>
        <input
          type="checkbox"
          name="done"
          className="ms-3"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>is doing : </label>
        <input
          type="checkbox"
          name="doing"
          className="ms-3"
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-dark mt-3">Add</button>
    </form>
  );
}
