import React from 'react'
import useFetch from '../../hooks/useFetch'
import "./featured.css"
const Featured = () => {
  const { data, loading, error } = useFetch(
    "/studios/countByCity?cities=Detroit,LA,Atlanta"
  );
  return (
    <div className='featured'>
      {loading ?  ("Loading please wait") : 
      (<>
      <div className='featuredItem'>
      <img
          src="https://live.staticflickr.com/2596/3800707171_5cf00e8b4a_b.jpg"
          alt=""
          className="featuredImg"
        />
      <div className="featuredTitles">
          <h1>Detroit</h1>
          <h2>{data[0]} studios</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Chicago_skyline_by_night_%288091823895%29_%282%29.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Los Angeles</h1>
          <h2>{data[1]}  studios</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2b/NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_%28cropped%29.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Atlanta</h1>
          <h2>{data[2]}  studios</h2>
        </div>
        </div></>)}
    </div>
  )
}

export default Featured
