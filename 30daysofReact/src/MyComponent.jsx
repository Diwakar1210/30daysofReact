import React, { useState } from 'react'

const MyComponent = () => {

    const [name,setName] = useState("Guest")
    const [age,setAge] = useState(0)
    const [isAlive,setIsAlive] = useState(true)


    const updateName = () => {
        setName("Diwakar")
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const conditionEmployee= () => {
        setIsAlive(!isAlive)
    }

  return (
    <>
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>setName</button>

            <p>Age : {age}</p>
            <button onClick={incrementAge}>Age</button>

            <p>Alive : {isAlive ? "Yes" : "No"}</p>
            <button onClick={conditionEmployee}>Status</button>
        </div>
    </>
  )
}

export default MyComponent