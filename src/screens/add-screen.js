import React from 'react';
import { useParams } from 'react-router-dom';

function AddScreen({a=123, b=234}) {
  const {paramA, paramB} = useParams()
  console.log(paramA, paramB)
  a = parseInt(paramA)
  b = parseInt(paramB)
  // console.log(props)
  // const a = props.a
  // const b = props.b
  // const {a, b} = props
  return(
      <div>
        <h2>Add</h2>
        a = {a}<br/>
        b = {b}<br/>
        {a} + {b} = {a+b}
      </div>
  )
}
export default AddScreen