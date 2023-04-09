import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData();
    console.log(postDetails);
    const {title, body} = postDetails;
    return (
        <div className='bg-blue-300 p-5 m-5'>
             <h1 className='text-2xl capitalize mb-5'>{title}</h1>
             <p>{body}</p>
        </div>
    );
};

export default PostDetails;