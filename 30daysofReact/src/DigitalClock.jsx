import React, {useState,useEffect} from 'react'

const DigitalClock = () => {

    const [time,setTime] = useState(new Date());
    
    useEffect(()=> {
        const intervalId = setInterval(()=>{
            setTime(new Date())
        },1000)
    },[])

    function timeFormat(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridian = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return (`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`)
    }

   function padZero(number){
    return (number < 10 ? "0" : "") + number 
   }

  return (
    <div className='DigitalContainer'>
        <h1>{timeFormat()}</h1>
    </div>
  )
}

export default DigitalClock