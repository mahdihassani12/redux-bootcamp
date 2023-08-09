import React , { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";

const UserView = () => {
    const user = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <>
            <h1>List of users</h1>
            <div>
                { user.loading && <div>Loading...</div> }
                { !user.loading && user.error ? <>Error: {user.error}</> : null }
                { !user.loading && user.users.length ? (
                    <ul>
                        {
                            user.users.map(user => (
                                <li key={user.id}>{user.name}</li>
                            ))
                        }
                    </ul>
                  )
                  :
                  null
                }
            </div>
        </>
    )
}

export default UserView;