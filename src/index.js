import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css';
import App from './components/app/App';
import store from './store/items';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>      
  </React.StrictMode> 
);


