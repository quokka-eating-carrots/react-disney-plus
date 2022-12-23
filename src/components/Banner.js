import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import requests from '../api/requests';
import './Banner.css'

const Banner = () => {
  const [movie, setMovie] = useState(undefined)
  const [isClicked, setIsClicked] = useState(false)
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const response = await axios.get(requests.fetchNowPlaying)
    const movieId = response.data.results[
      Math.floor(Math.random() * response.data.results.length)
    ].id
    const {data: movieDetail} = await axios.get(`movie/${movieId}`, {
      params: {append_to_response: 'videos'}
    })
    console.log(movieDetail)
    setMovie(movieDetail)
  }

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + '...' : str
  }

  if (!movie) {
    return <div>loading...</div>
  }

  if (!isClicked) {
    return (
      <header className="banner"
    style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
      backgroundPosition: "top center",
      backgroundSize: "cover"
    }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
        {movie.title || movie.name || movie.original_name}
        </h1>
        <div className='banner__buttons'>
          {movie.videos?.results[0]?.key ? 
            <button className="banner__button play"
            onClick={() => setIsClicked(true)}>PLAY</button>
          : 
          null}
        </div>
        <h5 className="banner__description">{truncate(movie.overview, 100)}</h5>
      </div>
      <div className="baaner--fadeBottom"/>
    </header>
    )
  } else {
    return (
      <>
        <Container>
          <HomeContainer>
          <Iframe
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&mute=1&loop=1`}
          ></Iframe>
          </HomeContainer>
        </Container>
        <button onClick={() => setIsClicked(false)}>
          ❌
        </button>
      </>
    )
  }
}

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Container = styled.div`
  disyplay: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;

`

export default Banner