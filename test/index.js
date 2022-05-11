
import React from 'react';
import ReactDOM from 'react-dom';

const Form = () => {
  return(
    <>
    <form action="http://127.0.0.1:5000/submit-student-data" method="post">
      First Name: <input type="text" name="firstName" />
      Last Name: <input type="text" name="lastName" />
      <input type="submit" />
    </form>
    </>
  )
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);
