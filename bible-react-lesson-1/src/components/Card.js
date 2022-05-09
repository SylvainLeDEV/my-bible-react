import React from 'react';

const Card = ({ country }) => {

    // We get the data from component parent(country)
    // console.log(country);

    return (
        <li className='card'>
            <img src={country.flags.svg} alt={'Flag of ' + country.translations.fra.common}/>
            <div className="infos">
                <h2> { country.translations.fra.common } </h2>
                <h4> {country.capital} </h4>
                <p> Pop : {country.population.toLocaleString()} </p>
            </div>
        </li>
    );
};

export default Card;