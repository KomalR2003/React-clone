import React from 'react';
import { NavLink,  Outlet, useMatch } from 'react-router-dom';


const Learn = () => {
    const match = useMatch('/learn');
    return (
        <>
            <div className="container">
                <div className="sidebar">
                    <li> <NavLink exact to='/learn/quick'>Quick Start</NavLink></li>
                    <li> <NavLink exate to='/learn/tutorial'>Tutorial</NavLink></li>
                    <li> <NavLink exate to='/learn/install'>Installation</NavLink></li>

                    
                </div>
                <div className='content'>
                    <Outlet />
                    </div>

            </div>
        </>
    )
}

export default Learn