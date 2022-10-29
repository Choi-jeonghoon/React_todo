import { useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, seTodos] = useState([
    {
      id: 1,
      text: '리엑트의 기초 학습',
      checked: true,
    },
    {
      id: 2,
      text: '리엑트의 컴포넌트 학습2',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들기 학습3',
      checked: false,
    },
  ]);
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
