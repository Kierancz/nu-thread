import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import { InformationOutline, TshirtCrew } from 'mdi-material-ui';

const StyledInfoIcon = styled(InformationOutline)`
  margin-right: 6px;
`;
const StyledItemsIcon = styled(TshirtCrew)`
  margin-right: 6px;
`;
const StyledButton = styled(Button)` && {
  margin: 1em;
}`;

const Home = props => (
  <div>
    <h1>Welcome to nu-thread!</h1>
    <p>Home of affordable, durable, and carbon neutral clothes!</p>
    <StyledButton 
      variant="raised" 
      color="primary"
      onClick={() => props.goToItems()}
    >
      <StyledItemsIcon />
      See Items
    </StyledButton>
    <StyledButton 
      variant="raised" 
      onClick={() => props.goToAbout()}
    >
      <StyledInfoIcon />
      Learn More
    </StyledButton>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  goToAbout: () => push('/about'),
  goToItems: () => push('/items')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Home)