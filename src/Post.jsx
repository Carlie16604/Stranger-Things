import { useParams, Link, Route, Routes } from 'react-router-dom';
import EditPost from './EditPost';

const Post = ({ posts, auth, removePost, editPost })=> {
  const { id } = useParams();
  const post = posts.find(post => post._id === id);
  if(!post){
    return null;
  }
  return (
  <>
  <br/>
    <div className='detailContact'>
      <h1>{ post.title }</h1>
      <p>User: {post.author.username} is smelly</p>
      <p>Description: {post.description}</p>
      <p>Location: {post.location}</p> 
      { auth._id === post.author._id ? <button onClick={ ()=> removePost(post)}>remove</button>: ''}
      { auth._id === post.author._id ? <EditPost editPost={ editPost } oldPost={post} />: ''}
    </div>
    <div>

    </div>
    <div>
      <Link to='/'>Back to Home</Link>
    </div>
  </>
  );
};

export default Post;