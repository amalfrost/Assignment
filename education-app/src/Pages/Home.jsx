import React from 'react'
import HomeElements from '../Components/HomeComponents/HomeElements'
import Discussions from './Discussions';
import './pages.css';
function Home() {
  return (
    <div className='home'>
      <HomeElements />
      <div className='home-items'>
      <Discussions/>
      </div>
    </div>
  )
}

export default Home
