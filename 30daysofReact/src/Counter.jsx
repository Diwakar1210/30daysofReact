import React, {useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    const decrementCount = () => {
        setCount(count - 1);
    }

  return (
    <>
        <h1>{count}</h1>
        <div>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    </>
  )
}

export default Counter