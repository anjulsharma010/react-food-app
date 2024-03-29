import {IMG_CDN_URL} from "../constants";

const RestaurentCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString,}) => {
    // const {name, cuisines, cloudinaryImageId, lastMileTravelString} = restaurant.data;
    return (
      <div className="card">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    );
  };
  export default  RestaurentCard;
