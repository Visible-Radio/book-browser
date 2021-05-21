export const sortMixedDateArray = (arr) => {
  // convert them all to objects, attach a property to each that is a date object
  // sort them by their date object properties
  // only render the initial string
  const mixedDatesSorted = arr
    .map((dirtyDate) => {
      const pubDate = String(dirtyDate).trim();
      return {
        dateString: pubDate,
        dateValue: getJSdateFromBadDate(pubDate),
      };
    })
    .sort((a, b) => {
      return a.dateValue - b.dateValue;
    });
  return mixedDatesSorted.map((elem) => elem.dateString);
};

// input array contains years like '1998', dates like 'June 5, 2007' and partial dates like "2007 June" or "August 1945"
const getJSdateFromBadDate = (dateString) => {
  if (!isNaN(new Date(dateString))) return new Date(dateString);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = "1"; // dummy day - the input date string had no day
  const year = dateString.match(/\d\d\d\d/)[0];
  let month = null;

  for (let i = 0; i < months.length; i++) {
    if (dateString.toLowerCase().includes(months[i].toLowerCase())) {
      month = months[i];
      break;
    }
  }
  return new Date(`${month} ${day} ${year}`);
};
