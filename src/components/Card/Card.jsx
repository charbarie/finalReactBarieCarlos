/* eslint-disable no-unused-vars */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import React from 'react'
import './Card.css'

export const CardProduct = ({ product }) => {
  return (
    <>
          
          <Card className='Card'>
          <Card.Img variant="top" style={{ width: '10rem' }} src={ product.imageProduct  } />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text> { product.description } </Card.Text>
              <Card.Text>  ${ product.price } </Card.Text>
              <Card.Text> Stock { product.stock } </Card.Text>

              <Button variant="primary">Comprar</Button>
            </Card.Body>
            
          </Card>
       

 
    </>
  );
}

export default CardProduct



