import './App.css';
import React, {useState, useEffect} from "react";
import {Routes,Route, Navigate} from 'react-router-dom'
import { MainContext } from './Context'
import Sehirler from './pages/Sehirler';
import Giris from './pages/Giris';
import {cities} from './data';
import CityDetails from './components/CityDetails';
import NotFound from './components/NotFound'



console.log(cities)

function App() {

  
const [city, setCity] = useState(cities); //çektiğim verileri burda tutup ekrana getireceğim.


useEffect(() => {
  fetch('cities.json')
    .then(response => response.json())
    .then(data => setCity(data))
    .catch(error => console.log(error));
}, []);



const data = {
  city,
  setCity,
}
  return (
    <MainContext.Provider value={data} className="App">
      {
        <Routes>
          <Route path='/' element ={<Giris/>} />
          <Route path='/cities' element={<Sehirler/>} />
          <Route path="/cities/:id" element={<CityDetails />} />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>  
      } 
    </MainContext.Provider>
  );
}

export default App;
