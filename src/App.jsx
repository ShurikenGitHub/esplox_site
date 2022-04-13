import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CardBaseline, Grid, Toolbar, Container, CssBaseline } from '@mui/material';


const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6">
                        Hello World
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default App;