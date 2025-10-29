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
      <Hero />
      <PowerOfData />
      <FeaturesSection />
      <Marque />
      <CustomersSection />
      <RevolutionSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
