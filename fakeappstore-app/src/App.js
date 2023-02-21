import axios from 'axios'
import React, {useState, useEffect} from "react";
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Giris from './pages/Giris';
import Siparis from './pages/Siparis';

function App() {

  const [basket, setBasket] = useState([]); //çektiğim verileri burda tutup ekrana getireceğim.
  const [sepet, setSepet] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const handleBasketClick = () => {
    setSidebarOpen(true);
    console.log(handleBasketClick)
  };

  const handleClose = () => {
    setSidebarOpen(false);
    console.log(handleClose)
  };

  const clearCart = () => {
    setSepet([]);
    console.log("Sepet temizlendi!");
  };
  

useEffect(() => {
console.log(sepet)
}, [sepet]);



  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=8') //bir HTTP GET isteği gönderir ve belirtilen URL'den veri alır. 
    .then(res => setBasket(res.data)) //veri alındıktan sonra yapılacak işlemleri tanımlar
  }, []);

 

  return (
    <div className="App">
      {
        <Routes>
        <Route path='/' element ={<Giris/>} />
        <Route path='/Siparis' element={<Siparis basket={basket} setSepet={setSepet} sepet={sepet}  handleBasketClick={handleBasketClick}  
        isOpen={sidebarOpen} handleClose={handleClose} clearCart={clearCart}/>} />
      </Routes>  
      }
      
      
    </div>
  );
}

export default App;
 