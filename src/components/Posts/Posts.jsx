import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const allPost = useLoaderData();
    // console.log(allPost)
    return (
        <div>
            <h2>This is All Posts Here</h2>
            <div>
                {
                    allPost.map(post => <Post 
                        key={post.id}
                        post={post}
                        ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;