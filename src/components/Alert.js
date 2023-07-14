import { Snackbar } from '@material-ui/core';
import React, { useState } from 'react';
import MuiAlert from '@material-ui/lab/Alert'


function Alert() {
    const [open, setOpen] = useState(false)


    const handleClose = (event, reason) => {
        if(reason === "clickaway") {
            return;
        }
    }

  return (
    <Snackbar
     open={alert.open}
     authHideDuration={3000}
     onClose={handleClose}
    >
        <MuiAlert
        onClose={handleClose}
        elevation={10}
        variant="filled"
        severity={alert.type}
        >
            {alert.message}
        </MuiAlert>
    </Snackbar>
  )
}

export default Alert
