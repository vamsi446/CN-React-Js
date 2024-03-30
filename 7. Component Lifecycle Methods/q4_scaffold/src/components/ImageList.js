import React from "react";
import Image from "./Image";

export default class ImageList extends React.Component {
  // Create Lifecycle method to prevent re render of the list if some spaces are present. 
  // Use the shouldComponentUpdate lifecycle method here

  shouldComponentUpdate(nextProps) {
    // Compare the current images array with the next images array
    // If they are the same, return false to prevent re-rendering
    if (this.props.images.length === nextProps.images.length) {
      for (let i = 0; i < this.props.images.length; i++) {
        if (this.props.images[i] !== nextProps.images[i]) {
          return true; // If any image is different, allow re-rendering
        }
      }
      return false; // If all images are the same, prevent re-rendering
    }
    return true; // If lengths are different, allow re-rendering
  }

  render() {
    return (
      <div className="image-list">
        {this.props.images.map((image, index) => {
          return <Image key={index} image={image} />;
        })}
      </div>
    );
  }
}
