import { useEffect, useState } from "react";
import {restaurentList} from "../constants";
import RestaurentCard from "./RestaurentCard";
// import { useState } from "react";

function filterData (searchTxt, restaurants) {
  return restaurants.filter((restaurant) => restaurant.data.name.includes(searchTxt));
};

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurentList)
  const [searchTxt, setSearchTxt] = useState("Pizza");

  useEffect (()=>{
    getRestaurants();
  }, []);

  async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2124007&lng=78.1772053&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json)
        // setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

    return (
        <>
        <div className="search-container">
            <input type="text"className="search-input" placeholder="search"value={searchTxt} onChange={(e) => {
              setSearchTxt(e.target.value) ;
            }}/>
            <button className="search-btn" onClick={() => {const data = filterData(searchTxt, restaurants);
              setRestaurants(data);
            }}>Search</button>  
        </div>
      <div className="restaurent-list">
        {restaurants.map((restaurant) => {
          return <RestaurentCard {...restaurant.data} key={restaurant.data.id}/>;
        })}
      </div>
      </>
    );
  };
  

  export default Body;