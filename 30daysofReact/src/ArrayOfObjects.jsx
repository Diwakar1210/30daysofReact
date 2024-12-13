import React, { useState } from 'react'

const ArrayOfObjects = () => {

    const [cars,setCars] = useState([]);
    const [carYear,setCarYear] = useState(new Date().getFullYear());
    const [carMake,setCarMake] = useState("");
    const [carModel,setCarModel] = useState("");
    function handelMake(e){
        setCarMake(e.target.value)
    }
    function handelModel(e){
        setCarModel(e.target.value)
    }
    function handelYear(e){
        setCarYear(e.target.value)
    }
    function handleAddCars(){
        const newCars = {year:carYear,make:carMake,model:carModel};
        console.log(newCars);
        setCars(c=>[...c,newCars])

        setCarYear(new Date().getFullYear())
        setCarMake("");
        setCarModel("");
    }
    function handleRemoveCars(index){
        setCars(c => c.filter((_,i)=> index !== i ));
    }

  return (
    <div>
        <h1>List of Car Objects</h1>
        <ul>
            {cars.map((car,index)=> <li key={index} onClick={()=>handleRemoveCars(index)}>{car.year} {car.make} {car.model}</li> )}
        </ul>

        <div>
            <input type="number" name="" id="" onChange={handelYear} value={carYear} /> <br />
            <input type="text" name="" id="" value={carMake} placeholder='Enter Car Make' onChange={handelMake} /> <br />
            <input type="text" name="" id="" value={carModel} placeholder='Enter Car Model' onChange={handelModel} /> <br />
            <button onClick={handleAddCars}>Add New Car</button>
        </div>
    </div>
  )
}

export default ArrayOfObjects