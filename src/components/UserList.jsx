import useFetchUsers from '../hooks/useFetchUsers';

function UserList() {
    const { users, loading, error } = useFetchUsers();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id} className="border p-2 my-2">
                        <h3 className="text-xl text-white">{user.name}</h3>
                        <p>{user.username}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <p>{user.address && user.address.city ? (
                            <p className="text-sm text-gray-600">City: {user.address.city}</p>
                        ) : (
                            <p className="text-sm text-gray-600">City: Not Available</p>
                        )}</p>
                        <p>Checkout my website!  <span className='text-blue-500 cursor-pointer'>{user.website}</span></p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
