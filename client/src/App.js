
import "./App.css";
import AllPost from "./components/allPost/AllPost";
import PostDetails from "./components/PostDetails/PostDetails";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import AddPost from "./components/addPost/AddPost";
import UpdatePost from "./components/update/updatePost";
import { useEffect,useState } from "react";
import axios from "axios";
function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("")

  useEffect(() => {
    axios.get("http://localhost:5000/pins?title="+title).then((res) => {
      setPosts(res.data);
    });
  }, [title]);

  return (
    <BrowserRouter>
      <Navbar  title={title} setTitle={setTitle}/> 
      <Routes>
        <Route path="/add" element={<AddPost />}/>
        <Route path="/" element={<AllPost posts={posts} />}/>
        <Route path="/post/:ID_post" element={<PostDetails />} />
        <Route path="/update/:ID_post" element={<UpdatePost/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

