// import './tailWind.css'

const Search = ({ search, setSearch }) => {
    return (
        <div className="flex items-center border pl-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-md overflow-hidden max-w-md w-full pr-3">
            <input type="text" placeholder="Search task" className="w-full h-full outline-none text-gray-500 placeholder-stone-400 text-x" value={search} onChange={(e) => setSearch(e.target.value)} />
            <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 30 30"
                fill="#6B7280"
                >
            <path m="..." />
            </svg>
        </div>
    );
};

export default Search;