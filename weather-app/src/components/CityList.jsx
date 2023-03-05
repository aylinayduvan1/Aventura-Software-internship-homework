import React from 'react';
import { Link } from 'react-router-dom';

function CityList({ item }) {
  return (
      <div className='city-card'>
        <div className='city-details'>
          <h5>{item.name}</h5>
          <Link to={`/cities/${item.id}`} className='open'> Weather </Link>
        </div>
      </div>   
  );
}

export default CityList;
