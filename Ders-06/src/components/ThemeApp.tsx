import ThemedComponent from "./ThemedComponent";
import ThemeProvider from "../context/ThemeProvider";

const ThemeApp = () => (
    <ThemeProvider>
        <ThemedComponent />
    </ThemeProvider>
);

export default ThemeApp;