import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import  img from '../../assets/chef.png';
import { Box, Stack, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HeroSlider() {
    return (
        <Swiper>
            <SwiperSlide>
                <Stack direction={{ xs: 'column', md: "row" }} spacing={6} alignItems="center" pt={2}>
                    <Box>
                        <Typography variant='h3' component='h1'>Skip the wait! Reserve Online</Typography>
                        <Typography variant='h1' component='h1' mb={1}>Table <span style={{ color: '#2AA7FF' }}>Reservation</span></Typography>
                        <Typography color="#5C6169" fontSize={{ md: 20 }} mb={3}>
                            Connect instantly with our platform to reserve tables at your favorite restaurants.
                        </Typography>
                        <Link to='/search'>
                            <Button variant='contained' size="large" disableElevation>
                                Find Restaurants
                            </Button>
                        </Link>
                    </Box>
                    <Box
                        component={'img'}
                        src={img}
                        width={{ xs: 1, md: "40%" }}
                    />
                </Stack>
            </SwiperSlide>
        </Swiper>
    )
}