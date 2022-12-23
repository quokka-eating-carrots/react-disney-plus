import axios from '../api/axios';
import React, { useEffect } from 'react'
import requests from '../api/requests';

const Banner = () => {

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {

    const response = await axios.get(requests.fetchNowPlaying);
    console.log(response);

  }


  return (
    <div>Banner</div>
  )
}

export default Banner