import React from 'react';

function Sidebar({ sepet, isOpen, handleClose,  clearCart }) {

    
  return (
    <div className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
      <div className='sidebar-header'>
        <h4>Sepetim</h4>
        <button className='close-btn' onClick={handleClose}>
          <i className='fa fa-times'></i>
        </button>
      </div>

      
      <div className='sepet-container'>
        {sepet.length === 0 ? (
          <p> ! Sepetiniz boş.</p>
        ) : (
          <div className='list'>
            {
            sepet.map((item) => {
              return (
                <div className='alt' key={item.id}>
                <img src={item.image}/>
                <p>{item.amount} tane  x  {item.price} TL</p>
                <p>{item.amount * item.price} TL</p>
                </div>    
              );
            })}
            <div className='plus'>
            <p>Toplam: {sepet.reduce((acc, item) => acc + item.price * item.amount, 0)}TL</p>
            <button className='end' onClick={clearCart} >Siparişi bitir.</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
