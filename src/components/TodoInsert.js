import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
import React from 'react';

const TodoInsert = () => {
  return (
    <div>
      <from className="TodoInsert">
        <input placeholder="할 일을 입력해주세요" />
        <button type="submit">
          <MdAdd />
        </button>
      </from>
    </div>
  );
};

export default TodoInsert;
