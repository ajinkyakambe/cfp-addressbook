import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';

import { history } from '_helpers';
import { Nav, PrivateRoute } from '_components';
import { Home } from 'home';
import { Login } from 'login';
import { Registration } from 'registration';
import AddressBookForm from './Components/AddressBookForm/addressBookForm'
import AddressBookHome from './Components/Home/home'
import{ToastContainer} from 'react-toastify'
import './App.scss'



export { App };

function App() {
    // init custom history object to allow navigation from 
    // anywhere in the react app (inside or outside components)
    history.navigate = useNavigate();
    history.location = useLocation();

    return (
        
        <div className="app-container bg-light">
            <ToastContainer /> 
            <Nav />
            <div className="container-full">
                <Routes>
                <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                <Route path="/abhome" element={
                            <PrivateRoute>
                                <AddressBookHome />
                            </PrivateRoute>
                        } 
                    />
                <Route path="/add-address" element={
                            <PrivateRoute>
                                <AddressBookForm />
                            </PrivateRoute>
                            }
                     />
                <Route path="/add-address/:addressEntityId" element={
                             <PrivateRoute>
                                <AddressBookForm />
                             </PrivateRoute>
                            } 
                    />

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </div>
    );
}
