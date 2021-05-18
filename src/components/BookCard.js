import { useState } from "react";
import styled from "styled-components";
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
  margin: 1rem 0 0 0;
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

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const BookCard = ({ book, resultNumber }) => {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  const { title, author_name: author, publish_year: publishYear, cover_edition_key: coverOLID } = book;

  const coverURL = coverOLID ? `http://covers.openlibrary.org/b/olid/${coverOLID}-M.jpg` : null;

  const color = 'rgb(30,40,50)'


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
        <li><p>{author}</p></li>
        { publishYear && publishYear.length > 1
          ?
            <>
              <li><p>First publication: {publishYear && publishYear.sort()[0]}</p></li>
              <li><p>Most Recent publication: {publishYear && publishYear.sort()[publishYear.length - 1]}</p></li>
              { publishYear.length > 2 &&
                <>
                  <li><p>This book has {publishYear.length} publication dates on record. Click + to see them all.</p></li>
                  { isOpen &&
                    <ul>
                    {publishYear.map((year, i) => {
                      return <li key={i}>{year}</li>
                    })}
                    </ul>
                  }
                </>
              }
            </>
          : <li><p>{publishYear && publishYear[0]}</p></li>
        }
      </ul>
      <div className="rightColumn">
        { publishYear && publishYear.length > 2 &&
          <FancyButton onClick={toggleOpen} isOpen={isOpen}/>
        }
        <p></p>
        <p>Result no. {resultNumber+1}</p>
      </div>
    </BookCardStyles>
  )
}

export default BookCard
