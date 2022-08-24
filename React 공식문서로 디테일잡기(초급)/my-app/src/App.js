import './App.css';
import Compositon from './components/2-4.props/Compositon';
import Extration from './components/2-4.props/Extraction/Extration';
import ClassComponent from './components/2-5.State/ClassComponent';
import ClassComponent2 from './components/2-6.LifeCycle/ClassComponent';
import FunctionalComponent from './components/2-5.State/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent2 />
      {/* <FunctionalComponent /> */}
      {/* <ClassComponent /> */}
      {/* <Extration /> */}
      {/* <Compositon /> */}
    </div>
  );
}

export default App;
