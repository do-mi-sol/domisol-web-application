import React from 'react';
import _ from 'lodash';

const Pagination = ({pageSize, itemsCount, currentPage, onPageChange}) => {
  const pageCount = Math.ceil (itemsCount / pageSize); //몇페이지 필요한지 계산

  const pages = _.range (1, pageCount); // 마지막 페이지에 보여줄 컨텐츠를 위해 +1, https://lodash.com/docs/#range 참고

  return (
    <nav>
      <ul className="pagination">
        {pages.map (page => (
          <li
            key={page}
            className={page === currentPage ? 'page-item active' : 'page-item'} // Bootstrap을 이용하여 현재 페이지를 시각적으로 표시
            style={{cursor: 'pointer'}}
          >
            <a className="page-link" onClick={() => onPageChange (page)}>
              {page}
            </a>{' '}
            {/* 페이지 번호 클릭 이벤트 처리기 지정 */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
