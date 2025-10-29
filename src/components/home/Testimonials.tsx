import { useState, useEffect } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const [pageIndex, setPageIndex] = useState(0); // 0 or 1

  const testimonials = [
    {
      name: "Rishabh",
      role: "Product Manager",
      image: "https://i.pravatar.cc/100?img=12",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dolor sit",
      rating: 4,
    },
    {
      name: "Harry",
      role: "Team Lead",
      image: "https://i.pravatar.cc/100?img=13",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dolor sit",
      rating: 5,
    },
    {
      name: "Parth",
      role: "Event Manager",
      image: "https://i.pravatar.cc/100?img=14",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dolor sit",
      rating: 4,
    },
    {
      name: "Rishabh",
      role: "Product Manager",
      image: "https://i.pravatar.cc/100?img=12",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dolor sit",
      rating: 4,
    },
    {
      name: "Harry",
      role: "Team Lead",
      image: "https://i.pravatar.cc/100?img=13",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dolor sit",
      rating: 5,
    },
    {
      name: "Parth",
      role: "Event Manager",
      image: "https://i.pravatar.cc/100?img=14",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip dolor sit",
      rating: 4,
    },
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setPageIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="testimonials-section" id="customers">
      <div className="container">
        <div className="testimonials-header">TESTIMONIAL</div>
        <h2 className="testimonials-title">Client Success Stories</h2>

        <div className="testimonials-carousel">
          <div
            className="testimonials-track"
            style={{ transform: `translateX(-${pageIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-card">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < testimonial.rating ? "star filled" : "star"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-dots">
          {([0, 1] as const).map((page) => (
            <button
              key={page}
              className={`dot ${pageIndex === page ? "active" : ""}`}
              onClick={() => setPageIndex(page)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
