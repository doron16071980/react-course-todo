import logo from './logo.svg';
import './App.css';
import {Login} from './components/Login/login.js';
import { ToDoList } from './components/Todo/todo';
import { Header } from './components/Header/header.js';
import { Route, Routes } from "react-router-dom";

function App() {


  return (
    <div className="App">

            <Header>

            </Header>

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/todolist" element={ <ToDoList /> } />
            </Routes>
     
    </div>
  );
}

export default App;
