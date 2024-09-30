import React from "react";
import './Header.css'
import './App.css'
import './Description.css'

function TodoTable({todos, deleteTodo}) {
    return (
        <table className='App'>
          <thead>
            <th>Date</th><th>Description</th>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.date}</td><td>{todo.desc}</td><td><button onClick={() => deleteTodo(index)}>Delete</button></td>
            </tr>
            ))}
          </tbody>
        </table>
    );
}

export default TodoTable;