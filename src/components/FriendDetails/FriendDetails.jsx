import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
     const friendDetails = useLoaderData();
     console.log(friendDetails)
     const {name, username, email, phone, website} = friendDetails;
    return (
        <div>
            <h2>This is FriendDetails Page</h2>
            <div className='border p-5 m-5 bg-gray-500 text-white'>
                 <h2>{name}</h2>
                 <h6>Username: {username}</h6>
                 <p>Email: {email}</p>
                 <p>Phone: {phone}</p>
                 <p>Website: {website}</p>
            </div>
        </div>
    );
};

export default FriendDetails;