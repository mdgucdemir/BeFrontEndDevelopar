import { create } from "domain";
import "./App.css";
import LessonAccordion from "./components/LessonAccordion";
import LessonAlert from "./components/LessonAlert";
import LessonAppBar from "./components/LessonAppBar";
import LessonAutoComplate from "./components/LessonAutoComplate";
import LessonAvatar from "./components/LessonAvatar";
import LessonBadge from "./components/LessonBadge";
import LessonBottomNavigation from "./components/LessonBottomNavigation";
import LessonBox from "./components/LessonBox";
import LessonBreadCrumbs from "./components/LessonBreadCrumbs";
import LessonButton from "./components/LessonButton";
import LessonButtonGroup from "./components/LessonButtonGroup";
import LessonCard from "./components/LessonCard";
import LessonCheckbox from "./components/LessonCheckbox";
import LessonCustomize from "./components/LessonCustomize";
import LessonDateAndTimePickers from "./components/LessonDateAndTimePickers";
import LessonDateRange from "./components/LessonDateRange";
import LessonDialog from "./components/LessonDialog";
import LessonDrawer from "./components/LessonDrawer";
import LessonGrid from "./components/LessonGrid";
import LessonImageList from "./components/LessonImageList";
import LessonLink from "./components/LessonLink";
import LessonList from "./components/LessonList";
import LessonLoadingButton from "./components/LessonLoadingButton";
import LessonMasonry from "./components/LessonMasonry";
import LessonPaper from "./components/LessonPaper";
import LessonRadioGroup from "./components/LessonRadioGroup";
import LessonSelect from "./components/LessonSelect";
import LessonSkeleton from "./components/LessonSkeleton";
import LessonSnackbar from "./components/LessonSnackbar";
import LessonSpeedDial from "./components/LessonSpeedDial";
import LessonSpinner from "./components/LessonSpinner";
import LessonStack from "./components/LessonStack";
import LessonTable from "./components/LessonTable";
import LessonTabs from "./components/LessonTabs";
import LessonTextField from "./components/LessonTextField";
import LessonTimeLine from "./components/LessonTimeLine";
import LessonTooltip from "./components/LessonTooltip";
import RadioExample from "./components/RadioExample";
import Typography from "./components/Typography";

import { createTheme, colors, ThemeProvider } from "@mui/material";
import Footer from "./components/Footer/Footer";

const customTheme = createTheme({
  palette: {
    secondary: {
      main: colors.brown[500],
    },
  },
});

function App() {
  return (
    <div className="App">
      {/* <Typography /> */}
      {/* <LessonButton /> */}
      {/* <LessonButtonGroup /> */}
      {/* <LessonTextField /> */}
      {/* <LessonRadioGroup /> */}
      {/* <RadioExample /> */}
      {/* <LessonSelect /> */}
      {/* <LessonCheckbox /> */}
      {/* <LessonAutoComplate /> */}
      {/* <LessonBox /> */}
      {/* <LessonStack /> */}
      {/* <LessonGrid /> */}
      {/* <LessonCard /> */}
      {/* <LessonAccordion /> */}
      {/* <LessonAppBar /> */}
      {/* <LessonImageList /> */}
      {/* <LessonPaper /> */}
      {/* <LessonLink /> */}
      {/* <LessonBreadCrumbs /> */}
      {/* <LessonDrawer /> */}
      {/* <LessonBadge /> */}
      {/* <LessonSpeedDial /> */}
      {/* <LessonBottomNavigation /> */}
      {/* <LessonAvatar /> */}
      {/* <LessonList /> */}
      {/* <LessonTooltip /> */}
      {/* <LessonAlert /> */}
      {/* <LessonDialog /> */}
      {/* <LessonSnackbar /> */}
      {/* <LessonSpinner /> */}
      {/* <LessonSkeleton /> */}
      {/* <LessonLoadingButton /> */}
      {/* <LessonTable /> */}
      {/* <LessonDateAndTimePickers /> */}
      {/* <LessonDateRange /> */}
      {/* <LessonTabs /> */}
      {/* <LessonMasonry /> */}
      {/* <LessonTimeLine /> */}
      <ThemeProvider theme={customTheme}>
        <LessonCustomize />
        <LessonCustomize />
        <LessonCustomize />
        <LessonCustomize />
        <LessonCustomize />
        <LessonCustomize />
      </ThemeProvider>
      <Footer />
    </div>
  );
}

export default App;
