import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

type Props = {
  open: boolean;
  msg: string;
  onClose: () => void;
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
};

const Alert = (props: Props): JSX.Element => {
  const { open, msg, onClose, vertical, horizontal } = props;

  return (
    <Snackbar
      anchorOrigin={{
        vertical,
        horizontal,
      }}
      open={open}
      autoHideDuration={2500}
      onClose={onClose}
      message={msg}
      action={
        <React.Fragment>
          <Button color="secondary" size="small" onClick={onClose}>
            CLOSE
          </Button>
        </React.Fragment>
      }
    />
  );
};

export default Alert;
