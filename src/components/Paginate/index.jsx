import React from 'react';
import ReactPagination from 'react-paginate';

const Pagination = ({
  pageChange,
  perPage,
  currentPage,
  totalPages,
}) => (
  <ReactPagination
    previousLabel="previous"
    nextLabel="next"
    breakLabel={ <a href="pagination">...</a> }
    breakClassName="break-me"
    pageCount={ totalPages }
    marginPagesDisplayed={ currentPage }
    pageRangeDisplayed={ perPage }
    onPageChange={ pageChange }
    containerClassName="pagination"
    subContainerClassName="pages pagination"
    activeClassName="active"
    />
)

export default Pagination;
