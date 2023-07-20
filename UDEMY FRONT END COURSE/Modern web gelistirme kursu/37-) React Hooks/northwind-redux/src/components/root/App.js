import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";
import { Routes, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";




function App() {   

  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" exact Component={DashBoard} />
        <Route path="/product" exact Component={DashBoard} />
        <Route path="/saveproduct/:productId" exact Component={AddOrUpdateProduct} />        
        <Route path="/saveproduct" exact Component={AddOrUpdateProduct} />        
        <Route path="/cart" exact Component={CartDetail} />
        <Route path="*" exact Component={NotFound} />
      </Routes>
    </Container>
  );
}

export default App;
