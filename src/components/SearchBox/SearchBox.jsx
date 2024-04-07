const SearchBox = ({ searchStr, onSearch }) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        value={searchStr}
        onChange={(e) => onSearch(e.target.value)}
        type="text"
        className="input"
        Plqaceholder="Search"
      />
      {searchStr && <button onClick={() => onSearch("")}>Reset</button>}
    </div>
  );
};

export default SearchBox;
