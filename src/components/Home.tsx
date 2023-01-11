import { Box, Button, Stack, Typography } from "@mui/material";
import { sizing } from '@mui/system';
import CTA from "./CTA";
import LearnMore from "./LearnMore";

export default function Home() {
    return (
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
            <LearnMore />
            <CTA />
        </Box>
    );
}