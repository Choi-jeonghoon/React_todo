//todos배열을 props로 받아 오후, 이를 배열 내장 함수 map을 사용해서 여러개의 TOdoListItem 컴포넌트로 변환하여 보여준다.
import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      className="TodoList"
      width={500} //전체 크기
      height={500} //전체 높이
      rowCount={todos.length} //항목개수
      rowHeight={100} //항목 높이
      rowRenderer={rowRenderer} //항목을 렌더링 할 때 쓰는 함수
      list={todos} //배열
      style={{ outline: 'none' }} //List에 기본 적용되는 outline 스타일 제거
    />
  );
};

export default React.memo(TodoList);
