import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { Row, Col, ListGroup, Button, Card, Image, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

function ProductScreen( { match } ) {
    let {id} = useParams();
    const product = products.find((p)=> p._id === id)
  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid/>
        </Col>

        <Col md={3}>
          <ListGroup>
            <ListGroup.Item variant='flush'>
              <h3>{product.name} </h3> 
              </ListGroup.Item>

              <ListGroup.Item variant='flush'>
               <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
              </ListGroup.Item>

              <ListGroup.Item variant='flush'>
              <h3> ${product.price} </h3> 
              </ListGroup.Item>

              <ListGroup.Item variant='flush'>
              <p> {product.description} </p> 
              </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <ListGroup>
              <ListGroup.Item>
                <h5>Price: ${product.price}</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Availability: {product.countInStock > 0 ? "In Stock" : "Out of Stock"}</h5>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button className='btn-block' type='button' disabled={product.countInStock === 0} style={{ width: '100%'}}>Add to Cart</Button>
              </ListGroup.Item>
          </ListGroup>
        </Col>


      </Row>
    </div>
  )
}

export default ProductScreen
