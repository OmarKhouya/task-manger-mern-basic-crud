import axios from "axios";
import { useState } from "react";

export default function AddTask() {
  const [infos, setInfos] = useState();
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
      .post("http://localhost:3001/api/tasks", {data : infos})
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit} className="d-block mt-3 border p-3 rounded">
      <label>name : </label>
      <input
        type="text"
        name="name"
        className="form-control"
        onChange={handleChange} 
      />
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
      <button className="btn btn-dark mt-3">
        Add
      </button>
    </form>
  );
}
