import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {PrivateComponents,PublicComponents,Shared} from  "./components";
import store from "./redux/store.js";
import { Provider } from 'react-redux';
const {Homepage,UserDetails} = PrivateComponents;
const {Login,Signup,ForgotPassword} = PublicComponents;
const { NotFoundError } = Shared;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path='forgot_password' element={<ForgotPassword />} />
      <Route path='homepage' element={<Homepage />} />
      <Route path='user_details' element={<UserDetails />} />
      <Route path='*' element={<NotFoundError />} />
     </Routes>
  </BrowserRouter>
  </Provider>
);
