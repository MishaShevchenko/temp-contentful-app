import heroImg from './assets/hero.svg';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            This page showcases a broad range of projects, illustrating various
            levels of complexity and development challenges. Throughout these
            projects, I have refined my ability to create responsive and
            functional web applications using modern technologies. From simpler
            task management tools to more advanced platforms featuring dynamic
            content handled through headless CMS systems, these projects reflect
            my versatility in working with both static and dynamic data. Take a
            closer look at the projects below to explore the unique features and
            techniques used in each one.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
