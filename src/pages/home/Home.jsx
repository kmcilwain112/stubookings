import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/navbar/header/Header'
import Featured from '../../components/featured/Featured'
import EngineerList from '../../components/engineerList/EngineerList'
import FeaturedTracks from '../../components/featuredTracks/FeaturedTracks'
import MailList from '../../components/mailList/MailList'

const Home = () => {
  return (
    <div className='bg-img'>
      <Navbar/>
      <Header/>
      <div className='homeContainer'>
        <Featured/>
        <h1 className="homeTitle">Browse by engineer</h1>
        <EngineerList/>
        <h1 className="homeTitle">Popular Tracks</h1>
        <FeaturedTracks/>
        <MailList/>
      </div>
    </div>
  )
}

export default Home
