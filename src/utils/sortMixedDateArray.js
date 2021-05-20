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
// input array contains years like '1998', and dates like 'June 5, 2007'
// also you could see "June 1940" - which will return NaN if passed to Date.parse()
// or 1940 June - which makes this whole thing a little challenging.
// In order to do this properly we'll need some more intensive string manipulation
// Use a regex to look for /d/d/d/d
// Check the string against an array of months
// reconstitute a new string with the month that was found, the date matched with the regex, and a dummy date
// create a proper javascript date from this new string and use it in our compare function

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

  for (let i = 0; i < months.length; i ++) {
    if (dateString.toLowerCase().includes(months[i].toLowerCase())) {
      month = months[i];
      break;
    }
  }
  return new Date(`${month} ${day} ${year}`);
};

/*

Here's a very naughty array of dates that obey no particular format.

["1997 April 24","2006 January 26","1999","1998","1991 May 14","2013 May","1949","1996","2001 November","2015 February","1995 July 21","1987 August 14","May 16, 2019","1976 April","1991","2007 January 25","1958","1934","1998 January 01","1985 August","1975","2001 October","1997","2012","1961","1994 June","2001","2012 May","1979 October 01","2005 October 17","2016 January","1999 May","2005 August 2","2013 April","1980","2008 January 22","2015","1967","2020","1974-03","2013","1994 August","2012-04","2003 July","1975 January 1","2004 August","2009","2016 March 27","2002 October 01","1991 February 18","2018","2007 October 31","2017","1988 May 31","2006","2018 July","1973","1946","2013 04 25","2012 June","2003","1948","2002 April","1984","1962","1990-03-01","1996 January 01","1979","2008","1999 December 05","1950","2012 March 13","1995 October 01","1986","1995","Sep 16, 2015","Sep 01, 2018","2004 October","2002 August","2000","1978-03","2010","1991 September 26","Mar 15, 2012","1953","1988 December","2011","1998 September 03","2008 March 1","2000 February 24","1993","December 1991","1997 April 10","2016 June","1974","1993 June 01","1995 September 01","1968","2004","1925 January 01","1992 August","2015 May","2005 September 30","1990","1925","2003 September 30","1975 January 01","2007","1981","1994","2016 April","2018 April","2007 October 1","1992","1988","2014 December 17","2002 January","2014","1994 January 01","2016","1970","2012 September","1996 June 28","1945 November","1977","1996 March 01","2011 January"]

*/