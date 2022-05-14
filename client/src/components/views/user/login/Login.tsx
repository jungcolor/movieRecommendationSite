import React, { ReactChildren } from 'react';
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

interface IProps {
    children?: ReactChildren;
    handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Login({ children, handleOnSubmit, handleOnChange }: IProps): JSX.Element {
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleOnSubmit} noValidate sx={{ mt: 1, width: "100%" }}>
                    <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" onChange={handleOnChange} autoComplete="email" autoFocus />
                    <TextField margin="normal" required fullWidth id="password" label="Password" name="password" type={"password"} onChange={handleOnChange} autoComplete="current-password" />
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember Me" />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;