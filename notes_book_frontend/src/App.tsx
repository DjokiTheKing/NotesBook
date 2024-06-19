import { useState } from "react";

function App(){
  let [a, setNumber] = useState(0);
  return <div>
    <button onClick={()=>setNumber(a+1)}>{a}</button>
    <button onClick={()=>setNumber(a+2)}>{a}</button>
  </div>
}

export default App;