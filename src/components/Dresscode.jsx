import { Box, Typography, Fade } from "@mui/material";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import DryCleaningIcon from "@mui/icons-material/DryCleaning"; // nuevo ícono elegante
import { useInView } from "react-intersection-observer";

const Dresscode = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "30vh",
        py: 8,
        px: 2,
        backgroundColor: "#f0f0f0", // verde pastel suave
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Fade in={inView} timeout={800}>
        <Box
          sx={{
            transform: inView ? "scale(1)" : "scale(0.95)",
            transition: "transform 0.6s ease-out",
          }}
        >
          <Box display="flex" justifyContent="center" gap={2} mb={2}>
            <CheckroomIcon sx={{ fontSize: 60, color: "#000000" }} />
          
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Playfair Display', serif",
          fontWeight: "bold",
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              mb: 1,
              color: "#000000",
            }}
          >
            Dresscode
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontSize: { xs: "1rem", md: "1.4rem" },
              color: "#000000",
            }}
          >
            Vestimenta formal, elegante
          </Typography>
        </Box>
      </Fade>
    </Box>
  );
};

export default Dresscode;
