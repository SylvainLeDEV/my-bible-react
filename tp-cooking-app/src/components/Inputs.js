import axios from "axios";
import React, {useEffect, useState} from "react";
import Cards from "./Cards";

const Inputs = () => {

    const [meals, setMeals] = React.useState([]);
    const [noMeal, setNoMeal] = React.useState(false);


    const handleChange = (e) => {
        e.preventDefault();
        getNewCook(e.target.value);
    };
    const getNewCook = (valueInput) => {
        console.log(valueInput);
        if (valueInput || valueInput === "") {
            axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + valueInput)
                .then(res => {
                    if (res.data.meals.length > 0) {
                        setMeals(res.data.meals);
                        setNoMeal(false);
                    }
                })
                .catch(err => {
                    setMeals([]);
                    setNoMeal(true);
                });
        }
    }

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
            .then(res => {
                setMeals(res.data.meals);
            })
            .catch(err => {
                console.log(err);
            })

    }, []);


    return (
        <div>
            <input
                type="text"
                placeholder="Enter name food ( Only in English )"
                onChange={(e) => {
                    handleChange(e)
                }}
            />

            {/*add cards here  */}
            {noMeal ? <h1>No meal found</h1> :

                <div className="card-container">
                    {
                        meals.map((meal) => (
                            <Cards key={meal.idMeal} meal={meal}/>
                        ))

                    }

                </div>
            }
        </div>
    );
};

export default Inputs;