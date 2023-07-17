import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";
import { Routes, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";

function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" exact Component={DashBoard}/>
        <Route path="/product" exact Component={DashBoard}/>
        <Route path="/saveproduct/:productId" Component={AddOrUpdateProduct}/>
        <Route path="/cart" exact Component={CartDetail}/>
      </Routes>   
    </Container>
  );
}

export default App;
