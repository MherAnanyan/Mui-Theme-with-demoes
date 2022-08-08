import { Wrapper } from "../Wrapper"
import { Box } from "@mui/system"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"

function* numberGen() {
  for (let i = 0; true; i++) {
    yield i
  }
}

export const DataGrids = () => {
  const idGenerator = numberGen()
  const getId = () => idGenerator.next().value
  const boxSx = { height: 400, minWidth: 600, m: 2 }
  const data = {
    columns: [
      { field: "id", hide: true },
      { field: "cell1", headerName: "Header" },
      {
        field: "cell2",
        headerName: "Header",
      },
      {
        field: "cell3",
        headerName: "Header",
      },
      {
        field: "cell4",
        headerName: "Header",
      },
      {
        field: "cell5",
        headerName: "Header",
        type: "number",
      },
    ],
    rows: Array(13)
      .fill()
      .map(() => ({
        id: getId(),
        cell1: "Cell",
        cell2: "Cell",
        cell3: "Cell",
        cell4: "Cell",
        cell5: "Cell",
      })),
  }

  return (
    <Wrapper title="DataGrid">
      <Box sx={{ display: "flex" }}>
        <Box sx={boxSx}>
          <DataGrid
            {...data}
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </Box>
        <Box sx={boxSx}>
          <DataGrid
            {...data}
            checkboxSelection
            selectionModel={[3]}
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </Box>
      </Box>
    </Wrapper>
  )
}
