
import './App.css';
import Parent from './components/Parent';
import ClearUp from './components/useeffect/clearup';
import UseEffect from './components/useeffect/useeffect';
import UseState from './components/usestate/usestate';
import UseReducerHook from './components/usereducer/usereducer';
import RefHooks1 from './components/useref/refhooks1';
import RefHooks2 from './components/useref/refhooks2';
function App() {
  return (
    <div className="App">
     <p>Learning react hooks</p>
     <UseState/>
     <UseEffect/>
     <ClearUp/>
     <Parent/>
     <UseReducerHook/>
     <RefHooks1/>
     <RefHooks2/>

    </div>
  );
}

export default App;
