import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Login } from './auth/Login/Login';
import { Main } from './pages/Main/Main';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Login/>} path="/login" />
          <Route element={
            <PrivateRoute>
              <Main/>
            </PrivateRoute>
          } path="/main" />
          <Route element={<Login/>} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
