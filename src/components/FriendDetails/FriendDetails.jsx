import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetails = () => {
     const friendDetails = useLoaderData();
     console.log(friendDetails)
     const {name, username, email, phone, website} = friendDetails;

     const navigate = useNavigate();
     const handleGoB = () =>{
        navigate(-1)
     }
    return (
        <div>
            <h2>This is FriendDetails Page</h2>
            <div className='border p-5 m-5 bg-gray-500 text-white'>
                 <h2>{name}</h2>
                 <h6>Username: {username}</h6>
                 <p>Email: {email}</p>
                 <p>Phone: {phone}</p>
                 <p>Website: {website}</p>
                 <button onClick={handleGoB} className='border px-3 mt-3 hover:bg-teal-700'>Go Back</button>
            </div>
        </div>
    );
};

export default FriendDetails;