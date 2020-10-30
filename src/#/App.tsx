import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {
//   createTodoActionCreator,
//   createTodoAsync,
// } from '../@store/todos/slice';

export const AppContainer: React.FC = () => {
  const dispatch = useDispatch();
  // const { loading } = useSelector(todosSelector);

  // useEffect(() => {
  //   dispatch(getFirstRender());
  // });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
