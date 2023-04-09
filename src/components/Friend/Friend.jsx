import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend)
    const {id, name, username, email} = friend;

    const handleMoreDetailsButton = () =>{
        console.log('button clicked')
    }
    return (
        <div>
            <div className='border m-5 p-5'>
                <h5>Id: {id}</h5>
                <h3>{name}</h3>
                <h4><small>Username: {username}</small></h4>
                <p>Email: {email}</p>
                {/* <button onClick={handleMoreDetailsButton } className='border p-2 mt-3 hover:bg-amber-800 hover:text-white'>More Details</button> */}
                <button className='border p-2 mt-3 hover:bg-amber-800 hover:text-white'><Link to={`/friend/${id}`}>More Deails</Link></button>
            </div>

        </div>
    );
};

export default Friend;