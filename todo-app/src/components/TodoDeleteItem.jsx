import React from 'react'

const TodoDeleteItem =({todo, deleteTodo, id, todoCompleted})=> {
  return (
    <div className="todolist">
    <p className={todo.Complated ? "tamamlandi" : "tamamlanmayan"}>
      {todo.todo}
    </p>
      <div>
      <i className=" fa fa-trash-o"
        onClick={() => {
          deleteTodo(id);
        }}
        ></i>
        <i className="fa fa-check"
          onClick={() => {
          todoCompleted(id);
        }}
        ></i>
      </div>
    </div>
  );
};
export default TodoDeleteItem;

