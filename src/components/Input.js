import React from 'react'

function Input({label, ...rest}) {
  return (
    <div>
        <label htmlFor="">{label}</label>
        <input {...rest} />
    </div>
  )
}

export default Input