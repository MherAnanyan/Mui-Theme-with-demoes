import { Wrapper } from "../Wrapper"
import { useState } from "react"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker"
import TextField from "@mui/material/TextField"
import { Stack } from "@mui/material"

export const DatePicker = () => {
  const [value, setValue] = useState(new Date())
  const sx = { width: 250 }

  const handleChange = (newValue) => {
    setValue(newValue)
  }

  return (
    <Wrapper title="Date and Time">
      <br />

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack sx={sx} spacing={3}>
          <DesktopDatePicker
            label="Date"
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />

          <MobileDatePicker
            label="Time"
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />

          <MobileDateTimePicker
            label="Date and Time"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />

          <br />
          <br />

          <TextField label="Date" type="date" defaultValue="2022-05-24" />

          <TextField label="Time" type="time" defaultValue="07:30" />

          <TextField
            label="Date and Time"
            type="datetime-local"
            defaultValue="2022-05-24T10:30"
          />
        </Stack>
      </LocalizationProvider>
    </Wrapper>
  )
}
