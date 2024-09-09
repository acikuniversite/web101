import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const ThemedComponent = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("ThemedComponent must be used within a ThemeProvider");
    }

    const { theme, toggleTheme } = context;

    return (
        <div
            style={{
                background: theme === "light" ? "#fff" : "#333",
                color: theme === "light" ? "#000" : "#fff",
            }}
        >
            <h1>Current Theme: {theme}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ThemedComponent;