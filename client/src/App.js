// import logo from './logo.svg';
import './App.css';
import firebaseInit from './firebaseInit';
import logo from './logo1.png';



function App() {
  console.log(firebaseInit);
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Hello Alcohol-Map
        </p>

      </header>
    </div>
  );
}

export default App;
