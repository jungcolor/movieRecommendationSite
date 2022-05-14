import React from 'react';
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Stack, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { deepOrange } from '@mui/material/colors';

interface IProps {
    handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Register({ handleOnSubmit, handleOnChange }: IProps): JSX.Element {
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
                <Avatar sx={{ m: 1, bgcolor: deepOrange[500] }}>
                    <AccountCircleIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <Box component="form" onSubmit={handleOnSubmit} noValidate sx={{ mt: 1, width: "100%" }}>
                    <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" onChange={handleOnChange} autoComplete="email" autoFocus />
                    <TextField margin="normal" required fullWidth id="password" label="Password" name="password" onChange={handleOnChange} autoComplete="current-password" type="password" />
                    <TextField margin="normal" required fullWidth id="password-confirm" label="PasswordConfirm" name="passwordConfirm" onChange={handleOnChange} type="password" />
                    <TextField margin="normal" required fullWidth id="name" label="name" name="name" onChange={handleOnChange} />
                    <Stack spacing={2} margin="normal" direction="row" justifyContent="center" style={{ marginTop: "16px" }}>
                        <Button type="submit" variant="contained">
                            join
                        </Button>
                        <Button type="button" variant="contained">
                            cancel
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Container>
    );
}

export default Register;