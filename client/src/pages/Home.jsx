import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Specifications from '../components/Specifications';
import WhyBetter from '../components/WhyBetter';
import WhyChoose from '../components/WhyChoose';
import Advantages from '../components/Advantages';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import WorkspaceGallery from '../components/WorkspaceGallery';
import ManufacturingUnit from '../components/ManufacturingUnit';
import Insights from '../components/Insights';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Specifications />
      <WhyBetter />
      <WhyChoose />
      <Advantages />
      <Testimonials />
      <Gallery />
      <WorkspaceGallery />
      <ManufacturingUnit />
      <Insights />
      <Footer />
    </>
  );
};

export default Home;
