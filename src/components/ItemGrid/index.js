import React, { Component } from 'react';
import Photo from '../Photo';
import './grid.css';

class ItemGrid extends Component {
  render() {
    return (
      <div className="item-grid">
        {this.props.items.map((item, i) => <Photo {...this.props} key={i} i={i} item={item}/>)}
      </div>
    );
  }
}

export default ItemGrid;

/*
<div className="item-grid">
  {this.props.items.map((item, i) => <Photo {...this.props} key={i} i={i} item={item}/>)}
</div>
*/