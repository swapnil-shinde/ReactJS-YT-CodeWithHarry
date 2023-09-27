import React from 'react'

function Alert(props) {

  const capitalize = (word) => {
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }

  return (
    props.alert && <div>
      <div class="alert alert-success" role="alert">
        <strong> {capitalize(props.alert.type)} </strong> : {props.alert.message}
      </div>
    </div>
  )
}

export default Alert