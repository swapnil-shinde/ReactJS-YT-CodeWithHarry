import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

let name = 'Swapnil'
function App() {
  return (
    <div className="blank">
      <Navbar title='TextUtils' />
      <Textarea />
    </div>
  );
}

export default App;
