import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FilteredItems from '../FilteredItems';
import Button from 'material-ui/Button';
import InfoOutline from 'material-ui-icons/InfoOutline';

import styled from 'styled-components';

const StyledIcon = styled(InfoOutline)`
  margin-right: 6px;
`;

const Home = props => (
  <div>
    <h1>Welcome to nu-thread!</h1>
    <p>Home of affordable, durable, and carbon neutral used clothes!</p>
    <Button 
      raised 
      color="primary"
      onClick={() => props.changePage()}
    >
      <StyledIcon />
      Learn More
    </Button>

    <FilteredItems/>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Home)