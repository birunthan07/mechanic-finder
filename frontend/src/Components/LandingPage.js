import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>FixiGo</h1>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="contact">Contact</a></li>
              <li><a href="login" className="btn">Login</a></li>
              <li><a href="signup" className="btn">Sign Up</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h2>Find Expert Mechanics Near You</h2>
          <p>Book trusted mechanics to come to your location for repairs and service.</p>
          <a href="#search" className="btn primary-btn">Find a Mechanic</a>
          <a href="#features" className="btn secondary-btn">Learn More</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Our Key Features</h2>
          <div className="feature">
            <div className="feature-icon">🔍</div>
            <h3>Find Nearby Mechanics</h3>
            <p>Search for mechanics based on location and specialty.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📅</div>
            <h3>Easy Booking</h3>
            <p>Schedule appointments quickly and conveniently.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">⭐</div>
            <h3>Trusted Professionals</h3>
            <p>Read reviews and choose the best mechanics.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>What Our Users Say</h2>
          <div className="testimonial">
            <p>"FixiGo made finding a mechanic so easy. The service was top-notch!"</p>
            <cite>— sarmaa</cite>
          </div>
          <div className="testimonial">
            <p>"I love how convenient it is to book a mechanic right from my phone."</p>
            <cite>— Jathusan</cite>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <a href="#about">About Us</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
            <a href="#"><img src="twitter-icon.png" alt="Twitter" /></a>
            <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
            <a href="#"><img src="linkedin-icon.png" alt="LinkedIn" /></a>
          </div>
          <div className="newsletter-signup">
            <input type="email" placeholder="Subscribe to our newsletter" />
            <button>Subscribe</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
