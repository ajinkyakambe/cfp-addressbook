import './App.css';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddressBookForm from './Components/AddressBookForm/addressBookForm'
import Home from './Components/Home/home'
import{ToastContainer} from 'react-toastify'


function App() {
  return (
        <>
        <ToastContainer />        
        <Router>
        <Routes>
           <Route path="/home" element={<Home />} />
           <Route path="/add-address" element={<AddressBookForm />} />
           <Route path="/add-address/:addressEntityId" element={<AddressBookForm />} />
        </Routes>
       </Router>
        
        </>
      
     
  );
}

export default App;
