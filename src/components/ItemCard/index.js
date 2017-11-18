import React, { Component } from 'react';
import './photo.css';
import { Column } from 'hedron';
import 
  Card, { 
  CardActions, 
  CardContent, 
  CardMedia } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

//import { Link } from 'react-router-dom';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

class ItemCard extends Component {
  render() {
    const { item, i, classes } = this.props;

    return (
      <Column xs={6} sm={4} md={3} lg={2}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={item.galleryURL[0]} 
            title={item.title[0]}
          />
          <CardContent>
            <Typography component="p">
              {item.title[0]}
            </Typography>
          </CardContent>
          <CardActions>
            <Button dense color="primary">
              View on Ebay
            </Button>
          </CardActions>
        </Card>
      </Column>
    );
  }
}

export default withStyles(styles)(ItemCard);

/*
<img 
  src={item.galleryURL} 
  alt={item.title[0]} 
  className="grid-photo"/>
  */
