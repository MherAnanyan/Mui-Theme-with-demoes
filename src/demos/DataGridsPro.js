import { Wrapper } from "../Wrapper"
import { DataGridPro } from "@mui/x-data-grid-pro"
import { useDemoData } from "@mui/x-data-grid-generator"
import { Box } from "@mui/system"

export const DataGridsPro = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 10,
    editable: true,
  })

  return (
    <Wrapper title="DataGridPro">
      <Box sx={{ height: 400, m: 2 }}>
        <DataGridPro
          {...data}
          sx={{backgroundColor: "dataGridPro.main"}}
          loading={data.rows.length === 0}
          rowHeight={38}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </Wrapper>
  )
}
