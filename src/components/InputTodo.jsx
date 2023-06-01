import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props; //分割代入
  return (
    <div className="input-area">
      <input
        id="add-text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick} id="add-button">
        追加
      </button>
    </div>
  );
};
