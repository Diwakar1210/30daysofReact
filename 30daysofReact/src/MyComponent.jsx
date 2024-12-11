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

    const [car,setCar] = useState({year:2024,make:"Ford",model:"Mustang"});
    function handleyear(e){
        setCar(c => ({...c,year:e.target.value}))
    }
    function handlemake(e){
        setCar(c=>({...c,make:e.target.value}))
    }
    function handlemodel(e){
        setCar(c=>({...c,model:e.target.value}))
    }

    const [food,setFood] = useState(["Apple","Banana","Mango"])
    function handleAddFood(){
        const newFood = document.getElementById("getItems").value;
        document.getElementById("getItems").value = "";
        setFood(f=>[...f,newFood])
    }
    function handleRemoveFood(item){
        setFood(food.filter((_,i) => item !== i))
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
        <div>
            <p>Your fav car is : {car.model} | {car.make} | {car.year}</p>

            <input type="number" value={car.year} onChange={handleyear} />
            <input type="text" value={car.make} onChange={handlemake} />
            <input type="text" value={car.model}  onChange={handlemodel} />
        </div>
        <div>
            <ul>
                {food.map((food,item) =>
                    <li key={item} onClick={()=>handleRemoveFood(item)} >{food}</li>
                )}
            </ul>
            <input type="text" id="getItems" />
            <button onClick={handleAddFood}>Add</button>
        </div>
    </>
  )
}

export default MyComponent