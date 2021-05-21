import { sortBooksByDate } from "../sortingFuncs";
import { books, sortedDatesAscending, sortedDatesDescending} from "./bookTestData";

test("properly sorts books based on publish year property with newest books appearing first", () => {
  const sortDirection = -1;
  const isByFirstEdition = true;
  expect(sortBooksByDate(books, sortDirection, isByFirstEdition ))
  .toEqual(sortedDatesDescending);
});

test("properly sorts books based on publish year property with oldest books appearing first", () => {
  const sortDirection = 1;
  const isByFirstEdition = true;
  expect(sortBooksByDate(books, sortDirection, isByFirstEdition ))
  .toEqual(sortedDatesAscending);
});