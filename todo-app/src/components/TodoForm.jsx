import React, {useState, useEffect} from 'react'

const TodoForm = ({ todoList, setTodoList }) => {
  const [inputValue, setInputValue] = useState(""); //inputtan girilen değere ulaşacak.

  useEffect(() => {
    const localTodoList = JSON.parse(localStorage.getItem("todoList")) || [];
    setTodoList(localTodoList);
  }, []);
      
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);


  const addTodo = () => {
    setTodoList([
      ...todoList,
      {
        todo: inputValue,
        Complated: false,
      },
    ]);
    setInputValue("");
  };
  return (
    <div className="container">
      <input
        type="text"
        id="form-input"
        placeholder="listeye eklemek için:"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          addTodo();
        }}
      >
        <i className="fa fa-plus"></i>
      </button>
  </div>
  );
};
export default TodoForm
