import React, { useContext } from 'react'
import "./header.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarDays, faClock, faCompactDisc, faMicrophoneLines} from "@fortawesome/free-solid-svg-icons"
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";
import { TimePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import moment from 'moment';
import { SearchContext } from '../../../context/SearchContext'




const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false);
    const [destination, setDestination] = useState("");   
    const timeFormat ='h:mm a'   
    const [dates, setDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ]);
     
    const [value, setValue] = useState([]);     
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        hours: 1,
    });
    const navigate = useNavigate();
    
    const onChange = (time, timeString) => {      
      setValue(time);                        
    };
   
    const handleOption = (name, operation) =>{
        setOptions(prev=>{return {
            ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        }})}
    const {dispatch} = useContext(SearchContext)
    var toObject = require('dayjs/plugin/toObject')
    dayjs.extend(toObject)
    const handleSearch = ()=>{ 
      
      const formattedStartTime = dayjs(value[0]).toObject();
      const formattedEndTime = dayjs(value[1]).toObject();
      dispatch({type:"NEW_SEARCH",payload:{destination,dates,startTime: formattedStartTime, endTime:formattedEndTime}})
      navigate("/spaces", {state:{destination, dates, options,startTime: formattedStartTime, endTime:formattedEndTime}})
      
    }
  return (
    <div className='header'>
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        { type !== 'list' && <div className="imgbox"> 
            
            </div>}
        <div className='headerList'>
        
            <div className='headerListItem active'>            
            <FontAwesomeIcon icon={faCalendarDays} />
            <span>Bookings</span>
            </div>
            <div className='headerListItem'>            
            <FontAwesomeIcon icon={faCompactDisc} />
            <span>Tracks</span>
            </div>
            <div className='headerListItem'>            
            <FontAwesomeIcon icon={faMicrophoneLines} />
            <span>Studios</span>
            </div>
            </div>
            
            { type !== 'list' &&
                <>
            <h1 className="headerTitle">Book your spot now</h1>
            
            <p className='headerDesc'>
                Book when you want, how you want with a free stubookings account
            </p>
            <button className='headerBtn'>Sign in/ Register</button>
            
            <div className='headerSearch'>
                <div className='headerSearchItem'>
                    <FontAwesomeIcon icon= {faMicrophoneLines} className='headerIcon' />
                    <input type='text' placeholder='Where are you located?' className='headerSearchInput'
                    onChange={e=>setDestination(e.target.value)}
                    />
                </div>
                <div className='headerSearchItem'>
                    <FontAwesomeIcon icon= {faCalendarDays} className='headerIcon' />
                    <span onClick={()=>setOpenDate(!openDate)}className='headerSearchText'>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                    {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
                </div>
                <div className='headerSearchItem'>
                <FontAwesomeIcon icon= {faClock} className='headerIcon'/>                    
                     <TimePicker.RangePicker value={value}  minuteStep={15} use12Hours format= {timeFormat} onChange={onChange} />
                </div>
                <button className='headerBtn' onClick={handleSearch}>Search</button> 
            </div></>}
        </div>     
    </div>
  )
}

export default Header
