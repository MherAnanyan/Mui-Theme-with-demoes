import {
  FormControl,
  FormHelperText,
  InputAdornment,
  TextField,
} from "@mui/material"
import VisibilityIcon from "@mui/icons-material/Visibility"
import * as React from "react"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { Wrapper } from "../Wrapper"

export const TextFields = () => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const sx = { m: 1, minWidth: 220 }
  return (
    <Wrapper title="TextFields">
      <br />
      <br />

      <TextField sx={sx} label="Label" variant="standard" color="primary2" />
      <TextField
        sx={sx}
        label="Label"
        variant="standard"
        color="primary2"
        focused
      />
      <TextField
        sx={sx}
        label="Label"
        variant="standard"
        color="primary2"
        error
      />
      <TextField
        sx={sx}
        label="Label"
        variant="standard"
        color="primary2"
        disabled
      />

      <br />
      <br />

      <TextField
        sx={sx}
        label="Label"
        variant="standard"
        color="primary2"
        defaultValue="Value"
      />

      <br />
      <br />

      <TextField sx={sx} label="Medium" variant="standard" color="primary2" />
      <TextField
        sx={sx}
        label="Small"
        variant="standard"
        color="primary2"
        size="small"
      />

      <br />
      <br />

      <TextField
        sx={sx}
        label="Label"
        variant="standard"
        color="primary2"
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />

      {/* <br />
      <br /> */}

      {/* <FormControl sx={sx} variant="standard" color="primary2">
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          label="Password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl> */}

      <br />
      <br />

      <FormControl>
        <TextField
          sx={{ ml: 1, mt: 1, minWidth: 220 }}
          label="Label"
          variant="standard"
          color="primary2"
          defaultValue="Value"
        />
        <FormHelperText sx={{ ml: 1 }} variant="standard">
          Helper text
        </FormHelperText>
      </FormControl>

      <br />
      <br />
      
<TextField sx={sx} label="Label" variant="outlined" color="primary2" />
      <TextField
        sx={sx}
        label="Label"
        variant="outlined"
        color="primary2"
        focused
      />
      <TextField
        sx={sx}
        label="Label"
        variant="outlined"
        color="primary2"
        error
      />
      <TextField
        sx={sx}
        label="Label"
        variant="outlined"
        color="primary2"
        disabled
      />

      <br />
      <br />

      <TextField
        sx={sx}
        label="Label"
        variant="outlined"
        color="primary2"
        defaultValue="Value"
      />

      <br />
      <br />

      <TextField sx={sx} label="Medium" variant="outlined" color="primary2" />
      <TextField
        sx={sx}
        label="Small"
        variant="outlined"
        color="primary2"
        size="small"
      />

      <br />
      <br />

      <TextField
        sx={sx}
        label="Label"
        variant="outlined"
        color="primary2"
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />

      <br />
      <br />

      <FormControl variant="outlined" sx={sx}>
        <TextField
          label="Label"
          variant="outlined"
          color="primary2"
          defaultValue="Value"
        />
        <FormHelperText>
          Helper text
        </FormHelperText>
      </FormControl>


      <br />
      <br />

      <TextField sx={sx} label="Label" variant="filled" color="primary2" />
      <TextField
        sx={sx}
        label="Label"
        variant="filled"
        color="primary2"
        focused
      />
      <TextField
        sx={sx}
        label="Label"
        variant="filled"
        color="primary2"
        error
      />
      <TextField
        sx={sx}
        label="Label"
        variant="filled"
        color="primary2"
        disabled
      />

      <br />
      <br />

      <TextField
        sx={sx}
        label="Label"
        variant="filled"
        color="primary2"
        defaultValue="Value"
      />

      <br />
      <br />

      <TextField sx={sx} label="Medium" variant="filled" color="primary2" />
      <TextField
        sx={sx}
        label="Small"
        variant="filled"
        color="primary2"
        size="small"
      />

      <br />
      <br />

      <TextField
        sx={sx}
        label="Label"
        variant="filled"
        color="primary2"
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />

      <br />
      <br />

      <FormControl variant="filled" sx={sx}>
        <TextField
          label="Label"
          variant="filled"
          color="primary2"
          defaultValue="Value"
        />
        <FormHelperText>
          Helper text
        </FormHelperText>
      </FormControl>
    </Wrapper>
  )
}
