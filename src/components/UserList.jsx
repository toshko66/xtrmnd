import useFetchUsers from '../hooks/useFetchUsers';

function UserList() {
    const { users, loading, error } = useFetchUsers();

    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
                <div role="status">
                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>

        )
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    //both IF's could be handled with ternary operator but it makes the code harder to read

    return (
        <div className="container mx-auto items-center flex flex-col ">
            <h1 className="text-2xl font-bold mb-4">User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id} className="  my-2">
                        <div className="max-w-xs bg-gray-900 shadow-lg rounded-lg overflow-hidden my-4 ">
                            <img
                                className="w-full h-full items-center object-cover object-center"
                                src={`https://i.pravatar.cc/500?img=${user.id}`}
                                alt={`${user.name}'s Avatar`}
                            />

                            <div className="py-4 px-6">
                                <h3 className="text-2xl font-semibold text-white">{user.name}</h3>
                                <h3 className="text-sm font-semibold text-gray-500">@{user.username}</h3>
                                <p className="py-2 text-lg text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, eligendi saepe. </p>
                                <div className="flex items-center mt-4 text-gray-500">
                                    <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                                        <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z" /><g><path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z" /></g>
                                    </svg>
                                    <h3 className="px-2 text-sm">{user.company.name}</h3>
                                </div>
                                <div className="flex items-center mt-4 text-gray-500">
                                    <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                                        <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
                                    </svg>
                                    <h3 className="px-2 text-sm">{user.address.city}</h3>
                                </div>
                                <div className="flex items-center mt-4 text-gray-500">
                                    <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                                        <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
                                    </svg>
                                    <h3 className="px-2 text-sm">{user.email}</h3>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
