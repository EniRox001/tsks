import { RocketLaunch } from "@mui/icons-material";
import { Box, Button, Stack, Typography, Card, CardContent, Grid } from "@mui/material";
import NavBar from "../components/NavBar";
import { useState } from "react";


export default function Landing() {
    const [dialog, setOpenDialog] = useState(false);
    
    const openDialog = () => {
        setOpenDialog(true);
    }

    const closeDialog = () => {
        setOpenDialog(false);
    }

    return (
        <>
            <NavBar dialog={dialog} openDialog={openDialog} closeDialog={closeDialog}/>
            <Box sx={{
            mx: 4
        }}>
            <Box 
            sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                <Stack 
                    sx= {{
                        display: 'flex',
                        alignItems: 'center',
                    }} 
                    spacing={4}>
                    <Typography variant="h2" sx={{
                        textAlign: 'center'
                    }}>Tsks, just tasks.</Typography>
                    <Box sx={{
                        width: 300,
                        textAlign: 'justify',
                    }}>
                        <Typography variant="body1">Keep track of the daily tasks in life and get that satisfaction upon completion.</Typography>
                    </Box>
                    <Stack direction='row' sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column', sm: 'row'
                        },
                        gap: {
                            xs: 1.5, sm: 4
                        }
                    }}>
                        <Button variant="contained" sx={{
                            width: {
                                xs: '80vw', sm: 'inherit'
                            },
                        }}>Get Started</Button>
                        <Button variant="outlined" sx={{
                            width: {
                                xs: '80vw', sm: 'inherit'
                            },
                        }}>Learn More</Button>
                    </Stack>
                </Stack>
            </Box>
            <Box sx={{
            mb: 15
        }}>
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center'
                }}>Organize your life today
            </Typography>
            <Grid 
                container
                spacing={2}
                justifyContent="center"
                sx={{
                    mt: 5
                }}>
                    <Grid item xs={12} lg={3}>
                        <Card variant="outlined" sx={{
                            p: 2,
                            height: '100%'
                        }}>
                            <CardContent>
                                <Typography 
                                    variant="h5" 
                                    sx={{
                                        textDecoration: 'underline',
                                        textUnderlineOffset: 3,
                                        mb: 3
                                    }}>Top Tier Organization
                                </Typography>
                                <Typography 
                                    variant="body1" 
                                    sx={{
                                        textAlign: 'justify'
                                    }}>With amazing organization, and more user focused design, you can trust tsks to place what you want, where you want it, with little to no hassle.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card variant="outlined" sx={{
                            p: 2,
                            height: '100%'
                        }}>
                            <CardContent>
                                <Typography 
                                    variant="h5" 
                                    sx={{
                                        textDecoration: 'underline', 
                                        textUnderlineOffset: 3,
                                        mb: 3
                                    }}>Device Synchronization
                                </Typography>
                                <Typography 
                                    variant="body1" 
                                    sx={{
                                        textAlign: 'justify'
                                    }}>Mobile, Tablet, Laptop... It doesn't matter, with tsks, you have your tasks synced across all youyr devices all at the same time. So you never miss out on a task ever again.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card variant="outlined" sx={{
                            p: 2,
                            height: '100%'
                        }}>
                            <CardContent>
                                <Typography 
                                    variant="h5" 
                                    sx={{
                                        textDecoration: 'underline', 
                                        textUnderlineOffset: 3,
                                        mb: 3
                                    }}>Account Integration
                                </Typography>
                                <Typography 
                                    variant="body1" 
                                    sx={{
                                        textAlign: 'justify'
                                    }}>Sign in with your preffered account and never lose access to your tasks ever again.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
        </Box>
        <Box  sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 3

        }}>
            <Typography 
                variant="h5"
                sx={{
                    textAlign: 'center'
                }}>Get Started Organizing Your Life Today</Typography>
                <Button startIcon={<RocketLaunch />} variant="contained" sx={{
                    width: {
                        xs: '80vw', sm: 'inherit'
                    },
                }}>Get Started</Button>
        </Box>
        </Box>
        </>
    )
}