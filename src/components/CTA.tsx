import { Box, Button, Typography } from "@mui/material";
import LetsGoButton from "./LetsGoButton";

export default function CTA() {
    return (
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
            <LetsGoButton />
        </Box>
    )
}