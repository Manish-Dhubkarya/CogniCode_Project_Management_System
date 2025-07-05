import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './Screens/LoginPage';
import Profile from './Screens/Profile';

function App() {
  return(
    <div className='font-librefranklin'>
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </Router>
</div>
  )
}

export default App;
