import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {

  // Wheater dark mode is enabled or not
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if( mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      alertMsg("success", "Dark mode has been enabled!")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      alertMsg("success", "Light mode has been enabled!")
    }
  }

  const alertMsg = (type, message) => {
    setAlert({
      type,
      message
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <Router>
      <div className="blank">
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>

        <Routes>
          <Route path="/" element={<Textarea mode={mode} alertMsg={alertMsg} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
