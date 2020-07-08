import React from 'react';
import { connect } from 'react-redux';
import correntPost from '../../action'


const Paginiet = ({ productPerPage, paginate, totalProduct }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default connect(null, { correntPost })(Paginiet);
