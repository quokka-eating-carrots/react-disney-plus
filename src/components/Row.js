import axios from '../api/axios'
import React, { useEffect, useState } from 'react'
import './Row.css'
import MovieModal from './MovieModal'

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [movieSelected, setMovieSelected] = useState({})

  useEffect(() => {
    fetchMovieData()
  }, [fetchUrl])

  const fetchMovieData = async () => {
    const response = await axios.get(fetchUrl)
    setMovies(response.data.results)
    return response
  }

  const handleClick = movie => {
    setModalOpen(true)
  }

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div onClick={
          () => {
            document.getElementById(id).scrollLeft -= (window.innerWidth - 80)
          }} className="slider__arrow-left">
          <span className="arrow">{"◀️"}</span>
        </div>
        <div id={id} className='row__posters'>
          {movies.map(movie => (
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>
        <div onClick={
          () => {
            document.getElementById(id).scrollLeft += (window.innerWidth - 80)
          }
        } className='slider__arrow-right'>
          <span className='arrow'>{"▶️"}</span>
        </div>
      </div>
      {modalOpen ? <MovieModal {...movieSelected} setModalOpen={setModalOpen} /> : null}
    </div>
  )
}

export default Row