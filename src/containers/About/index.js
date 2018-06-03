import React from 'react'
import Typography from '@material-ui/core/Typography';
import SideNav from '../../components/SideNav';

export default () => (
  <SideNav>
    <div>
      <Typography variant="display3" gutterBottom>
        About
      </Typography>
      <Typography variant="title" gutterBottom>
        Under Active Construction...
      </Typography>
      <Typography variant="body2" gutterBottom>
        Save time, save money, save the planet.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Set up a quick fit-profile and our algorithms save you time by matching you with affordable used clothing of the highest quality and durability.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Our service costs absolutely nothing to you or the sellers.
      </Typography>
      <Typography variant="body2" gutterBottom>
        We take a cut from eBay's existing fee. We use this to plant a tree for every item purchased. Among innumerable benefits to ecosystems, a tree will remove more CO2 from the atmosphere than the item created.
      </Typography>
    </div>
  </SideNav>
)
