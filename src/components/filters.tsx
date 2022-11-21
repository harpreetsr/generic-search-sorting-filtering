import React from 'react'
import IFilter from '../interfaces/iFilter';

interface IFiltersProps<T> {
  object: T;
  properties: Array<IFilter<T>>
  onChangeFilter: (propertty: IFilter<T>) => void;
}

export default function Filters<T>({
  object,
  properties,
  onChangeFilter
}: IFiltersProps<T>) {

  return (
    <div className='p-1 m-2'>
      <label className='mt-3'>Filters! Try us tool!</label>
      <br />
      {Object.keys(object as keyof T).map(key => {
          return (
            <>
              <input
                type="checkbox"
                id={`${key}-true`}
                onChange={() => onChangeFilter({property: key as any, isTruthySelected: true})}
                value={key}
                checked={properties.some(property => property.property === key && property.isTruthySelected)}
                className="m-1 ml-3"
              />
              <label htmlFor={`${key}-true`}>'{key}' is truthy</label>
              <input
                type="checkbox"
                id={`${key}-false`}
                onChange={() => onChangeFilter({property: key as any, isTruthySelected: false})}
                value={key}
                checked={properties.some(property => property.property === key && !property.isTruthySelected)}
                className="m-1 ml-3"
              />
              <label htmlFor={`${key}-false`}>'{key}' is falsy</label>
              <br />
            </>
          )
        })}
    </div>
  )
}