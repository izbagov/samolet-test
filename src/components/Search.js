import React, { useContext, useState, useEffect } from "react";
import { Input } from "antd";
import { Link } from "react-router-dom";
import AppContext from "../context";
import { useDebounce } from "use-debounce";

const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [debouncedSearchValue] = useDebounce(searchValue, 1000);
  const regions = useContext(AppContext);

  const searchRegion = (value) => {
    if (value === "") {
      setSearchResult([]);
      setNotFound(false);
      return;
    }

    setSearchResult([]);
    setNotFound(false);

    const result = [];

    regions.forEach((region) => {
      if (region.territory.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
        result.push(region);
      }
    });

    if (result.length === 0) {
      setNotFound(true);
    }

    setSearchResult(result);
  };

  const handleClickResult = () => {
    setSearchResult([]);
    setSearchValue("");
  };

  useEffect(() => {
    searchRegion(debouncedSearchValue);
  }, [debouncedSearchValue]); // eslint-disable-line

  return (
    <div className="searchform">
      <Input
        placeholder="Поиск по региону"
        onChange={(e) => setSearchValue(e.target.value)}
        style={{ width: 240 }}
        size="large"
        value={searchValue}
      />
      {notFound && (
        <div className="search-result">
          <h3>Ничего не найдено..</h3>
        </div>
      )}
      {searchResult.length > 0 && (
        <div className="search-result">
          {searchResult.map(({ territory, order }) => (
            <div className="search-result__item" key={order}>
              <Link
                key={order}
                to={`/region/${order}`}
                onClick={handleClickResult}
              >
                {territory}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
