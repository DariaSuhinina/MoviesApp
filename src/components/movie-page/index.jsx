import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

const Movie = ({ match }) => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  console.log('params', params.eventId);
  console.log('movie', movie);

  useEffect(() => {
    console.log('in useEffect');
    setInfo();
  }, []);

  const setInfo = useCallback(async () => {
    setIsLoading(true);
    const url =
      `https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22event%22:%22${params.eventId}%22,%22city%22:%221%22%7D&extended=true`;

    const data = await fetch(url);

    const movieInfo = await data.json();

    console.log(movieInfo, 'movieInfo');

    setMovie(movieInfo);
    setIsLoading(false);
  })

  if (isLoading) {
    return (
      <div>movies is loading</div>
    )
  }
return (
  <div className='moviePage' style={{ display: 'flex', flexDirection: 'column', marginLeft: 30}}>
    
    {isLoading
      ?
      (<div>movie is loading</div>)
      :
    (<>
    {movie.map((m) =>
      <div key={m.eventId}>
        <img src={m.posterLink} alt="movie" style={{ width: 190, height: 280, marginTop: 20}} />
        <div className='movieName' style={{marginTop: 20}}><strong>{m.name}</strong></div>
        <div className='movieAnnotation' style={{marginTop: 20}}>{m.annotation}</div>
      </div>
      )}
      </>
    )
    }
        {/* <>
        <img src={movie[0].posterLink} alt="movie" style={{ width: 190, height: 280, marginTop: 20}} />
        <div className='movieName' style={{marginTop: 20}}><strong>{movie[0].name}</strong></div>
        <div className='movieAnnotation' style={{marginTop: 20}}>{movie[0].annotation}</div>
        </>  */}
        {/* фрагментом не работает */}
        
    </div>
  )
}

export default Movie;