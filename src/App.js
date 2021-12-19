import logo from './logo.svg';
import './App.css';
import {Login} from './components/Login/login.js';
import { ToDoList } from './components/Todo/todo';
import { Header } from './components/Header/header.js';

function App() {


  return (
    <div className="App">

      <Header>

      </Header>

      <Login>

      </Login>
      <ToDoList></ToDoList>
      
    </div>
  );
}

export default App;
