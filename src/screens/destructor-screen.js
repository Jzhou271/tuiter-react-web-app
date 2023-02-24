import React from 'react';

function DestructorScreen() {
  const house = {
    rooms: 3,
    baths: 2,
    sqft: 1500,
  }
  const {rooms, baths, sqft} = house
  const colors = ['warning', 'primary', 'danger']
  const [warning, primary, danger] =colors
  return(
      <div>
        <h1>Destructor</h1>
        <h2>Destrcting objects</h2>
        <h3>House</h3>
        Rooms: {rooms}<br/>
        Baths: {baths}<br/>
        SQFT: {sqft}<br/>
        <h3>Colors</h3>
        Warning: {warning}<br/>
        Primary: {primary}<br/>
        Danger: {danger}<br/>
      </div>
  )
}
export default DestructorScreen