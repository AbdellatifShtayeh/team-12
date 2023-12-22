import { useEffect, useState } from "react";


const Pagination = (props) => {
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    if (props.onPageChange) props.onPageChange(activePage);
  }, [activePage]);

  return (
    <div className="mt-4">
      <nav aria-label="navigation">
        <ul className="pagination pagination-light d-inline-block d-md-flex justify-content-center">
          <li onClick={() => setActivePage(1)} className="page-item disabled">
            <a className="page-link">Prev</a>
          </li>
          <li className={`page-item ${activePage === 1 ? 'active' : ''}`} onClick={() => setActivePage(1)}>
            <a className="page-link">1</a>
          </li>
          <li className={`page-item ${activePage === 2 ? 'active' : ''}`} onClick={() => setActivePage(2)}>
            <a className="page-link">2</a>
          </li>
          <li onClick={() => setActivePage(2)} className="page-item">
            <a className="page-link" style={{ color: 'ActiveBorder' }}>Next</a>
          </li>
        </ul>
      </nav>
    </div>

  );

}


export default Pagination;