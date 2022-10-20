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
import Auth from './components/ReqAuth';
import AAuth from './components/ReqAdminAuth';
import BL from './components/layout/BasicLayout';
import Upload from './components/test/uploadImage';
import TestData from './components/test/displayBackendData'
import Login from './components/Login';
import SignUp from './components/SignUp';
import SignUpA from './components/SignUpAdmin';
import Admin from './components/Admin';

import Adminforms from './components/Adminforms';

import Shop from './components/Shop';
import Product from './components/Product';

import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';



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
              
              <Route path="/shop" element={<BL><Shop /></BL>}/>
              <Route path="/product" element={<BL><Product /></BL>}/>
              <Route path="/" element={<BL><App /></BL>}/>
              <Route path="/upload" element={<BL><Upload /></BL>}/>
              <Route path="/profile" element={<Auth><BL><Profile /></BL></Auth>}/>
              <Route path="/editprofile" element={<Auth><BL><EditProfile /></BL></Auth>}/>
              <Route path="/testData" element={<TestData />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/signup" element={<SignUp />}/>
              <Route path="/4da244d5-d9db-4563-a0f4-097087d8b337" element={<SignUpA />}/>
              <Route path="/admin" element={<AAuth><Admin /></AAuth>}/>
              <Route path="/adminforms" element={<Adminforms />}/>

            </Routes>
          {/* </BaseLayout> */}
        </Router>

      </PersistGate>
    </Provider>

  // </React.StrictMode>,
);
