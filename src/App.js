import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/index";
import Cart from "./components/Cart";

const App = () => (
  <>
    <Routes>
      <Route exact path="/Reeco" element={<Home />} />
      <Route exact path="/Reeco/cart" element={<Cart />} />
    </Routes>
  </>
);

export default App;
