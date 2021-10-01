import './App.css';
import MyNav from './components/MyNav'
import MyRow from './components/MyRow';

function App() {
  return (
    <div className="App">
      <MyNav />
      <MyRow query={'harry%20potter'}/>
    </div>
  );
}

export default App;
