import React from 'react'

type student={
  id:number;
  name:string;
  age:number
}

export default function Student(props:student) {
  return (
    
    <div className='m-16 tracking-wide leading-8'>
      <h1 className='text-2xl underline'>Class 11 Assignment</h1>
      <p>ID: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}
