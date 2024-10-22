"use client";

// app/components/HomePage.tsx
import React, { useEffect } from 'react';
// import AOS from 'aos';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.css';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Initialize AOS (Animate on Scroll) library
    // const AOS = require('aos');
    AOS.init({ duration: 800 });

    // Navbar scroll effect
    const handleScroll = () => {
      const header = document.querySelector('.navbar');
      const headerHeight = header?.offsetHeight || 0;
      if (window.scrollY >= headerHeight) {
        header?.classList.add('scrolled', 'shadow-sm');
      } else {
        header?.classList.remove('scrolled', 'shadow-sm');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav id="navScroll" className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand pe-4 fs-4" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-layers-half" viewBox="0 0 16 16">
              <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
            </svg>
            <span className="ms-1 fw-bolder">Stride</span>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              {/* Add other links here */}
            </ul>
            <a href="https://templatedeck.com" className="link-dark pb-1 link-fancy me-2">Download this Template</a>
          </div>
        </div>
      </nav>

      <main>
        <section className="w-100 bg-gray-100" id="top">
          <div className="container position-relative">
            <div className="col-12 col-lg-8 mt-0 h-100 position-absolute bg-cover" data-aos="fade-left" style={{ backgroundImage: 'url(/img/webp/interior11.webp)' }}>
            </div>
            <div className="row">
              <div className="col-lg-7 py-vh-6 position-relative" data-aos="fade-right">
                <h1 className="display-1 fw-bold mt-5">Sell more useless stuff faster!</h1>
                <p className="lead">To be honest, this is just a stupid placeholder text...</p>
                <a href="#" className="btn btn-dark btn-xl shadow me-3 rounded-0 my-5">Get started free</a>
              </div>
            </div>
          </div>
        </section>
        {/* Add other sections here */}
      </main>
    </div>
  );
};

export default HomePage;
