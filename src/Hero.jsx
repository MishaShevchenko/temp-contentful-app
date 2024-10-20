import heroImg from './assets/hero.svg';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            This portfolio highlights a variety of projects, each representing a
            different level of complexity. These projects demonstrate my growth
            in web development, particularly in building responsive applications
            that utilize modern technologies. From basic web apps like task
            managers to more intricate platforms with dynamic content managed
            via headless CMS systems, these projects reflect my ability to work
            with both static and dynamic data, delivering high-quality,
            functional applications. Explore the projects below for a deeper
            look into the different features and approaches employed in each
            one.
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
