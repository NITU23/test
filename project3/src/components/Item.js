import React, { useState } from 'react'
import CSS from '../components/componentCss/item.css'
import { Link } from 'react-router-dom'
const Item = () => {
  let [name, setName] = useState('Product')
  let [url, setUrl] = useState('https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600')
  let addToCart= () => {
    console.log('helo added to cart')
  }
   return (
    <div>
      <div className="card mx-5 my-5" style={{ width: 25 + 'rem' }}>
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Video cameras for your professional work. 8K RAW, 5.9K Full HD, 4K UHD and 4K resolutions. Discover our range of professional video cameras for any production needs.</p>
          <div className="d-flex justify-content-between">
            <Link to="" onClick={addToCart} className="btn btn-primary cart">Add to cart
              <i className="mx-3 bi bi-cart-plus"></i></Link>
            <span>Price : <i className="fa fa-inr"></i> 99/- </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item