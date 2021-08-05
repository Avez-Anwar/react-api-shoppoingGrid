import React from "react";
import "./Image.css";

function Image(props) {
  return (
    <div>
      <div className="main__image">
        <img src={props.posts.image} alt="img" />
        <p>{props.posts.id}</p>
        <p>{props.posts.title}</p>
        <p>{props.posts.description}</p>
      </div>
    </div>
  );
}

export default Image;
