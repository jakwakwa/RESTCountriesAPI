function Search() {
  return (
    <div className="searchContainer">
      <div className="search">
        <input type="text" placeholder="Search for a country..." />
      </div>
      <div className="filter">
        <select name="filter" id="filter">
          <option value="filter by region">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
        </select>
      </div>
    </div>
  );
}

export default Search;
