const About = () => {
  const skills = [
    { title: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS'] },
    { title: 'Backend', items: ['Node.js', 'Python', 'SQL'] },
    { title: 'Tools', items: ['Git', 'VS Code', 'Docker'] }
  ];

  return (
    <div className="about">
      <div className="container">
        <h2 className="hero-title">About Me</h2>
        <p className="hero-subtitle">
          Hi 👋 My name is Abdirashiid Bile Mohamed.
          <br />
          I'm a passionate full-stack developer. I thrive on creating captivating user experiences through innovative web design and development. With a keen eye for detail and a knack for problem-solving, I'm always eager to tackle new challenges and learn new technologies. I believe in continuous growth and improvement, and I'm dedicated to staying updated with the latest trends and best practices in full-stack development. Let's create something amazing together!
          <br />
          🌍 I'm based in Somalia: Mogadishu
        </p>
        <div className="about-grid">
          {skills.map((skill, index) => (
            <div key={index} className="about-item">
              <h3>{skill.title}</h3>
              <ul>
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;