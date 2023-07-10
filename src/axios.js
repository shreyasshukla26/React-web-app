import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "category", headerName: "CATEGORY", width: 100 },
  { field: "id", headerName: "ID", width: 100 },
  { field: "title", headerName: "TITLE", width: 100 },
  { field: "user", headerName: "USER", width: 100 },
  { field: "notes", headerName: "NOTES", width: 600 }
];
function Axioss(props) {
  const userData = props.userData;

  return (
    <div style={{ height: "100vh" }}>
      {userData ? (
        <DataGrid rows={userData} columns={columns} pageSize={12} />
      ) : (
        <h1>Loading..</h1>
      )}
    </div>
  );
}
export default Axioss;
