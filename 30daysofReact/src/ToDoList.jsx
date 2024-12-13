import React,{useState} from 'react'

const ToDoList = () => {

    const [note,setNote] = useState([]);
    const [newTask,setNewTask] = useState('');
    function handleTaskInput(e){
        setNewTask(e.target.value)
    }
    function handleAddNote(){
        if(newTask.trim() !== ""){
            setNote(n=>[...n,newTask])
            setNewTask(''); 
        }
    }
    function handleRemoveTask(id){
        setNote(n => n.filter((_,item) => item !== id))
    }
    function handleUp(id){
       if(id > 0){
        const updatedTask = [...note];
        [updatedTask[id],updatedTask[id - 1]] = [updatedTask[id - 1],updatedTask[id]];
        setNote(updatedTask)
       }
    }
    function handleDown(id){
        if(id < note.length - 1){
            const updatedTask = [...note];
            [updatedTask[id],updatedTask[id + 1]] = [updatedTask[id + 1],updatedTask[id]];
            setNote(updatedTask)
        }
    }
    console.log(note);
    

    // Destructuring (Swaping values of two variables)
    //  let a = 1;
    //  let b = 2;
    //  [a,b] = [b,a]
    //  console.log(a,b);
    //  // Swap two elements in an array
    //  const colors = ["Black","Red","yellow","Blue"];
    //  [colors[0], colors[1]] = [colors[1],colors[0]];
    //  console.log(colors);
    //  // Assign Array elements to variables
    // const [firstColor,secondColor,...extraColors] = colors;
    // console.log(firstColor);
    // console.log(secondColor);
    // console.log(extraColors);
    

  return (
    <>
        <div>
            <h2>To Do List App</h2>
            <div>
                <input type="text" value={newTask} onChange={handleTaskInput} />
                <button onClick={handleAddNote}>Add Note</button>
            </div>
            <ul>
                {note.map((notes,id)=> <li key={id}>{notes} 
                                        <button onClick={()=>handleRemoveTask(id)}>D</button> 
                                        <button onClick={()=>handleUp(id)}>👆</button>
                                        <button onClick={()=>handleDown(id)}>👇</button>
                                        </li> )}
            </ul>
        </div>
    </>
  )
}

export default ToDoList