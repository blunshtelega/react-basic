import React from 'react';
import {getPagesArray} from "../../../utils/pages";
import { usePagination } from '../../../hooks/usePagination';

const Pagination = ({totalPages, page, changePage}) => {
    // let pagesArray = getPagesArray(totalPages);
    let pagesArrayUseCustomHook = usePagination(totalPages, page);

    return (
        <div className="page__wrapper">
            {pagesArrayUseCustomHook.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                >
                    {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;