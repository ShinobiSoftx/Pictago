import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./LandingPage.css";

function PictagoLandingPage() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "/assets/images/img_1.jpg",
    "/assets/images/img_2.jpg",
    "/assets/images/img_3.jpg",
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
      {/* Header section */}
      <header>
        <h1>Pictago</h1>
        <p>The ultimate photo-sharing platform</p>
      </header>

      {/* Hero section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Share your photos with the world</h2>
          <p>
            Pictago is the best platform to share your photos with friends,
            family and the world. Upload your photos and showcase your talent to
            the world.
          </p>
          <Link to="/posts"><button>Join Pictago</button></Link>
        </div>
        <div className="hero-image">
          <img src={images[imageIndex]} alt="Pictago app" />
        </div>
      </section>

      {/* Features section */}
      <section className="features">
        <h2>Why Pictago?</h2>
        <ul>
          <li>Easy to use interface</li>
          <li>Unlimited photo storage</li>
        </ul>
      </section>

      {/* Call to action section */}
      <section className="call-to-action">
        <h2>Join Pictago today</h2>
        <button onClick={() => window.location.href = '/'}>Sign up now</button>
      </section>

      {/* Footer section */}
      <footer>
        <p>&copy; 2023 Pictago. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default PictagoLandingPage;
