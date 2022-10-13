import React from 'react';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
// import { configureStore } from '@reduxjs/toolkit'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'

import './index.css';

import store from './slice/store';

// import BaseLayout from './components/layout/BaseLayout';
import App from './App';
import Upload from './components/test/uploadImage';
import Login from './components/Login';
import SignUp from './components/SignUp';


// const store = configureStore({
//   reducer: {
//     ToDo put reducers here
//   },
//   middleware: [thunk]
// })

const persistor = persistStore(store)
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  // <React.StrictMode>

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <Router>
          {/* <BaseLayout> */}
            <Routes>

              <Route path="/" element={<App />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/upload" element={<Upload />}/>
              <Route path="/signup" element={<SignUp />}/>

            </Routes>
          {/* </BaseLayout> */}
        </Router>

      </PersistGate>
    </Provider>

  // </React.StrictMode>,
);
