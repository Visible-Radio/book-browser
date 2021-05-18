import { useEffect, useState } from "react";

export default function useFetch(url) {
  // in development route requests through here...ugh.
  // https://cors-anywhere.herokuapp.com/
  // also found this endpoint which doesn't have cors issues
  // const byISBN = `https://openlibrary.org/isbn/${isbn}.json`;

  const [ data, setData ] = useState([]);
  const [ loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch(url).then(resp => resp.json());
      setData(response);
      setLoading(false);
    })();
  },[url])

  return [ data, loading ];
}