import React from 'react';

const Pagination = () => {

    return (
        <div className="pagination-wrap">
            <ul className="pagination">
                <li><a href="#"><i className="far fa-chevron-left"></i></a></li>
                <li className="active"><a href="#">01</a></li>
                <li><a href="#">02</a></li>
                <li><a href="#">03</a></li>
                <li><a href="#"><i className="far fa-chevron-right"></i></a></li>
            </ul>
        </div>
    );
    
}

export default Pagination;