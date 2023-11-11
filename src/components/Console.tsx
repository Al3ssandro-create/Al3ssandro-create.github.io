import { useState } from "react";

function Console() {
  const [input, setInput] = useState("");
  return (
    <>
    <div>
      <div
        style={{
            backgroundColor: 'black',
            color: 'lime',
            padding: '10px',
            fontFamily: 'monospace',
            width: '300px',
            height: '200px',
            whiteSpace: 'pre-wrap',
            overflowY: 'auto',
            margin: '10px',
            border: '2px solid lime',
            borderRadius: '5px',    
        }}
      >
        {input}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
            width: '280px', 
            height: '30px', 
            fontFamily: 'monospace',
            color: 'lime',
            backgroundColor: 'black',
            border: '1px white',
            margin: '10px',
        }}
      />
      </div>
    </>
  );
}
export default Console;
