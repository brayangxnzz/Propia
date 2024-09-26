import React, { useState } from 'react';
import { TextField, Button, Typography, Box, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const ScytaleCipher = () => {
  const [mensaje, setMensaje] = useState('');
  const [clave, setClave] = useState(3); // Default clave
  const [resultado, setResultado] = useState('');
  const [error, setError] = useState('');
  const [copiado, setCopiado] = useState(false);

  const cifrarEscitala = (texto, clave) => {
    let cifrado = '';
    const filas = Math.ceil(texto.length / clave);
    for (let i = 0; i < clave; i++) {
      for (let j = i; j < texto.length; j += clave) {
        cifrado += texto[j];
      }
    }
    return cifrado;
  };

  const descifrarEscitala = (texto, clave) => {
    const filas = Math.ceil(texto.length / clave);
    let descifrado = new Array(texto.length);
    let k = 0;
    for (let i = 0; i < clave; i++) {
      for (let j = i; j < texto.length; j += clave) {
        descifrado[j] = texto[k++];
      }
    }
    return descifrado.join('');
  };

  const manejarCifrado = () => {
    if (!mensaje || isNaN(clave) || clave < 1) {
      setError('Por favor ingresa un mensaje y una clave válida mayor que 0.');
      return;
    }
    setError('');
    setResultado(cifrarEscitala(mensaje, parseInt(clave)));
  };

  const manejarDescifrado = () => {
    if (!mensaje || isNaN(clave) || clave < 1) {
      setError('Por favor ingresa un mensaje y una clave válida mayor que 0.');
      return;
    }
    setError('');
    setResultado(descifrarEscitala(mensaje, parseInt(clave)));
  };

  const copiarResultado = () => {
    navigator.clipboard.writeText(resultado);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <Box className="container">
      <Typography variant="h5" gutterBottom>Cifrado Escítala</Typography>
      <TextField
        label="Mensaje"
        fullWidth
        margin="normal"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        error={!!error}
        helperText={error && 'Campo obligatorio'}
      />
      <TextField
        label="Clave (Número de columnas)"
        fullWidth
        margin="normal"
        value={clave}
        onChange={(e) => setClave(e.target.value)}
        error={!!error}
        helperText={error && 'Debe ser un número mayor que 0'}
      />
      {error && <Typography color="error" sx={{ marginBottom: '10px' }}>{error}</Typography>}
      <Box sx={{ marginTop: 2 }}>
        <Button variant="contained" color="primary" onClick={manejarCifrado} sx={{ marginRight: 2 }}>
          Cifrar
        </Button>
        <Button variant="contained" color="secondary" onClick={manejarDescifrado}>
          Descifrar
        </Button>
      </Box>
      {resultado && (
        <Box sx={{ marginTop: 2 }}>
          <Typography>Resultado: {resultado}</Typography>
          <IconButton onClick={copiarResultado} aria-label="copiar" sx={{ marginTop: '5px' }}>
            <ContentCopyIcon />
          </IconButton>
          {copiado && <Typography sx={{ color: 'green', fontSize: '12px' }}>¡Copiado al portapapeles!</Typography>}
        </Box>
      )}
    </Box>
  );
};

export default ScytaleCipher;
