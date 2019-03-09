import React, { Component } from "react";
import AuthorCard from "./AuthorCard";

class AuthorList extends Component {
  //map(loop) thrugh all cards using components&prpos,
  //but must have a unique key to distinguish between every card content
  render() {
    let authorList = this.props.propAuthors.map(author => (
      <AuthorCard authorCardProp={author} />
    ));
    return (
      <div className="authors">
        <div className="row">{authorList}</div>
      </div>
    );
  }
}
export default AuthorList;
