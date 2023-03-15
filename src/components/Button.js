import React from 'react'

const Button = ({btnText}) => {
  return (
    <div>
      <button className='px-6 m-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-400'>{btnText}</button>
    </div>
  )
}

export default Button