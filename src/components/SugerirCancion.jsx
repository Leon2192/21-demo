import { Box, Typography, Button, Fade } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { useInView } from "react-intersection-observer";

const SuggestSong = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "40vh",
        py: 8,
        px: 2,
        backgroundColor: "#fff", // fondo pastel rosa claro
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Fade in={inView} timeout={1000}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Icono con animación tipo "latido" */}
          <Box
            sx={{
              animation: inView ? "pulseNote 1.5s ease-out" : "none",
              mb: 2,
              "@keyframes pulseNote": {
                "0%": { transform: "scale(0.9)" },
                "50%": { transform: "scale(1.05)" },
                "100%": { transform: "scale(1)" },
              },
            }}
          >
            <MusicNoteIcon
              sx={{
                fontSize: 60,
                color: "#000000",
              }}
            />
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Playfair Display', serif",
          fontWeight: "bold",
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              mb: 2,
              color: "#000000",
            }}
          >
            ¿QUÉ CANCIONES NO PUEDEN FALTAR?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              fontFamily: "'Playfair Display', serif",
              maxWidth: 500,
              mb: 4,
              color: "#000000",
            }}
          >
            ¡Ayudanos sugiriendo las canciones que pensás que no pueden faltar en la fiesta!
          </Typography>

         <Button
  component="a"
  href="https://docs.google.com/forms/d/e/1FAIpQLSf59-LbsKfKsKMH-d9Gt7q6xfSue8wgy4ZEyzUCDb4C9w2Qcg/viewform"
  target="_blank"
  rel="noopener noreferrer"
  variant="contained"
  sx={{
    borderRadius: 999,
    px: 4,
    backgroundColor: "#f0f0f0",
    color: "#000000",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#fff",
      border: "2px solid #d1c4e9",
      color: "#4a148c",
    },
  }}
>
  Sugerir canción
</Button>

        </Box>
      </Fade>
    </Box>
  );
};

export default SuggestSong;
