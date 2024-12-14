import React from 'react';
import './styles.css'; // Import the CSS file

function GlobalHinduHelpline() {
  return (
    <div>
      <div className="header">
        <div style={{ display: 'flex' }}>
          <div className="logo">
            <img
              src="C:/Users/Admin/HTML_practice/ghhf logo.png"
              alt="GHHF logo"
              width="200px"
              height="200px"
            />
          </div>
          <div>
            <h1>Global Hindu Help Line</h1>
            <div className="subtitle">Towards Restoring of Hindu Heritage</div>
          </div>
        </div>
        <div className="nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Help Line</a>
          <a href="#">Announcement</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
          <h2>|</h2>
          <a href="#">
            <h5>
              <b>
                <font color="maroon">Login</font>
              </b>
            </h5>
          </a>
        </div>
      </div>

      <div className="quote-section">
        <div className="quote-text">
          <h2>
            <span>Strength is life,</span> weakness is death.{' '}
            <span>
              Strength is happiness, permanence and the immortal life.
            </span>{' '}
            Weakness is relentless struggle, sorrow, and death
          </h2>
          <h6 style={{ float: 'right' }}>— Swami Vivekananda</h6>
        </div>
        <img
          src="C:/Users/Admin/HTML_practice/temple.jpg"
          alt="Temple"
          className="temple-image"
        />
      </div>

      <div className="image-ashead">
        <img
          src="swamy.png"
          alt="Swami Vivekananda"
          width="300"
          height="50"
        />
      </div>

      <div className="swami-section">
        <div className="swami-text">
          <p>
            <span>
              <strong>Swamiji</strong>
            </span>{' '}
            thought that a nation must be strong. Being strong does not mean
            using physical strength to commit acts of oppression. It means
            having confidence in oneself, self-discipline and compassion for
            fellow Hindus. Swamiji emphasizes that every individual should
            possess not only physical strength but also intellectual strength
            and spiritual strength.
          </p>
          <p>
            An initiative to implement Swamiji's teachings is the "Global Hindu
            Help Line." Through this, we strive to build a strong Hindu society
            equipped with physical, intellectual and spiritual strength along
            with economic strength. This is essential because the only remedy
            to the numerous ailments facing the Hindu community today is the
            establishment of a robust Hindu society.
          </p>
        </div>
        <img
          src="swamyimage.png"
          alt="Swami Vivekananda"
          className="swami-image"
        />
      </div>

      <div className="modules-section">
        <img
          src="hinduhelpline.png"
          alt="Hindu Help Line Image"
          width="300px"
          height="50px"
        />
        <div className="modules-grid">
          <div className="module-card">Varthakam / Viniyogam</div>
          <div className="module-card">Udyoga / Upadhi Kalpana</div>
          <div className="module-card">Hanuman Vyayamashala</div>
          <div className="module-card">Grandhalayam</div>
          <div className="module-card">Bala Samskara Kendram</div>
          <div className="module-card">Kshetra Sthaayi Karyakramaalu</div>
        </div>
      </div>

      <footer>
        <div className="footer-content">
          <img src="footer-logo.png" alt="Global Hindu Help Line Logo" />

          <div className="newsletter">
            <input type="email" placeholder="Enter your email for newsletter" />
            <button>Subscribe</button>
          </div>

          <nav>
            <a href="#">Home|</a>
            <a href="#">About</a>
            <a href="#">Temples</a>
            <a href="#">Service</a>
            <a href="#">Help Line</a>
            <a href="#">Contact</a>
          </nav>

          <div className="contact-info">
            <div>📧 contact@globalhinduhelpline.com</div>
          </div>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61554365792004"
              target="_blank"
            >
              <i className="fa fa-facebook" />
            </a>
            <a href="https://www.instagram.com/ghhl_bharat/" target="_blank">
              <i className="fa fa-instagram" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <i className="fa fa-youtube" />
            </a>
          </div>
        </div>

        <p className="footer-note">
          &copy; Global Hindu Help Line. All rights reserved 2025
        </p>
      </footer>
    </div>
  );
}

export default GlobalHinduHelpline;
