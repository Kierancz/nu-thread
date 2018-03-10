import React from 'react';
import { Column } from 'hedron';
import
  Card, {
  CardContent,
  CardMedia } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

//import { Link } from 'react-router-dom';

const styles = {
  card: {
    display: 'flex',
    margin: 10,
  },
  content: {
    flex: '1 0 auto',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  controls: {
    marginLeft: 20,
    marginBottom: 6,
    display: 'flex',
    alignItems: 'center',
  },
  media: {
    height: 'inherit',
    width: 140,
  },
  viewButton: {
    marginLeft: 6,
  }
};

class ItemCard extends React.Component {
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
      <Column xs={12} sm={12} md={6} lg={4} fluid={true}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={item.galleryURL[0]}
            title={item.title[0]}
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h4">
                {item.title[0]}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <Typography component="h3">
                $ {price}
              </Typography>
              <Button
                dense
                color="primary"
                className={classes.viewButton}
                href={item.viewItemURL[0]}
                target="_blank">
                View on Ebay
              </Button>
            </div>
          </div>
        </Card>
      </Column>
    );
  }
}

export default withStyles(styles)(ItemCard);
