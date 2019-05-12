import React from 'react'
import { Card, CardBlock, CardTitle, CardHeader, CardText, Button, CardImg } from '@bootstrap-styled/v4'
import Img from 'gatsby-image'

import { Link } from 'gatsby'

const Product = ({ title, image, price, id }) => (
  <Card width="50%">
    <Link to={`/${id}`}>
      <Img fluid={image} />
    </Link>
    <CardHeader>
      <Link to={`/${id}`}>{title}</Link>
    </CardHeader>
    <CardBlock>
      <Button color="success">{price || '$99.99'}</Button>
    </CardBlock>
  </Card>
)
export default Product
