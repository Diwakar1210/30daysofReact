import React, {useState} from 'react'

const ColorPicker = () => {

    const [color,setColor] = useState('#FFFFFF');

    function handleColor(e){
        setColor(e.target.value)
    }
 
  return (
    <>
        <div className='ColorDiv'>
            <div style={{backgroundColor:color}}>
                <p>Selected color : {color}</p>
            </div>
            <div>
                <label>Select a color</label>
                <input type="color" value={color} onChange={(e)=>handleColor(e)} />
            </div>
        </div>
    </>
  )
}

export default ColorPicker