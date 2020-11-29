import React,{useState} from 'react';

const UseEffectTest = () => {
  const [count,setCount] = useState(0)
  const [age,setAge] = useState(0)
  const [todos,setTodos] = useState([])
  const [greetings, setGreetings] = useState('')
  
  const handleChange = event =>{
    setGreetings(event.target.value)
  }

  return (
    <div>
    <p>Number of clicks : {count}</p>
    <button onClick={()=>setCount(count+1)}>
    Counter
    </button>
    <hr/>
    <p>Set Age : {age}</p>
    <button onClick={()=>setAge(38)}>
    Counter
    </button>
     <hr/>
    <p>Todos : {todos.todo}</p>
    <button onClick={()=>setTodos({todo:"Buy Milk",complete:true})}>
    Counter
    </button>
    <hr/>
    <p>Greetings : {greetings}</p>
    <input type="text" value={greetings} onChange={handleChange}/>
    </div>
  );
}

export default UseEffectTest;
