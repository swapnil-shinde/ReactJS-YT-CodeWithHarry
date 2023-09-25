import React from 'react'
import { useState } from 'react'

export default function Textarea() {

  const [text, setText] = useState('')
  
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase()
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
        <button className='btn btn-primary mt-3' onClick={handleUpClick}>Convert to Upper Case</button>
        <button className='btn btn-primary mt-3 mx-3' onClick={handleLoClick}>Convert to Lower Case</button>
      </div>
      <div className='container'>  
        <h2>Your text summary</h2>
        <p>{text == '' ? 0 : text.split(' ').length} words and {text.length} characters</p>
        <p>{text == '' ? 0 : 0.008 * text.split(' ').length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}
