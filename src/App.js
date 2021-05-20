import { useEffect, useState } from 'react';
import BookCard from './components/BookCard';
import CardWrapper from './components/CardWrapper';
import PageNav from './components/PageNav';
import Search from './components/Search';
import { sortBooksByDate, sortBooksByTitle } from './utils/sortingFuncs';
import UseFetch from './utils/UseFetch';

function App({ AppStyles }) {

  const defaultURL = "https://openlibrary.org/search.json?q=the+great+gatsby&limit=100&offset=0";

  const [ books, setBooks ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ resultsPerPage] = useState(10);
  const [ pageCount, setPageCount ] = useState(null);
  const firstIndex = currentPage * resultsPerPage;
  const lastIndex = firstIndex + resultsPerPage;
  const [ sortMode, setSortMode ] = useState('date')
  const [ sortDirection, setSortDirection ] = useState(-1);
  const [ isByFirstEdition, setIsByFirstEdition ] = useState(true);
  const [ searchString, setSearchString ] = useState('the great gatsby');
  const [ searchURL, setSearchURL ] = useState(defaultURL);
  const [ searchResults, loadingSearchResults ] = UseFetch(searchURL);

  const onSearchChange = (event) => {
    setSearchString(event.target.value);
  }

  const onSearchSubmit = () => {
    const q = searchString.trim().split(' ').join('+');
    setSearchURL(`https://openlibrary.org/search.json?q=${q}&limit=100&offset=0`);
  }

  useEffect(() => {
    if (!loadingSearchResults) {
      setBooks(searchResults.docs);
      setPageCount(Math.ceil(searchResults.docs.length / resultsPerPage));
    }
  },[loadingSearchResults, resultsPerPage, searchResults.docs]);

  const changePage = (event) => {
    const direction = Number(event.target.value);
    if (currentPage < pageCount - 1 && direction === 1) {
      setCurrentPage(currentPage + direction);
    } else if ( currentPage > 0 && direction === -1 ) {
      setCurrentPage(currentPage + direction);
    }
  }

  const pageJump = (event) => {
    const destination = event.target.value === 'start' ? 0 : pageCount - 1;
    setCurrentPage(destination);
  }

  const sortedBooks = (sortMode === 'date')
    ? sortBooksByDate(books, sortDirection, isByFirstEdition)
    : sortBooksByTitle(books);

  return (
    <AppStyles>
      <Search
        onSearchChange={onSearchChange}
        onSearchSubmit={onSearchSubmit}
        searchString={searchString}
        setSearchString ={setSearchString}
        setIsByFirstEdition={setIsByFirstEdition}
        isByFirstEdition={isByFirstEdition}
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
        sortMode={sortMode}
        setSortMode={setSortMode}
      />
      <CardWrapper>
        {
          sortedBooks.slice(firstIndex, lastIndex).map((book, i) => {
            return <BookCard resultNumber={i + firstIndex} book={book} key={i} />
          })
        }
      </CardWrapper>
      <PageNav pageJump={pageJump} changePage={changePage} pageCount={pageCount} currentPage={currentPage}/>
    </AppStyles>
  );
}

export default App;
