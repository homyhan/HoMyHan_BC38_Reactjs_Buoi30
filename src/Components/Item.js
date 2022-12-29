import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className="col-sm-3 mb-3 mb-sm-0">
        <div className="card text-center mb-4">
          <img
            src="https://via.placeholder.com/150x90"
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="card-footer text-muted"><a href="#" className="btn btn-primary">Find Out More!</a></div>
        </div>
      </div>
    );
  }
}

export default Item;
