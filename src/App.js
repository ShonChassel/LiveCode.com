import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import "./style/app.scss";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
