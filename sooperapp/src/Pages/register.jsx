import React from 'react'
import { Box, IconButton, Paper, TextField, Typography, InputAdornment, FormControl, InputLabel, FilledInput, Button, OutlinedInput, Input, FormHelperText, Alert, Stack, Collapse } from "@mui/material"
import Bar from "../Components/bar"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import { register } from '../API/login';

export default function Register() {
    const [showPassword1, setShowPassword1] = React.useState(false);
    const [showPassword2, setShowPassword2] = React.useState(false);
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordVerify, setPasswordVerify] = React.useState("");
    const [errored, setErrored] = React.useState(false);
    const [open201, setOpen201] = React.useState(false);
    const [open409, setOpen409] = React.useState(false);
    const [open400, setOpen400] = React.useState(false);

    React.useEffect(() => {
        if (password != passwordVerify) {
            setErrored(true);
        } else {
            setErrored(false);
        }
    }, [password, passwordVerify])

    const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

    function registerAccount() {
        let resp = register(userName, password)
        switch (resp) {
            case 201:
                setOpen201(true);
                return
            case 409:
                setOpen409(true);
                return
            default:
                setOpen400(true);
                return
        }
    }

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
                        <Typography sx={{ mt: 2, ml: 2, width: '30ch' }} variant="h6">Register</Typography>
                        <TextField
                            sx={{ mt: 1, ml: 2, mb: 2, width: '45ch' }}
                            variant='standard'
                            id="username"
                            label="Username"
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }} />
                        <FormControl sx={{ mt: 1, ml: 2, mb: 2, width: '45ch' }}>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                id="password"
                                type={showPassword1 ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword1}
                                            edge="end"
                                        >
                                            {showPassword1 ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </FormControl>
                        <FormControl sx={{ mt: 1, ml: 2, mb: 2, width: '45ch' }}>
                            <InputLabel htmlFor="password">Re-enter Password</InputLabel>
                            <Input
                                id="password2"
                                error={errored}
                                type={showPassword2 ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword2}
                                            edge="end"
                                        >
                                            {showPassword2 ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                onChange={(e) => {
                                    setPasswordVerify(e.target.value);
                                }}
                            />
                            {errored ?
                                <FormHelperText id="error-text" error>Passwords must match!</FormHelperText> : <></>}
                        </FormControl>
                        <div />
                        <Box display="flex" justifyContent="right">
                            
                            <Button sx={{ m: 3.5 }}
                                variant='contained'
                                onClick={registerAccount}
                            >
                                Register
                            </Button>
                        </Box>

                    </Paper>
                </Grid>
            </Grid>
            <Stack sx={{ width: '40%' }} spacing={2}>
                <Collapse in={open201}>
                    <Alert
                        open={open201}
                        severity="success"
                        action={<IconButton aria-label="close" color="inherit" size="small"
                            onClick={() => {
                                setOpen201(false);
                            }}><CloseIcon fontSize="inherit" />
                        </IconButton>}>Account created! Please login to access your account.</Alert>
                </Collapse>
                <Collapse in={open409}>
                    <Alert
                        open={open409}
                        severity="error"
                        action={<IconButton aria-label="close" color="inherit" size="small"
                            onClick={() => {
                                setOpen409(false);
                            }}><CloseIcon fontSize="inherit" />
                        </IconButton>}>This account already exists. Please login instead.</Alert>
                </Collapse>
                <Collapse in={open400}>
                    <Alert
                        open={open400}
                        severity="error"
                        action={<IconButton aria-label="close" color="inherit" size="small"
                            onClick={() => {
                                setOpen400(false);
                            }}><CloseIcon fontSize="inherit" />
                        </IconButton>}>Error creating account</Alert>
                </Collapse>
            </Stack>
        </>
    )
}