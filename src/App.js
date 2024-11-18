import './App.css';
import MyNavbar from './Page Components/MyNavbar';
import MyCard from './Page Components/MyCard';
import LoginForm from './Page Components/LoginForm';
import Footer from './Page Components/Footer';
import Register from './Page Components/Register';
// import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MyNavbar/>

      {/* <BrowserRouter>
        <Router>
          <Route path='./LoginForm' element={LoginForm}/>
        </Router>
      </BrowserRouter> */}
      <LoginForm/>
      <Register/>
      <MyCard/>
      <Footer/>
    </div>
  );
}

export default App;
