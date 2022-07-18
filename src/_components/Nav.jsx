import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '_store';

export { Nav };

function Nav() {
    const authUser = useSelector(x => x.auth.user);
    const dispatch = useDispatch();
    const logout = () => dispatch(authActions.logout());

    // only show nav when logged in
    if (!authUser) return null;
    
    return (
        <nav className="navbar navbar-expand navbar-dark bg-darkmod">
            <div className="navbar-nav">
                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                <NavLink to="/abhome" className="nav-item nav-link">AddressBookHome</NavLink>
                <NavLink to="/add-address" className="nav-item nav-link">Add Address Entry</NavLink>
                <button onClick={logout} className="btn btn-link nav-item nav-link">Logout</button>
            </div>
        </nav>
    );
}