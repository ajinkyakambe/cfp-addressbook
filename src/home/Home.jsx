import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userActions } from '_store';

export { Home };

function Home() {
    const dispatch = useDispatch();
    const { user: authUser } = useSelector(x => x.auth);
    

    useEffect(() => {
        dispatch(userActions.getAll());
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    

    return (
        <div>
            <div className="col-md-6 offset-md-3 mt-5">
            <div className="alert alert-info">
            <p>You're logged in AddressBook</p>
            </div>
            <div className="card">
             <h4 className="card-header">Welcome user, {authUser.data.username}</h4>
                <div className="card-body">
                      
                      <p>Username: {authUser.data.username}</p>
                      <p>Password: {authUser.data.password}</p>
                       <p>Email:{authUser.data.email}</p>
            </div>
            </div>
            </div>
        </div>
    );
}
