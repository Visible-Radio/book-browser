import { ButtonStyles, PageNavStyles } from "../styles/PageNavStyles";

const PageNav = ({ pageJump, changePage, currentPage, pageCount }) => {
  return (
    <PageNavStyles>
      <ButtonStyles
        offset={"true"}
        value={"start"}
        onClick={pageJump}
        disabled={currentPage === 0 && true}
      >
        First
      </ButtonStyles>
      <ButtonStyles
        offset={"true"}
        value={-1}
        onClick={changePage}
        disabled={currentPage === 0 && true}
      >
        Previous
      </ButtonStyles>
      <div className="pageReference">
        <span>
          Page {currentPage + 1} of {pageCount}
        </span>
      </div>
      <ButtonStyles
        offset={"true"}
        value={1}
        onClick={changePage}
        disabled={currentPage === pageCount - 1 && true}
      >
        Next
      </ButtonStyles>
      <ButtonStyles
        offset={"true"}
        value={"end"}
        onClick={pageJump}
        disabled={currentPage === pageCount - 1 && true}
      >
        Last
      </ButtonStyles>
    </PageNavStyles>
  );
};
export default PageNav;
