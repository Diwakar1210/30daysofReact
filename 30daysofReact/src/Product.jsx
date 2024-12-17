import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Product = () => {
  return (
    <>
        <div>Product</div>
            <Link to="list">List</Link> <br />
            <Link to="details">Details</Link>
        <Outlet/>
    </>
  )
}

export default Product