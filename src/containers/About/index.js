import React from 'react'
import { Page, Row, Column } from 'hedron';

export default () => (
  <Page fluid={true}>
    <Row>
      <Column xs={12} md={10} mdShift={1} lg={8} lgShift={2}>
        <h1>
          About
        </h1>
        <h2>
          Save time, save money, save the planet.
        </h2>
        <h3>
          Set up a quick fit-profile and our algorithms save you time by matching you with affordable used clothing of the highest quality and durability.
        </h3>
        <h4>
          Our service costs absolutely nothing to you or the sellers.
        </h4>
        <h5>
          We take a cut from eBay's existing fee. We use this to plant a tree for every item purchased. Among innumerable benefits to ecosystems, a tree will remove more CO2 from the atmosphere than the item created.
        </h5>
      </Column>
    </Row>
  </Page>
)
