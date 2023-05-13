import "./App.css";
import PictagoLandingPage from "./components/landingPage/LandingPage";
import AllPost from "./components/allPost/AllPost";
import PostDetails from "./components/PostDetails/PostDetails";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import AddPost from "./components/addPost/AddPost";
import UpdatePost from "./components/update/updatePost";
import Anime from "./components/categories/Anime";
import Cooking from "./components/categories/Cooking";
import Games from "./components/categories/Games";
import Fashion from "./components/categories/Fashion";
import Travel from "./components/categories/Travel";
import Categories from "./components/categories/categories"



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PictagoLandingPage />} />
          <Route path="/add" element={<AddPost />}/>
          <Route path="/posts" element={<AllPost />}/>
          <Route  path="/pins/:ID_post" element={<PostDetails />} />
          <Route path="/update/:ID_post" element={<UpdatePost/>} />
          <Route path="anime" element={<Anime/>} />
          <Route path="cooking" element={<Cooking/>} />
          <Route path="games" element={<Games/>} />
          <Route path="fashion" element={<Fashion />} />
          <Route path="travel" element={<Travel/>} />
          <Route path="categories" element={<Categories/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
