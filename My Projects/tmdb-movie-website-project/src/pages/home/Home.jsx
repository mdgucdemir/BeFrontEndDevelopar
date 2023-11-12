import React from 'react'
import './style.scss'

import Banner from './banner/Banner';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import Trending from './trending/Trending';

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home