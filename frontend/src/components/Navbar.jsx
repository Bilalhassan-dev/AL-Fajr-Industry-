export default function Navbar({ onGetInTouch }) {
  return (
    <header className="navbar">
      <div className="logo">
        <span className="logo-mark">
          AL FAJR <span className="accent">INDUSTRY</span>
        </span>
        <span className="logo-sub">MATERIALS</span>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact us</a>
          </li>
        </ul>
      </nav>

      <div className="nav-email">
        <span>✉</span>
        <a href="mailto:alfajrindustries@gmail.com">alfajrindustries@gmail.com</a>
      </div>

      <button className="get-in-touch-tab" onClick={onGetInTouch}>
        Get in touch
      </button>
    </header>
  );
}
