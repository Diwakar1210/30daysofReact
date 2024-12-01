import React from 'react'

const Button = () => {

  const styles = {
    border: 'none',
    backgroundColor: "red",
    color: 'whitesmoke',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  }

  return (
    <button style={styles}>
        click me
    </button>
  )
}

export default Button