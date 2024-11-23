import React from "react";
import styles from './SearchBar.module.css'

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form className={styles.searchBarWrapper} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search GitHub users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className={styles.searchBtn} type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
