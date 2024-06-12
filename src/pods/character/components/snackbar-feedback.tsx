import React from "react";
import { Close } from "@mui/icons-material";
import { IconButton, Snackbar } from "@mui/material";

export interface SnackBarFeedbackProps {
  message: string;
  msgType: 'success' | 'error';
  triggers: number;
}
export default function SnackBarFeedback(props: SnackBarFeedbackProps) {
  const [open, setOpen] = React.useState(false);
  const { message, triggers } = props;

  React.useEffect(() => {
    if (triggers >= 1) handleOpen();
  }, [triggers]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
    </div>
  );
}
