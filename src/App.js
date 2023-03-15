
import './App.css';
import ProductList from './product/productLis';
import product from "./product/product.json"
// import { useState } from 'react';


function App() {
  // const [counter, setCounter] = useState(0)

  // const increment = () => {
  //   setCounter(prevCounter => prevCounter + 1)
  // }


  return (
    <div className="App">
<ProductList product={product}/>


    
    </div>
  );
}

export default App;
