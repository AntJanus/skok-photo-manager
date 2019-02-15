import React from 'react';

export function Pagination({ total: total, offset: offset, perPage: perPage}) {
  let pages =  Math.ceil(total / perPage);
  let currentPage = Math.ceil(offset / perPage);
  let pageListItems = [];

  for (let i = 0;i < pages;i++) {
    pageListItems.push((
      <li>
        {i}
      </li>
    ))
  }

  return (
    <div>
      <ul>
        <li>
          <a href="#">
            &laquo;
          </a>
        </li>
        {pageListItems}
        <li>
          <a href="#">
            &raquo;
          </a>
        </li>
      </ul>
    </div>
  )
}
