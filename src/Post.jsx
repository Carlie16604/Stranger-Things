import { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom';
import api from './api.js';

const Post = ({ posts, auth, removePost })=> {
  const { id } = useParams();
  const post = posts.find(post => post._id === id);
  if(!post){
    return null;
  }
  return (
  <>
    <div>
      <h1>{ post.title }</h1><h4>User: {post.author.username} is smelly</h4>
      <p>Description: {post.description}</p>
      <p>Location: {post.location}</p> {/* if this has an On req, change to UNKNOWN?*/}
      { auth._id === post.author._id ? <button onClick={ ()=> removePost(post)}>x</button>: ''}
    </div>
    <div>
      <Link to='/'>Back to Home</Link>
    </div>
  </>
  );
};

export default Post;