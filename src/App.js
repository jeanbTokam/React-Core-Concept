import { Button, Card, Input, link, Checkbox } from 'antd'
import './layout.css'
import React, { useState } from 'react';
import * as REACT from "react";



/*
useRef => just rerender once. decrease the amount of rerendering.
Compare 2  set of code with and without useRef  on the console dev tools to assess the performance of this test
*/ 

function App() {
       const [input, setInput] = React.useState("")


       React.useEffect(() => {
          console.log("RERENDER")  
       })
  
    return (
      <div className="App">
          <h1>PRACTICE</h1>
          <div>
            <Input onChange={(e) => setInput(e.target.value)} />
            <Button onClick={() => alert(input)}>Send</Button>
          </div>
          
  
      </div>
    );
}
export default App;
