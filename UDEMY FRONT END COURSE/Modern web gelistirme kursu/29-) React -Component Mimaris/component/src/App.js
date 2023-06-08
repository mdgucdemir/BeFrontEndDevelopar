import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

function App() {
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
            <CategoryList />
          </Col>
          <Col xs="9">
            <ProductList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
