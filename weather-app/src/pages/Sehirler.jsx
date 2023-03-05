import React, { useState, useContext } from 'react';
import { MainContext } from '../Context';
import CityList from '../components/CityList';

function Sehirler() {
  const { city } = useContext(MainContext);
  const [search, setSearch] = useState('');

  // const filteredCities = city.filter(item => {
  //   return item.name.toLowerCase().includes(search.toLowerCase());
  // });

  const filteredCities = city.filter(item => {
    return item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  }); 
  
  
  
  

  const handleChange = e => {
    setSearch(e.target.value);
  };

  return (
    <div className='first-container'>
    <div className='search-container'>
        <input
        className='search-input'
          type='text'
          placeholder='Search City...'
          value={search}
          onChange={handleChange}
        />
      </div>
      <div className='city-container'>
      {filteredCities.map(item => (
        <CityList key={item.id} item={item} />
      ))}
    </div>
    </div>
    
  );
}

export default Sehirler;
