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
        <Route path="/product" Component={DashBoard} />
        <Route path="/saveproduct/:productId" Component={AddOrUpdateProduct} />        
        <Route path="/saveproduct" Component={AddOrUpdateProduct} />        
        <Route path="/cart" Component={CartDetail} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Container>
  );
}

export default App;
