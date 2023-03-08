import React from 'react'
import { useSelector } from 'react-redux'

const Cartbutton = ({product}) => {
    const {count1,cartList}= useSelector((state)=> state.counter)

    const cartCount = cartList.find((items) => items?.id )
    console.log(product , cartCount || 0 , 'aaa')
  return (
    <div>
      {cartCount?.count || 0}
    </div>
  )
}

export default Cartbutton
