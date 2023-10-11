import "./styles.css";
import React from "react";
import { Link } from "react-scroll";
import SiteNav from "../nav/SiteNav";
import Signature from "./Signature";

export default function Hero() {
  return (
    <section>
      <div className="hero-container">
        <SiteNav />
        <div className="hero-content hero-left">
          <h2 className="hello-title fade-in">HELLO WORLD! MY NAME IS</h2>
          <div className="signature-container">
            <Signature />
          </div>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="hero-button fade-in"
          >
            See my work
          </Link>
        </div>
      </div>
    </section>
  );
}
