/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Products } from '../Helpers/Products/Products';
import CardList from '../CardList/CardList';
/* eslint-disable no-unused-vars */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Body.css'
const Body = () => {


    return (
    <>
    
      <h2>Lista de Productos:</h2>
      <CardList/>
        
       
    
    </>
  );
};




export default Body;
