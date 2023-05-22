import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://res.cloudinary.com/soundbetter/image/upload/c_fill,f_auto,g_face:auto,h_630,q_90,w_1200/v1589492504/assets/photos/259010/8123A0BB-104A-4F38-9FDD-2CA7EA7EBA1F.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">TDE Studios</h1>
        <span className="siDistance">2.1 miles away</span>
        <span className="siTaxiOp">Engineer Included</span>
        <span className="siSubtitle">
          Studio A
        </span>
        <span className="siFeatures">
          Vocal Booth • Live Room • Kitchenette Access
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          No worries, cancel anytime!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;