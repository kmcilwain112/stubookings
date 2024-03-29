import React from 'react'
import "./studio.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/navbar/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import {useState} from "react";
import useFetch from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'

const Studio = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const location = useLocation();
  const id = location.split("/")[2];

  const [open, setOpen] = useState(false);
  const { data, loading, error,reFetch } = useFetch(
    `/studio/find/${id}}`
  );
  const handleClick = ()=>{
    reFetch();
  }
  
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return ( 
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
      {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
        <button className="bookNow">Book Now!</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAdress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>{data.address}</span>
            <span className="hotelDistance">
            {data.distance}
            </span>
            <span className="hotelPriceHighlight">
            ${data.price} per hour
            </span>
            <div className="hotelImages">
            {data.photos?.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{data.title}</h1>
              <p className="hotelDesc">
                {data.desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
      </div>
    </div>
    </div>
  )
}

export default Studio
