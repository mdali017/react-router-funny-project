import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    // console.log(post)
    const {title, body, userId, id} = post;

    
    return (
        <div>
            <div className='border p-5 m-5'>
                <h2 className='text-bold text-xl capitalize mb-5'>{title}</h2>
                 <p>{body}</p>
                 <h6 className='text-left text-semibold text-blue-500'>userId: {userId}</h6>
                 <button className='border p-2 mt-4'><Link to={`/post/${id}`}>Show Details</Link></button>
            </div>
        </div>
    );
};

export default Post;