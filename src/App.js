import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Courses from './components/Courses';
import IndCourse from './components/IndCourse';
import AddCourse from './components/AddCourse';
import Navbar from './components/<Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Home from './components/Home';
import Profile from './components/Profile';

function App() {

  return (
    <>
   <Router>
    <Routes>
      <Route path='/' element={
        <>
        <Navbar/>
        <Home/>
        </>
      }/>
      <Route path='/course' element={<Courses/>} />
      <Route path='/:id' element={<IndCourse/>} />
      <Route path='/addcourse' element={<AddCourse/>} />
      <Route path='/profile/' element={<Profile/>} />
    </Routes>
   </Router>
   <ToastContainer />
    </>
  
  );
}

export default App;