
import './App.css';
import ProductList from './product/productLis';
import product from "./product/product.json"

function App() {


  return (
    <div className="App">
<ProductList product={product}/>

    
    </div>
  );
}

export default App;
