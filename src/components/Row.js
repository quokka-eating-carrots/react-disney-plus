import axios from '../api/axios'
import React, {useEffect, useState} from 'react'

const Row = ({title, id, fetchUrl}) => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetchMovieData()
  }, [fetchUrl])

  const fetchMovieData = async () => {
    const response = await axios.get(fetchUrl)
    setMovies(response.data.results)
    console.log(response)
    return response
  }
  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className="arrow">{"<"}</span>
        </div>
        <div className='row__poseters'>
          {movies.map(movie => (
            <img key={movie.id} className="row__poster" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.name} />
          )) }
        </div>
        <div className='slider__arrow-right'>
          <span className='arrow'>{">"}</span>
        </div>
      </div>
    </div>
  )
}

export default Row
