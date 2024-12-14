import React, {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';

const UseEffect = () => {

    const [count,setCount] = useState(0);
    // useEffect(()=> {
    //    console.log("This effect will run after every render");  
    // })
    // useEffect(()=> {
    //     console.log("This effect will run only is initial render");  
    //  },[])
    useEffect(()=> {
        console.log("This effect will run only if the dependency value changes");  
     },[count])

    function addCount(){
        setCount(c => c + 1)
    }
    // function subractCount(){
    //     setCount(c => c - 1)
    // }
    // function changeColor(){
    //     setColor(c => c === "green" ? 'red' : 'green')
    // }

  return (
    <div style={{padding:'30px',}}>
        <h1>UseEffect</h1>
        <div>
            <p>Count : {count}</p>
            <Button variant="primary" onClick={addCount}>Increase</Button>
            <button>Subract</button> <br />
        </div>
    </div>
  )
}

export default UseEffect