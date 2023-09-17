
import { useParams, Link } from 'react-router-dom';

const Post = ({ posts, auth, removePost, editPost })=> {
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
      <p>Location: {post.location}</p> 
      { auth._id === post.author._id ? <button onClick={ ()=> removePost(post)}>x</button>: ''}
      { auth._id === post.author._id ? <button onClick={ ()=> editPost(post)}>Update Post</button>: ''}
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