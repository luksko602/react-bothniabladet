import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Images extends Component {
  render() {
    if (!this.props.data) return null;

    const gallery = this.props.data.images.map(function (images) {
      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <div style={{ textAlign: "center" }}>{images.photographer}</div>
            <Zmage src={images.imageURL} />
            <div style={{ textAlign: "center" }}>{images.date}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Here are some of our pictures</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {gallery}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Images;
