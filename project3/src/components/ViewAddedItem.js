import React from 'react'

const ViewAddedItem = (props) => {
  return (
    <div>
      ViewAddedItem
      <div>
        <p>You have added the following items:</p>
        {props.items.map((item, index) => (
          <h1 key={index}>{item}</h1>
        ))}
      </div>
    </div>
  )
}

export default ViewAddedItem