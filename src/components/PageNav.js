import { PageNavStyles } from "../styles/PageNavStyles"

const PageNav = ({ pageJump, changePage, currentPage, pageCount}) => {
  return (
    <PageNavStyles>
      <button value={'start'} onClick={pageJump} disabled={currentPage === 0 && true}>First</button>
      <button value={-1} onClick={changePage} disabled={currentPage === 0 && true}>Previous</button>
      <div>
        <span>Page {currentPage + 1} of {pageCount}</span>
      </div>
      <button value={1} onClick={changePage } disabled={currentPage === pageCount - 1 && true}>Next</button>
      <button value={'end'} onClick={pageJump} disabled={currentPage === pageCount - 1 && true}>Last</button>
    </PageNavStyles>
  )
}

export default PageNav
