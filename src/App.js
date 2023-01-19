import './App.css';
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from './Components/Navbar';
import Dashboard from './Modules/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormPage } from './views/FormPage';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <div id="App">
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/formulario" element={<FormPage/>} />
          <Route path="/" element={<Navigate to="/dashboard"/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
