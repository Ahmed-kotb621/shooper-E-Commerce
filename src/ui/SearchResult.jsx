import SearchItem from './SearchItem';

function SearchResult({ filtered, setIsFocused }) {
  return (
    <div className="no-scrollbar relative h-[400px] overflow-scroll  rounded-lg border-2  bg-slate-100 shadow-lg">
      <button
        className="absolute right-3 h-5 w-5   text-4xl  text-gray-800"
        onClick={() => setIsFocused(false)}
      >
        &times;
      </button>
      {filtered.map((item) => (
        <SearchItem
          image={item.grid_picture_url}
          name={item.name}
          id={item.id}
          setIsFocused={setIsFocused}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default SearchResult;