import React from 'react'
import { useState } from 'react'

export default function Textarea(props) {
  
  const [text, setText] = useState('')
  
  const handleOnChange = (e) => {
    setText(e.target.value)
  }
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.alertMsg('success', 'Converted to upper case!')
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.alertMsg('success', 'Converted to lower case!')
  }

  const handleClClick = () => {
    let newText = ''
    setText(newText)
    props.alertMsg('success', 'Cleared text!')
  }

  const handleCopy = () => {
    let text = document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)
    props.alertMsg('success', 'Text copied successfully!')
  }

  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(' '))
    props.alertMsg('success', 'Removed extra space from sentence!')
  }

  return (
    <div>
      <div className="mb-3 container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>Enter text here...</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === 'dark'?'#262833':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
        <button className='btn btn-primary mt-3 mx-2' onClick={handleUpClick}>Convert to Upper Case</button>
        <button className='btn btn-primary mt-3 mx-2' onClick={handleLoClick}>Convert to Lower Case</button>
        <button className='btn btn-primary mt-3 mx-2' onClick={handleClClick}>Clear Text</button>
        <button className='btn btn-primary mt-3 mx-2' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mt-3 mx-2' onClick={removeExtraSpace}>Remove Extra Spaces</button>

      </div>
      <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>  
        <h2>Your text summary</h2>
        <p>{text == '' ? 0 : text.split(' ').length} words and {text.length} characters</p>
        <p>{text == '' ? 0 : 0.008 * text.split(' ').length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length ? text : 'Please enter something in above textarea to preview...'}</p>
      </div>
    </div>
  )
}
