import React from 'react'
import "./datatable.scss"

import { DataGrid } from '@mui/x-data-grid';

import { userColumns, userRows } from '../../datatablesorce';



function DataTable() {

  const actionColumn = [
    {
      feild:"action",
      headerName:"Action",
      width:200,
      renderCell: () =>{
        return(
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteAction">Delete</div>
          </div>
        )
      }
    }
  ]
  return (
    <div className='datatable'>
       <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable
