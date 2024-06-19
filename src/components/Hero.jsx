import React from "react";
import heroImgDesktop from "../assets/images/image-hero-desktop.png";
import heroImgMobile from "../assets/images/image-hero-mobile.png";
import "./css/hero.css";

import dataBiz from "../assets/images/client-databiz.svg";
import audioPhile from "../assets/images/client-audiophile.svg";
import meet from "../assets/images/client-meet.svg";
import maker from "../assets/images/client-maker.svg";

function Hero() {
  const imgSource = [dataBiz, audioPhile, meet, maker];
  return (
    <section className="hero-container">
      <article className="hero-text-container">
        <h1 className="hero-heading">Make remote work</h1>
        <p className="hero-paragraph">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <a className="hero-link">Learn more</a>
        <div className="hero-logos-container">
          {imgSource.map((src) => (
            <img src={src} alt="client-logo" className="client-logo" />
          ))}
        </div>
      </article>
      <article className="hero-img-container">
        <picture className="hero-img-wrapper">
          <source srcset={heroImgDesktop} media="(min-width:950px)" />
          <img src={heroImgMobile} alt="hero image" className="hero-img" />
        </picture>
      </article>
    </section>
  );
}
export default Hero;
