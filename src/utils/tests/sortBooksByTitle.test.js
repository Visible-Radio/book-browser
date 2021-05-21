import { sortBooksByTitle } from "../sortingFuncs";
import { books, sortedTitles } from "./bookTestData";

test("properly sorts books alphabetically by title", () => {
  expect(sortBooksByTitle(books))
  .toEqual(sortedTitles);
});