import React from 'react';
import './Country.css'

const Country = (props) => {
    let data = props.country;
    const { flag, capital, population, region } = data;
    // console.log(data)
    return (
        <div className='country_container'>
            <h4>Name: {data.name}</h4>
            <img src={flag} alt="" />
            <h5>Capital: {capital}</h5>
            <h6>Population: {population}</h6>
            <h6>Region: {region}</h6>
        </div>
    );
};

export default Country;