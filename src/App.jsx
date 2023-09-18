import { useState, useEffect } from 'react'
import api from './api';
import AuthForm from './AuthForm';
import CreatePost from './CreatePost';
import Posts from './Posts';
import Post from './Post';
import AboutUs from './AboutUs';
import Contact from './contact';
import './App.css'
import { useNavigate, useParams, Link, Routes, Route } from 'react-router-dom';
import BigNum from './BigNum';

function App() {
  const [auth, setAuth] = useState({});
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(()=> {
    const fetchPosts = async()=> {
      const posts = await api.fetchPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  useEffect(()=> {
    const attemptLogin = async()=> {
      try {
        const _auth = await api.loginWithToken();
        setAuth(_auth);
      }
      catch(ex){
        console.log(ex);
      }
    };
    attemptLogin();
  }, []);

  const register = async(credentials)=> {
    const _auth = await api.register(credentials);
    setAuth(_auth);
  };

  const login = async(credentials)=> {
    const _auth = await api.login(credentials);
    setAuth(_auth);
  };

  const logout = ()=> {
    api.logout();
    setAuth({});
  };

  const createPost = async(post)=> {
    post = await api.createPost(post);
    setPosts([...posts, post]);
    navigate(`/posts/${post._id}`);
  };

  const RemovePost = async(post)=> {
    await api.removePost(post)
    setPosts(posts.filter(item => item._id !== post._id));
    navigate(`/`);
  };

  const EditPost = async(post, oldPost)=> {
    let editPost = await api.editPost(post, oldPost)
    setPosts(posts.map(post => post._id !== editPost._id ? post : editPost));
    navigate(`/`);
  };

  const getNumUserPost = () => {
    const userArr = posts.filter(item => item.author._id === auth._id);
    return (
      userArr.length
    );
  };

  return (
    <>
    <div className='media'>
      <h1><Link to='/'>Strangers Things ({ posts.length })</Link></h1>
      {
        auth.username ? (
          <div>
            <h1>
              Welcome { auth.username } ({ getNumUserPost() })
              <button onClick={ logout }>Logout</button>
            </h1>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/posts/create'>Create A Post</Link>
              <Link to='/about_us'>About Us</Link>
              <Link to='/contact'>Contact Us!</Link>
              <Link to='/bigNum'>Most Expensive Post</Link>
            </nav>
              <Routes>
                <Route path='/posts/create' element={<><CreatePost createPost={ createPost } /> <Posts posts={ posts } auth={ auth }/></>} />
              </Routes>
          </div>
        ): (
          <>
            <AuthForm submit={ register } txt='Register'/>
            <AuthForm submit={ login } txt='Login'/>
            <Link to='/about_us'>About Us</Link>
          </>
        )
      }
      <Routes>
        <Route path='/' element={<Posts posts={ posts } auth={ auth }/>}></Route>
        <Route path='/posts/:id' element={ <Post posts={ posts } auth={ auth } removePost={ RemovePost } editPost={ EditPost }/>} />
        <Route path='/about_us' element={ <AboutUs />} />
        <Route path='/contact' element={ <Contact />}/>
        <Route path='/bigNum' element={<BigNum posts={posts}/>} />
      </Routes>
      <div>
      </div>
    </div>
    </>
  )
}

export default App
