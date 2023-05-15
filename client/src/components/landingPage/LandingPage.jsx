import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./LandingPage.css";

function PictagoLandingPage() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "/assets/images/img_1.png",
    "/assets/images/img_2.png",
    "/assets/images/img_3.png",
    "/assets/images/img_4.png"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div>

      <header>
        <h1>Pictago</h1>
        <p>The ultimate photo-sharing platform</p>
      </header>

      <section className="hero">
  <div className="hero-image">
    <img src={images[imageIndex]} alt="Pictago app" />
  </div>
  <div className="hero-content">
    <h2>Share your photos with the world</h2>
    <p>
      Pictago is the best platform to share your photos with friends,
      family and the world. Upload your photos and showcase your talent to
      the world.
    </p>
    <Link to="/posts"><button>Join Pictago</button></Link>
  </div>
</section>

      <section className="features">
        <h2>Why Pictago?</h2>
        <ul>
          <li>Easy to use interface</li>
          <li>Unlimited photo storage</li>
        </ul>
      </section>

      <section className="call-to-action">
        <h2>Join Pictago today</h2>
        <Link to="/login"><button >Sign up now</button></Link>
        
      </section>

      <footer>
        <p>&copy; 2023 Pictago. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default PictagoLandingPage;
