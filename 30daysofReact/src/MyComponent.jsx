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

    const [name1,setName1] = useState("Nill")
    const [area,setArea] = useState("Nill")
    const [payment,setPayment] = useState("UPI")
    const [gender,setGender] = useState("Male")
    const handleNameChange = (e) => {
        setName1(e.target.value)
    }
    const handleTextArea = (e) => {
        setArea(e.target.value)
    }
    function handleSelectChange(e) {
        setPayment(e.target.value)
    }
    function genderReveal(e){
        setGender(e.target.value)
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
        <div>
            <input type="text" name="" id="" value={name1} onChange={handleNameChange} />
            <p>{name1}</p>

            <textarea name="" id="" value={area} onChange={handleTextArea}></textarea>
            <p>{area}</p>

            <select name="" id="" value={payment} onChange={handleSelectChange}>
                <option value="">Select an option</option>
                <option value="Credit">Credit</option>
                <option value="Debit">Debit</option>
                <option value="UPI">UPI</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                Male : <input type="radio" value="Male" onChange={genderReveal} checked={gender === "Male"} />
            </label> <br />
            <label>
                Female : <input type="radio" value="Female" onChange={genderReveal} checked={gender === "Female"} />
            </label>
            <p>Gender: {gender}</p>
        </div>
    </>
  )
}

export default MyComponent