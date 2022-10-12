import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Article from '../Article/Article';

const Blogs = () => {
    const blogs = useLoaderData();
    // console.log(blogs);
    return (
        <div style={{ width: '80%', margin: 'auto' }}>
            <h2 className='mt-5 mb-4'>Blogs</h2>
            <div className="text-start">

                {
                    blogs.map(blog => <Article key={blog.id} blog={blog}></Article>)
                }
            </div>
        </div>
    );
};

export default Blogs;