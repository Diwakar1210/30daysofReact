import React from 'react'
import propTypes from 'prop-types'

const Students = (props) => {

    const styles = {
        color: "black",
        border:"1px solid black",
        padding:"10px",
        margin:"10px",
        maxWidth:"250px",
    }

  return (
    <div style={styles}>
        <p>Name: {props.name}</p>
        <p >Name: {props.age}</p>
        <p>Alive: {props.isAlive ? "Yes" : "Dead"}</p>
    </div>
  )
}

// Prop types
Students.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isAlive:propTypes.bool,
}

// Default props
Students.defaultProps = {
    name:"Guest",
    age:0,
    isAlive:false,
}

export default Students