import React from 'react'

const Button = ({title,bg,dispatch,value}) => {
  return (
    <button className={`btn  btn-${bg} rounded-sm`} onClick={()=>dispatch({type:value})}>{title}</button>
  )
}

export default Button