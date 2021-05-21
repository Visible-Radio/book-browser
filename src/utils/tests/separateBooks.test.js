import {
  separateBooks
} from "../sortingFuncs";

import { books, withoutDates, withDates} from "./bookTestData";

test("properly separates books based on whether they have a publish_year property", () => {
  expect(separateBooks(books)[0]).toEqual(withoutDates);
  expect(separateBooks(books)[1]).toEqual(withDates);
});