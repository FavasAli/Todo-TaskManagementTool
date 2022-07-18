import './App.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import TodoScreen from './screens/TodoScreen';

function App() {
  return (
    <Router >
      <Header/>
      <main>
        <Routes>
          <Route path='/register' element={<RegisterScreen/>}/>
          <Route path='/login' element={<LoginScreen/>}/>
          <Route path='/addtodo' element={<HomeScreen/>}/>
          <Route path='/' element={<TodoScreen/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
