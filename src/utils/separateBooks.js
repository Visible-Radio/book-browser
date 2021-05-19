export const separateBooks = (books) => {
  const withoutDates = [];
  const withDates = [];
  books.forEach(book => {
    book.hasOwnProperty('publish_year') ? withDates.push(book) : withoutDates.push(book)
  })
  return [withoutDates, withDates ];
}