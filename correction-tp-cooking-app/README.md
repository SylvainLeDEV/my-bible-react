# Correction

Here is the correction of the TP cooking app.

In my cooking app, I didn't use useEffect callback. I used a function to call api.
useEffect is plays once if call back is empty. But if call back is not empty, it is plays when data modified.

My app
```
const getNewCook = (valueInput) => {
        if (valueInput) {
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

```
Correction
```
const [mealsData, setMealsData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch
      )
      .then((res) => setMealsData(res.data.meals));
  }, [inputSearch]);
```

And if I wish to avoid all problem with map = null and undefined, I can use a condition.
```
const [mealsData, setMealsData] = useState([]);
{mealsData &&
          mealsData
            .slice(0, 24)
            .map((meal) => <Card key={meal.idMeal} meal={meal} />)}
```

