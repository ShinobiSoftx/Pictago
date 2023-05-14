import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faPlus } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AllPost.css";



function AllPost({posts, handleSavePost}) {

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const shuffledPosts = shuffleArray(posts);



  const handleShare = (imageUrl) => {
    navigator.clipboard.writeText(imageUrl);
    toast.dark(`Image URL copied to clipboard: ${imageUrl}`, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
<div className="post-container">
  {shuffledPosts.map((post) => (
    <div className="post" key={post.ID_post}>
      <div className="post-image">
       <Link to={`/post/${post.ID_post}`}> <img
          src={post.image_url}
          alt={post.title}
        /> </Link>
        <div className="post-buttons">
          <button className="save-button" onClick={() => handleSavePost(post.ID_post)}>Save</button>
          <button className="share-button" onClick={() => handleShare(post.image_url)}>
                <FontAwesomeIcon icon={faLink} />
              </button>
        </div>
      </div>
    </div>
  ))}
</div>
<Link to="/add" className="add-button">
          <FontAwesomeIcon icon={faPlus} />
        </Link>
<ToastContainer />
</div>

  );
}

export default AllPost;
