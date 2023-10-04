import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {

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
    // Commenting the Router Login due to Hosting on GitHub
    <Router>
      <div className="blank">
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <Routes>
          <Route path="/" element={<Textarea mode={mode} alertMsg={alertMsg} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"/>} />
          <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
      </div>
    </Router>

      // <div className="blank">
      //   <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      //   <Alert alert={alert}/>
      //   <Textarea mode={mode} alertMsg={alertMsg} />
      //   {/* <About /> */}
      // </div>

  );
}

export default App;
