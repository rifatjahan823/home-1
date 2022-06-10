import logo from './logo.svg';
import './App.css';
import Home from './Page/Home';
import { Route, Routes } from 'react-router';
import Header from './Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
     <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>

    </div>
  );
}

export default App;
