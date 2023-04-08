import DataTable from "react-data-table-component";
import "./DataView.css";
const columns = [
  {
    name: "Number",
    selector: (row) => row.number,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
  },
  {
    name: "Country-Name",
    selector: (row) => row.countryName,
    sortable: true,
  },
  {
    name: "Searched Date",
    selector: (row) => row.date,
    sortable: true,
  },
];
const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

function DataView(props) {
  return (
    <div className="rdt_Table">
      <DataTable
        title="Numbers List"
        columns={columns}
        data={props.data}
        customStyles={customStyles}
        selectableRows
        dense
      />
    </div>
  );
}

export default DataView;
