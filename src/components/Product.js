import React from 'react'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({product}) {
  return (
    <Card className='rounded my-3 p-3'>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image}/>
        </Link>
        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
        </Card.Body>
        <Card.Text  as="div">
    <div className="my-3">
        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
    </div>
    <h3>${product.price}</h3>
        </Card.Text>
    </Card>
    
  )
}

export default Product
