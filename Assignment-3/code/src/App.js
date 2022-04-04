import React from 'react';
import './App.css';
import Employee_Details from './Components/Employee_Details';


function App({employee}) 
{
  return (    
    <div className="App">
      <Employee_Details employee={employee}/>

    </div>
  );
}

export default App;
