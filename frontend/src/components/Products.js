import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'

const Products = (props) => {
  return (
    <>
        <Card className = 'py-3 my-3 rounded'>
            <Link to={ `/product/${props.product._id}`}>
                <Card.Img src= {props.product.image} variant= 'top' />
            </Link>
            <Card.Body>
            <Link to={ `/product/${props.product._id}`}>
                <Card.Title>{props.product.name}</Card.Title>
            </Link>
            <Card.Text as='div'>
                <div className = 'my-3'>
                  <Rating value={props.product.rating} text ={`${props.product.numReviews} Reviews`}/>
                
                </div>
                 </Card.Text>
                 <Card.Text as='h3'>
                
                ${props.product.price} 
                
                 </Card.Text>  
            </Card.Body>
        </Card>
    
    </>
  )
}

export default Products