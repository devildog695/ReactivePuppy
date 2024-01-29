import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ placeholder, navigating, setNavigating }) {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState(placeholder);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/?search=${searchText}`);
  };
  const handleChange = (event) => {
    setNavigating(false);
    const value = event.target.value;
    setSearchText(value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder={placeholder}
          value={(navigating ? "" : searchText) || ""}
          onChange={handleChange}
        />
        <button className="search-button" type="submit">
          Search Now
        </button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  navigating: PropTypes.bool.isRequired,
  setNavigating: PropTypes.func.isRequired,
};
