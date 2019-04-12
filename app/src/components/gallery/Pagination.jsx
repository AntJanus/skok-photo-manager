import React from 'react';

export function Pagination({ total, offset, perPage }) {
  let pages =  Math.ceil(total / perPage);
  let currentPage = Math.ceil(offset / perPage);
  let pageListItems = [];

  for (let i = 0;i < pages;i++) {
    let classes = ["page-item"];

    if (currentPage == i) {
      classes.push('active');
    }

    pageListItems.push((
      <li className={classes.join(' ')}>
        <a href="#" className="page-link">
          {i + 1}
        </a>
      </li>
    ))
  }

  return (
    <div>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a href="#" className="page-link">
            &laquo;
          </a>
        </li>
        {pageListItems}
        <li className="page-item">
          <a href="#" className="page-link">
            &raquo;
          </a>
        </li>
      </ul>
    </div>
  )
}
