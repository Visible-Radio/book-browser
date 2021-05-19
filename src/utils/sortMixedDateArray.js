export default function sortMixedDateArray (arr) {
  // input array contains years like '1998', and dates like 'June 5, 2007'
  // also you could see "June 1940" - which will return NaN if passed to Date.parse()
  // convert them all to objects, attach a property to each that is a date object
  // sort them by their date object properties
  // only render the initial string
  const mixedDatesSorted = arr.map(string => {
    return {
      dateString: string,
      dateValue: Date.parse(string) || Date.parse(string.trim().slice(-4))
    }
  }).sort((a, b) => {
    return a.dateValue - b.dateValue;
  })
  return mixedDatesSorted.map(elem => elem.dateString);
}