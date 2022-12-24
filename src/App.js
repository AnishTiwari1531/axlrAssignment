import './App.css';
import Shapes from './Components/Shapes';

function App() {
  return (
    <div>
      <h1>DRAG AND DROP</h1>
      <div className="container">
        <div id='left'>
          <h1>LEFT</h1>
          <Shapes/>
        </div>
        <div id='middle'>
          <h1>MIDDLE</h1>
        </div>
        <div id='right'>
          <h1>RIGHT</h1>
          <button className='btn' >EDIT</button>
          <button className='btn' >SAVE</button>
          <button className='btn' >DELETE</button>
          <button className='btn' >REMOVE</button>
        </div>
      </div>
    </div>
  );
}

export default App;
