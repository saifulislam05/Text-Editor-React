import React from 'react'

const Button = ({title,bg}) => {
  return (
    <button className={`btn  btn-${bg} rounded-sm`}>{title}</button>
  )
}

export default Button