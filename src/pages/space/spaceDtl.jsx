import React, { useContext } from 'react'
import "./space.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/navbar/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import {useState} from "react";
import useFetch from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import dayjs from 'dayjs'

const SpaceDtl = () => {
  const location = useLocation()
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const { data, loading, error,reFetch } = useFetch(
    `/spaces/find/${id}`
  );
  const {dates,startTime,endTime} = useContext(SearchContext);
  
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  
  var duration = require('dayjs/plugin/duration')
  dayjs.extend(duration)
  function timeClac(time1,time2){
    const t1 = dayjs(time1).format('h:mm a')
    console.log(t1)
    const t2 = dayjs(time2).format('h:mm a')
    console.log(t2)
    
    return t2;
  }
  const hours = timeClac(startTime,endTime);
  
  console.log(startTime)

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
      {loading ? ("loading") : ( <div className="hotelContainer">
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
          <h1 className="hotelTitle">{data.title}</h1>
          <div className="hotelAdress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>{data.city}</span>
            </div>
            <span className="hotelDistance">
              {data.distance} miles away
            </span>
            <span className="hotelPriceHighlight">
              ${data.price}/hr
            </span>
            <div className="hotelImages">
            {data.photos?.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{data.studio_name}</h1>
              <p className="hotelDesc">
                {data.desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Zone out from {startTime} to {endTime}!</h1>
              <span>
                The price listed below reflects full access to this space and other amenities. 
              </span>
              <h2>
                <b>${hours * data.price}</b> ({hours}{""}hours)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
      </div>
    )}
    </div>
  )
}

export default SpaceDtl
