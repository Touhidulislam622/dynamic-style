import React , { useState, useEffect } from 'react';
import  './Dynamic.css'

const UpdatedValue = () => {
    
const [name , setName ] = useState("")
const [validInput , setValidInput] = useState(false);

useEffect(() => {
  if (name.length < 2  ){
    setValidInput(false);
  } else {
    setValidInput(true);
  }
 }, [name]);
 
 const handleChange = (e) => {
    setName(e.target.value);
  };
  
 
 return (
    <div className="App">
    <input type="text" 
     value={name} 
     onChange={handleChange}
     className= {`${validInput ? "valid" : "invalid"}`}

      />
  </div>
    );
};

// style={{backgroundColor: validInput ? "blue" : "red"}} //

//  Short Circuiting Operators **>   className= {`${validInput && "valid" }`}  //


export default UpdatedValue;