import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
// import About from './components/About';

function App() {

  // Wheater dark mode is enabled or not
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if( mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <div className="blank">
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Textarea mode={mode}/>
      {/* <About/> */}
    </div>
  );
}

export default App;
