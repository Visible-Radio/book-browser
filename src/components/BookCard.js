import { useState } from "react";
import styled from "styled-components";
import sortMixedDateArray from "../utils/sortMixedDateArray";
// import EditionCard from "./EditionCard";
import { FancyButton } from "./FancyButton";

const BookCardStyles = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 1rem;

  background-color: var(--backgroundColBright);
  color: var(--textCol);
  box-shadow: var(--boxShadow);
  padding: var(--pad);
  border-radius: var(--borad);

  min-height: fit-content;
  margin:  0 0 1rem 0;
  width: 100%;

  img {
    width: 180px;
    max-height: 270px;
    height: auto;
    object-fit: cover;
    box-shadow: var(--boxShadow);
  }

  .bookWrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    height: fit-content;
    max-width: 180px;
    max-height: 270px;
  }

  .wrapperColumn {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    h3 {
      margin-top: 0;
    }
  }

  .rightColumn {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  p {
    margin: 0.25rem 0;
  }

  .imagePlaceHolder {
    width: 180px;
    height: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color};
    color: var(--backgroundCol);
    font-weight: 700;
    padding: 0.5rem;
    font-size: 0.75rem;
    box-shadow: var(--boxShadow);
  }

  .imSad {
    background-color: black;
    color: white;
    border-radius: var(--borad);
    padding: 1rem;
    margin-top: 1rem;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const BookCard = ({ book, resultNumber }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  // const [ viewEditions, setViewEditions] = useState(false);

  // const toggleViewEditions = () => {
  //   setViewEditions(!viewEditions);
  // }

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  const { title, author_name: author, cover_edition_key: coverOLID, publish_date: publishDate, edition_key: editionKey } = book;

  const coverURL = coverOLID ? `https://covers.openlibrary.org/b/olid/${coverOLID}-M.jpg` : null;

  const color = 'rgb(30,40,50)';

  const sortedDates = publishDate
    ? sortMixedDateArray([...publishDate])
    : null;

  return (
    <BookCardStyles color={color}>
        <div className="bookWrapper">
          { coverURL &&
            <img src={coverURL} alt={`Cover of the book ${title}`}></img>
          }
          { !coverURL &&
            <div className="imagePlaceHolder">
              <p>
              {title}
              </p>
            </div>
          }
        </div>
      <ul className="wrapperColumn">
        <li><h3>{title}</h3></li>
        <li><p>{Array.isArray(author) ? author.join(', ') : author}</p></li>
        { publishDate && publishDate.length > 1
          ?
            <>
              <li><p>First publication: {publishDate && sortedDates[0]}</p></li>
              <li><p>Most Recent publication: {publishDate && sortedDates[sortedDates.length - 1]}</p></li>
              { publishDate.length > 2 &&
                <>
                  <li><p>This record refers to {publishDate.length} publication dates. Click + to see them all.</p></li>
                  { isOpen &&
                    <ul>
                    {sortedDates.map((year, i) => {
                      return <li key={i}>{year}</li>
                    })}
                    </ul>
                  }
                </>
              }
            </>
          : <li><p>{publishDate && sortedDates[0]}</p></li>
        }
        { editionKey &&
          <>
            <li>
              <p>This record refers to {editionKey.length} edition{editionKey.length > 1 ? 's' : ''}.</p>
            </li>
            { isOpen &&
              <ul>
                { editionKey.map((OLID, i) => {
                  return <li key={i + OLID} value="OLID" onClick={() => console.log(OLID)}>{OLID}
                      {/* <EditionCard OLID={OLID}/> */}
                    </li>
                  })
                }
                <li className="imSad">
                  <p>The API endpoint that serves data for specific edition IDs has not set the Access-Control-Allow-Origin CORS header.</p>
                  <p>Without building some middleware I cannot access the data necessary to render cards for specific editions.</p>
                  <p>Try this in the console:</p>
                  <p><code>fetch("https://openlibrary.org/api/volumes/brief/olid/OL30597611M.json").then(resp => resp.json()).then(console.log);</code></p>
                </li>
              </ul>
            }
          </>
        }
      </ul>
      <div className="rightColumn">
        { publishDate && editionKey &&
          <FancyButton onClick={toggleOpen} isOpen={isOpen}/>
        }
        <p></p>
        <p>Result no. {resultNumber+1}</p>
      </div>
    </BookCardStyles>
  )
}

export default BookCard
