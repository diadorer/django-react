import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Poll from './Poll';
import Polls from './Polls';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Polls /> } />
            <Route path="polls/:pollId" element={ <Poll /> } />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
