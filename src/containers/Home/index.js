import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { InformationOutline, TshirtCrew } from 'mdi-material-ui';
import SideNav from '../../components/SideNav';
import DocumentTitle from 'react-document-title';

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
  <DocumentTitle title="Home">
    <SideNav>
      <Typography variant="display3" gutterBottom>
        Welcome to nu-thread!
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
    </SideNav>
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