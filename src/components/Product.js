import React from 'react'
import { Card, CardBlock, CardTitle, CardHeader, CardText, Button, CardImg } from '@bootstrap-styled/v4'
import Img from 'gatsby-image'

import { Link } from 'gatsby'

const Product = ({ title, image, price, id }) => (
  <Card>
    <Link to={`/${id}`}>
      <Img fluid={image} />
    </Link>
    <CardHeader>
      <Link to={`/${id}`}>{title}</Link>
    </CardHeader>
    <CardBlock>
      <button
        className="snipcart-add-item"
        data-item-id={id}
        data-item-name={title}
        data-item-price={price}
        data-item-url="localhost:8000"
        data-item-description="todo"
      >
        Buy Now
      </button>
    </CardBlock>
  </Card>
)
export default Product
