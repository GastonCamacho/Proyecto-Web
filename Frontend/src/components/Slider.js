import React, { Component } from "react";
import { Link } from "react-router-dom";

class Slider extends Component {
  render() {
    return (
      <div id="slider" className={this.props.size}>
        <h1 className="h1-slider">{this.props.title}</h1>

        {
          this.props.btn &&

          <Link href="/blog" className="btn-white">
            {this.props.btn}
          </Link>

        }
      </div>
    );
  }
}

export default Slider;
