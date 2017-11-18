import React, { Component } from 'react';
import './photo.css';
//import { Link } from 'react-router-dom';

class Photo extends Component {
  render() {
    const { item, i } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <img 
            src={item.galleryURL} 
            alt={item.title[0]} 
            className="grid-photo"/>
        </div>
      </figure>
    );
  }
}

export default Photo;
