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
    // Remove selected text after text copied
    document.getSelection().removeAllRanges()
    props.alertMsg('success', 'Text copied successfully!')
  }

  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(' '))
    props.alertMsg('success', 'Removed extra space from sentence!')
  }

  // Commenting Trial
  // const countWords = () => {
  //     let newText = text.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
  //     newText = newText.replace(/[ ]{2,}/gi," ");//2 or more space to 1
  //     newText = newText.replace(/\n /,"\n"); // exclude newline with a start spacing
  //     return newText.split(' ').filter(function(str){return str!="";}).length;
  //     //return s.split(' ').filter(String).length; - this can also be used
  // }

  // const countChar = () => {
  //   // use /\r?\n|\r/g to remove all spaces, line breaks from the string
  //   let newText = text.replace(/\r?\n|\r/g, "");
  //   return newText.length;
  // }

  return (
    <div>
      <div className="mb-3 container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === 'dark'?'#262833':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
        <button disabled={text.length === 0} className='btn btn-primary mt-3 mx-2' onClick={handleUpClick}>Convert to Upper Case</button>
        <button disabled={text.length === 0} className='btn btn-primary mt-3 mx-2' onClick={handleLoClick}>Convert to Lower Case</button>
        <button disabled={text.length === 0} className='btn btn-primary mt-3 mx-2' onClick={handleClClick}>Clear Text</button>
        <button disabled={text.length === 0} className='btn btn-primary mt-3 mx-2' onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className='btn btn-primary mt-3 mx-2' onClick={removeExtraSpace}>Remove Extra Spaces</button>

      </div>
      <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>  
        <h2>Your text summary</h2>
        {/* Trial */}
        {/* <p>{text == '' ? 0 : countWords()} words and {countChar()} characters</p> */}
        {/* <p>{text == '' ? 0 : 0.008 * countChar()} Minutes read</p> */}
        <p>{text == '' ? 0 : text.split(' ').filter((e) => { return e.length !== 0 }).length} words and {text.length} characters</p>
        <p>{text == '' ? 0 : 0.008 * text.split.apply(' ').filter((e) => { return e.length !== 0 })} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length ? text : 'Nothing to preview...'}</p>
      </div>
    </div>
  )
}
