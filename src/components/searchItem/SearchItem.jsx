import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      {item.photos && <img
        src={item.photos[0]}
        alt=""
        className="siImg"
      />}
      <div className="siDesc">
        <h1 className="siTitle">{item.title}</h1>
        <span className="siDistance">{item.distance} miles from center</span>
        {item.engineerIncluded &&
          <span className="siTaxiOp">Engineer Included</span>
          }
        <span className="siSubtitle">
          {item.studio_name}
        </span>
        <span className="siFeatures">
          {item.desc}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          No worries, cancel anytime!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.price}/hr</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/spaces/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;