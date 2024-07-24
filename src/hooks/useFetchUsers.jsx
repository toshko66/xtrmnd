import { useState, useEffect } from 'react';
/*
Custom hook to fetch user data from an API.
It manages three states: `users`, `loading`, and `error`.
`users`: An array of user data fetched from the endpoint.
`loading`: A boolean indicating whether the data is currently being fetched.
`error`: An error object if there was an error during the fetch operation.
 */
const useFetchUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Error with fetching Data');
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { users, loading, error };
};

export default useFetchUsers;
