import React from 'react'
import {
    HashRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Login from './Pages/login';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#3d3850',
        },
        secondary: {
            main: '#4b4173',
        },
        error: {
            main: '#F79824',
        },
    },
    typography: {
        htmlFontSize: 20,
        fontSize: 21
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
