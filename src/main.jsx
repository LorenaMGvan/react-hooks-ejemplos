import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainApp } from './09-useContext/MainApp';
// import { ContadorConCustomHook } from './01-useState/ContadorConCustomHook';
// import { CounterApp } from './01-useState/CounterApp';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { MultiCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/focusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/memorize';
// import { CallbackHook } from './06-memos/Callbackhook';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer';
import { HooksApp } from './HooksApp';

import './index.css';
import { TodoApp } from './08-useReducer/TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>

  // <React.StrictMode>
  // <FormWithCustomHook/>
  // <MultiCustomHooks />
  // <FocusScreen />
  // <Layout />
  // <Memorize />
  // <CallbackHook />
  // <Padre />
  // <TodoApp />
  // </React.StrictMode>,
)
