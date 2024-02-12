
import './App.css';
import Parent from './components/Parent';
import ClearUp from './components/useeffect/clearup';
// import UseEffect from './components/useeffect/useeffect';
// import UseState from './components/usestate/usestate';

function App() {
  return (
    <div className="App">
     <p>Learning react hooks</p>
     {/* <UseState/> */}
     {/* <UseEffect/> */}
     <ClearUp/>
     <Parent/>
     
    </div>
  );
}

export default App;
