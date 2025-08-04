import {
  Box,
  Grid,
  Typography,
  Button,
  Divider,
  Slide,
} from "@mui/material";
import ChurchIcon from "@mui/icons-material/Church";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { useInView } from "react-intersection-observer";

const InfoEvent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        py: 6,
        px: 2,
        backgroundColor: "#f0f0f0",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="space-evenly"
        alignItems="center"
      >
        {/* Columna Izquierda */}
        <Grid item xs={12} md={6}>
          <Slide in={inView} direction="left" timeout={800}>
            <Box sx={{ textAlign: "center" }}>
              <ChurchIcon sx={{ fontSize: 50, color: "#b0b0b0", mb: 1 }} />
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: { xs: "2rem", md: "2.5rem" },
                }}
              >
                Ceremonia
              </Typography>
              <Typography variant="body1" color="text.secondary">
                23 de noviembre
              </Typography>
              <Typography variant="body1" color="text.secondary">
                19:00 hs.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Basílica del Espíritu Santo (Parroquia N.S. de Guadalupe)
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Recibí debajo las indicaciones para llegar.
              </Typography>
              <a
                href="https://www.google.com/maps/place/Bas%C3%ADlica+del+Esp%C3%ADritu+Santo+(Parroquia+N.S.+de+Guadalupe)/@-34.589454,-58.419837,17z"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 999,
                    px: 4,
                    backgroundColor: "#fff",
                    color: "#000000",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#00000",
                      border: "2px solid #d1c4e9",
                      color: "#4a148c",
                    },
                  }}
                >
                  Llegar a la ceremonia
                </Button>
              </a>
            </Box>
          </Slide>
        </Grid>

        {/* Columna Derecha */}
        <Grid item xs={12} md={6}>
          <Slide in={inView} direction="right" timeout={800}>
            <Box sx={{ textAlign: "center" }}>
              <CelebrationIcon sx={{ fontSize: 50, color: "#b0b0b0", mb: 1 }} />
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: { xs: "2rem", md: "2.5rem" },
                }}
              >
                Fiesta
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Luego de la ceremonia
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Palacio Duhau - Park Hyatt Buenos Aires
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Victoria, Buenos Aires.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                ¡Te esperamos!
              </Typography>
              <a
                href="https://www.google.com/maps/place/Palacio+Duhau+-+Park+Hyatt+Buenos+Aires/@-34.5893841,-58.3888138,17z"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 999,
                    px: 4,
                    backgroundColor: "#fff",
                    color: "#000000",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#fff",
                      border: "2px solid #d1c4e9",
                      color: "#4a148c",
                    },
                  }}
                >
                  Llegar al salón
                </Button>
              </a>
            </Box>
          </Slide>
        </Grid>
      </Grid>

      {/* Divider al final */}
      <Divider
        sx={{
          mt: 6,
          mx: "auto",
          width: "40px",
          borderBottomWidth: 2,
          borderColor: "#ccc",
        }}
      />
    </Box>
  );
};

export default InfoEvent;
