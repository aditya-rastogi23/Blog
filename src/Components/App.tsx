import { useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./Home";
import Article from "./Article";
import Navbar from "./UI/Navbar";
import { GlobalStyle } from "../theme";

const App = () => {
    const [theme, setTheme] = useState("dark");
    return (
        <ThemeProvider theme={{ mode: theme }}>
            <GlobalStyle />
            <HashRouter>
                <Navbar
                    themeHandler={() =>
                        setTheme((theme) =>
                            theme === "dark" ? "light" : "dark"
                        )
                    }
                    theme={theme==="dark"?"Change to light theme, I'm a heathen":"Aah!!! it burns"}
                />
                <Route exact path="/" component={Home} />
                <Route exact path="/:id" component={Article} />
            </HashRouter>
        </ThemeProvider>
    );
};

export default App;
