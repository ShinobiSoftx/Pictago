import "./App.css";
import PictagoLandingPage from "./components/landingPage/LandingPage";
import AllPost from "./components/allPost/AllPost";
import PostDetails from "./components/PostDetails/PostDetails";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import AddPost from "./components/addPost/AddPost";
import UpdatePost from "./components/update/updatePost";
import { useEffect,useState } from "react";
import axios from "axios";
import Anime from "./components/categories/Anime";
import Cooking from "./components/categories/Cooking";
import Games from "./components/categories/Games";
import Fashion from "./components/categories/Fashion";
import Travel from "./components/categories/Travel";
import Saved from "./components/categories/saved";
import Categories from "./components/categories/categories";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Decoration from "./components/categories/Photography";
import Vehicles from "./components/categories/Vehicles";
import Fitness from "./components/categories/Fitness";
import Music from "./components/categories/Music";
import Login from "./components/login/login";
import Signup from "./components/login/Singup";



function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("")

  useEffect(() => {
    axios.get("http://localhost:5000/pins?title="+title).then((res) => {
      setPosts(res.data);
    });
  }, [title]);
  
  // i did this function to make the ability to save a post and am gonna pass it as props to AllPost compo .
  const handleSavePost = (postId) => {
    axios.put(`http://localhost:5000/updateSaved/${postId}`, { saved: 1 })
      .then(res => {
        const updatedPosts = posts.map(post => {
          if (post.ID_post === postId) {
            return { ...post, saved: 1 };
          }
          return post;
        });
        setPosts(updatedPosts);
        toast.dark('Post Saved!', {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            backgroundColor: '#1E1E1E',
            color: '#FFFFFF',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
          },
        });
      })
      
      .catch(err => {
        console.error(err);
      });
  };


  return (
    
 
    <div>
      <BrowserRouter>
        <Navbar  setTitle={setTitle} />
        <Routes>
          <Route path="/" element={<PictagoLandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/add" element={<AddPost />}/>
          <Route path="/posts" element={<AllPost  posts={posts} handleSavePost={handleSavePost}/>}/>
          <Route path="/post/:ID_post" element={<PostDetails />} />
          <Route path="/update/:ID_post" element={<UpdatePost/>} />
          <Route path="/anime" element={<Anime handleSavePost={handleSavePost}/>} />
          <Route path="/cooking" element={<Cooking handleSavePost={handleSavePost}/>} />
          <Route path="/games" element={<Games handleSavePost={handleSavePost}/>} />
          <Route path="/fashion" element={<Fashion handleSavePost={handleSavePost}/>} />
          <Route path="/travel" element={<Travel handleSavePost={handleSavePost}/>} />
          <Route path="/music" element={<Music handleSavePost={handleSavePost}/>} />
          <Route path="/fitness" element={<Fitness handleSavePost={handleSavePost}/>} />
          <Route path="/vehicles" element={<Vehicles handleSavePost={handleSavePost}/>} />
          <Route path="/decoration" element={<Decoration handleSavePost={handleSavePost}/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/saved" element={<Saved />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
