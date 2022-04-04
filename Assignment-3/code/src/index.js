import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// creating employee object
const employee={
  Backword_arrow:"<",
  Forword_arrow:">",

  name:"Alan Ford",
  id:"00005152",
  Appointement:"9:00 (24-05-2016)",
  Email:"alan.form@email.nl",
  Phone:"+31123456789",
  Status:"In Progress",
  Door:"Mark",
  Time:"10:30 (25-05-2016)",
  ProfileImg :"https://www.w3schools.com/howto/img_avatar.png",
  EmpRole : "Boltaart Bosbessen",
  info:"Overheerlijke Boltaart met Bosbesseb uit de keuken van de Bijenkorf"
};


ReactDOM.render(
  <React.StrictMode>
    <App employee={employee}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
