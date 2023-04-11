import "./App.css";
import Home from "./components/Home";
import Admin from "./components/admin/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
