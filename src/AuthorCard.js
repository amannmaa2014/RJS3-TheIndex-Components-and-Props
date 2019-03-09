import React, { Component } from "react";

class AuthorCard extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={this.props.authorCardProp.imageUrl}
              alt={
                this.props.authorCardProp.first_name +
                " " +
                this.props.authorCardProp.last_name
              }
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>
                {this.props.authorCardProp.first_name +
                  " " +
                  this.props.authorCardProp.last_name}
              </span>
            </h5>
            <small className="card-text">
              {this.props.authorCardProp.books.length} books
            </small>
          </div>
        </div>
      </div>
    );
  }
}
export default AuthorCard;
