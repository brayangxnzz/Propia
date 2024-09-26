import React from 'react';
import { Box, Typography } from '@mui/material';

const ComparacionCifrados = () => (
  <Box className="container" sx={{ marginTop: '30px' }}>
    <Typography variant="h6" gutterBottom>Comparación de Cifrados</Typography>
    <Typography variant="body1">
      <b>Cifrado César:</b> Es un cifrado muy simple, donde cada letra se reemplaza por otra desplazada en el alfabeto. Es vulnerable a ataques de fuerza bruta, ya que solo hay 25 posibles claves.
    </Typography>
    <Typography variant="body1" style={{ marginTop: '10px' }}>
      <b>Cifrado Escítala:</b> Utiliza una reorganización del mensaje en columnas, lo que lo hace más seguro que el cifrado César, pero sigue siendo vulnerable a ciertos ataques si se conoce el formato.
    </Typography>
  </Box>
);

export default ComparacionCifrados;
