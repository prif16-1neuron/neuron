import React, { Component } from "react";
import { useReactTable } from "react-table";
import ReactTable from "react-table";
import "react-table/react-table.css";

class Table extends Component {
  render() {
    const data = [
      {
        x1: 0,
        x2: 0,
        w1: 0.8,
        w2: 0.4,
        t: 0
      },
      {
        x1: 0,
        x2: 1,
        w1: 0.3,
        w2: 0.1,
        t: 0
      },
      {
        x1: 1,
        x2: 0,
        w1: -0.5,
        w2: 0.4,
        t: 1
      },
      {
        x1: 1,
        x2: 1,
        w1: 0.2,
        w2: -0.2,
        t: 1
      }
    ];

    const columns = [
      {
        Header: "Input",
        accessor: "input", // String-based value accessors!,
        columns: [
          {
            id: 'x1',
            Header: "X1",
            accessor: d => d.x1
          },
          {
            id: 'x2',
            Header: "X2",
            accessor: d => d.x2 
          },
          {
            id: 'w1',
            Header: "W1",
            accessor: d => d.w1
          },
          {
            id: 'w2',
            Header: "W2",
            accessor: d => d.w2
          }
        ]
      },
      {
        Header: "Output",
        columns: [
          {
            id: 'outputResult',
            Header: "t",
            accessor: d => d.t
          }
        ]
      }
    ];

    return <ReactTable data={data} columns={columns} defaultPageSize={4} showPageSizeOptions={false} showPagination={false}/>;
  }
}
export default Table;
