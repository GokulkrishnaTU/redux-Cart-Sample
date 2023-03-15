import React, { useState } from "react";
import products from "./product.json";
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../features/conterSlice';
import { decrement,addToCart } from '../features/conterSlice';
// import AfterCart from "./CartButtons/AfterCart";
// import BeforeCart from "./CartButtons/BeforeCart";
// import { useSelector } from "react-redux";
import "./productList.css";
import Cartbutton from "./cartbutton";
// import CartButtons from "./CartButtons";

const ProductList = ({product}) => {

    const {count1,cartList}= useSelector((state)=> state.counter)
    console.log(count1);
    console.log(cartList);
    const dispatch=useDispatch()

   


    console.log('carttttttttttttt: ', cartList);
   //  console.log('cartCount: ', cartCount?.count);
    console.log("productsss",);
   //  console.log("productsss",product[1]?.id);




            // console.log(cartCount);

            return (
               <div className="main">
               <section className="container">
                  {products?.map((product, key) => {
                     return(
                  
                     <div className="product-container" key={key}>
                        <img src={product?.image} alt="" />
                        <h3>{product?.title}</h3>

                        {/* {cartCount?.id===product?.id ?  <h1>count :{cartCount?.count} </h1>:<h1>count :0 </h1>} */}
                        {/* <Cartbutton product={product} /> */}

                  

                     {/* <h1>count :{product?.id} </h1> */}

                     {/* Matching the id of cartList and product list */}
                        {cartList.length !=0 ? (cartList.map((items) =>{
                           if( items?.id === product.id){
                              return <h1>{items.count ? items.count : 0}</h1>
                           }
                        } )) : <h1>0</h1>}
                              
                              <div className="btnclass">


                              <button onClick={()=> dispatch(addToCart(product))}>add to cart</button>
                              <div><button onClick={()=> dispatch(increment(product?.id))}> + </button></div>
                              <div><button onClick={()=> dispatch(decrement(product?.id))}> - </button></div>
                              </div>


  
                     </div>
                  )})} 
               </section>
               </div>
            );
};

export default ProductList;





