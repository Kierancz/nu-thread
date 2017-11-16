import React, { Component } from 'react';
import Photo from '../Photo';

class Grid extends Component {
  render() {
    return (
      <div className="item-grid">
        {this.props.items.map((item, i) => <Photo {...this.props} key={i} i={i} item={item}/>)}
      </div>
    );
  }
}

export default Grid;

/*
class Grid extends Component {
  render() {
    return (
      <div className="item-grid">
        {this.props.items.map((item, i) => <Photo {...this.props} key={i} i={i} item={item}/>)}
        I'm the product item grid
        }
      </div>
    );
  }
}*/