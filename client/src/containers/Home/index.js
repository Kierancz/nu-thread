import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { InformationOutline, TshirtCrew } from 'mdi-material-ui';
import Nav from '../Nav';
import DocumentTitle from 'react-document-title';
import StyledIcon from '../../components/Styled/icon';

const StyledInfoIcon = StyledIcon(InformationOutline);
const StyledItemsIcon = StyledIcon(TshirtCrew);
const StyledButton = styled(Button)` && {
  margin: 1em;
}`;

const Home = props => (
  <DocumentTitle title="Home">
    <Nav>
      <Typography variant="display4" gutterBottom>
        nu-thread
      </Typography>
      <Typography variant="headline" gutterBottom>
        Home of affordable, durable, and carbon neutral clothes!
      </Typography>
      <Typography variant="title" gutterBottom>
        Under Active Construction...
      </Typography>
      <StyledButton 
        variant="raised" 
        color="primary"
        onClick={() => props.goToItems()}
      >
        <StyledItemsIcon pos="left" />
        See Items
      </StyledButton>
      <StyledButton 
        variant="raised" 
        onClick={() => props.goToAbout()}
      >
        <StyledInfoIcon pos="left" />
        Learn More
      </StyledButton>
    </Nav>
  </DocumentTitle>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  goToAbout: () => push('/about'),
  goToItems: () => push('/items')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Home)