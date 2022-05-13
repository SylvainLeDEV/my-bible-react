import React from 'react';


const Cards = ({meal}) => {


    return (

        <div className="card">

            <div className="card__title">
                <h2>{meal.strMeal}</h2>
                <p> {meal.strArea} </p>
            </div>
            <div className="content">
                <div className="content-img">
                    <img src={meal.strMealThumb} alt=""/>
                </div>
                <div className="content-text">
                    <p> {meal.strInstructions} </p>
                </div>
            </div>
        </div>



    );
};

export default Cards;