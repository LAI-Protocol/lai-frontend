import React, {useState, useMemo, useRef, useEffect, useCallback} from 'react'
import styled from "styled-components";
import TableSetting from "./TableSetting"
import SelectionArrow from "../../assets/images/icon/sign/SelectionArrow.png"
import CopyOutline from "../../assets/images/icon/button/copy-outline.png"
import {LiquidationButton} from "../Button";

const Styles = styled.div`
    .owner {
    color: #08B8DE;
    }
    
    table {
    width: 100%;
    border-radius: 15px
    vertical-align: center;
    borderBottom: solid 1px gray;
    
        tr {
        border-bottom: solid 1px #A7A7A7;,
        }
        th, td {
        font-family: Poppins;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.01em;
        text-align: right;
        }
        th:first-child,
        td:first-child {
            padding-left: 24px;
            text-align: left;
            }
        }
        th:last-child,
        td:last-child {
            padding-right: 24px;
        }          
    }
    
    .pagination {
    justify-content: end;
    padding: 20px;
    font-family: Poppins;
    font-weight: 600;
    font-size: 20px;
    line-height: 38px;
    
        > * {
        margin-left: 20px;
        }
        
        select:active {
        border: 0;        
        }
        >select {
        width: 60px;
        border: 0;
        background-color: #000000;
         -webkit-appearance:none;
        background:url(${SelectionArrow}) no-repeat right 10px center;
        color: #ffffff;
        font-family: Poppins;
        font-weight: 600;
        font-size: 20px;
        line-height: 38px;
            > option {
            background-color: #000000;
            }
        }
        >button {
        border: 0;
        background-color: #000000;
        color: #ffffff;
        font-weight: 600;
        }
    
    }
    
    
`

const Table = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    const fetchIdRef = useRef(0);

    const columns = useMemo(() => [{
        accessor: "owner",
        Header: () => (
            <div
                style={{}}
            >Owner</div>),
        className: 'owner',
        Cell: (tableProps) => (
            <div><a href={"https://polkascan.io/"} target="_blank">{tableProps.row.original.owner}</a><img style={{marginLeft: "10px"}} alt="copy-outline" src={CopyOutline} onClick={() => alert('Copy')}/></div>
        )
    }, {
        Header: 'Collateral(LAT)', accessor: 'collateral',
    }, {
        Header: 'Debt(LAI)', accessor: 'debt',
    }, {
        Header: 'Coll Ratio', accessor: 'ratio',
    }, {
        Header: 'Operation', accessor: 'operation',
        Cell: tableProps => (
            <LiquidationButton width="138px">Liquidate</LiquidationButton>
        )
    },], [])

    const serverData = useMemo(() => [{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x2404....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    },{
        owner: '0x9304....93932', collateral: '2000.0000', debt: '390.00', ratio: '116.3%'
    }, ], [])

    const fetchData = React.useCallback(({pageSize, pageIndex}) => {
        // This will get called when the table needs new data
        // You could fetch your data from literally anywhere,
        // even a server. But for this example, we'll just fake it.

        // Give this fetch an ID
        const fetchId = ++fetchIdRef.current;

        // Set the loading state
        setLoading(true);

        // We'll even set a delay to simulate a server here
        setTimeout(() => {
            // Only update the data if this is the latest fetch
            if (fetchId === fetchIdRef.current) {
                const startRow = pageSize * pageIndex;
                const endRow = startRow + pageSize;
                setData(serverData.slice(startRow, endRow));

                // Your server could send back total page count.
                // For now we'll just fake it, too
                setPageCount(Math.ceil(serverData.length / pageSize));

                setLoading(false);
            }
            // useEffect(() => console.log(pageCount), [pageCount]);
        }, 1000);
    }, []);

    return (
        <Styles>
            <TableSetting
                columns={columns}
                data={data}
                serverData={serverData}
                fetchData={fetchData}
                loading={loading}
                pageCount={pageCount}
                getHeaderProps={column => ({
                })}
                getColumnProps={column => ({
                })}
                getRowProps={row => ({
                    style: {
                        background: row.index % 2 === 0 ? 'rgba(0,0,0,.1)' : 'white',
                    },
                })}
                getCellProps={cellInfo => ({
                    style: {
                        backgroundColor: `hsl(${120 * ((120 - cellInfo.value) / 120) * -1 +
                        120}, 100%, 67%)`,
                    },
                })}
            />
        </Styles>
    )
}

export default Table