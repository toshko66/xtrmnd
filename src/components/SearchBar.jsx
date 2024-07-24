
const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="my-4">
            <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg w-full"
            />
        </div>
    );
};

export default SearchBar;
