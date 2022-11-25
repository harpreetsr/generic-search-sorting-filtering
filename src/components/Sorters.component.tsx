import React from 'react'
import IProperty from '../interfaces/ISorter';

export interface ISortersProps<T> {
  dataSource: Array<T>;
  setProperty: (propertyType: IProperty<T>) => void;
}

const Sorters = <T, >(props: ISortersProps<T>) => {
  const { dataSource, setProperty } = props;

  const object = dataSource.length  > 0 ? dataSource[0] : {};

  return (
    <>
      <label htmlFor='sorters' className='mt-3'>
        Try Sorters!
      </label>
      <select
        id="sorters"
        className='custom-select'
        onChange={(e) => {
          const values = e.target.value.split("-");
          if(values.length === 2){
            setProperty({
              property: values[0] as any,
              isDescending: values[1] === "true"
            });
          }
        }}
      >
        {Object.keys(object as keyof T).map(key => {
          return (
            <>
              <option key={`${key}-true`} value={`${key}-true`}>
                Sort by '{key}'descending!
              </option>
              <option key={`${key}-false`} value={`${key}-false`}>
                Sort by '{key}' ascending!
              </option>
            </>
          )
        })}
      </select>
    </>
  )
}

export default Sorters;