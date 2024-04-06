import React, { useEffect, useRef } from 'react';
import {Link, useParams} from 'react-router-dom';
import { blogPosts } from '../data.js';

const BlogEntry = () => {
    const { id } = useParams();
    const blogPost = blogPosts.find((blogPost) => String(blogPost.id) === id);
    const goBackBtn = useRef(null);

    useEffect(() => {
        if (goBackBtn.current) {
            goBackBtn.current.addEventListener('click', () => {
                window.history.back();
            });
        }
    }, []);

    return (
        <div className='hero-blog-container'>
            {blogPosts.map((blogPost) => (
                <Link key={blogPost.id} to={`/blog/${blogPost.id}`}>
                    {!id && <h3 id='blog-h3-title'>{blogPost.title}</h3>}
                </Link>
            ))}
            {blogPost ? (
                <div className='blog-container'>
                    <h2>{blogPost.title}</h2>
                    <p>{blogPost.content}</p>
                    <p>{blogPost.author}</p>
                    <p>{blogPost.date}</p>
                </div>
            ) : ''}
            <div id='btn-go-back'>
                <button ref={goBackBtn} className='btn-go-back'>Ir atrás</button>
            </div>
        </div>
    );
}

export default BlogEntry;