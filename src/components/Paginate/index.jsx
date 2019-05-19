import React from 'react';
import ReactPagination from 'react-paginate';

import './paginate.scss';

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
    pageCount={totalPages}
    marginPagesDisplayed={currentPage}
    pageRangeDisplayed={perPage}
    onPageChange={pageChange}
    containerClassName="paginate"
    subContainerClassName="pages paginate"
    activeClassName="active"
    />
)

export default Pagination;
