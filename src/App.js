import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div style={{width:"100%", height:"100vh"}} className=' bg-dark d-flex justify-content-center align-items-center'>
    <div className='border rounded p-3 w-50 bg-light' >
      <h2 className='text-center mt-5'>Counter Application</h2>
      <Counter/>
    </div>
    </div>
  );
}

export default App;
