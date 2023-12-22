import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";


const Pagination = (props) => {

  const [activePage, setActivePage] = useState(1);
  return (
    <div className="mt-4">
      <nav aria-label="navigation">
        <ul className="pagination pagination-light d-inline-block d-md-flex justify-content-center">
          <li className="page-item disabled">
            <Link className="page-link" to="/page-1">Prev</Link>
          </li>
          <li className={`page-item ${activePage === 1 ? 'active' : ''}`}
            onClick={() => setActivePage(1)}><Link className="page-link" to="/page-1">1</Link></li>
          <li className={`page-item ${activePage === 2 ? 'active' : ''}`}
            onClick={() => setActivePage(2)}><Link className="page-link" to="/page-2">2</Link></li>
          <li className="page-item">
            <Link className="page-link" to="/page-2" style={{ color: 'ActiveBorder' }}>Next</Link>
          </li>
        </ul>
      </nav>
    </div>

  );

}


export default Pagination;