import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SelectDishes from './components/SelectDishes';
import Instruction from './components/Instruction';
function App() {
  return (
 <div className='app'>
        <Routes>
          <Route exact path="/" element={<SelectDishes/>}></Route>
          <Route exact path="/instruction" element={<Instruction/>}></Route>
        </Routes>
 </div>

  );
}

export default App;
