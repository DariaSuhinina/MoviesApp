import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import './style.css';

const MovieShedule = (props) => {
  const { shedule } = props;
  const time = [];
  const [theater, getTheater] = useState([]);

  const showTheater = <div>{theater}</div>;
  

  const getDays = () => {
    const days = [];

    for (let day in shedule.showList) {
      time.push(shedule.showList[day]);

      days.push(
        <li key={day} onClick={() => {
          getTheater([])
          // shedule.showList[day].map((i) => console.log('theater', i.theater.name)
          shedule.showList[day].map((i) => getTheater(i.theater.name)
          )
        }}>
          <p>{day}</p>
          {/* <div>{shedule.showList[day].map((i) => {
          <p key={i.theater}>{i.theater.name}</p>
        })}</div> */}
        </li>);

    }
    console.log('days', days)
    return days;
  }

  const getHours = () => {
    console.log('time', time)
    return (
      <div>
        {/* {.map((i) => {
          <li key={i.theater}>{i.theater.name}</li>
        })} */}
      </div>
    )
  }

  return (
    <div className='nav-description'>
      <ul className='shedule'>
        {getDays()}
      </ul>
      {showTheater}
    </div>
  )
}

export default MovieShedule;