import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

let name = 'Swapnil'
function App() {
  return (
    <div className="blank">
      <Navbar title='TextUtils' />
      <Textarea />
      <About/>
    </div>
  );
}

export default App;
