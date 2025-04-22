import {
  AboutUs,
  FAQs,
  FeaturedCourses,
  GetStarted,
  HeroSection,
  OurTeachers,
  Partners,
  Pricing,
  Testimonials,
  WhyChooseUs,
} from "../components/home";

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
