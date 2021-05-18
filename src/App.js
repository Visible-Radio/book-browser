import { useEffect, useState } from 'react';
import './App.css';
import BookCard from './components/BookCard';
import CardWrapper from './components/CardWrapper';
import PageNav from './components/PageNav';
import useFetch from './utils/UseFetch';

// the ISBN endpoint provided in the specs has CORS issues when a request is made from the react
// development server
// const url_ISBN = `http://openlibrary.org/api/volumes/brief/isbn/${isbn}.json`;
// const proxy = "https://cors-anywhere.herokuapp.com/";

function App({ AppStyles }) {
  // user search
  const searchURL = "http://openlibrary.org/search.json?q=underworld";

  const [ searchResults, loadingSearchResults ] = useFetch(searchURL);
  const [ books, setBooks ] = useState([]);


  const [ currentPage, setCurrentPage ] = useState(0);
  const [ resultsPerPage] = useState(10);
  const [pageCount, setPageCount ] = useState(null);
  const firstIndex = currentPage * resultsPerPage;
  const lastIndex = firstIndex + resultsPerPage;

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

  return (
    <AppStyles>
      <CardWrapper>
        {
          books.slice(firstIndex, lastIndex).map((book, i) => {
            return <BookCard resultNumber={i + firstIndex} book={book} key={i} />
          })
        }
      </CardWrapper>
      <PageNav pageJump={pageJump} changePage={changePage} pageCount={pageCount} currentPage={currentPage}/>
    </AppStyles>
  );
}

export default App;
