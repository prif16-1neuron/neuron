import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { data } from "./Utils";

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
            var temp = data[i].x1 * data[i].w1 + data[i].x2 * data[i].w2;
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
            columns: [
              {
                Header: "X1",
                accessor: "x1",
                Cell: this.renderEditable
              },
              {
                Header: "X2",
                accessor: "x2",
                Cell: this.renderEditable
              },
              {
                Header: "W1",
                accessor: "w1",
                Cell: this.renderEditable
              },
              {
                Header: "W2",
                accessor: "w2",
                Cell: this.renderEditable
              }
            ]
          },
          {
            Header: "Output",
            columns: [
              {
                Header: "t",
                accessor: "t"
              }
            ]
          }
        ]}
        defaultPageSize={4}
        showPageSizeOptions={false}
        showPagination={false}
        sortable={false}
        resizable={false}
      />
    );
  }
}
export default Table;
