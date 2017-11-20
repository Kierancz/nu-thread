import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Items from '../Items';
import data from '../../data/ebay';

const productItems = data.findItemsByKeywordsResponse[0].searchResult[0].item;
console.log("productItems: ", productItems);

const Home = props => (
  <div>
    <h1>Welcome to nu-thread!</h1>
    <p>Home of affordable, durable, and carbon neutral used clothes!</p>
    <button onClick={() => props.changePage()}>Learn More</button>

    <Items items={productItems} />
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Home)