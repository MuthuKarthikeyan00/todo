import logo from './logo.svg';
import './App.css';
import Input from './commbonent/input.js';
import Result from './commbonent/todoItem.js';
import { useState } from 'react';


function App() {

  const [item ,setItem]=useState([]);

  
  const showValue=(input)=>{
    setItem((preItem)=>{
         return[...preItem ,input]
     })
}

const delet=(id)=>{
  setItem((preItem)=>{
    return preItem.filter((item,index)=>{
      return index!== id;
    })
  })
}



return<div className="frame">

         <h1 className="heading">To-do-list</h1>
            <Input   item={item}   setItem={setItem}  showValue={showValue}/>
       <ul>
          {item.map((item,index)=>{
            return  <Result key={index} text={item} delet={delet} id={index}></Result>
       } )}
     </ul>
     </div>
   }
   

export default App;
