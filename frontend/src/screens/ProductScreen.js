import React, {useEffect, useState} from 'react';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Rating from '../components/Rating.js';
// import products from '../products'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'


const ProductScreen = () => {
  var {id} = useParams()
  // const product= products.find(pf=> pf._id === id)

  const [product, setProduct] = useState({})

  useEffect(()=>{
    
    const fetchProduct = async()=>{
          
          const { data } = await axios.get(`/api/product/${id}`)
            setProduct(data);
        }
        fetchProduct()
  },[id])

  return (
    <>
    <Link className='btn btn-light my-3' to = '/'>
      Go Back
      </Link>
      <Row>
          <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
          </Col>
          
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>{product.name} </h2>
              </ListGroup.Item>
              <ListGroup.Item>
              <Rating value={product.rating} text ={`${product.numReviews} Reviews`}/>
              </ListGroup.Item>
              <ListGroup.Item>
                Price: ${product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>

            </ListGroup>

          </Col>
          <Col>
              <Card>
                  <ListGroup variant='flush'>
                  <ListGroup.Item>
                        <Row>
                          <Col>Precio</Col>
                          <Col><strong>{product.price}</strong> </Col>
                        </Row>

                      </ListGroup.Item>

                      <ListGroup.Item>
                        <Row>
                          <Col>Status</Col>
                          <Col>{product.countInStock > 0 ? 'In Stock': 'Out Of Stock'} </Col>
                        </Row>

                      </ListGroup.Item>


                      <ListGroup.Item>
                          <Button className="btn-block" type ="button" disable = {product.countInStock  === 0 }>
                              Add To Cart
                          </Button>
                      </ListGroup.Item>
                      

                  </ListGroup>
              </Card>
          </Col>

      </Row>
    
    </>
  )
}

export default ProductScreen