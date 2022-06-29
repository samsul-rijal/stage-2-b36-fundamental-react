// code Here
import React from 'react'

function List(props) {
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.address}</p>
        <img src={props.image} alt="" />
    </div>
  )
}

export default List