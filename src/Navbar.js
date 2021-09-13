import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import Home from './components/Home'
import Search from './components/Search'

const Navbar = () => {
    return (
        <div>
            <Router>
                <nav className="navbar navbar-bg-dark text-light ">
                    <div>
                        <h1 className="navbar-brand">OMDB</h1>
                    </div>
                    <div className="text-light">
                        <ul className="navbar nav mx-auto">
                            <li className="nav-item"> <Link to="/" className="nav-link text-light">Home</Link> </li>
                            <li className="nav-item"> <Link to="/search" className="nav-link text-light">Search</Link> </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/"> <Home /> </Route>
                    <Route exact path="/search"> <Search /> </Route>
                </Switch>
            </Router>
    
        </div>
    )
}

export default Navbar

