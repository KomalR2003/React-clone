import React from 'react'
import logo from './logo.svg';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Learn from './component/Learn';
import Quick from './component/Quick';
import Tutorial from './component/Tutorial';
import Installation from './component/Installation';
import Community from './component/Community';
import Conf from './component/Conf';
import Meetup from './component/Meetup';
import Comm from './component/Comm';

const Menu = () => {
    return (
        <>
            <div className="header">
                <div className="app-logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className='form'>
                    <form>
                        <input type="search" placeholder="search" className="search" />
                    </form>
                </div>
                <div className='nav'>
                    <ul>
                        <li>
                            <NavLink to="/"><a></a>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/learn"><a>Learn</a></NavLink>
                        </li>
                        <li>
                            <NavLink to="/community"><a>Community</a></NavLink>
                        </li>

                    </ul>

                </div>
            </div>

            <div className='content'>
                <Routes>
                    <Route path='/' element={<Home />} />

                    <Route path='/learn' element={<Learn />}>
                        <Route index element={<Quick />} />
                        <Route path="quick" element={<Quick />} />
                        <Route path="tutorial" element={<Tutorial />} />
                        <Route path="install" element={<Installation />} />
                    </Route>
                    

                    <Route path='/community' element={<Community/>}>
                    <Route index element={<Comm />} />
                        <Route path="commu" element={<Comm />} />
                        <Route path="conference" element={<Conf />} />
                        <Route path="meetup" element={<Meetup />} />
                    </Route>

                </Routes>
            </div>
        </>
    )
}

export default Menu