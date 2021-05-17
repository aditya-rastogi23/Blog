import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import About from "./About";
import Article from "./Article";
import Home from "./Home";
import Navbar from "./UI/Navbar";
import Container from "./UI/Container";
import { GlobalStyle } from "../Assets/theme";
import ScrollToTop from "./Utility/ScrollToTop";

const App: React.FC = () => {
    const [theme, setTheme] = useState("dark");
    return (
        <ThemeProvider theme={{ mode: theme }}>
            <GlobalStyle />
            <HashRouter>
                <ScrollToTop />
                <Navbar
                    themeHandler={() =>
                        setTheme((theme) =>
                            theme === "dark" ? "light" : "dark"
                        )
                    }
                    theme={
                        theme === "dark"
                            ? "Change to light theme, I'm a heathen"
                            : "Aah!!! it burns, switch back"
                    }
                />
                <Container>
                    <Switch>
                        <Route exact path="/About" component={About} />
                        <Route exact path="/Article/:id" component={Article} />
                        <Route path="/" component={Home} />
                    </Switch>
                </Container>
            </HashRouter>
        </ThemeProvider>
    );
};

export default App;
