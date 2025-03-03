import { Box, Container, Grid, Typography } from "@mui/material";
import banner from '../../../assets/restaurant-team.png' //to be changed

export default function OurFamilies() {
    return (
        <Box pt={3} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Container>
                <Grid container alignItems='center' spacing={{xs:2,md:10}}>

                    <Grid item xs={12} md={6}>
                        <Typography
                            fontWeight={600}
                            color="primary.main"
                        >
                            RESERVE YOUR DINING EXPERIENCE
                        </Typography>
                        <Typography variant="h2">
                            Table Booking
                        </Typography>
                        <Typography color='#77829D' lineHeight={1.8}>
                            Discover the perfect dining experience at our restaurant. From intimate dinners to special celebrations, we offer seamless reservations that ensure your dining experience is exactly as you envision. Our attentive staff is ready to accommodate your preferences and dietary requirements.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box
                            component='img'
                            src={banner}
                            width={1}
                            height='auto'
                        />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}