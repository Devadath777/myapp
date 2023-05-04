import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Ademp from './components/Ademp';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/ademp" element={<Ademp/>}></Route>
        </Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
