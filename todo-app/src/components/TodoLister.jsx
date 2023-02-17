import React from 'react'
import TodoDeleteItem from './TodoDeleteItem';

const TodoList = ({todoList, deleteTodo, todoCompleted}) => {
  return (
    <div className="todolist-container">
      {todoList.map((todo, index) => (
        <TodoDeleteItem
          id={index}
          todo={todo}
          key={index}
          deleteTodo={deleteTodo}
          todoCompleted={todoCompleted}
        />
      ))}
    </div>
  );
};
export default TodoList

