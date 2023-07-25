import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/navbar/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import '@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css';
import 'react-clock/dist/Clock.css';
import {faCalendarDays, faClock, faCompactDisc, faMicrophoneLines} from "@fortawesome/free-solid-svg-icons"
import { TimePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import moment from 'moment';

const LIst = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [times, setTimes] = useState(location.state.times);
  const [value, setValue] = useState(location.state.value);
  const startTime = useState(location.state.startTime);
  const endTime = useState(location.state.endTime);
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  
  const { data, loading, error,reFetch } = useFetch(
    `/spaces?city=${destination}&min=${min || 0}&max=${max || 999}`
  );
  const handleClick = ()=>{
    reFetch();
  }
  const onChange = (time) => {
    const startTime = time[0]
    const endTime = time[1]
    setValue([startTime,endTime])                  
    console.log(startTime, endTime)
  };
  

  
 
  console.log(startTime[0])

  return (
    <div className="lsbgcolor">
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label className="lbltxt">Location</label>
              <input placeholder={destination} type="text" onChange={e=>setDestination(e.target.value)} />
            </div>
            <div className="lsItem">
              <label className="lbltxt">Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>            
            <div className='lsItem'>
            <label className="lbltxt">Time</label>
                    <span onClick={()=>setOpenOptions(!openOptions)}>
                    {dayjs({startTime}).format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]')}  to 
                      </span>
                                                     
                    {openOptions && 
                    
                      <TimePicker.RangePicker minuteStep={15} use12Hours format="h:mm a"  onChange={onChange} placement="bottomLeft"/>
                      
                                               
                    }                                      
                </div>
            <div className="lsItem">
              <label className="lbltxt">Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per hour</small>
                  </span>
                  <input type="number" onChange={e=>setMin(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per hour</small>
                  </span>
                  <input type="number" onChange={e=>setMax(e.target.value)} className="lsOptionInput" />
                </div>
                
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {loading ? "loading" : <>
            {data.map(item=>(
              <SearchItem item={item}key={item._id}/>
            ))}
            </>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LIst;