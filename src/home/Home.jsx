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
            <h1>Hi  {authUser.data.username}, user</h1>
            <p>You're logged in AddressBook</p>

        
           
        </div>
    );
}
