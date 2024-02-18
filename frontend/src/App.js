// import logo from './logo.svg';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './container/Header';
import Home from './container/Home';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
