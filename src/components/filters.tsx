import React from 'react'

interface IFiltersProps<T> {
  object: T;
  properties: Array<keyof T>
  onChangeFilter: (propertty: keyof T) => void;
}

export default function Filters<T>({
  object,
  properties,
  onChangeFilter
}: IFiltersProps<T>) {

  return (
    <div className='p-1 m-2'>
      <label className='mt-3'>Filters! Try us tool!</label>
      {Object.keys(object as keyof T).map(key => {
          return (
            <>
              <input
                type="checkbox"
                id={key}
                onChange={() => onChangeFilter(key as any)}
                value={key}
                checked={properties.some(property => property === key)}
                className="m-1 ml-3"
              />
              <label htmlFor={key}>'{key}' is truthy</label>
            </>
          )
        })}
    </div>
  )
}