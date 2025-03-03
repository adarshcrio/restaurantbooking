import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import logo from "../../assets/restaurant-logo.png";
import fb from "../../assets/fb.png";
import pinterest from "../../assets/pinterest.png";
import twitter from "../../assets/twitter.png";
import yt from "../../assets/yt.png";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <Box bgcolor="primary.main" pb={3} pt={6}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4.5}>
            <Stack
              alignItems="flex-start"
              justifyContent="space-between"
              height={1}
            >
              <Box src={logo} height={100} alt="Fine Dining Restaurant" component="img" mb={2} />
              <Stack direction="row" spacing={1.5}>
                <Box component="img" src={fb} height={36} />
                <Box component="img" src={twitter} height={36} />
                <Box component="img" src={yt} height={36} />
                <Box component="img" src={pinterest} height={36} />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FooterLink>About Our Restaurant</FooterLink>
              <FooterLink>Menu</FooterLink>
              <FooterLink>Photo Gallery</FooterLink>
              <FooterLink>Contact Us</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FooterLink>Reservations</FooterLink>
              <FooterLink>Special Events</FooterLink>
              <FooterLink>Private Dining</FooterLink>
              <FooterLink>Customer Support</FooterLink>
              <FooterLink>Gift Cards</FooterLink>
            </Stack>
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FooterLink>Our Cuisine</FooterLink>
              <FooterLink>Wine List</FooterLink>
              <FooterLink>Chef's Special</FooterLink>
              <FooterLink>Catering Services</FooterLink>
              <FooterLink>Loyalty Program</FooterLink>
            </Stack>
          </Grid>
        </Grid>

        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={3}
          mt={5}
          borderTop="1px solid rgba(255,255,255,0.1)"
        >
          Copyright ©2025 FineDining.com. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}
