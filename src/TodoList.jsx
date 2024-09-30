import { useState } from "react";
import TodoTable from "./TodoTable";
import './Header.css'
import './App.css'
import './Description.css'

function TodoList() {

/*
Pilko Todolist sovellus pienempiin kokonaisuuksiin. Luo uusi komponentti niemeltä TodoTable ja
 siirrä taulukko sinne. Todotable on nk. stateless komponentti eli sillä ei ole yhtään state:a. 
 Se vain renderöi tehtävät taulukossa.
Sovelluksen komponenttipuun rakenne on seuraava:
App
   |
Todolist (Sisältää painikkeen, input elementit ja state:t)
   |
TodoTable (Sisältää html taulukon)
Huom! Myös funktion voi välittää props:ien avulla komponentipuussa parent komponentilta child komponentille. */

const [info, setInfo] =useState({desc:"", date: ""});
const [todos, setTodos] = useState([]);

const handleDescription = (event) => {
  setInfo({...info, desc: event.target.value});
};

const handleDate = (event) => {
  setInfo({...info, date: event.target.value});
};

const deleteTodo = (index) => {
  setTodos(todos.filter((todo, i) => i !== index));
}
  
const addTodo = () => {

  if (!info.desc || !info.date){
  alert("Write a description and a date")
  }

  else {
    setTodos([...todos, {...info}]);
    setInfo({desc:"", date: ""});
  }

};

    return(

        // fieldset & legend from article: https://css-tricks.com/how-to-add-text-in-borders-using-basic-html-elements/
        <>
          <header className='header'>
            <h2>Simple TodoList</h2>
          </header>
          <fieldset>
            <legend>Add todo:</legend>
            Description: <input onChange={handleDescription} value={info.desc} />
            Date: <input onChange={handleDate} value={info.date} />
            <button onClick={addTodo}>Add</button>   
          </fieldset>
        <TodoTable todos={todos} deleteTodo={deleteTodo} />

      </>
    )

}
  
export default TodoList;
