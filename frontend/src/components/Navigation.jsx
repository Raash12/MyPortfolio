import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Portfolio</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;