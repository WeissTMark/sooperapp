import React from 'react'
import { Box, IconButton, Paper, TextField, Typography, InputAdornment, FormControl, InputLabel, FilledInput, Button, OutlinedInput, Input } from "@mui/material"
import Bar from "../Components/bar"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { register } from '../API/login';

export default function Login() {
    const nav = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <>
            <Bar />
            <Grid sx={{ width: '100vw', height: '85vh', justifyContent: 'space-around' }}
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid xs>
                    <Paper sx={{ pt: 1, width: '50ch', margin: 'auto' }} elevation={0} variant='outlined'>
                        <Typography sx={{ mt: 2, ml: 2, width: '30ch' }} variant="h6">Login</Typography>
                        <TextField
                            sx={{ mt: 1, ml: 2, mb: 2, width: '45ch' }}
                            variant="standard"
                            id="username"
                            label="Username" />
                        <FormControl sx={{ mt: 1, ml: 2, mb: 2, width: '45ch' }}>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <div />
                        <Box display="flex" justifyContent="space-between">
                            <Button sx={{m: 3.5, ml: 2 }}
                             variant='text'
                             onClick={() => {nav('/register')}}>
                                Create Account
                            </Button>
                            <Button sx={{m: 3.5 }} variant='contained'>
                                Login
                            </Button>
                        </Box>

                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}