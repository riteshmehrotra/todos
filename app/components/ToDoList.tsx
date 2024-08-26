'use client'
import { useEffect, useState } from "react";
import ToDo from "./ToDo"

const ToDoList = () => {
let [toDoLst,setToDoLst] = useState([]);

useEffect(()=>{
    fetch(`/api/todos`)
    .then(res=>res.json())
    .then(data=> setToDoLst(data))
},[])

const todoRender = toDoLst && toDoLst.map((item:any)=>{ 
    return <div key={item.title} title="toDoCard"><ToDo item={item}></ToDo><hr/></div>
    });

    return <div>
        {todoRender}
    </div>
}


export default ToDoList;