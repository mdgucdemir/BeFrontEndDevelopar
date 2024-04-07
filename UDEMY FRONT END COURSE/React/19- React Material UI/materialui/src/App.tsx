import "./App.css";
import LessonButton from "./components/LessonButton";
import LessonButtonGroup from "./components/LessonButtonGroup";
import LessonCheckbox from "./components/LessonCheckbox";
import LessonRadioGroup from "./components/LessonRadioGroup";
import LessonSelect from "./components/LessonSelect";
import LessonTextField from "./components/LessonTextField";
import RadioExample from "./components/RadioExample";
import Typography from "./components/Typography";

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
      <LessonCheckbox />
    </div>
  );
}

export default App;
