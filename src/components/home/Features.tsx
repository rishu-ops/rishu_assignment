import "./Features.css";
import PuzzleIcon from "../../assets/images/Puzzle.svg";
import MoneyBagIcon from "../../assets/images/Money-Bag.svg";
import ComboChartIcon from "../../assets/images/Combo-Chart.svg";
import GoalIcon from "../../assets/images/Goal.svg";

const Features = () => {
  const features = [
    {
      icon: PuzzleIcon,
      title: "Simplicity at its core",
      description: "Designed for humans to use, no manual training required.",
    },
    {
      icon: MoneyBagIcon,
      title: "Transparent Pricing",
      description: "One platform, one cost. No surprises.",
    },
    {
      icon: ComboChartIcon,
      title: "Growth - ready",
      description: "Scalable features that evolve with your business",
    },
    {
      icon: GoalIcon,
      title: "Engagement Tools",
      description:
        "Gamification, leaderboards, feedback, and boost motivation.",
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="container">
        <h2 className="features-title">What Makes Us Different</h2>
        <p className="features-subtitle">
          Unlike traditional enterprise systems that are complex and costly, or
          modular apps that feel disconnected, we provide:
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <button className="trial-btn">Start Your Free Trial</button>
        <p className="trial-note">No credit card required. Cancel anytime.</p>
      </div>
    </section>
  );
};

export default Features;
