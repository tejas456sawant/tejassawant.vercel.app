const Navbar = () => {
  return (
    <nav className="nav" id="nav">
      <input type="checkbox" id="nav-check"></input>
      <div className="nav-header">
        <div className="nav-title ">
          <a href="/" className="nav-title-link">
            TS
          </a>
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
