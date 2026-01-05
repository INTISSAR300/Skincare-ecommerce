 import { useState } from "react";

 
 export default function Counter() {
  let count = 0; // variable عادي
  const [counts, setCount] = useState(0);

  return (
    <div>
      <p>Value: {count}</p>
      <button onClick={() => {
        count = count + 1;
        console.log("count =", count);
      }}>
        +
      </button>
      <div> <p>Value: {counts}</p> <button onClick={() => setCount(counts+ 1) }>+</button>
       </div>
    </div>
 
    
  );
}
