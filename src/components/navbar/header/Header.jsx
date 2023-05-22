import React from 'react'
import "./header.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarDays, faClock, faCompactDisc, faMicrophoneLines} from "@fortawesome/free-solid-svg-icons"
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";


const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false);
    const [location, setLocation] = useState("");   
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        hours: 1,
    });
    const navigate = useNavigate();
    const handleOption = (name, operation) =>{
        setOptions(prev=>{return {
            ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        }})}
    const handleSearch = ()=>{
      navigate("/studios", {state:{location, date, options}})
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
                    onChange={e=>setLocation(e.target.value)}
                    />
                </div>
                <div className='headerSearchItem'>
                    <FontAwesomeIcon icon= {faCalendarDays} className='headerIcon' />
                    <span onClick={()=>setOpenDate(!openDate)}className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                    {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
                </div>
                <div className='headerSearchItem'>
                    <FontAwesomeIcon icon= {faClock} className='headerIcon' />
                    <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.hours} Hours`}</span>
                    {openOptions && <div className='options'>
                        <div className='optionItem'>
                            <span className="optionText">Hours</span>
                            <button
                            disabled={options.hours <= 1} 
                             className="optionCounterButton" onClick={()=>handleOption("hours", "d")}>-</button>
                            <span className="optionCounterNumber">{options.hours}</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("hours", "i")}>+</button>
                        </div>
                    </div>}
                </div>
                <button className='headerBtn' onClick={handleSearch}>Search</button> 
            </div></>}
        </div>     
    </div>
  )
}

export default Header
