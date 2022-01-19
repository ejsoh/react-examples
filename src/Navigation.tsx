import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import First from "./pages/First";
import Second from "./pages/Second";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">home</Link>
        <Link to="/first">first</Link>
        <Link to="/second">second</Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="first" element={<First />} />
        <Route path="second" element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
