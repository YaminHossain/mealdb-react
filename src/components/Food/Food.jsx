import React from "react";
import { Link, useNavigate } from "react-router-dom";

// a link component needs to be created 

const Food = (props) => {
  const navigate = useNavigate();
  const { data } = props;
  console.log(props);
  console.log(data);
  return (
    <div className="shadow-lg lg:flex lg:flex-row sm:flex sm:flex-col gap-[24px] p-5">
      <div className="max-w-[230px]">
        <img
          className="rounded-md object-cover"
          src={data.strMealThumb}
          alt="meal photo"
        />
      </div>
      <div>
        <p className="font-extrabold text-lg mb-1">{data.strMeal}</p>
        <p>
          There are many variations of passages of available, but the majority
          have suffered
        </p>
        <span className="text-yellow-400 underline cursor-pointer">View Details</span>
      </div>
    </div>
  );
};

export default Food;
