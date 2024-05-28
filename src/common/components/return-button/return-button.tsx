import React from 'react';
import Button from '@mui/material/Button';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function ReturnButton() {
  const navigate = useNavigate();
  return (
    <Button
      sx={{ alignSelf: 'flex-start' }}
      variant="contained"
      onClick={() => navigate(-1)}
    >
      <KeyboardReturnIcon />
      <Box margin={'5px'}>Return</Box>
    </Button>
  );
}
