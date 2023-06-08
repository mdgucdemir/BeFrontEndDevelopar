import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

function App() {

  const categoryList = "This is Category List";
  const productList = "This is Product List";
  // yukaridaki gibi degisken atama yontemi ile de islemlerimiz gerceklestirilebilinir

  return (
    <div>
      {/* <h1>Hello react :D</h1> */}

      {/* <Navi></Navi> bu yapiyi asagida sade bir bicim de yazilmis hali mevcuttur */}
      {/*[npm install bootsrap] ve [npm install reactstrap] yapmalisin. ikisinide yuklemelisin yoksa calismaz*/}
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title = {categoryList} />
          </Col>
          <Col xs="9">
            <ProductList title = {productList} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
