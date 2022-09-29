import './App.css';
import widgets from './mock-data/widgets';
import persons from './mock-data/persons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Widgets</h2>
        {widgets.map((widget) => {
          return (
            <h3>{widget.title}</h3>
          )
        })}

        {persons.map((person) => {
          return (
            <h3>{person.firstName} {person.lastName}</h3>
          )
        })}
      </header>
    </div>
  );
}

export default App;
