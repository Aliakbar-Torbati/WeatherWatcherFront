import React, { useState, useEffect } from 'react';
import cities from '../../assets/cities.json';
import "./CitySearchStyle.scss";


const CitySearch = ({ setSelectedCity }) => {
  const [query, setQuery] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    if (query.length > 2) {
      const results = cities.filter(city =>
        city.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCities(results);
    } else {
      setFilteredCities([]);
    }
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city.name);
    setQuery('');
    setFilteredCities([]);

  };
  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a city..."
      />
      {filteredCities.length > 0 && (
        <ul>
          {filteredCities.map((city, index) => (
            <li key={index} onClick={() => handleCityClick(city)}>
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default CitySearch;
