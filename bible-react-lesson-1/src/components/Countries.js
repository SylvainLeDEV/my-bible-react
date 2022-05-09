import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "./Card";

const Countries = () => {
    const [countries, setCountries] = React.useState([]);
    const [rangeValue, setRangeValue] = React.useState(36);
    const [selectedContinent, setSelectedContinent] = React.useState("");
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

    // UseEffect is a lifecycle method that runs when the component is mounted
    // is hooks
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then(response => {
                setCountries(response.data);
            })


        //deps: it's callback function that runs when the component is mounted
    }, [])

    return (
        <div className="countries">

            <ul className='radio-container'>
                <input type="range" min="1" max="250" defaultValue={rangeValue} onChange={(e) => {
                    setRangeValue(e.target.value);
                }}/>
                {radios.map((continent) => (
                    <li>
                        <input type="radio" id={continent} name="continentRadio" checked={continent === selectedContinent} onChange={ (e) => {
                            setSelectedContinent(e.target.id);
                        }}/>
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}
            </ul>

            {selectedContinent && (
                <button onClick={ () => {
                    setSelectedContinent("");

                }}> Annuler la recherche </button>
            )}

            <ul>
                {countries
                    // filter the countries by continent
                    .filter( country => country.continents[0].includes(selectedContinent))
                    // Sort the countries by population
                    .sort((a, b) => a.population - b.population)
                    // Slice the countries to the range value
                    .slice(0, rangeValue)
                    // Map the countries to a card
                    .map((country, index) => (
                        // Props : we pass the data of the parent component to its child component
                        <Card key={index} country={country}/>
                    ))}
            </ul>
        </div>
    );
};

export default Countries;