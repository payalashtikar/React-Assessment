// import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
  {/* Start your React code here */}
  <img src = {employee.profileImg}/>

  <h1 className="empname">{employee.name}</h1>

  <p className='loc'>Location</p>
  <h4 className='data'>{employee.location}</h4>

  <p className='info'>Blood group</p>
  <h4 className='data'>{employee.bloodGroup}</h4>

  <p className='info'>Age</p>
  <h4 className='data'>{employee.age}</h4>

</div>
)
}



export default App;
