import React, { useState } from 'react';
import { TextField, Button, Box, Typography, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Cipher = () => {
  const [mensaje, setMensaje] = useState('');
  const [clave, setClave] = useState('');
  const [resultado, setResultado] = useState('');
  const [copiado, setCopiado] = useState(false);
  const [error, setError] = useState('');

  const manejarCifrado = () => {
    if (!mensaje || !clave || isNaN(clave)) {
      setError('Por favor ingresa un mensaje y una clave válida (número).');
      return;
    }

    setError('');
    let cifrado = '';
    for (let i = 0; i < mensaje.length; i++) {
      let charCode = mensaje.charCodeAt(i);
      cifrado += String.fromCharCode(charCode + parseInt(clave));
    }
    setResultado(cifrado);
  };

  const manejarDescifrado = () => {
    if (!mensaje || !clave || isNaN(clave)) {
      setError('Por favor ingresa un mensaje y una clave válida (número).');
      return;
    }

    setError('');
    let descifrado = '';
    for (let i = 0; i < mensaje.length; i++) {
      let charCode = mensaje.charCodeAt(i);
      descifrado += String.fromCharCode(charCode - parseInt(clave));
    }
    setResultado(descifrado);
  };

  const copiarResultado = () => {
    navigator.clipboard.writeText(resultado);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <Box className="container">
      <Typography variant="h5" gutterBottom>Cifrado César</Typography>
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
        label="Clave"
        fullWidth
        margin="normal"
        value={clave}
        onChange={(e) => setClave(e.target.value)}
        error={!!error}
        helperText={error && 'Debe ser un número válido'}
      />
      {error && <Typography className="error-message">{error}</Typography>}
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
          
          <IconButton onClick={copiarResultado} aria-label="copiar" className="icon-button">
            <ContentCopyIcon />
          </IconButton>
          <Typography>Copiar</Typography>
          {copiado && <Typography className="copy-message">¡Copiado al portapapeles!</Typography>}
        </Box>
      )}
    </Box>
  );
};

export default Cipher;
