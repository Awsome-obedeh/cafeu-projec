import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button className='btn'> {props.name}</button>
    </div>
  )
}
