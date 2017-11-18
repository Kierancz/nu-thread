import React, { Component } from 'react';
import ItemCard from '../ItemCard';
import { Row } from 'hedron';
import './grid.css';

class ItemGrid extends Component {
  render() {
    return (
      <Row>
        {this.props.items.map((item, i) => <ItemCard {...this.props} key={i} i={i} item={item}/>)}
      </Row>
    );
  }
}

export default ItemGrid;

/*
<div className="item-grid">
  {this.props.items.map((item, i) => <Photo {...this.props} key={i} i={i} item={item}/>)}
</div>
*/