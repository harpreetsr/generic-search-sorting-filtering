import React from 'react'

export interface ISortersProps<T> {
  object: T;
  setProperty: (property: keyof T) => void;
}

const Sorters = <T, >(props: ISortersProps<T>) => {
  const { object, setProperty } = props;

  return (
    <>
      <label htmlFor='sorters' className='mt-3'>
        Try Sorters!
      </label>
      <select
        id="sorters"
        className='custom-select'
        onChange={(e) => setProperty(e.target.value as any)}
      >
        {Object.keys(object as keyof T).map(key => {
          return (
            <option key={key} value={key}>
              Sort by '{key}'
            </option>
          )
        })}
      </select>
    </>
  )
}

export default Sorters;