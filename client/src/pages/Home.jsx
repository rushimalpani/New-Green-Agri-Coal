import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Specifications from '../components/Specifications';
import WhyBetter from '../components/WhyBetter';
import WhyChoose from '../components/WhyChoose';
import Advantages from '../components/Advantages';
import CustomersSection from '../components/CustomersSection';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import WorkspaceGallery from '../components/WorkspaceGallery';
import ManufacturingUnit from '../components/ManufacturingUnit';
import Insights from '../components/Insights';
import Footer from '../components/Footer';

const Home = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Map pathnames to section IDs
    const pathToId = {
      '/products': 'products',
      '/insights': 'insights',
      '/about':    'about',
      '/gallery':  'gallery',
      '/contact':  'contact-form',
    };

    const targetId = hash ? hash.replace('#', '') : pathToId[pathname];

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Specifications />
      <WhyBetter />
      <WhyChoose />
      <Advantages />
      <CustomersSection />
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
