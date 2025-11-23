"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import MenuSection from "@/components/MenuSection";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/glightbox/3.2.0/js/glightbox.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/purecounterjs@1.5.0/dist/purecounter_vanilla.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      {/* Hero Section */}
      <section id="hero" className="hero section light-background">
        <div className="container">
          <div className="row gy-4 justify-content-center justify-content-lg-between">
            <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                Enjoy Your Healthy
                <br />
                Delicious Food
              </h1>

              <p data-aos="fade-up" data-aos-delay="100">
                We are team of talented designers making websites with Bootstrap
              </p>

              <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                <a href="#book-a-table" className="btn-get-started">
                  Book a Table
                </a>
                <a
                  href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                  className="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i className="bi bi-play-circle"></i>
                  <span>Watch Video</span>
                </a>
              </div>
            </div>

            <div
              className="col-lg-5 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
            >
              <Image
                src="/assets/img/hero-img.png"
                width={500}
                height={500}
                alt="Hero Image"
                className="img-fluid animated"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about section">
        <div className="container section-title">
          <h2>About Us</h2>
          <p>
            <span>Learn More</span>{" "}
            <span className="description-title">About Us</span>
          </p>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-7" data-aos-delay="100">
              <Image
                src="/assets/img/about.jpg"
                className="img-fluid mb-4"
                width={700}
                height={500}
                alt="About"
              />

              <div className="book-a-table">
                <h3>Book a Table</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>

            <div className="col-lg-5" data-aos-delay="250">
              <div className="content ps-0 ps-lg-5">
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <ul>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>
                      {" "}
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>
                      {" "}
                      Duis aute irure dolor in reprehenderit in voluptate velit.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit.
                    </span>
                  </li>
                </ul>

                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit velit esse cillum dolore.
                </p>

                <div className="position-relative mt-4">
                  <Image
                    src="/assets/img/about-2.jpg"
                    className="img-fluid"
                    width={600}
                    height={400}
                    alt="About 2"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                    className="glightbox pulsating-play-btn"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="why-us section light-background">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="why-box">
                <h3>Why Choose Yummy</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="text-center">
                  <a href="#" className="more-btn">
                    <span>Learn More</span>
                    <i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">
                {/* ICON BOXES */}
                {[
                  {
                    icon: "clipboard-data",
                    title: "Corporis voluptates officia eiusmod",
                  },
                  { icon: "gem", title: "Ullamco laboris ladore lore pan" },
                  {
                    icon: "inboxes",
                    title: "Labore consequatur incidid dolore",
                  },
                ].map((item, i) => (
                  <div
                    className="col-xl-4"
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={300 + i * 100}
                  >
                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                      <i className={`bi bi-${item.icon}`}></i>
                      <h4>{item.title}</h4>
                      <p>
                        Consequuntur sunt aut quasi enim aliquam harum pariatur.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="stats section dark-background">
        <Image
          src="/assets/img/stats-bg.jpg"
          width={1920}
          height={1080}
          alt="Stats BG"
          data-aos="fade-in"
        />

        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row gy-4">
            {[
              { end: 232, label: "Clients" },
              { end: 521, label: "Projects" },
              { end: 1453, label: "Hours Of Support" },
              { end: 32, label: "Workers" },
            ].map((s, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="stats-item text-center w-100 h-100">
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end={s.end}
                    data-purecounter-duration="1"
                  ></span>
                  <p>{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TODO: Menu section, Testimonials, ... */}
      <MenuSection />
    </>
  );
}
