import { Component } from 'react';
import { Listing } from './components/Listing';
// import SomethingElse, { names } from './components/Something';
import './App.css';

let students = [
  {
    id: 1,
    name: 'Harry',
    house: 'Griffindor'
  },
  {
    id: 2, 
    name: 'Hermione',
    house: 'Griffindor'
  },
  {
    id: 3, 
    name: 'Ron',
    house: 'Griffindor'
  },
  {
    id: 4, 
    name: 'Malfloy',
    house: 'Slitherin'
  },
  {
    id: 5, 
    name: 'Longbottom',
    house: 'Hufflepuff'
  }
]


let teachers = [
  {
    id: 1,
    name: 'Dumbledore',
    field: 'principle',
    students: [
      {
        id: 1,
        name: 'Harry',
        house: 'Griffindor'
      },
      {
        id: 2, 
        name: 'Hermione',
        house: 'Griffindor'
      },
      {
        id: 3, 
        name: 'Ron',
        house: 'Griffindor'
      }
    ]
  }, 
  {
    id: 2, 
    name: 'Snape',
    field: 'black magic',
    students: []
  }, 
  {
    id: 3, 
    name: 'Trelawny',
    field: 'Divination',
    students: []
  }
]

const App = () => {
  return (
    <div className="App">
      <p>App component</p>
      <Listing students={students} teachers={teachers} />
    </div>
  );
}

export default App;