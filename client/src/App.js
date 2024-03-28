import "bootstrap/dist/css/bootstrap.css";
import DisplayTasks from "./displayTasks";
import AddTask from "./addTask";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import UpdateTask from "./updateTask";
function App() {
  return (
    <BrowserRouter>
      <div className="container mt-3">
        <ul className="navbar-nav">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/add'}>Add task</Link></li>
        </ul>
        <hr />
        <Routes>
          <Route path="/" element={<DisplayTasks />} />
          <Route path="/update/:name" element={<UpdateTask />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
