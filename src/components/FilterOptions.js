import { useEffect, useRef } from "react";
import styled from "styled-components";

const FilterOptionsStyles = styled.div`
  background-color: var(--backgroundCol);
  top: 100%;
  position: absolute;
  min-width: 320px;
  border: 2px solid var(--textCol);
  box-shadow: var(--boxShadow);
  padding: var(--pad);
  border-radius: var(--borad);
  display: flex;
  flex-flow: row wrap;
  z-index: 2;

  form {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  label {
    min-width: max-content;
  }

  div {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
  }

  input[type="radio"] {
    width: 2rem;
    height: 2rem;
  }
`;

const FilterOptions = ({ setIsByFirstEdition, isByFirstEdition, sortMode, setSortMode, sortDirection, setSortDirection, setFilterIsOpen, optionsBtnRef }) => {

  const optionsRef = useRef(null);

  const handleOutsideClick = (event) => {
    // close list on click outside of component
    if (optionsRef.current && optionsRef.current.contains(event.target)) return;
    if (optionsBtnRef.current && optionsBtnRef.current === event.target) return;
    setFilterIsOpen(false);
  }

  useEffect(()=> {
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    }
  });

  const handleFirstEditionToggle = () => {
    setIsByFirstEdition(!isByFirstEdition);
  };

  const hanldeSortDirectionToggle = (event) => {
    setSortDirection(Number(event.target.value));
    setSortMode('date');
  }

  const handleSortModeToggle = () => {
    setSortMode(sortMode === 'date' ? 'title' : 'date');
  }

  return (
    <FilterOptionsStyles ref={optionsRef}>
      <form>
        <h3>Filter Options</h3>
        <div>
          <input
            type="radio"
            name="filterType"
            value="title"
            id="byTitle"
            checked={sortMode === 'title'}
            onChange={handleSortModeToggle}
          ></input>
          <label htmlFor="byTitle">By title</label>
        </div>
        <div>
          <input
            type="radio"
            name="filterType"
            value={-1}
            id="newestFirst"
            checked={sortMode === 'date' && sortDirection === -1}
            onChange={hanldeSortDirectionToggle}
          ></input>
          <label htmlFor="newestFirst">Newest publications first</label>
        </div>
        <div>
          <input
            type="radio"
            name="filterType"
            value={1}
            id="oldestFirst"
            checked={sortMode === 'date' && sortDirection === 1}
            onChange={hanldeSortDirectionToggle}
          ></input>
          <label htmlFor="filterType">Oldest publications first</label>
        </div>
      </form>
        { sortMode === 'date' &&
          <form>
            <div className="dateOptions">
              <p>Some books have been published many times.</p>
              <p>
                Woud you like to use their oldest publication date or their most
                recent publication date when sorting?
              </p>
              <p>This can be useful for finding new releases of old books.</p>
              <div>
                <input
                  onChange={handleFirstEditionToggle}
                  type="radio"
                  name="filterType"
                  value={false}
                  id="!isByFirstEdition"
                  checked={!isByFirstEdition}
                ></input>
                <label htmlFor="filterType">Use their most recent</label>
              </div>
              <div>
                <input
                  onChange={handleFirstEditionToggle}
                  type="radio"
                  name="filterType"
                  value={true}
                  id="isByFirstEdition"
                  checked={isByFirstEdition}
                ></input>
                <label htmlFor="filterType">User their oldest</label>
              </div>
            </div>
          </form>
        }
    </FilterOptionsStyles>
  );
};

export default FilterOptions;
