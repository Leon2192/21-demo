import { Box, Typography, Grid, Slide, Fade } from "@mui/material";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// 📅 Fecha fija: 27 de septiembre de 2025
const targetDate = new Date("2025-09-27T00:00:00");

const getTimeLeft = () => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  const totalSeconds = Math.max(0, Math.floor(difference / 1000));
  const dias = Math.floor(totalSeconds / (3600 * 24));
  const horas = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutos = Math.floor((totalSeconds % 3600) / 60);
  const segundos = totalSeconds % 60;

  return { dias, horas, minutos, segundos };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const unidades = Object.entries(timeLeft);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      id="info"
      sx={{
        minHeight: "30vh",
        py: 6,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
        width: "100%", // ocupa todo el ancho
      }}
    >
      <Slide in={inView} direction="up" timeout={800}>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "2em", md: "2.5rem" },
              fontFamily: "'Playfair Display', serif",
              fontWeight: 500,
              mb: 1,
              color: "#222",
            }}
          >
            Faltan...
          </Typography>
        </Box>
      </Slide>

      <Fade in={inView} timeout={1200}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ maxWidth: 600, width: "100%" }} // límite razonable + responsive
        >
          {unidades.map(([unit, value]) => (
            <Grid item xs={3} md={2} key={unit}>
              <Box textAlign="center">
                <Typography
                  sx={{
                    fontSize: { xs: "2rem", md: "3rem" },
                    fontWeight: "bold",
                    color: "#222",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {String(value).padStart(2, "0")}
                </Typography>
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontSize: { xs: "0.9rem", md: "1.1rem" },
                    fontFamily: "'Playfair Display', serif",
                    color: "#555",
                  }}
                >
                  {unit}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Fade>
    </Box>
  );
};

export default Countdown;
