import { Button, Card, Input, link, Checkbox } from 'antd'
import './layout.css'
import { useState } from 'react';


function App() {

const [input, setInput] = useState('')
const[Todos, setTodos] = useState([])


const handleChange = (e)=>{
  setInput(e.target.value)
}

const handleClick = ()=>{
  setTodos([...Todos, input])
  setInput('')
}

  return (
    <div className="App">
        <h1>PRACTICE</h1>
        <div className="practice">
          <Input 
          className="input"
          onChange={handleChange}
          value={input}
          />
         
          <Button 
          className="button"
          onClick={handleClick}
          >Add</Button>
          {
            Todos.map((item)=>{
              return(
                <><div>
                  <ul>
                    <li> {item}</li>
                  </ul>

                </div><Button className="delete" onClick={() => setTodos(Todos.filter(todo => item !== todo))}>Delete</Button></>
              )
            }
            )
          }
          </div>

    </div>
  );
}
export default App;
