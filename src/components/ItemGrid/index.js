import React, { Component } from 'react';
import ItemCard from '../ItemCard';
import { Page, Row, Column } from 'hedron';

class ItemGrid extends Component {
  render() {
    return (
      <Page>
        <Row>
          <Column xs={12} md={10} mdShift={1}>
            <Row>
            {this.props.items.map(
              (item, i) => 
                <ItemCard 
                  {...this.props} 
                  key={i} 
                  i={i} 
                  item={item}
                />
            )}
            </Row>
          </Column>
        </Row>
      </Page>
    );
  }
}

export default ItemGrid;