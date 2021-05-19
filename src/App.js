import { useEffect, useState } from 'react';
import './App.css';
import BookCard from './components/BookCard';
import CardWrapper from './components/CardWrapper';
import PageNav from './components/PageNav';
import { separateBooks } from './utils/separateBooks';
import UseFetch from './utils/UseFetch';

// the ISBN endpoint provided in the specs has CORS issues when a request is made from the browser
// const url_ISBN = `http://openlibrary.org/api/volumes/brief/isbn/${isbn}.json`;
// const proxy = "https://cors-anywhere.herokuapp.com/";

function App({ AppStyles }) {

  const searchURL = "https://openlibrary.org/search.json?q=the+great+gatsby&limit=100&offset=0";

  const [ searchResults, loadingSearchResults ] = UseFetch(searchURL);
  const [ books, setBooks ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ resultsPerPage] = useState(10);
  const [pageCount, setPageCount ] = useState(null);
  const firstIndex = currentPage * resultsPerPage;
  const lastIndex = firstIndex + resultsPerPage;
  const [ sortDirection, setSortDirection ] = useState(-1);
  const [ isByFirstEdition, setIsByFirstEdition ] = useState(true);

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

  // Some books don't have a publish year property
  // Pull those out before sorting
  // And then include them at the end of the sorted array
  const [ booksWithoutDates, booksWithDates ] = separateBooks(books);

  const sortedBooks = [ ...booksWithDates].sort((a, b) => {
    if (a.publish_year && b.publish_year) {
      const aIndex = isByFirstEdition ? 0 : a.publish_year.length - 1;
      const bIndex = isByFirstEdition ? 0 : b.publish_year.length - 1;
      return (
        (Number(a.publish_year.sort()[aIndex])
        - Number(b.publish_year.sort()[bIndex]))
        * sortDirection
      );
    } else {
      // this shouldn't happen, we pulled out the ones without dates
      return 0;
    }
  }).concat(booksWithoutDates);

  fetch("https://openlibrary.org/api/volumes/brief/olid/OL30597611M.json").then(resp => resp.json()).then(console.log);

  return (
    <AppStyles>
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
