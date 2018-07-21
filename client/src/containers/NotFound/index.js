import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { HomeOutline } from 'mdi-material-ui';
import StyledIcon from '../../components/Styled/icon';

const StyledHomeIcon = StyledIcon(HomeOutline);

const NotFound = props => {
  return (
    <div style={{margin: '10%'}}>
      <Typography variant="display4" gutterBottom>
        Oops!
      </Typography>
      <Typography variant="display2" gutterBottom>
        You found a broken link!
      </Typography>
      <Button 
        variant="raised" 
        color="primary"
        onClick={() => props.goToHome()}
      >
        <StyledHomeIcon pos="left" />
        Go Back Home
      </Button>
    </div>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators({
  goToHome: () => push('/'),
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(NotFound)