
import './App.css';
import Parent from './components/Parent';
import ClearUp from './components/useeffect/clearup';
// import UseEffect from './components/useeffect/useeffect';
// import UseState from './components/usestate/usestate';
import UseReducerHook from './components/usereducer/usereducer';

function App() {
  return (
    <div className="App">
     <p>Learning react hooks</p>
     {/* <UseState/> */}
     {/* <UseEffect/> */}
     <ClearUp/>
     <Parent/>
     <UseReducerHook/>

    </div>
  );
}

export default App;
