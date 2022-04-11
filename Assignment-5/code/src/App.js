import React from 'react';
import './App.css';
import LandingPage from './LandingPage';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import Postview from './Postview';
import PostviewPage from './PostviewPage';
function App() {
  return (
    <div className="wrapper">
      {/* <LandingPage />  */}
      <BrowserRouter>
        <Routes>
            <Route path='*' element={<LandingPage/>}/>
            <Route path='./PostviewPage.js'element={<PostviewPage/>}/>
            {/* <Postview/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;