import './App.css';
import widgets from './mock-data/widgets';
import persons from './mock-data/persons';
import genericSearch from './utils/generic-search';

function App() {
  const query = '';

  return (
    <div className="App">
      <header className="App-header">
        <h2>Widgets</h2>
        {widgets.filter(widget => genericSearch(widget, ['title', 'description'], query, false)).map((widget) => {
          return (
            <h3>{widget.title}</h3>
          )
        })}

        {persons.filter(person => genericSearch(person, ['firstName', 'lastName', 'eyeColor'], query, false)).map((person) => {
          return (
            <h3>{person.firstName} {person.lastName}</h3>
          )
        })}
      </header>
    </div>
  );
}

export default App;
