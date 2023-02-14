import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Login } from './auth/Login/Login';
import { Main } from './pages/Main/Main';
import PrivateRoute from './routes/PrivateRoute';
interface userCurrent{
  email: string,
  token: string,
}

function App() {

  const [user, setUser] = useState<userCurrent>({
    email:"",
    token:""
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Login setUser={setUser}/>} path="/login" />
          <Route element={
            <PrivateRoute isLogged={user?.token}>
              <Main/>
            </PrivateRoute>
          } path="/main" />
          <Route element={<Login setUser={setUser}/>} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
