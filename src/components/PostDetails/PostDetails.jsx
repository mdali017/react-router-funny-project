import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData();
    console.log(postDetails);
    const {title, body} = postDetails;
    const navigate = useNavigate();

    const handleGoBack = () =>{
           navigate(-1)
    }

    return (
        <div className='bg-blue-300 p-5 m-5'>
             <h1 className='text-2xl capitalize mb-5'>{title}</h1>
             <p>{body}</p>
             <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;