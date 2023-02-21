import React from 'react'

function Product({setSepet, sepet, product}) {

  const addBasket = () =>{
    const addCheck = sepet.find(item => item.id === product.id) //öğenin varlığını kontrol etmek için
    if(addCheck){
      addCheck.amount += 1
      setSepet([...sepet.filter(item => item.id !== product.id), addCheck])

    } else {
      setSepet([...sepet, {
        id: product.id,
        title: product.title,
        image:product.image,
        price:product.price,
        amount: 1
      }])
    }

  }
  return (
    <div className='productid-card'>
        <img src={product.image}/>
        <div className='productid-details'>
        <h5>{product.title}</h5>
        <p>{product .price} TL</p>
        <button className='add' onClick={addBasket} >Sepete Ekle</button>  
        </div>
    </div>
  )
}
export default Product
//addSepet()