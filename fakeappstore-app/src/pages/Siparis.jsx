import React from 'react'
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import Sidebar from '../components/Sidebar';

function Siparis({setSepet, sepet, basket, isOpen, handleClose, clearCart,handleBasketClick}) {
  return (
    <div>
       <Navbar sepet={sepet} handleBasketClick={handleBasketClick} />
       <Sidebar  sepet={sepet} isOpen={isOpen} handleClose={handleClose} clearCart={clearCart} />

        <div className='product-container'>
        {
        basket.map(product => <Product 
        key={product.id} 
        sepet={sepet}
        setSepet={setSepet}
        product={product}
        image={product.image}
        />)
        }
      </div>
    </div>
  )
}

export default Siparis
