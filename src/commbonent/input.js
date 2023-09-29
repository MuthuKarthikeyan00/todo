import react, { useState } from 'react';
import './input.css';





function Input(params) {
    const [inputText,setInputText]=useState("");
   
     

    const Cvalue=(event)=>{
        setInputText(event.target.value);
    }

 
    



    return(
       
        <div >
          
            <input onChange={Cvalue} value={inputText}></input>

            <button className="btn" onClick={()=>{
               
               setInputText('');
                params.showValue(inputText);
            }}><span>+</span></button>

            

          
        </div>
   
    ); 
  
}

export default Input;