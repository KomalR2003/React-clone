import React from 'react';
import { NavLink,  Outlet, useMatch } from 'react-router-dom';


const Learn = () => {
    const match = useMatch('/community');
    return (
        <>
            <div className="container">
                <div className="sidebar">
                    <li> <NavLink exact to='/community/commu'>Community</NavLink></li>
                    <li> <NavLink exate to='/community/conference '>React Conference</NavLink></li>
                    <li> <NavLink exate to='/community/meetup'>React Meetups</NavLink></li>

                    
                </div>
                <div className='content'>
                    <Outlet />
                    </div>

            </div>
        </>
    )
}

export default Learn