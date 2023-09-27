import "../sections/styles.css";
import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";

export default function Languages() {
  const [langs, setLangs] = useState([]);

  useEffect(() => {
    const API_URL = "https://api.abarrett.io";
    axios
      .get(`${process.env.REACT_APP_API_URL || API_URL}/languages`)
      .then((res) => {
        const langs = res.data;
        setLangs(langs);
      });
  }, []);

  return (
    <section id="languages" className="languages">
      <div className="section-container">
        <h1 className="section-title">Programming Languages</h1>
        <div className="grid-container">
          {langs.map((lang) => (
            <Item key={lang.name} language={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
