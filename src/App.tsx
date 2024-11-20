import {HomePage} from "./routes/HomePage";
import {ThemeProvider} from "../src/Context/ChangeTheme"

function App() {
  return (
      <ThemeProvider>
        <HomePage/>
      </ThemeProvider>

  );
}

export default App;
