import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container section-border">
        <div className="contact-grid">
          <div className="contact-form-wrapper">
            <h2 className="sub-heading">Want to get a call from us?</h2>

            <form className="contact-form">
              <input
                type="text"
                placeholder="Full Name"
                className="form-input"
              />
              <div className="form-row">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-input"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="form-input"
                />
              </div>
              <textarea
                placeholder="Applying for"
                className="form-textarea"
                rows={4}
              ></textarea>

              <div className="form-checkbox">
                <input type="checkbox" id="privacy" />
                <label htmlFor="privacy">
                  I have read and accept the Privacy policy
                </label>
              </div>

              <button type="submit" className="form-submit">
                Submit
              </button>
            </form>
          </div>

          <div className="business-card">
            <h3 className="business-card-title">
              Designed for Modern Businesses
            </h3>
            <p className="business-card-text">
              Whether you're a growing startup or a scaling enterprise, our
              all-in-one platform adapts to your unique needs. It centralizes
              client success and team operations—streamlining communication,
              automating workflows, and boosting productivity. Designed for
              flexibility and built for growth, it’s the smart foundation for
              your next stage of success—all in one place.
            </p>
            <div className="business-card-footer">
              <div className="founder-info">
                <p className="founder-name">Your Name</p>
                <p className="founder-role">Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
