import React, { useState } from 'react'

const Form = (props) => {
  const [text, setText] = useState('')
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const convertupCase = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert('Converted to upper case', 'success')
    setTimeout(() => {
      props.showAlert(null)
    }, 2000)
  }
  const convertLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert('Converted to Lower case', 'success')
    setTimeout(() => {
      props.showAlert(null)
    }, 2000)
  }
  const handleClear = () => {
    setText('')
    props.showAlert('Text cleared', 'success')
    setTimeout(() => {
      props.showAlert(null)
    }, 2000)

  }
  return (
    <div>
      <div className=" container mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className='btn btn-primary mx-2' onClick={convertupCase} >Convert to Upper Case</button>
      <button className='btn btn-primary mx-2' onClick={convertLowerCase} >Convert to Lower Case</button>
      <button className='btn btn-primary mx-2' onClick={handleClear} >Clear Text</button>
      <div className='container my-2'>
        <p>hello you have written {text.split(" ").length} words and {text.length} characters</p>
      </div>
    </div>
  )
}

export default Form