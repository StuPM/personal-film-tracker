import "./App.scss";
import Home from "./components/Home";
import Admin from "./components/admin/Admin";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
