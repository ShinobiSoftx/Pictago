
import "./App.css";
import AllPost from "./components/allPost/AllPost";
import PostDetails from "./components/PostDetails/PostDetails";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import AddPost from "./components/addPost/AddPost";

function App() {
  return (
     
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/addpost" element={<AddPost />}/>
        <Route path="/" element={<AllPost />}/>
        <Route path="/post/:ID_post" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

