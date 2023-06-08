import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';

function App() {
  return (
    <div>
      {/* <h1>Hello react :D</h1> */}

      {/* <Navi></Navi> bu yapiyi asagida sade bir bicim de yazilmis hali mevcuttur */}
      <Navi/>
      <CategoryList/>
      <ProductList/>
    </div>
  );
}

export default App;
