import React from 'react'
import '../components/componentCss/NoItem.css'
import { Link } from 'react-router-dom'
const NoItem = () => {
  return (
    <div><div class="card mb-3">
    <img class="card-img-top img" src="https://tinyurl.com/bdz7xm5t" alt="Card image cap" />
    <div class="card-body">
      <h1 class="card-title title ">Your Cart is empty</h1>
      <h6 class="card-text text">Please add some
      <Link to='/'> items </Link> to your cart.</h6>
    </div>
  </div>
  </div>
  )
}

export default NoItem