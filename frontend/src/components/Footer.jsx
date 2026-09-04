export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div>
          <h5>AL FAJR INDUSTRY</h5>
          <p style={{ fontSize: 13.5, lineHeight: 1.7, maxWidth: 280 }}>
            Engineered in plastic, built for industry — end-to-end plastic
            manufacturing and recycling under one roof.
          </p>
        </div>

        <div>
          <h5>Quick Links</h5>
          <ul>
            <li>
              <a href="#home">Home</a>
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
          </ul>
        </div>

        <div>
          <h5>Contact</h5>
          <ul>
            <li>
              <a href="mailto:alfajrindustries@gmail.com">alfajrindustries@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        © {new Date().getFullYear()} Al Fajr Industry. All rights reserved.
      </div>
    </footer>
  );
}
