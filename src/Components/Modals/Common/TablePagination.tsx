import Pagination from "react-bootstrap/Pagination";

const TablePagination = ({
  pageCount,
  currentPage,
  setCurrentPage,
}: {
  pageCount: number;
  currentPage: number;
  setCurrentPage: (agr0: number) => void;
}) => {
  //generate array of pagenumbers from 1 to total pagecount.
  const pageNumbers = Array.from(
    Array(pageCount && pageCount + 1).keys()
  ).slice(1);

  const nextPage = () => {
    if (currentPage !== pageCount) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Pagination size="sm">
      <Pagination.Prev onClick={prevPage} href="#" />
      {pageNumbers.map((pageNumber) => (
        <li
          key={pageNumber}
          className={`page-item ${currentPage === pageNumber ? "active" : ""} `}
        >
          <a
            onClick={() => setCurrentPage(pageNumber)}
            className="page-link"
            // href="#"
          >
            {pageNumber}
          </a>
        </li>
      ))}
      <Pagination.Next onClick={nextPage} href="#" />
    </Pagination>
  );
};

export default TablePagination;
