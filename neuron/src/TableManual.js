import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { data } from "./Utils";

const x0 = 1;
const tableStyle = {backgroundColor: 'rgba(45, 25, 107, 0.6)', borderTop: '1px solid white', borderLeft: '1px solid white'};

class Table extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    };
    this.renderEditable = this.renderEditable.bind(this);
  }
  renderEditable(cellInfo) {
    return (
      <div
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          for (var i = 0; i < data.length; i++) {
            var temp = data[i].x1 * data[i].w1 + data[i].x2 * data[i].w2 + x0;
            //console.log(data[i]);
            //console.log(temp);
            if (temp >= 1) data[i].t = 1;
            else data[i].t = 0;
          }
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }
  render() {
    const { data } = this.state;
    return (
      <ReactTable
        data={data}
        columns={[
          {
            Header: "Input",
            headerStyle: tableStyle,
            columns: [
              {
                Header: "X1",
                accessor: "x1",
                headerStyle: tableStyle,
                Cell: this.renderEditable,
                style: {borderTop: '1px solid white', borderLeft: '1px solid white'},
              },
              {
                Header: "X2",
                accessor: "x2",
                headerStyle: tableStyle,
                Cell: this.renderEditable,
                style: {borderTop: '1px solid white', borderLeft: '1px solid white'},
              },
              {
                Header: "W1",
                accessor: "w1",
                headerStyle: tableStyle,
                Cell: this.renderEditable,
                style: {borderTop: '1px solid white', borderLeft: '1px solid white'},
              },
              {
                Header: "W2",
                accessor: "w2",
                headerStyle: tableStyle,
                Cell: this.renderEditable,
                style: {borderTop: '1px solid white', borderLeft: '1px solid white'}
              }
            ]
          },
          {
            Header: "Output",
            headerStyle: tableStyle,
            columns: [
              {
                Header: "t",
                headerStyle: tableStyle,
                accessor: "t",
                style: tableStyle,
              }
            ]
          }
        ]}
        defaultPageSize={4}
        showPageSizeOptions={false}
        showPagination={false}
        sortable={false}
        resizable={false}
        style={{
          border: '1px solid white',
          borderRight: '2px solid white',
          borderBottom: '2px solid white'
        }}
      />
    );
  }
}
export default Table;
