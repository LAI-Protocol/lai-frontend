/* src/App.js */
import React, {useContext} from 'react';
import {ThemeProvider} from 'styled-components';
import theme from "./assets/style/theme";

// Router
import Router from './router'


function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router />
        </ThemeProvider>
    );
}

export default App;

