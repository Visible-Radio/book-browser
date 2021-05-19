import UseFetch from "../utils/UseFetch"

const EditionCard = ({ OLID }) => {
  // the ISBN/OLID endpoint provided in the specs has CORS issues when a request is made from the browser
  // try this in the console.  It won't go.
  // fetch("https://openlibrary.org/api/volumes/brief/olid/OL30597611M.json").then(resp => resp.json()).then(console.log);
  // const proxy = "https://cors-anywhere.herokuapp.com/"; // this will throttle you if you abuse it

  const [ edition ] = UseFetch(`https://openlibrary.org/api/volumes/brief/olid/${OLID}.json`);

  return (
    <div>

    </div>
  )
}

export default EditionCard
