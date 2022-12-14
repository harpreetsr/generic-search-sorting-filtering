import './App.css';
import widgets from './mock-data/widgets';
import persons from './mock-data/persons';
import genericSearch from './utils/generic-search';
import { SearchInput } from './components/SearchInput.component';
import { useState } from 'react';
import genericSort from './utils/generic-sort';
import IProperty from './interfaces/ISorter';
import IWidget from './interfaces/IWidget';
import IPerson from './interfaces/IPerson';
import Sorters from './components/Sorters.component';
import { WidgetRenderer } from './components/renderers/WidgetRenderer.component';
import { PersonRenderer } from './components/renderers';
import genericFilter from './utils/genericFilters';
import Filters from './components/filters';
import IFilter from './interfaces/iFilter';

function App() {
  const [query, setQuery] = useState<string>('');
  const [showPersons, setShowPersons] = useState(false);
  const [widgetFilterProperties, setWidgetFilterProperties] = useState<
    Array<IFilter<IWidget>>
  >([]);
  const [personsFilterProperties, setPersonsFilterProperties] = useState<
    Array<IFilter<IPerson>>
  >([]);
  const [widgetSortProperty, setWidgetSortProperty] = useState<
    IProperty<IWidget>
  >({ property: 'title', isDescending: true });
  const [personSortProperty, setPersonSortProperty] = useState<
    IProperty<IPerson>
  >({ property: 'firstName', isDescending: true });

  const buttonText = showPersons ? 'Show widgets' : 'Show persons';
  return (
    <>
      <br />
      <button
        className="btn btn-primary"
        onClick={() => setShowPersons(!showPersons)}
      >
        {buttonText}
      </button>
      <br />
      <SearchInput setSearchQuery={setQuery} />

      {showPersons ? (
        <>
          <h2>People:</h2>
          <Sorters
            setProperty={(propertyType) => setPersonSortProperty(propertyType)}
            dataSource={persons}
          />
          <Filters
            object={persons[0]}
            properties={personsFilterProperties}
            onChangeFilter={(property) => {
              personsFilterProperties.includes(property)
                ? setPersonsFilterProperties(
                    personsFilterProperties.filter(
                      (widgetFilterProperty) =>
                        widgetFilterProperty !== property
                    )
                  )
                : setPersonsFilterProperties([
                    ...personsFilterProperties,
                    property,
                  ]);
            }}
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
            .filter((person) => genericFilter(person, personsFilterProperties))
            .sort((a, b) => genericSort(a, b, personSortProperty))
            .map((person) => {
              return <PersonRenderer {...person} />;
            })}
        </>
      ) : (
        <>
          <h2>Widgets</h2>
          <Sorters
            setProperty={(propertyType) => setWidgetSortProperty(propertyType)}
            dataSource={widgets}
          />
          <Filters
            object={widgets[0]}
            properties={widgetFilterProperties}
            onChangeFilter={(property) => {
              const propertyMatch = widgetFilterProperties.some(
                (widgetFilterProperty) =>
                  widgetFilterProperty.property === property.property
              );

              const fullMatch = widgetFilterProperties.some(
                (widgetFilterProperty) =>
                  widgetFilterProperty.property === property.property &&
                  widgetFilterProperty.isTruthySelected ===
                    property.isTruthySelected
              );

              if(fullMatch) {
                setWidgetFilterProperties([
                  ...widgetFilterProperties.filter(
                    (widgetFilterProperty) =>
                      widgetFilterProperty.property !== property.property
                  ),
                ])
              }
              else if(propertyMatch) {

                setWidgetFilterProperties([
                  ...widgetFilterProperties.filter(
                    (widgetFilterProperty) =>
                      widgetFilterProperty.property !== property.property
                  ),
                  property,
                ])              }
              else {
                setWidgetFilterProperties([
                  ...widgetFilterProperties,
                  property,
                ]);
              }
            }}
          />
          {widgets
            .filter((widget) =>
              genericSearch(widget, ['title', 'description'], query, false)
            )
            .filter((widget) => genericFilter(widget, widgetFilterProperties))
            .sort((a, b) => genericSort(a, b, widgetSortProperty))
            .map((widget) => {
              return <WidgetRenderer {...widget} />;
            })}
        </>
      )}
    </>
  );
}

export default App;
