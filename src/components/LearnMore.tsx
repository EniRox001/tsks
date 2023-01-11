import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";

 export default function LearnMore() {
    return (
        <Box sx={{
            // height: '100vh',
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
    )
}