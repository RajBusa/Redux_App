import React from 'react'

const Shop = () => {
  return (
    <div className='d-flex container mt-2'>
      <button className="btn btn-primary me-2">-</button>
      <div className='me-2'>Add this item to cart</div>
      <button className="btn btn-primary me-2">+</button>
    </div>
  )
}

export default Shop
