import React from 'react';
import ReactDOM from 'react-dom/client';
import "materialize-css/dist/css/materialize.min.css";
import App from './App.tsx';
import './index.css';
import { store } from "./store/store.ts";
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
