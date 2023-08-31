import "../sections/styles.css";
import "./styles.css";
import React from "react";
import axios from "axios";
import Item from "./Item";

export default class Languages extends React.Component {
  state = {
    langs: [],
  };
  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/languages`).then((res) => {
      const langs = res.data;
      this.setState({ langs });
    });
  }

  render() {
    return (
      <section id="languages" className="languages">
        <div className="section-container">
          <h1 className="section-title">Programming Languages</h1>
          <div className="grid-container">
            {this.state.langs.map((lang) => (
              <Item key={lang.name} language={lang} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
