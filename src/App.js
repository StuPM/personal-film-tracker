import "./App.css";
import Home from "./components/Home";
import Admin from "./components/Admin";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Home /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
