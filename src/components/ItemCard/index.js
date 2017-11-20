import React, { Component } from 'react';
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
    margin: 10,
  },
  media: {
    height: 200,
  },
};

class ItemCard extends Component {
  render() {
    const { item, classes } = this.props;
    let price = 
      parseFloat(
        item
        .sellingStatus[0]
        .convertedCurrentPrice[0]
        .__value__)
      .toFixed(2);

    return (
      <Column xs={6} sm={4} md={4} lg={3} fluid={true}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={item.galleryURL[0]} 
            title={item.title[0]}
          />
          <CardContent>
            <Typography component="h4">
              {item.title[0]}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography component="h3">
              $ {price}
            </Typography>
            <Button 
              dense 
              color="primary"
              href={item.viewItemURL[0]}>
              View on Ebay
            </Button>
          </CardActions>
        </Card>
      </Column>
    );
  }
}

export default withStyles(styles)(ItemCard);
