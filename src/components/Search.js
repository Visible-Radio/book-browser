import { useRef, useState } from "react";
import styled from "styled-components";
import {
  ButtonStyles,
  PageNavStyles as SearchOuterStyles,
} from "../styles/PageNavStyles";
import FilterOptions from "./FilterOptions";

const SearchStyles = styled.input`
  border: 2px solid var(--textCol);
  margin: var(--buttonMargin);
  font-size: 1rem;
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  border-radius: var(--borad);
  width: var(--textInputWidth);

  &:focus {
    outline-offset: 2px;
    outline: 2px solid var(--textCol);
  }

  @media (max-width: 500px) {
    min-height: 44px;
  }
`;

const Search = ({
  onSearchChange,
  onSearchSubmit,
  searchString,
  setSearchString,
  setIsByFirstEdition,
  isByFirstEdition,
  sortDirection,
  setSortDirection,
  sortMode,
  setSortMode
}) => {
  const [ filterIsOpen, setFilterIsOpen] = useState(false);
  const defaultText = 'Search for a book'
  const [ placeHolder, setPlaceHolder ] = useState(defaultText);

  const optionsBtnRef = useRef(null);

  const handleFocus = () => {
    setSearchString("");
    setPlaceHolder("");
  };

  const toggleFilterOpen = () => {
    setFilterIsOpen(!filterIsOpen);
  };

  const onInputBlur = () => {
    setPlaceHolder(defaultText)
  }

  return (
    <SearchOuterStyles>
      <SearchStyles
        value={searchString}
        type="search"
        onChange={onSearchChange}
        onFocus={handleFocus}
        onBlur={onInputBlur}
        placeholder={placeHolder}
      ></SearchStyles>
      <ButtonStyles onClick={onSearchSubmit}>Search</ButtonStyles>
      <ButtonStyles onClick={toggleFilterOpen} ref={optionsBtnRef}>Options</ButtonStyles>
      {filterIsOpen && (
        <FilterOptions
          setIsByFirstEdition={setIsByFirstEdition}
          isByFirstEdition={isByFirstEdition}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
          sortMode={sortMode}
          setSortMode={setSortMode}
          setFilterIsOpen={setFilterIsOpen}
          optionsBtnRef={optionsBtnRef}
        />
      )}
    </SearchOuterStyles>
  );
};

export default Search;
