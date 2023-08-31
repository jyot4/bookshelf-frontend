import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Product.css"
// import requests from '../Home/requests'
import ProductRow from './ProductRow'
import axios from 'axios'
import { useContext } from 'react'
import { searchContext } from '../First'
// import { searchContext } from '../First'

function Product() {

  const { setTotalBooks} = useContext(searchContext)
 
  useEffect(() => {
    axios.get("https://servers-z693.onrender.com/product")
      .then((result) => {
        // console.log(result.data)
        setTotalBooks(result.data)
      })
  }, [])



  return (
    <>
      <div className='books'>
        <div className='left'>
          <h2>LIBRARY</h2>
          <ul>
            <li><Link to="">Most popular</Link></li>
           
            <li><Link to="">Poetry</Link></li>
            <li><Link to="">fantasy</Link></li>
            <li><Link to="">Romance</Link></li>
            

          </ul>
        </div>
        <div className='right'>
          <ProductRow endpoint="mostpopular" heading=" Most Popular" />
          <ProductRow endpoint="poetry" heading="Poetry Books" />
          <ProductRow endpoint="fantasy" heading="Fantasy Books" />
          <ProductRow endpoint="romance" heading="Romance Books" />

        </div>
      </div>
    </>
  )
}

export default Product