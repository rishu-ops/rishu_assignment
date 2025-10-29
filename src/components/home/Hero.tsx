import { useState, useEffect } from "react";
import "./Hero.css";
import avatarImg from "../../assets/images/avatar.png";
import slide1Img from "../../assets/images/slide-1.jpg";
import slide2Img from "../../assets/images/slide-2.jpg";
import slide3Img from "../../assets/images/slide-3.jpg";
import slide4Img from "../../assets/images/slide-4.jpg";
import slide5Img from "../../assets/images/slide-5.jpg";
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    {
      src: slide1Img,
      alt: "AI Technology",
    },
    {
      src: slide2Img,
      alt: "Team",
    },
    {
      src: slide3Img,
      alt: "Digital",
    },
    {
      src: slide4Img,
      alt: "Analytics",
    },
    {
      src: slide5Img,
      alt: "Technology",
    },
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [images.length]);

  const getPositionClass = (index: number) => {
    const len = images.length;
    const delta = (index - currentSlide + len) % len; // 0..len-1
    switch (delta) {
      case 0:
        return "main-card";
      case 1:
        return "side-card right-card";
      case 2:
        return "side-card right-card-2";
      case 3:
        return "side-card left-card-2";
      case 4:
        return "side-card left-card";
      default:
        return "side-card";
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <h1 className="heading">
          Your All-in-One <span className="highlight">Client Success Hub</span>
          <br />
          and Team Growth Platform Solution
        </h1>

        <p className="hero-subtitle">
          Simplify your operations, build stronger connections, and empower your
          teams — all from one smart platform.
        </p>

        <button className="cta-btn">Get Start For Free</button>

        <div className="trust-section">
          <div className="avatars">
            <img src={avatarImg} alt="User" className="avatar" />
          </div>
          <div className="trust-text">
            <div className="trust-label">Trusted by Users</div>
            <div className="rating">
              <span className="stars">★★★★★</span>
              <span className="rating-text">4.5/5 (25k reviews)</span>
            </div>
          </div>
        </div>

        <div className="hero-carousel">
          <div className="carousel-track">
            {images.map((img, index) => (
              <div
                key={index}
                className={`carousel-card ${getPositionClass(index)}`}
              >
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
          <div className="carousel-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
