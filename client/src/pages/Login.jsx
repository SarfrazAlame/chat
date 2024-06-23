import React, { useState } from 'react'
import { Container, Paper, TextField, Typography } from "@mui/material"

const Login = () => {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <Container component={"main"} >
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                {isLogin ? (<>
                    <Typography variant='h5'>Login</Typography>
                    <form>
                        <TextField
                            required
                            fullWidth
                            label="Username"
                            margin='normal'
                            variant='outlined'
                        />
                        <TextField
                            required
                            fullWidth
                            label="Email"
                            margin='normal'
                            variant='outlined'
                        />
                    </form>
                </>) : (<><span>register</span></>)}
            </Paper>
        </Container>
    )
}

export default Login
