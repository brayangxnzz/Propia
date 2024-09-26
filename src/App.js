import React from 'react';
import Cipher from './Cipher';
import ScytaleCipher from './ScytaleCipher';
import ComparacionCifrados from './ComparacionCifrados';
import { Box, Button, Modal, Typography } from '@mui/material';
import { CenterFocusStrong } from '@mui/icons-material';

const App = () => {
  const [openCesar, setOpenCesar] = React.useState(false);
  const [openEscitala, setOpenEscitala] = React.useState(false);

  const handleOpenCesar = () => setOpenCesar(true);
  const handleCloseCesar = () => setOpenCesar(false);
  
  const handleOpenEscitala = () => setOpenEscitala(true);
  const handleCloseEscitala = () => setOpenEscitala(false);

  return (
    <div className="container">
      <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, textAlign: 'center' }}>
  Seguridad Informática
</Typography>

      <Typography variant="subtitle1" sx={{ color: '#666', textAlign: 'center' , marginBottom: '20px' }}>
          Cifra y descifra mensajes utilizando los métodos de Cifrado César y Escítala
        </Typography>

      <Cipher />

      {/* Botón para abrir la guía del Cifrado César */}
      <Button onClick={handleOpenCesar} variant="outlined" color="primary" style={{ marginTop: '20px',  marginBottom: '20px' }}>
        Instrucciones Cifrado César
      </Button>

      {/* Modal para las instrucciones del Cifrado César */}
      <Modal open={openCesar} onClose={handleCloseCesar} aria-labelledby="instrucciones-cesar">
        <Box sx={{ p: 4, backgroundColor: '#fff', borderRadius: 2, width: '50%', margin: 'auto', marginTop: '10%' }}>
          <Typography id="instrucciones-cesar" variant="h6" gutterBottom>
            Instrucciones Cifrado César
          </Typography>
          <Typography variant="body1">
            1. **Ingrese el texto:** Escriba el mensaje que desea cifrar.
          </Typography>
          <Typography variant="body1">
            2. **Ingrese la clave:** Proporcione un número que será el desplazamiento. 
          </Typography>
          <Typography variant="body1">
            3. **Cifrar:** Al presionar el botón de cifrar, las letras del mensaje se desplazarán según la clave. Por ejemplo, si la clave es 3, 'A' se convierte en 'D'.
          </Typography>
          <Typography variant="body1">
            4. **Descifrar:** Use la misma clave para revertir el cifrado.
          </Typography>
        </Box>
      </Modal>

      <ScytaleCipher />

      {/* Botón para abrir la guía del Cifrado Escítala */}
      <Button onClick={handleOpenEscitala} variant="outlined" color="primary" style={{ marginTop: '20px' }}>
        Instrucciones Cifrado Escítala
      </Button>

      {/* Modal para las instrucciones del Cifrado Escítala */}
      <Modal open={openEscitala} onClose={handleCloseEscitala} aria-labelledby="instrucciones-escitala">
        <Box sx={{ p: 4, backgroundColor: '#fff', borderRadius: 2, width: '50%', margin: 'auto', marginTop: '10%' }}>
          <Typography id="instrucciones-escitala" variant="h6" gutterBottom>
            Instrucciones Cifrado Escítala
          </Typography>
          <Typography variant="body1">
            1. **Ingrese el texto:** Escriba el mensaje que desea cifrar.
          </Typography>
          <Typography variant="body1">
            2. **Ingrese la cantidad de columnas:** Proporcione un número que indica cuántas columnas se utilizarán para cifrar.
          </Typography>
          <Typography variant="body1">
            3. **Cifrar:** Al presionar el botón de cifrar, el texto se reorganizará en columnas según el número ingresado.
          </Typography>
          <Typography variant="body1">
            4. **Descifrar:** Use la misma cantidad de columnas para revertir el cifrado.
          </Typography>
        </Box>
      </Modal>

      {/* Sección de comparación */}
      <ComparacionCifrados />
    </div>
  );
};

export default App;
