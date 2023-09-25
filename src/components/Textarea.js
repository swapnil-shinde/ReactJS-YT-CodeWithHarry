import React from 'react'
import { useState } from 'react'

export default function Textarea() {

  const [text, setText] = useState('Enter text here to convert in Upper Case... ')
  
  const handleClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleOnChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <div className="mb-3 container">
        <h1>Enter text here...</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button className='btn btn-primary' onClick={handleClick}>Convert to Upper Case</button>
      </div>
    </div>
  )
}
