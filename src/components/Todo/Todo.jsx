import { useState } from "react";
import "./Todo.css";
import closeIcon from "./icons/delete_50px.png";
import reactIcon from "./icons/react_100px.png";




function Todo (){
    
const [todos, setTodos] = useState([])
        return (
        <>  <span className="react-icons">
                <img src={reactIcon} alt="react-icon" className="react-icon-1"/>
                <img src={reactIcon} className="react-icon-2" alt="react-icon" />

        </span>
            <div className="container">
                <div className="todo-content">
                    <h1 className="todo-title"> <span className="title">HiBro</span>   this is my todos </h1>
                 <input 
                type="text" 
                autoComplete="off"
               placeholder="todoname"
                className="todo-input"  
                onKeyUp={(evt) =>{
                    evt.preventDefault();
                    if(evt.keyCode === 13){
                        let newTodo = {
                            id: Math.random(),
                            title: evt.target.value,
                            isComplited: false
                        }
                        console.log( todos.length - 1 + 1 || 1)
                        setTodos([newTodo, ...todos])
                    }
                }}
            />
            <button type="button" className="click-btn">Click</button>
             <ul className="todo-list">
            {
                todos.map(todo => (
                    <li className="todo-item"  key={todo.id}>
                        <span>{todo.title}</span> 
                        <button
                        type="button"
                        className="close-btn"
                        onClick={
                        (btn) =>{
                        setTodos(
                        todos.filter(item => item.id !== todo.id)
                    )
                }
            }
                      > 
                         <img src={closeIcon} width="20" height="20" alt="" />
                    </button> 
             </li>

                ))
            }
        </ul>
                </div>
        </div>
         
        </>
    )

    
}
export default Todo