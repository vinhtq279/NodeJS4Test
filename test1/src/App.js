import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const obj1 = {
  'ten': 'vinh',
  'age': '34',
};

function Child({ten: name1, age}) {
  return(
    <>
    <h2>Name: {name1}</h2>
    <h2>Age: {age}</h2>
    </>
  )
}

function App() {
  const [obj, setObj] = useState(obj1);

  const functionTest = ({name, ten}) => {
    return ten;
  }
  return (
    <div className="App">
      <Child {...obj} />
    </div>
  );
}

export default App;
