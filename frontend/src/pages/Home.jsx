const Home = () => {
    return (
      <div className="hero">
        <div className="hero-content">
          <img
            src="/public/profile.jpeg"  // Ensure this path is correct
            alt="Raash"
            className="hero-image"
          />
          <h1 className="hero-title">Hello, I'm Raash</h1>
          <p className="hero-subtitle">Full Stack Developer</p>
          <a href="/contact" className="button">Get in Touch</a>
        </div>
      </div>
    );
  };
  
  export default Home;