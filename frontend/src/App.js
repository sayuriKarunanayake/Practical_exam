import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import InsertUser from './components/InsertUser';
//import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
        <Route exact path="/adduser" element={<InsertUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
