type PaginationProps = {
    totalItems: number,
    itemsPerPage: number,
    currentPage: number,
    setCurrentPage: (page: number) => void
}

const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }: PaginationProps) => {
    const pages: number[] = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pages.push(i)
    }

    const prevPage = () => {
        if (currentPage - 1 <= 1) setCurrentPage(1);
        setCurrentPage(currentPage - 1);
    }

    const nextPage = () => {
        const lastPage = pages[pages.length - 1];
        if (currentPage + 1 >= lastPage) setCurrentPage(lastPage);
        setCurrentPage(currentPage + 1);
    }

    return totalItems > 0 ? (
        <div className="pages" >
            <button onClick={() => prevPage()} disabled={currentPage == 1}>&#8617;</button>
            {
                pages.map((page, index) => (
                    <button key={index} onClick={() => setCurrentPage(page)} className={page == currentPage ? "active" : ""}>{page}</button>
                ))
            }
            <button onClick={() => nextPage()} disabled={currentPage == pages[pages.length - 1]}>&#8618;</button>
        </div >
    ) : null
}

export default Pagination;