import {
  Box,
  Typography,
  Button,
  Modal,
  Fade,
  Backdrop,
  Divider,
  IconButton,
} from "@mui/material";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Gift = () => {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      ref={ref}
      sx={{
        py: 8,
        px: 2,
        backgroundColor: "#f0f0f0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Fade in={inView} timeout={1000}>
        <Box
          sx={{
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "transform 0.8s ease",
          }}
        >
          <CardGiftcardIcon sx={{ fontSize: 60, color: "#000000", mb: 2 }} />

          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", md: "2rem" },
              maxWidth: 600,
              mb: 4,
            }}
          >
            ¡Nuestro mejor regalo es tu presencia! <br />
            Peeero... si querés colaborar con nuestra luna de miel...
          </Typography>

          <Button
            variant="contained"
            onClick={handleOpen}
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
            Ver datos bancarios
          </Button>
        </Box>
      </Fade>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#fdfaff", // más claro
              borderRadius: 3,
              boxShadow: 24,
              p: 4,
              maxWidth: 600,
              width: "90%",
              textAlign: "center",
            }}
          >
            {/* Botón cerrar */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "#666",
                "&:hover": {
                  color: "#9a64ea",
                  backgroundColor: "transparent",
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Ícono en el modal */}
            <CardGiftcardIcon
              sx={{
                fontSize: 60,
                color: "#9a64ea",
                mb: 2,
              }}
            />

            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Datos Bancarios
            </Typography>

            <Typography variant="body1" gutterBottom>
              Nombre del Titular: Nombre Apellido
              <br />
              CBU: 12345623561
              <br />
              Alias: la.casa.del.detalle
              <br />
              DNI: 32200552
              <br />
              Banco Galicia
            </Typography>

            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ mt: 3 }}
            >
              Lista de Regalos
            </Typography>

            <Typography variant="body1">Black Novios</Typography>
          </Box>
        </Fade>
      </Modal>

      <Divider
        sx={{
          mt: 6,
          width: "40px",
          borderBottomWidth: 2,
          borderColor: "#ccc",
        }}
      />
    </Box>
  );
};

export default Gift;
