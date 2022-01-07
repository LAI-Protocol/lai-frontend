import React, {useEffect} from 'react';
import {useTable, usePagination} from "react-table";

// Create a default prop getter
const defaultPropGetter = () => ({})

const TableSetting = ({
                          columns,
                          data,
    serverData,
                          fetchData,
                          loading,
                          pageCount: controlledPageCount,
                          getHeaderProps = defaultPropGetter,
                          getColumnProps = defaultPropGetter,
                          getRowProps = defaultPropGetter,
                          getCellProps = defaultPropGetter,
                      }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: {pageIndex, pageSize, sortBy}
    } = useTable({
        columns,
        data,
        serverData,
        manualPagination: true,
        manualSortBy: true,
        autoResetPage: false,
        autoResetSortBy: false,
        pageCount: controlledPageCount,
    }, usePagination);

    useEffect(() => {
        fetchData({pageIndex, pageSize});
    }, [fetchData, pageIndex, pageSize]);

    return (<>
        <table {...getTableProps()} style={{}}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()} style={{height: "68px", padding: "0 40px",}}>
                    {headerGroup.headers.map(column => (<th
                        {...column.getHeaderProps([{
                            className: column.className, style: column.style,
                        }, getColumnProps(column), getHeaderProps(column),])}
                        style={{}}
                    >
                        {column.render('Header')}
                    </th>))}
                </tr>))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row)
                return (<tr {...row.getRowProps()} style={{height: "68px"}}>
                    {row.cells.map(cell => {
                        return (<td
                            {...cell.getCellProps([{
                                className: cell.column.className, style: cell.column.style,
                            }, getColumnProps(cell.column), getCellProps(cell),])}
                            style={{}}
                        >
                            {cell.render('Cell')}
                        </td>)
                    })}
                </tr>)
            })}
            {/*<tr>*/}
            {/*    {loading ? (*/}
            {/*        // Use our custom loading state to show a loading indicator*/}
            {/*        <td colSpan="10000">Loading...</td>*/}
            {/*    ) : (*/}
            {/*        <td colSpan="10000">*/}
            {/*            Showing {page.length} of ~{controlledPageCount * pageSize}{" "}*/}
            {/*            results*/}
            {/*        </td>*/}
            {/*    )}*/}
            {/*</tr>*/}
            <tr>


            </tr>
            </tbody>
        </table>
        <div className="pagination">
            <span>
                Rows per page:
            </span>
            <select
                value={pageSize}
                onChange={(e) => {
                    setPageSize(Number(e.target.value));
                }}
            >
                {[10, 20, 30, 40, 50].map((pageSize) => (<option key={pageSize} value={pageSize}>
                    {pageSize}
                </option>))}
            </select>
            {" "}
            <span>
          {" "}
                {(pageSize * pageIndex) +1} - {(pageSize * pageIndex) +1 + pageSize} of {serverData.length}
                {" "}
        </span>
            <button onClick={() => gotoPage(0)}>
                {"<<"}
            </button>
            {" "}
            <button onClick={() => previousPage()}>
                {"<"}
            </button>
            {" "}
            <button onClick={() => nextPage()}>
                {">"}
            </button>
            {" "}
            <button onClick={() => gotoPage(pageCount - 1)}>
                {">>"}
            </button>
        </div>
    </>)
}


export default TableSetting;