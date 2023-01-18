import React from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import requests from './requests'
function HomeScreen() {
  return (
    <div className='homescreen'>
        <Nav />
        <Banner />
        <Row  title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
        <Row  title='Top Rated' fetchUrl={requests.fetchTopRated} />
        <Row  title='Action Movies' fetchUrl={requests.fetchActionMovies} />
        <Row  title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
        <Row  title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
        <Row  title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
        <Row  title='Documentries' fetchUrl={requests.fetchDocumentaries} />

        
        
        </div>
  )
}

export default HomeScreen