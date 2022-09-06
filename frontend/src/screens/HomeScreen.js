import React, {useEffect, useState} from 'react'
import Product  from '../components/Products.js'
// import products from '../products.js'
import {Row, Col} from 'react-bootstrap';
import axios from 'axios';


const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    const fetchProduct = async()=>{
          const { data } = await axios.get('/api/products')
            setProducts(data);
        }
        fetchProduct()
  }, [])
  return (
    <>
        <h1>Lates Products</h1>
        <Row>
            {products.map(p=>(
                 <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={p} />
                </Col>
            ))}
      </Row>
    </>
  )
}

export default HomeScreen