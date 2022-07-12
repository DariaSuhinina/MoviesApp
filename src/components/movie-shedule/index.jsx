import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

const MovieShedule = (props) => {
  const {shedule} = props;
  const time = [];
  const [date, getDate] = useState(0);

  const getDays = () => {
    const days = [];

    for (let day in shedule.showList) {
      time.push(shedule.showList[day]);

      days.push(
        <li key={day} onClick={getHours}>
        <p>{day}</p>  
        {/* <div>{shedule.showList[day].map((i) => {
          <p key={i.theater}>{i.theater.name}</p>
        })}</div> */}
        </li>);
       
    }
    console.log('days',days)
  return days;
  }

  const getHours = () => {
    console.log('time',time)
    return(
      <div>
        {/* {.map((i) => {
          <li key={i.theater}>{i.theater.name}</li>
        })} */}
      </div> 
    )
  }

  return(
    <ul className='shedule'>
      {getDays()}
    </ul>
  )
}

export default MovieShedule;