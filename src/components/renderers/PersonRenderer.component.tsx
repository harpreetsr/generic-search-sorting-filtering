import React from 'react'
import Moment from 'react-moment'
import IPerson from '../../interfaces/IPerson'

export const PersonRenderer = ({
  firstName,
  lastName,
  birthDate,
  eyeColor
}: IPerson) => {
  return (
    <div className='col-12 p-3'>
      <div className='card bg-secondary'>
        <div className="card-body">
        <h3>
        👤&nbsp;{firstName} {lastName}
        </h3>
        <ul>
          <li>
            Has <b>{eyeColor}</b> eyes
          </li>
          <li>
          🎂&nbsp; <b><Moment date={birthDate} format="MMMM D, YYYY" /></b>
          </li>
        </ul>
        </div>
      </div>
    </div>
  )
}