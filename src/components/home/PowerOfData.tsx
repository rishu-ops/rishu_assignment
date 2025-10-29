import "./PowerOfData.css";
import imageWrapperSvg from "../../assets/images/Image-wrapper.svg";

const PowerOfData = () => {
  return (
    <section className="power-section" id="powerOfData">
      <div className="container">
        <div className="power-grid">
          <div className="power-content">
            <h2 className="power-title">
              <span className="highlight">Unleash</span> the Power of Data
            </h2>
            <p className="power-text">
              Most platforms focus only on customers or employees—but why bring
              both worlds together. Our solution is designed for growing
              businesses that want effortless client management to nurture
              leads, track interactions, and close deals faster, smarter team
              collaboration to onboard talent, monitor performance, and keep
              employees engaged and one unified system that eliminates the need
              to juggle multiple tools or deal with hidden add-on.
            </p>
            <button className="cta-btn">WHY JOIN </button>
          </div>

          <div className="power-images">
            <img src={imageWrapperSvg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerOfData;
