import { useEffect, useState } from "react";

export default function UseFetch(url) {

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