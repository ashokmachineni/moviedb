import React from "react";
import "./tourList.scss";
import Tour from "./Tour";
import { tourData } from "../../tourData";

class Itndex extends React.Component {
  state = {
    tours: tourData
  };
  render() {
    const { tours } = this.state;
    return (
      <section className="tourList">
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour}></Tour>
        ))}
      </section>
    );
  }
}
export default Itndex;
