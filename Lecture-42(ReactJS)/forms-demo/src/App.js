import './App.css';
import Person from './Person';

function App() {
  return (
    <div className="App">
      <Person name="Mayank" age="22" color="Green">
        <p>This is a para inside closing tag of person</p>
        <h1>This is heading inside the person closing tag</h1>
      </Person>
      <Person name="Saurabh" age="20" color="Purple" />
      <Person name="Kunal" age="18" color="Orange" />
      <Person name="Kunal" age="18" color="Orange" />
      <Person name="Kunal" age="18" color="Orange" />
    </div>
  );
}

export default App;
