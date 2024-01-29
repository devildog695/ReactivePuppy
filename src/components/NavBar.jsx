import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from "react";
import PropTypes from "prop-types";

export default function NavBar({ isSearch }) {
  const [navigating, setNavigating] = useState(false);

  return (
    <nav>
      <h1>Reactive PuppyBowl</h1>
      <SearchBar
        placeholder="Search..."
        isSearch={isSearch}
        navigating={navigating}
        setNavigating={setNavigating}
      />
      <div>
        <ul>
          <li>
            <Link onClick={() => setNavigating(true)} to={`/new`}>
              Add New Player
            </Link>
          </li>
          <li>
            <Link onClick={() => setNavigating(true)} to={`/`}>
              Current Players
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  isSearch: PropTypes.any,
};
