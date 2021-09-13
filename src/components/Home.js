import React from 'react'
import Action from './Action'
import Advengers from './Advengers'
import Fantacymovie from './Fantacymovie'

const Home = () => {
    return (
        <div className="home pt-5">
            <Fantacymovie />
            <Action />
            <Advengers />
        </div>
    )
}

export default Home
