import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
// import About from './components/About';

let name = 'Swapnil'
function App() {
  return (
    <div className="blank">
      <Navbar title='TextUtils' />
      <Textarea />
      {/* <About/> */}
    </div>
  );
}

export default App;
