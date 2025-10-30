import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {
  Hero,
  ContactSection,
  FeaturesSection,
  RevolutionSection,
  CustomersSection,
  Marque,
  PowerOfData,
} from "../components/home";

const Index = () => {
  return (
    <div>
      <Header />

      {/* Wrap main sections with data-reveal so they animate on scroll */}
      <section data-reveal className="reveal">
        <Hero />
      </section>

      <section data-reveal className="reveal">
        <PowerOfData />
      </section>

      <section data-reveal className="reveal">
        <FeaturesSection />
      </section>

      <section data-reveal className="reveal">
        <Marque />
      </section>

      <section data-reveal className="reveal">
        <CustomersSection />
      </section>

      <section data-reveal className="reveal">
        <RevolutionSection />
      </section>

      <section data-reveal className="reveal">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
