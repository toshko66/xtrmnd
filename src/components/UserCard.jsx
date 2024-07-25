const UserCard = ({ user }) => {
    return (
        <div className="max-w-52 sm:max-w-64 md:max-w-xs lg:max-w-sm xl:max-w-md bg-gray-900 shadow-lg rounded-lg overflow-hidden my-4 mx-auto">
            <img
                className="w-full h-48 sm:h-56 md:h-64 object-cover object-center"
                src={`https://i.pravatar.cc/500?img=${user.id}`}
                alt={`${user.name}'s Avatar`}
            />

            <div className="py-4 px-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold font-UbuntuReg text-white">{user.name}</h3>
                <h4 className="text-sm sm:text-base font-semibold text-gray-500">@{user.username}</h4>
                <p className="py-2 text-sm sm:text-base md:text-lg font-Ubuntu text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, eligendi saepe.</p>
                
                <div className="flex items-center mt-4 text-gray-500 space-x-2">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6 fill-current" viewBox="0 0 512 512">
                        <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z" />
                    </svg>
                    <h4 className="text-sm">{user.company.name}</h4>
                </div>

                <div className="flex items-center mt-4 text-gray-500 space-x-2">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6 fill-current" viewBox="0 0 512 512">
                        <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
                    </svg>
                    <h4 className="text-sm">{user.address.city}</h4>
                </div>

                <div className="flex items-center mt-4 text-gray-500 space-x-2">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6 fill-current" viewBox="0 0 512 512">
                        <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
                    </svg>
                    <h4 className="text-sm">{user.email}</h4>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
