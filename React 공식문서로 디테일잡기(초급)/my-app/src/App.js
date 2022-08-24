import './App.css';
import Compositon from './components/2-4.props/Compositon';
import Extration from './components/2-4.props/Extraction/Extration';
import ClassComponent from './components/2-5.State/ClassComponent';
import FunctionalComponent from './components/2-5.State/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <ClassComponent />
      <Extration />
      <Compositon />
    </div>
  );
}

export default App;
