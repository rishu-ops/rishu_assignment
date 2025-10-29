import "./CTABanner.css";
import bannerImg from "../../assets/images/banner.png";

const CTABanner = () => {
  return (
    <section className="cta-banner-section" id="cta-banner">
      <div className="container">
        <img src={bannerImg} alt="" />
      </div>
    </section>
  );
};

export default CTABanner;
