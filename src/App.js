import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import "./style/app.scss";
import Task from "./pages/Task/Task";
import Navbar from "./cmp/navbar/Navbar";

function App() {


  return (
    <div className="app">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks/:id" element={<Task />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
