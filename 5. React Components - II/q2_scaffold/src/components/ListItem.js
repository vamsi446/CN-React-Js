import React, { Component } from "react";

// Complete this Component
const ListItem = (props) => {
  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundColor: props.data.bgColor,
      }}
    >
      <img src={props.data.icon} alt={props.data.name} />
      <a href={props.data.link}></a>
      <span>{props.data.name}</span>
    </div>
  );
};

export default ListItem;
