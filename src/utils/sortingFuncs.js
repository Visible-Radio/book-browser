export const sortBooksByDate = (books, sortDirection, isByFirstEdition) => {
  // Some books don't have a publish year property
  // Pull those out before sorting
  // And then include them at the end of the sorted array
  const [ booksWithoutDates, booksWithDates ] = separateBooks(books);
  return [ ...booksWithDates].sort((a, b) => {
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
  }).concat(booksWithoutDates)
}

export const separateBooks = (books) => {
  const withoutDates = [];
  const withDates = [];
  books.forEach(book => {
    book.hasOwnProperty('publish_year') ? withDates.push(book) : withoutDates.push(book)
  })
  return [withoutDates, withDates ];
}

export const sortBooksByTitle = (books) => {
  return [...books].sort((a, b) => {
    const aTitle = a.title.toUpperCase();
    const bTitle = b.title.toUpperCase();
    return aTitle < bTitle ? -1 : aTitle > bTitle ? 1 : 0;
  });
}



