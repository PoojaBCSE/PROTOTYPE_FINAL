import React from 'react';
import { Link } from 'react-router-dom';
import { GrLanguage } from "react-icons/gr";

function Nav({search,setSearch}){
    return (
        <div className='Nav'>
            
            <div className="box2">
                <div className='b1 r' style={{marginRight:"5px"}}>Relief Media</div>
                <div className='b1'><Link to="/">Community chat</Link></div>
                <div className='b1'><Link to="/post">Create Post</Link></div>
                <div className='b1'><Link to="/about">Profile</Link></div>
                <div className='b1'><Link to="/documentaries">Documentaries</Link></div>
                <div className='b1'><Link to="/events">Events</Link></div>
                <div className='b1'><Link to="/challenges">Challenges</Link></div>      
                <div className='b1'><Link to="/hopeline">Hopeline</Link></div>
            </div>
            <div className='box3'>
                <h1 style={{color:"blue"}}><GrLanguage/></h1>
                <button>Logout</button>
            </div>
        </div>
    );
}
export default Nav;