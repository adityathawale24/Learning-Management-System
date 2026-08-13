import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Login from './pages/auth/login';
import Register from './pages/auth/register'
import Course from './pages/course/course';
import Courses from './pages/course/Courses';
import Profile from './pages/profile/profile';
import Learnings from './pages/learning/learnings';
import Home from './pages/landing/Home';
import DUsers from './pages/dashBoard/DUsers';
import DCourses from './pages/dashBoard/DCourses';
import ErrorPage from './pages/error/ErrorPage';
import AdminDashboard from './pages/dashBoard/AdminDashboard';
import AboutUs from './pages/about/AboutUs';
import ContactUs from './pages/contact/ContactUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/admin' Component={AdminDashboard}></Route>
          <Route path='/login' Component={Login}></Route>
          <Route path='/register' Component={Register}></Route>
          <Route path='/' Component={Home}></Route>
          <Route path='/courses' Component={Courses}></Route>
          <Route path='/course/:id' Component={Course}></Route>
          <Route path='/profile' Component={Profile}></Route>
          <Route path='/Learnings' Component={Learnings}></Route>
          <Route path='/Dcourses' Component={DCourses}></Route>
          <Route path='/Dusers' Component={DUsers}></Route>
          <Route path='/about' Component={AboutUs} />
          <Route path='/contact' Component={ContactUs} />
          <Route path='*' Component={ErrorPage}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
