import { useParams, Link } from 'react-router-dom';

const Edit = async(ev)=> {
    ev.preventDefault();
    try {
      const post = {price, title, description, location };
      await createPost(post);
    }
    catch(ex){
      if(ex.response){
        setError(ex.response.data);
      }
      else {
        setError(ex.response);
      }
    }
  };


const editPost = ({ post, auth, edit })=> {
  const { id } = useParams();
//   const post = posts.find(postItem => postItem._id === id);
  if(!post){
    return null;
  }
  return (
  <>
    <div>
      <h1>{ post.title }</h1><h4>User: {post.author.username} is smelly</h4>
      <p>Description: {post.description}</p>
      <p>Location: {post.location}</p> 
      { auth._id === post.author._id ? <button onClick={ ()=> editPost(edit)}>edit</button>: ''}
    </div>
    <div>
      <Link to='/'>Cancel</Link>
    </div>
  </>
//   maybe i don't need this page and instead can do this in the js and post.jsx file?
  );
};

export default editPost;