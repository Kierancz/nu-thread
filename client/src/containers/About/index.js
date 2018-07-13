import React from 'react'
import Typography from '@material-ui/core/Typography';
import SideNav from '../../components/SideNav';
import DocumentTitle from 'react-document-title';

export default () => (
  <DocumentTitle title='About'>
    <SideNav>
      <div>
        <Typography variant="display4" gutterBottom>
          About
        </Typography>
        <Typography variant="title" gutterBottom>
          Under Active Construction...
        </Typography>
        <Typography variant="headline" gutterBottom>
          Save time, save money, save the environment.
        </Typography>
        <Typography variant="subheading" gutterBottom>
          nu-thread is a non-profit that matches you with affordable clothes of the highest quality and durability.
        </Typography>
        <Typography variant="subheading" gutterBottom>
          Our service costs absolutely nothing to you or the sellers.
        </Typography>
        <Typography variant="subheading" gutterBottom>
          We use eBay's referral commision to plant trees and provide reproductive healthcare globally.
        </Typography>
      </div>
    </SideNav>
  </DocumentTitle>
)
