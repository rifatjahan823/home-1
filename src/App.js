import logo from './logo.svg';
import './App.css';
import Home from './Page/Home';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div >
     <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>

    </div>
  );
}

export default App;
