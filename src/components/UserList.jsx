import useFetchUsers from '../hooks/useFetchUsers';
import UserCard from './UserCard';
import SearchBar from './SearchBar';
import LoadingSpiner from './LoadingSpiner';
import { useState } from 'react';

function UserList() {
    const { users, loading, error } = useFetchUsers();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    /*if we want to moove the Search bar around the project and add more complexity around the project we should
    consider using Context API or Even Redux depending on the scalability and complexity of the project.
    */

    if (loading) {
        return (
            <LoadingSpiner />
        );
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container mx-auto items-center flex flex-col">
            <h1 className="text-4xl font-bold text-white mb-4">USER LIST</h1>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id} className="my-2">
                        <UserCard user={user} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
