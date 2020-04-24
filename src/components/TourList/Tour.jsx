import React, { Component } from "react";
import "./tour.scss";
class componentName extends Component {
  render() {
    const { id, name, city, img, info } = this.props.tour;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} />
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
        </div>
      </article>
    );
  }
}

export default componentName;
