import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ItemGrid from '../../components/ItemGrid';
import data from '../../data/ebay';

const productItems = data.findItemsByKeywordsResponse[0].searchResult[0].item;
//const productPhotos = productItems.map(item => item.galleryURL);

console.log("productItems: ", productItems);
//console.log("productPhotos: ", productPhotos);

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <button onClick={() => props.changePage()}>Go to about page via redux</button>

    <ItemGrid items={productItems}/>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Home)