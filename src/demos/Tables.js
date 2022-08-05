import { useState } from "react"
import { Wrapper } from "../Wrapper"
import Box from "@mui/material/Box"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Checkbox } from "@mui/material"

const EnhancedTableHead = ({ checkbox = false, checked = false }) => {
  return (
    <TableHead>
      <TableRow>
        {checkbox && (
          <TableCell padding="checkbox">
            <Checkbox checked={checked} />
          </TableCell>
        )}

        {new Array(4).fill("Head").map((headCell, i) => (
          <TableCell key={i} sx={{ fontWeight: "bold" }}>
            {headCell}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

const EnhancedTableRow = ({ checkbox = false, checked = false }) => {
  return (
    <TableRow hover selected={checked}>
      {checkbox && (
        <TableCell padding="checkbox">
          <Checkbox checked={checked} />
        </TableCell>
      )}
      <TableCell>Cell</TableCell>
      <TableCell>Cell</TableCell>
      <TableCell>Cell</TableCell>
      <TableCell>Cell</TableCell>
    </TableRow>
  )
}

const TableList = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const rows = new Array(13).fill()

  const handleChangePage = (_, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <Box>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table size="small">
            <EnhancedTableHead />
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => {
                  return <EnhancedTableRow key={i} />
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  )
}

export const Tables = () => {
  return (
    <Wrapper title="Table">
      <Box sx={{ width: 600 }}>
        <Table>
          <TableBody>
            <EnhancedTableRow />
          </TableBody>
        </Table>

        <br />

        <Table>
          <TableBody>
            <EnhancedTableRow />
          </TableBody>
        </Table>

        <br />

        <Table>
          <TableBody>
            <EnhancedTableRow checked />
          </TableBody>
        </Table>

        <br />
        <br />

        <Table>
          <TableBody>
            <EnhancedTableRow />
          </TableBody>
        </Table>

        <br />

        <Table size="small">
          <TableBody>
            <EnhancedTableRow />
          </TableBody>
        </Table>

        <br />
        <br />

        <Table size="small">
          <TableBody>
            <EnhancedTableRow checkbox />
          </TableBody>
        </Table>

        <br />
        <br />

        <Table>
          <EnhancedTableHead />
        </Table>

        <br />

        <Table>
          <EnhancedTableHead checkbox checked />
        </Table>

        <br />
        <br />

        <TableList />
      </Box>
    </Wrapper>
  )
}
