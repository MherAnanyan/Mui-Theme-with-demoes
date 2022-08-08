import { useState } from "react"
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material"
import { Switch } from "@material-ui/core"
import { getPalette } from "./theme/palettes"
import { typography } from "./theme/typography"
import { Typographys } from "./demos/Typographys.js"
import Buttons from "./demos/Buttons"
import { MuiCheckbox } from "./demos/Checkbox"
import Fabs from "./demos/Fabs"
import Radios from "./demos/Radios"
import Ratings from "./demos/Ratings"
import Sliders from "./demos/Sliders"
import Switches from "./demos/Switches"
import { TransferListFirst } from "./demos/transferLists/TransferList1"
import { TransferListSecond } from "./demos/transferLists/TransferList2"
import IconButtons from "./demos/IconButtons"
import ToggleButtons from "./demos/ToggleButtons"
import ButtonGroups from "./demos/ButtonGroups"
import { MuiBreadcrumbs } from "./demos/Breadcrumbs"
import TemporaryDrawer from "./demos/MuiDrower"
import { Selects } from "./demos/Selects"
import { TextFields } from "./demos/TextFields"
import { BottomNav } from "./demos/BottomNav"
import { Links } from "./demos/Link"
import { Menus } from "./demos/Menus/Menus"
import { Paginations } from "./demos/Pagination"
import { PlaygroundSpeedDial } from "./demos/SpeedDial"
import { Accordions } from "./demos/Accardions"
import { Autocompletes } from "./demos/Autocomplete"
import { Multilines } from "./demos/Multilines"
import { Steppers } from "./demos/Steppers"
import { Alerts } from "./demos/Alerts"
import { Skeletons } from "./demos/Skeletons"
import { Dialogs } from "./demos/Dialogs"
import { Cards } from "./demos/Cards"
import { Papers } from "./demos/Papers"
import { Progresses } from "./demos/Progresses"
import { Snackbars } from "./demos/Snackbars"
import { Avatars } from "./demos/Avatars"
import { Badges } from "./demos/Badges"
import { Chips } from "./demos/Chips"
import { Dividers } from "./demos/Dividers"
import { Icons } from "./demos/Icons"
import { MuiTabs } from "./demos/MuiTabs"
import { Tables } from "./demos/Tables"
import { Lists } from "./demos/Lists"
import { Tooltips } from "./demos/Tooltips"
import { DatePicker } from "./demos/DatePicker"
import { Timelines } from "./demos/Timelines"
import { TreeViews } from "./demos/TreeViews"
import { DataGrids } from "./demos/DataGrids"
import { DataGridsPro } from "./demos/DataGridsPro"

const App = () => {
  const themeFromLocalStorage = localStorage.getItem("themeMode")
  const themeMode = themeFromLocalStorage ? themeFromLocalStorage : "light"

  const [mode, setMode] = useState(themeMode)

  const isLight = () => mode === "light"

  const changeThemeMode = () => {
    const themeMode = isLight() ? "dark" : "light"
    setMode(themeMode)
    localStorage.setItem("themeMode", themeMode)
  }

  const theme = createTheme({
    palette: getPalette(mode),
    typography,
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <div style={{ position: "fixed", top: 0, zIndex: 1000 }}>
            <Switch defaultChecked={!isLight()} onChange={changeThemeMode} />
          </div>
          <CssBaseline />
          <Typographys />
          <Buttons />
          <ButtonGroups />
          <IconButtons />
          <ToggleButtons />
          <Switches />
          <Sliders />
          <Ratings />
          <Radios />
          <Fabs />
          <MuiCheckbox />
          <TransferListFirst />
          <TransferListSecond />
          <Selects />
          <MuiBreadcrumbs />
          <TemporaryDrawer />
          <TextFields />
          <Multilines />
          <BottomNav />
          <Links />
          <Menus />
          <Paginations />
          <PlaygroundSpeedDial />
          <Accordions />
          <Autocompletes />
          <Steppers />
          <Snackbars />
          <Skeletons />
          <Progresses />
          <Papers />
          <Dialogs />
          <Cards />
          <Alerts />
          <Avatars />
          <Badges />
          <Chips />
          <Icons />
          <Dividers />
          <MuiTabs />
          <Tables />
          <Tooltips />
          <Lists />
          <DatePicker />
          <Timelines />
          <TreeViews />
          <DataGrids />
          <DataGridsPro />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
