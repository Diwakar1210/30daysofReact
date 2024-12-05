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

  const handleClick = () => console.log("Clicked");
  const handleClick1 = (name) => console.log(`${name} Clicked`);
  let count = 0;
  const handleClick2 = (name) => {
    if(count < 3){
      count++;
      console.log(`${name} clicked me ${count} times`);
    }else{
      console.log(`${name} enough`)
    }
  };
  const handleClick3 = (e) => {
    e.target.textContent = "Clicked ❤️";
  }

  return (
    <>
      <button style={styles}>
          click me
      </button>
      <button onClick={handleClick}>
          Click Event 🔥
      </button>
      <button onClick={()=>handleClick1('Diwakar')}>
          Click Event with parameter 🔥
      </button>
      <button onClick={()=>handleClick2("Diwakar")}>
          Click with condition 🔥
      </button>
      <button onClick={(e)=>handleClick3(e)}>
          Click with event 🔥
      </button>
    </>
  )
}

export default Button