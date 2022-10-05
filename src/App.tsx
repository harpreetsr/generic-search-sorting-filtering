import './App.css';
import widgets from './mock-data/widgets';
import persons from './mock-data/persons';
import genericSearch from './utils/generic-search';
import { SearchInput } from './components/SearchInput.component';
import { useState } from 'react';
import genericSort from './utils/generic-sort';
import IProperty from './interfaces/IProperty';
import IWidget from './interfaces/IWidget';
import IPerson from './interfaces/IPerson';
import Sorters from './components/Sorters.component';
import { WidgetRenderer } from './components/renderers/WidgetRenderer.component';
import { PersonRenderer } from './components/renderers';

function App() {
  const [query, setQuery] = useState<string>('');
  const [showPersons, setShowPersons] = useState(false);
  const [widgetSortProperty, setWidgetSortProperty] = useState<
    IProperty<IWidget>
  >({ property: 'title' });
  const [personSortProperty, setPersonSortProperty] = useState<
    IProperty<IPerson>
  >({ property: 'firstName' });

  const buttonText = showPersons ? 'Show widgets' : 'Show persons';
  return (
    <>
      <br />
      <button className="btn btn-primary" onClick={() => setShowPersons(!showPersons)}>
        {buttonText}
      </button>
      <br />
      <SearchInput setSearchQuery={setQuery} />

      {showPersons ? (
        <>
          <h2>People:</h2>
          <Sorters
            object={persons[0]}
            setProperty={(property) => setPersonSortProperty({ property })}
          />

          {persons
            .filter((person) =>
              genericSearch(
                person,
                ['firstName', 'lastName', 'eyeColor'],
                query,
                false
              )
            )
            .sort((a, b) => genericSort(a, b, personSortProperty.property))
            .map((person) => {
              return <PersonRenderer {...person} />;
            })}
        </>
      ) : (
        <>
          <h2>Widgets</h2>
          <Sorters
            object={widgets[0]}
            setProperty={(property) => setWidgetSortProperty({ property })}
          />
          {widgets
            .filter((widget) =>
              genericSearch(widget, ['title', 'description'], query, false)
            )
            .sort((a, b) => genericSort(a, b, widgetSortProperty.property))
            .map((widget) => {
              return <WidgetRenderer {...widget} />;
            })}
        </>
      )}
    </>
  );
}

export default App;
