import React from 'react';
import Typography from '@material-ui/core/Typography';

const NotFound = props => {
  return (
    <div>
      <Typography variant="display4" gutterBottom>
        Oh no!
      </Typography>
      <Typography variant="display2" gutterBottom>
        { props.message }
      </Typography>
    </div>
  );
}

export default NotFound;