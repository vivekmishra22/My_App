import './App.css';
import MyNavbar from './Page Components/MyNavbar';
import MyCard from './Page Components/MyCard';
import LoginForm from './Page Components/LoginForm';
import Footer from './Page Components/Footer';
import Register from './Page Components/Register';
// import MyList from './Page Components/MyList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      {/* <MyList/> */}

      <BrowserRouter>
        <Routes>
        <Route path='/Login' element={<LoginForm/>}/>
        <Route path='/Register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
      {/* <LoginForm/> */}
      {/* <Register/> */}
      <MyCard/>
      <Footer/>
    </div>
  );
}

export default App;
