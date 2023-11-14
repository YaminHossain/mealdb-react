import React, { useEffect, useState } from "react";
import axios from "axios";
import Food from "../Food/Food";
const SearchResult = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=beef")
      .then((res) => {
        setFoods(res.data.meals);
      });
  }, []);
  return (
    <div className=" lg:flex lg:items-center lg:justify-center m-8">
      <div className="lg:max-w-3xl sm:w-full grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
        {
            foods.map(food=><Food data={food} key={food.idMeal}></Food>)
        }
      </div>
    </div>
  );
};

export default SearchResult;
