import React from 'react';


function Navbar({sepet, handleBasketClick}) {

  //accumulatorbir, önceki işlemin sonucunu temsil eder ve fonksiyonun sonucunu tutar.
  //item, dizideki şu anda işlenen öğeyi temsil eder.
  const totalItems = sepet.reduce((acc , item) => acc + item.amount, 0); 


  return (
    <div className='navbar-container'>
      <div className='fake-title'>
      <h1>FAKE APP STORE</h1>
      </div>
        <div className='basket-icon'>
           <i className="fa fa-shopping-basket" style={{ fontSize: '30px' }}  onClick={handleBasketClick} ></i>
        <span className="basket-count">{totalItems}</span>
        </div>
        


    </div>
  )
}
export default Navbar
