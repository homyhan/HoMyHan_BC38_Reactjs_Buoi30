import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";

class Body extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Banner></Banner>
        </div>

        <div className="container">
          <div className="row">
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
