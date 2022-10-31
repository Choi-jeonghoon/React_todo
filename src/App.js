import { useState, useRef, useCallback } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: 1,
      text: `할일${i}`,
      checked: false,
    });
  }
  return array;
}

function App() {
  const [todos, setTodos] = useState(createBulkTodos);
  // function App() {
  //   const [todos, setTodos] = useState([
  //     {
  //       id: 1,
  //       text: '리엑트의 기초 학습',
  //       checked: true,
  //     },
  //     {
  //       id: 2,
  //       text: '리엑트의 컴포넌트 학습2',
  //       checked: true,
  //     },
  //     {
  //       id: 3,
  //       text: '일정 관리 앱 만들기 학습3',
  //       checked: false,
  //     },
  //   ]);
  //고윳값으로 사양될 id
  //ref를 사용하여 변수 담기
  // const nextId = useRef(4);
  const nextId = useRef(2501);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId.current += 1; //next 1씩 더하기
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  });
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
