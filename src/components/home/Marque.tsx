import CompanyLogo from "../../assets/images/company.png";
import "./Marque.css";

const Marque = () => {
  const logos = Array(6).fill(CompanyLogo); // repeat logos

  return (
    <div className="companies-marquee">
      <div className="marquee-content">
        {logos.map((logo, i) => (
          <span className="company-logo" key={i}>
            <img src={logo} alt={`Company ${i + 1}`} />
          </span>
        ))}
        {/* Duplicate again for infinite loop */}
        {logos.map((logo, i) => (
          <span className="company-logo" key={`dup-${i}`}>
            <img src={logo} alt={`Company duplicate ${i + 1}`} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marque;
