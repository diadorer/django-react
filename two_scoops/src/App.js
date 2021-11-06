import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Poll from './Poll';
import ChoiceCreator from './ChoiceCreator';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Poll /> } />
            <Route path="choices/add" element={ <ChoiceCreator /> } />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
