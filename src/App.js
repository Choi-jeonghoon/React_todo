import { useReducer, useState, useRef, useCallback } from 'react';
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

// function todoReducer(todos, action) {
//   switch (action.type) {
//     case 'INSERT':
//       {
//         type: 'INSERT', todos;
//         {
//           id: 1;
//           text: 'todo';
//           checked: false;
//         }
//       }
//       return todos.concat(action.todo);

//     case 'REMOVE':
//       {
//         type: 'REMOVE', todos;
//         {
//           id: 1;
//         }
//       }
//       return todos.filter((todo) => todo.id !== action.id);

//     case 'TOGGLE':
//       {
//         type: 'TOGGLE', todos;
//         {
//           id: 1;
//         }
//       }
//       return todos.map((todo) =>
//         todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
//       );
//     default:
//       return todos;
//   }
// }

function App() {
  // const [todos, setTodos] = useReducer(todoReducer, undefined, createBulkTodos);
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
      dispatchEvent({ type: 'INSERT', todo });
      // setTodos((todos) => todos.concat(todo));
      nextId.current += 1; //next 1씩 더하기
    },
    // [todos],
    [],
  );

  const onRemove = useCallback(
    (id) => {
      dispatchEvent({ type: 'REMOVE', id });
      // setTodos((todos) => todos.filter((todo) => todo.id !== id));
    },
    // [todos],
    [],
  );

  const onToggle = useCallback((id) => {
    dispatchEvent({ type: 'TOGGLE', id });
    // setTodos((todos) =>
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    //   ),
    // );
  }, []);
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
