import './App.css';
import Navigation from './Components/Navigation';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Courses from './Pages/courses';
import Discussions from './Pages/Discussions';
import Footer from './Components/Footer';

function App() {
  return (
   <>
    <Router>
    <Navigation/>
      <Routes>
      <Route path='/' element = {<Home/>} />
        <Route path='/courses' element = {<Courses/>} />
        <Route path='/discussions' element = {<Discussions/>} />
      </Routes>
      <Footer/>
    </Router>
   </>
  );
}

export default App;
