import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DisplayTasks() {
  const [recievedData, setRecievedData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/tasks")
      .then((res) => setRecievedData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (name) => {
    axios
      .delete(`http://localhost:3001/api/tasks/${name}`)
      .then((res) => alert(res.data.message))
      .catch((err) => console.error(err));
  };
  return (
    <div className="row">
      {recievedData &&
        recievedData.map((task, index) => (
          <div className="border p-3 rounded m-2 col" key={index}>
            <h1>name : {task.name}</h1>
            <p>description : {task.description}</p>
            <p>{task.priority ? "task is preferred" : ""}</p>
            <p>{!task.done && !task.doing ? "Task is coming" : ""}</p>
            <p>{task.doing ? "Task is under process" : ""}</p>
            <p>{task.done ? "Task is done" : ""}</p>
            <div className="row">
              <Link
                to={`/update/${task.name}`}
                className="col btn btn-outline-primary mx-1"
              >
                Update
              </Link>
              <button
                className="btn btn-outline-danger col mx-1"
                onClick={() => handleDelete(task.name)}
              >
                delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
