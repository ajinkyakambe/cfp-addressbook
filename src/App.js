import './App.css';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddressBookForm from '../src/Components/AddressBookForm/addressBookForm'
import Home from '../src/Components/Home/home'


function App() {
  return (
   
       <Router>
        <Routes>
           <Route path="/home" element={<Home />} />
           <Route path="/add-address" element={<AddressBookForm />} />
        </Routes>
       </Router>
     
  );
}

export default App;
