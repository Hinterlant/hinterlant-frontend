import { useState } from "react";

export default function Hero() {
  const [initData, setInitData] = useState({
    sub_heading: "IGOPAD",
    heading: "Fast and Scalable IGO (Initial Game Offering) Launchpad",
    content: "Full-scale Blockchain Gaming Ecosystem for IGOs & NFT Pre-Sales",
  });
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-6 col-lg-9 text-center">
            {/* Hero Content */}
            <div className="hero-content">
              <div className="intro text-center mb-5">
                <span className="intro-text">{initData.sub_heading}</span>
                <h1 className="mt-4">{initData.heading}</h1>
                <p>{initData.content}</p>
              </div>
              {/* Buttons */}
              <div className="button-group">
                <a
                  className="btn btn-bordered active smooth-anchor"
                  href="#explore"
                >
                  <i className="icon-rocket mr-2" />
                  Explore IGOs
                </a>
                <a className="btn btn-bordered-white" href="/apply">
                  <i className="icon-note mr-2" />
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
