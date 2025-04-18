import AboutUs from "../components/AboutUs";
import FAQs from "../components/FAQs";
import FeaturedCourses from "../components/Featured-Courses";
import GetStarted from "../components/GetStarted";
import HeroSection from "../components/Hero";
import OurTeachers from "../components/Our-Teachers";
import Partners from "../components/Partners";
import Pricing from "../components/Pricing-Plan";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/Why-ChooseUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Partners />
      <AboutUs />
      <FeaturedCourses />
      <WhyChooseUs />
      <GetStarted />
      <OurTeachers />
      <Pricing />
      <Testimonials />
      <FAQs />
    </>
  );
};

export default Home;
