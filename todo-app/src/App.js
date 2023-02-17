import "./App.css";
import TodoForm from "./components/TodoForm";
import React, { useState, useEffect } from "react";
import TodoLister from "./components/TodoLister";

function App() {
  const [todoList, setTodoList] = useState([]); // todo listesine gidecek

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);


  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo, index) => index !== id));
    //setTodoList(todoList.filter((todo, index) => index !==id)) 
    //filter metodunu kullanarak todoList'ten silinecek olan id'ye sahip olan öğe hariç tüm öğeleri yeni bir diziye kopyalıyoruz. 
  };


  const todoCompleted = (id) => {
    const updatedList = todoList.map((todo, index) => {
      if (index === id) {
    // const updatedList = todoList.map((todo) => {
    //   if (todo.id === id) {
        return {
          ...todo,
          Complated: !todo.Complated,
          //Completed: true,
        };
      } else {
        return todo;
      }
    });
    setTodoList(updatedList);
  };

  return (
    <div className='inclusive'>
      <h2>Todo List</h2>
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      <TodoLister
        todoList={todoList}
        deleteTodo={deleteTodo}
        todoCompleted={todoCompleted}
      />    
      </div>
    
      
      
  );
}

export default App;
